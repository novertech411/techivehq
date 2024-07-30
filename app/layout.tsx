"use client";

import { Inter } from "next/font/google";
import { Cabin } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const cabin = Cabin({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#F6F3EA]">
        <Navbar />
        <div className={`${inter.className} ${cabin.className} `}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
