import type { Metadata, Viewport } from "next";
import "./globals.css"; // must be in src/app/globals.css

export const metadata: Metadata = {
  title: "TextBlast — Bulk SMS Platform",
  description: "TextBlast is a fast, reliable bulk SMS platform for businesses and marketers.",
  applicationName: "TextBlast",
  authors: [{ name: "TextBlast" }],
  keywords: ["TextBlast", "Bulk SMS", "SMS Marketing", "Nigeria", "Messaging Platform"],
  themeColor: "#FF6B4A",
  metadataBase: new URL("https://textblast.vercel.app"), // replace later with real domain
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FAFAF7] antialiased">
        {children}
      </body>
    </html>
  );
}
