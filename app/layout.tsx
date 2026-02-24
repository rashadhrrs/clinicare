import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CliniCare - Partner Kepercayaan Anda",
  description: "Platform terpercaya untuk mencari klinik kesehatan terbaik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} antialiased bg-gray-50 font-sans leading-6`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
