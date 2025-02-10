'use client'

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FeaturesSectionWithHoverEffects } from "./blocks/feature-section-with-hover-effects"
import { useState } from "react"
import { BetaDialog } from "./beta"

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col bg-background relative">
      <div className="grid lg:grid-cols-[2fr_1.5fr] gap-2 items-center min-h-[calc(100vh-40rem)] pt-16">
        {/* Left Content */}
        <div className="px-4 lg:px-12 py-12">
          <div className="space-y-2">
            <div>
              <Badge variant="secondary" className="mb-2">
                Private Beta coming soon...
              </Badge>
              <h1 className="text-4xl lg:text-7xl font-bold text-foreground leading-tight">
              Η πλατφόρμα των μηχανικών
              </h1>
            </div>
            
            <p className="lg:text-xl text-base text-gray-600 max-w-xl">
            Αποκτήστε νέους πελάτες και διαχειριστείτε τα έργα σας με ασφάλεια και επαγγελματισμό
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => setIsOpen(true)}>
                 Join waiting list for private Beta
              </Button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-full min-h-[400px] rounded-l-4xl lg:block z-10">
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
      
      {/* Features Section */}
      <div className="mt-12 scroll-mt-32" id="opportunities">
        <FeaturesSectionWithHoverEffects />
      </div>

      <BetaDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
} 