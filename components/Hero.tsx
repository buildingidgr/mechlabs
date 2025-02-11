'use client'

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BetaDialog } from "./beta"
import { FeaturesSectionWithHoverEffects } from "./blocks/feature-section-with-hover-effects"

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col bg-background relative pb-40">
      <div className="grid lg:grid-cols-[2fr_1.5fr] gap-2 items-center">
        {/* Left Content */}
        <div className="px-4 lg:px-12 py-2 lg:py-2 order-2 lg:order-1">
          <div className="space-y-2 lg:space-y-4">
            <div>
              <Badge variant="secondary" className="mb-1 lg:mb-2">
                Private Beta coming soon...
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight leading-tighter">
              Η πλατφόρμα των μηχανικών
              </h1>
            </div>
            
            <p className="lg:text-3xl text-3xl font-semibold text-gray-600 max-w-xl">
            Η επόμενη γενιά λογισμικού για μηχανικούς είναι εδώ
            </p>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-2 lg:pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => setIsOpen(true)}>
                 Join waiting list for private Beta
              </Button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-full min-h-[400px] rounded-l-4xl lg:block z-10 order-1 lg:order-2">
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
      <div className="mt-2 lg:mt-2 scroll-mt-32">
        <FeaturesSectionWithHoverEffects />
      </div>

      <BetaDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
} 