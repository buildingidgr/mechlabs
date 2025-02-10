import { HeroPillSecond } from "@/components/beta";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mechlabs | Η Πλατφόρμα των Μηχανικών",
  description: "Η κορυφαία πλατφόρμα των μηχανικών",
  keywords: ["ταυτότητα κτιρίου", "μηχανικοί", "ακίνητα", "τεχνικά σχέδια", "κτίρια"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased text-neutral-900`}>
        <div className="flex flex-col sticky top-0 z-[100] bg-background relative">
          <HeroPillSecond />
        </div>
        <div className="flex flex-col sticky top-12 z-[99]">
          <Navbar />
        </div>

        <main className="items-center justify-center max-w-7xl mx-auto px-12 pt-16">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
