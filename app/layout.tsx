"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Cabin } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const cabin = Cabin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        <div className={`${inter.className} ${cabin.className} `}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
