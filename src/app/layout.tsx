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
  title: "DUS 80 MASTER — %80 Ortak Soru Havuzu & Sınav Hazırlık Platformu",
  description: "DUS için 610 yüksek verimli spot soru, 16 ÖSYM branşı, 120 soruluk deneme simülatörü, aktif hatırlama kartları ve %80 net yakalama hedefi.",
  keywords: [
    "DUS",
    "Diş Hekimliğinde Uzmanlık Sınavı",
    "DUS Spot Bilgiler",
    "DUS Soru Bankası",
    "Temel Bilimler",
    "Klinik Bilimler",
    "ÖSYM DUS",
    "Diş Hekimliği",
    "DUS Hazırlık"
  ],
  authors: [{ name: "DUS 80 Master" }],
  openGraph: {
    title: "DUS 80 MASTER — %80 Ortak Soru Havuzu",
    description: "DUS'ta en çok çıkan 610 spot soru ile %80 ortak başarı hedefi.",
    locale: "tr_TR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#090d16",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#090d16] text-[#f1f5f9] min-h-screen selection:bg-emerald-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
