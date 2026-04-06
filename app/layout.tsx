import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rotatemd.com"),
  title: "RotateMD — Find Verified Roommates for Your Away Rotation",
  description:
    "Connect with other medical students rotating at the same hospital, city, and dates. Split housing costs and make your away rotations unforgettable.",
  keywords: [
    "away rotation housing",
    "medical student roommate",
    "rotation roommate finder",
    "ERAS away rotations",
    "medical school housing",
  ],
  openGraph: {
    title: "RotateMD — Find Verified Roommates for Your Away Rotation",
    description:
      "Connect with other medical students rotating at the same hospital, city, and dates. Split housing costs and make your away rotations unforgettable.",
    url: "https://rotatemd.com",
    siteName: "RotateMD",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "RotateMD — Find Verified Roommates for Your Away Rotation",
    description:
      "Connect with other medical students rotating at the same hospital, city, and dates.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://rotatemd.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <ScrollToTop />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
