import type { Metadata } from "next";
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
  title: "Điện Biên Phủ Trên Không | 12 Ngày Đêm Bảo Vệ Hà Nội",
  description: "Hành trình tương tác khám phá lịch sử 12 ngày đêm bảo vệ bầu trời Hà Nội trong chiến dịch Điện Biên Phủ trên không năm 1972",
  keywords: "Điện Biên Phủ trên không, B52, Hà Nội, lịch sử Việt Nam, 1972",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white min-h-screen transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
