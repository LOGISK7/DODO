import type { Metadata } from "next";
import { Tajawal, Cairo } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI E-Commerce Creative & Ad Testing System",
  description:
    "نظام كامل لإنشاء واختبار وتحليل وتحسين الـ Creatives الإعلانية لمتاجر التجارة الإلكترونية.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.variable} ${cairo.variable}`}>
        {children}
      </body>
    </html>
  );
}
