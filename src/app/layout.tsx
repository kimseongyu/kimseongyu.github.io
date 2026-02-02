import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seongyu's Blog",
  description: "Seongyu's Blog and Wasm Test Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
          <Navigation />
        </header>
        <main className="flex-1 flex justify-center pt-20 px-4">
          {children}
        </main>
        <footer className="py-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} kimseongyu. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
