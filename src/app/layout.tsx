import Providers from "@/providers";
import type { Viewport } from "next";
import { Instrument_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrumentSans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

// Custom fonts from Figma design
const blauerNeu = localFont({
  src: [
    {
      path: "../fonts/blauer-neu/Blauer-Nue-Thin-iF6626350c96c3e.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/blauer-neu/Blauer-Nue-Extralight-iF6626350c56af4.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/blauer-neu/Blauer-Nue-Light-iF6626350c6db36.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/blauer-neu/Blauer-Nue-Regular-iF6626350c83fdf.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/blauer-neu/Blauer-Nue-Medium-iF6626350c78103.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/blauer-neu/Blauer-Nue-Semibold-iF6626350c8d55c.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/blauer-neu/Blauer-Nue-Extrabold-iF6626350c4c856.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/blauer-neu/Blauer-Nue-Heavy-iF6626350c62afa.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-blauer-neu",
  display: "swap",
});

const clashDisplay = localFont({
  src: [
    {
      path: "../fonts/clash-display/ClashDisplay-Extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/clash-display/ClashDisplay-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/clash-display/ClashDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/clash-display/ClashDisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/clash-display/ClashDisplay-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/clash-display/ClashDisplay-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

const silka = localFont({
  src: [
    {
      path: "../fonts/silka/silka-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-silka",
  display: "swap",
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
      <head></head>
      <body
        className={`${instrumentSans.variable} ${blauerNeu.variable} ${clashDisplay.variable} ${silka.variable} antialiased font-primary bg-white`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
