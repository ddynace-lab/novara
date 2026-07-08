import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "@/app/context/FavoritesContext";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Novara",
  description: "Modern Digital Bookstore",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-slate-950 text-white">
        <CartProvider>
          <FavoritesProvider>
            <Navbar />

            <main className="flex-1">
              {children}
            </main>

            <Footer />
          </FavoritesProvider>
        </CartProvider>
      </body>
    </html>
  );
}