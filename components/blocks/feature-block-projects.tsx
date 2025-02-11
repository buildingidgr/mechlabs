'use client'

import { useState } from "react";
import Image from "next/image";
import { BetaDialog } from "@/components/beta";

interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

interface CompetitorItem {
  name: string;
  logo: string;
}

interface FeatureBlockProps {
  heading?: string;
  description?: string;
  linkText?: string;
  features?: FeatureItem[];
  competitors?: CompetitorItem[];
  screenshotSrc?: string;
  id?: string;
}

export function FeatureBlockProjects({
  heading = "Βάλε σε τάξη τα έργα σου",
  description = "Έχεις βαρεθεί το χάος; Ήρθε η ώρα να οργανωθείς με στυλ! 🚀\nΦαντάσου να έχεις όλα σου τα project σε ένα μέρος - εύκολα, γρήγορα και... αποτελεσματικά!",
  linkText = "Join waiting list for private Beta",
  features = [
    {
      title: "Όλα σε ένα μέρος",
      description: "Όλα τα tasks σου σε μια ματιά με super cool Kanban boards",
      icon: "/template.svg",
    },
    {
        title: "Lίστες & αρχεία",
        description: "Files και λίστες που οργανώνονται... μόνα τους (σχεδόν! 😉)",
        icon: "/fast.svg",
      },
      {
        title: "Μείνε μπροστά",
        description: "Progress tracking που θα σε κάνει να νιώθεις σαν boss",
        icon: "/time.svg",
      },
    // Add more default features as needed
  ],
  screenshotSrc = "/screenshot-projects.png",
  id,
}: FeatureBlockProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id={id} className="py-12">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid items-end md:grid-cols-12 gap-24 md:gap-24 mb-8 md:mb-12">
          <article className="md:col-span-5 space-y-3 md:space-y-4">
            <h3 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
              {heading}
            </h3>
            <p className="text-xl font-medium leading-tighter text-muted-foreground" style={{
              fontVariationSettings: '"wght" 529',
              letterSpacing: '-0.12px',
              WebkitFontSmoothing: 'antialiased'
            }}>
              {description}
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center text-primary hover:text-primary/90 transition-colors group font-medium text-sm"
            >
              <span>{linkText}</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </article>

          <ul className="md:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="p-1 md:p-1 rounded-lg md:rounded-xl bg-background hover:bg-accent/10 transition-colors"
                style={{ height: 'fit-content' }}
              >
                <div className="mb-1 md:mb-1 w-20 h-20 md:w-20 md:h-20 rounded-xl flex items-start justify-start aspect-square">
                  <Image
                    src={feature.icon}
                    alt=""
                    width={128}
                    height={128}
                    className="text-primary md:group-hover:scale-110 w-full h-full object-contain p-1.5"
                  />
                </div>
                <span className="space-y-2">
                  <h4 className="text-base md:text-lg font-semibold tracking-tight text-foreground">
                    {feature.title}
                  </h4>
                  <p className=" text-left text-sm md:text-base font-semibold leading-4 md:leading-5 text-muted-foreground font-medium" style={{
                    fontVariationSettings: '"wght" 500',
                    letterSpacing: '-0.03px',
                    WebkitFontSmoothing: 'antialiased'
                  }}>
                    {feature.description}
                  </p>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-24 rounded-3xl overflow-hidden shadow-xl">
          <Image
            src={screenshotSrc}
            alt="Feature preview"
            width={1252}
            height={640}
            className="w-full h-auto"
          />
        </div>

        <BetaDialog isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </section>
  );
} 