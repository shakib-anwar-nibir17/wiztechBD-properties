import Providers from "@/providers";
import type { Viewport } from "next";
import { Instrument_Sans, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const instrumentSans = Instrument_Sans({
  variable: "--font-instrumentSans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});




// Define viewport settings separately as per Next.js App Router requirements.
// This ensures correct streaming behavior and avoids unsupported metadata warnings.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        
      </head>
      <body
        className={`${inter.variable} ${instrumentSans.variable} antialiased font-primary `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
