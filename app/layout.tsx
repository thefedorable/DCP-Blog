import type { Metadata } from "next";
import { Geist, Geist_Mono, Mouse_Memoirs } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const getisMouse = Mouse_Memoirs({
  variable: "--font-mouse",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "DCP Journal",
  description: "Journal for my DCP adventure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${getisMouse.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
