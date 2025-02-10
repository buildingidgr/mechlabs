"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t bg-white mt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">BuildingID</h3>
            <p className="text-sm text-gray-600">
              Η πλατφόρμα σύνδεσης μηχανικών και ιδιοκτητών ακινήτων
            </p>
            <Link 
              href="/privacy-terms" 
              className="text-sm text-primary hover:underline block mb-4 md:mb-0"
            >
              Πολιτική Απορρήτου & Όροι
            </Link>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-base font-bold md:text-sm md:font-semibold">Πλοήγηση</h4>
            <ul className="space-y-2 md:space-y-2">
              <li><Link href="/about" className="text-base md:text-sm text-gray-600 hover:text-primary">Σχετικά</Link></li>
              <li><Link href="/services" className="text-base md:text-sm text-gray-600 hover:text-primary">Υπηρεσίες</Link></li>
              <li><Link href="/contact" className="text-base md:text-sm text-gray-600 hover:text-primary">Επικοινωνία</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-base font-bold md:text-sm md:font-semibold">Νομικά</h4>
            <ul className="space-y-2 md:space-y-2">
              <li><Link href="/privacy-terms" className="text-base md:text-sm text-gray-600 hover:text-primary">Πολιτική Απορρήτου</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-base font-bold md:text-sm md:font-semibold">Ενημερωτικό Δελτίο</h4>
            <form className="flex flex-col md:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Διεύθυνση Email" 
                className="w-full rounded-lg border px-4 py-3 md:py-2 text-base md:text-sm"
              />
              <Button type="submit" className="w-full md:w-auto bg-primary hover:bg-primary/90">
                Εγγραφή
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t mt-8 md:mt-12 pt-6 md:pt-8 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} BuildingID.gr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 