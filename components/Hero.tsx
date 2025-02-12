'use client'

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BetaDialog } from "./beta"

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col bg-background relative px-4">
      <div className="grid lg:grid-cols-[2fr_1.5fr] gap-2 items-center">
        {/* Left Content */}
        <div className="py-2 lg:py-2 order-2 lg:order-1">
          <div className="space-y-2 lg:space-y-4">
            <div>
              <Badge variant="secondary" className="mb-1 lg:mb-2">
                Private Beta coming soon...
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tighter">
              Η πλατφόρμα των μηχανικών
              </h1>
            </div>
            
            <p className="lg:text-3xl text-3xl font-semibold text-foreground/70 max-w-xl">
            Η επόμενη γενιά λογισμικού για μηχανικούς είναι εδώ
            </p>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-2 lg:pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/70" onClick={() => setIsOpen(true)}>
                 Join waiting list for private Beta
              </Button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative  min-h-[200px] max-h-[400px] aspect-[1/1] rounded-l-4xl lg:block z-10 order-1 lg:order-2 bg-transparent">
          <Image
            src="/hero-image.png"
            alt="Τεχνικό Σχέδιο Μηχανικής"
            fill
            className="object-cover object-left"
            priority
            style={{ background: 'transparent' }}
          />
        </div>
      </div>
      

      <BetaDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
} 