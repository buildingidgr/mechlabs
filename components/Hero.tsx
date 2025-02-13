'use client'

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BetaDialog } from "./beta"
import { LogoWall } from "@/components/ui/logo-wall"

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col bg-background relative px-4 pb-16">
      <div className="grid lg:grid-cols-[1.5fr_1.5fr] gap-0 items-center">
        {/* Left Content */}
        <div className="py-2 lg:py-2 order-1 lg:order-1">
          <div className="space-y-2 lg:space-y-4">
            <div>
              <Badge variant="secondary" className="mb-1 lg:mb-2">
                Private Beta coming soon...
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tighter">
              Η πλατφόρμα των μηχανικών
              </h1>
            </div>
            
            <p className="lg:text-2xl text-2xl font-semibold text-foreground/70 max-w-xl">
            Η επόμενη γενιά λογισμικού για μηχανικούς είναι εδώ
            </p>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-0 lg:pt-0">
              <Button size="lg" className="bg-primary hover:bg-primary/50" onClick={() => setIsOpen(true)}>
                Join waiting list for private Beta
              </Button>
            </div>
            
            <LogoWall
        className="mt-0 lg:mt-0"
        logos={[
          {
            src: "https://www.cursor.com/assets/images/logo.svg",
            alt: "Cursor",
            maxWidth: 35,
            maxHeight: 35
          },
          {
            src: "/logos/figma.svg",
            alt: "Figma",
            maxWidth: 35,
            maxHeight: 35
          },
          {
            src: "https://railway.com/brand/logo-dark.svg",
            alt: "Railway",
            maxWidth: 35,
            maxHeight: 35
          }
        ]}
      />

          </div>
        </div>

        {/* Right Image */}
        <div className="relative mt-16 ml-0 min-h-[200px] max-h-[400px] aspect-[1/1.13] lg:block z-10 order-2 lg:order-2 bg-transparent flex justify-end items-end">
          <Image
            src="/1.svg"
            alt="Τεχνικό Σχέδιο Μηχανικής"
            fill
            className="object-cover"
            priority
            style={{ background: 'transparent' }}
          />
        </div>
      </div>
      

      <BetaDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
} 