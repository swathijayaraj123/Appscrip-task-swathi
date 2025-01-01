import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import NavbarLinks from "./components/Navigation-Links/NavLinks";
import Header from "./components/Navigation-Links/Header/Header";
import Footer from "./components/Footer/Footer";

import Filter from "./components/SideBarFilter/Filter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "metta muse - Online Shopping for Unique & Stylish Products",
  description: "Discover unique and stylish products at metta muse - Your go-to shopping destination for quality fashion, accessories, and more. Shop now for the latest trends!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Navbar/>
      <NavbarLinks/>
      <Header/>
        <div className="filter-product">
        <Filter/>
        {children}
        </div>
        
        <Footer/>
      </body>
    </html>
  );
}
