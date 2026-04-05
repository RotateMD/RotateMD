import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request: Request) {
  try {
    const { firstName, email, school, city } = await request.json();

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Google Sheets integration
    const credentials = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!credentials || !sheetId) {
      console.warn("Google Sheets not configured — logging to console");
      console.log("Waitlist entry:", { firstName, email, school, city, timestamp: new Date().toISOString() });
      return NextResponse.json({ success: true, message: "Joined waitlist" });
    }

    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(credentials),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
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
