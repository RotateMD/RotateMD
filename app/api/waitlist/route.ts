import { NextResponse } from "next/server";
import { sheets, auth as gauth } from "@googleapis/sheets";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5; // max requests per window
const RATE_WINDOW = 60_000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

const sanitize = (val: unknown, max = 200): string =>
  typeof val === "string" ? val.trim().slice(0, max) : "";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const firstName = sanitize(body.firstName);
    const email = sanitize(body.email);
    const school = sanitize(body.school);
    const city = sanitize(body.city);

    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    const credentials = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!credentials || !sheetId) {
      console.warn("Google Sheets not configured — logging to console");
      console.log("Waitlist entry:", { firstName, email, school, city, timestamp: new Date().toISOString() });
      return NextResponse.json({ success: true, message: "Joined waitlist" });
    }

    const auth = new gauth.GoogleAuth({
      credentials: JSON.parse(credentials),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheetsClient = sheets({ version: "v4", auth });

    await sheetsClient.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[firstName, email, school, city, new Date().toISOString()]],
      },
    });

    return NextResponse.json({ success: true, message: "Joined waitlist" });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "Failed to join waitlist. Please try again." },
      { status: 500 }
    );
  }
}
