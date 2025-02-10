'use client'

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    
      <div className="flex flex-col bg-white mt-2 relative">
        <div className="grid lg:grid-cols-[2fr_1.5fr] gap-2 items-center">
          {/* Left Content */}
          <div className="px-4 lg:px-12 py-12">
            <div className="space-y-2">
              <div>
                <Badge variant="secondary" className="mb-2">
                  Private Beta
                </Badge>
                <h1 className="text-4xl lg:text-7xl font-bold text-foreground leading-tight">
                Η πλατφόρμα των μηχανικών
                </h1>
              </div>
              
 

              <p className="lg:text-xl text-base  text-gray-600 max-w-xl">
              Αποκτήστε νέους πελάτες και διαχειριστείτε τα έργα σας με ασφάλεια και επαγγελματισμό
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                   Λίστα αναμονής (Private Beta)
                </Button>
              </div>

              {/* Features */}

            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-full min-h-[500px] rounded-l-4xl lg:block z-10">
            <div className="absolute inset-0" />
            <Image
              src="/hero-image.png"
              alt="Τεχνικό Σχέδιο Μηχανικής"
              fill
              className="object-contain object-left w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
  
  )
} 