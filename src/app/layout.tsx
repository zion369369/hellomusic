import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hellomusic-alpha.vercel.app"),
  title: "Hello Music — Web Player",
  description: "Listen to ZION's original master release 'Fly away'. Stream lossless studio audio and original soundscapes.",
  keywords: [
    "Hello Music",
    "ZION",
    "Fly away",
    "Original Soundscapes",
    "Original Track",
    "Web Player",
    "Lossless Audio",
  ],
  authors: [{ name: "ZION" }],
  openGraph: {
    title: "Hello Music — Web Player",
    description: "Listen to ZION's original master release 'Fly away'. Stream lossless studio audio and original soundscapes.",
    url: "https://hellomusic-alpha.vercel.app",
    siteName: "Hello Music",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hello Music — Web Player",
    description: "Listen to ZION's original master release 'Fly away'. Stream lossless studio audio and original soundscapes.",
    creator: "@zion",
  },
  icons: {
    icon: "/covers/fly-away.svg",
    apple: "/covers/fly-away.svg",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Hello Music",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-[#f4f4f5] selection:bg-white selection:text-black h-full overflow-hidden overscroll-none`}
      >
        {children}
      </body>
    </html>
  );
}
