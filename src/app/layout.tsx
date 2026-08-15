import type { Metadata } from "next";
import { Inter, Cinzel, Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

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
  title: "DRAGON 100™ | Elite Private Advisory Board & Certainty Engine",
  description:
    "An exclusive, private advisory ecosystem for 7 and 8-figure founders to automate operations, extract high-margin equity value, and achieve absolute financial certainty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cinzel.variable} ${playfair.variable} ${dmSans.variable} dark scroll-smooth`}
    >
      <body className="bg-black text-[#EDEDED] font-sans antialiased selection:bg-[#c5a059] selection:text-black overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
