import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
  title: "BuildingID.gr | Η Πλατφόρμα Ταυτότητας Κτιρίου",
  description: "Η κορυφαία πλατφόρμα σύνδεσης ιδιοκτητών ακινήτων και μηχανικών για την ολοκληρωμένη διαχείριση της ταυτότητας κτιρίου.",
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
        <header className="fixed w-full top-0 z-50 backdrop-blur-sm bg-white/80 border-b px-4 lg:px-8 py-4">
          <Navbar />
        </header>
        
        <main className="items-center justify-center pt-60 max-w-7xl mx-auto"> {/* Add padding for fixed header */} 
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
