// src/app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // Impor Navbar

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio website built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* Render Navbar di sini */}
        {/* Konten halaman akan dirender di dalam main */}
        <main className="md:pr-20">{children}</main>
      </body>
    </html>
  );
}
