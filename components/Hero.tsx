'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    
      <div className="flex flex-col bg-white">
        <div className="grid lg:grid-cols-[1.5fr_2fr] gap-8 items-center">
          {/* Left Content */}
          <div className="px-4 lg:px-8 py-12">
            <div className="space-y-2">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight">
                Η πλατφόρμα των μηχανικών
                </h1>
              </div>
              
 

              <p className="lg:text-xl text-base  text-gray-600 max-w-xl">
                Συνδέει και διασφαλίζει ιδιοκτήτες ακινήτων και μηχανικούς
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                   Λίστα αναμονής (BETA)
                </Button>
              </div>

              {/* Features */}

            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-full min-h-[500px] rounded-l-4xl overflow-hidden hidden lg:block">
            <div className="absolute inset-0 from-blue-900/10 to-transparent z-10" />
            <Image
              src="/hero-image.svg"
              alt="Τεχνικό Σχέδιο Μηχανικής"
              fill
              className="object-contain object-center w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
  
  )
} 