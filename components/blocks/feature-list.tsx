'use client'

import { useState } from "react";
import Image from "next/image";
import { BetaDialog } from "@/components/beta";

interface FeatureItem {
  title: string;
  description: string;
  href: string;
  iconSrc: string;
}

interface FeatureListProps {
  id?: string;
  heading?: string;
  features?: FeatureItem[];
}

export function FeatureList({
  id,
  heading = "Όλα τα εργαλεία που χρειάζεσαι",
  features = [
    {
      title: "Ευκαιρίες",
      description: "Ανακάλυψε νέα έργα στην περιοχή σου με ζωντανές ενημερώσεις",
      href: "/templates",
      iconSrc: "/briefcase.svg"
  },
  {
      title: "Έγγραφα",
      description: "Δημιούργησε επαγγελματικά έγγραφα με AI υποστήριξη και έξυπνα εργαλεία",
      href: "/docs",
      iconSrc: "/book.svg"
  },
  {
      title: "Βιβλιοθήκη",
      description: "Όλη η τεχνική γνώση στα χέρια σου - νομοθεσία, διαδικασίες και συμβουλές",
      href: "/library",
      iconSrc: "/library.svg"
  },
  {
      title: "Έργα",
      description: "Οργάνωσε και παρακολούθησε τα έργα σου με Kanban boards και αυτοματισμούς",
      href: "/projects",
      iconSrc: "/projects.svg"
  },
  {
      title: "Mechlabs AI",
      description: "Ο έξυπνος βοηθός σου που προσαρμόζεται στις ανάγκες του έργου σου",
      href: "/ai",
      iconSrc: "/code1.svg"
  },
  {
      title: "Πρότυπα",
      description: "Επαγγελματικά πρότυπα για κάθε περίπτωση, έτοιμα για άμεση χρήση",
      href: "/templates",
      iconSrc: "/templates.svg"
  }
    
  ]
}: FeatureListProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id={id} className="py-12 container max-w-7xl mx-auto px-4 scroll-mt-32">
      <header className="mb-20 max-w-[50%]">
        <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-16">{heading}</h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="relative pb-12 rounded-xl cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setIsOpen(true)}
          >
            <div className="mb-4">
              <div className="w-28 h-24 min-w-24 min-h-24 rounded-lg bg-background p-0 flex items-center justify-center">
                <Image
                  src={feature.iconSrc}
                  alt=""
                  width={120}
                  height={120}
                  className="object-contain w-full h-full aspect-square"
                />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-semibold leading-tight text-xl">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <BetaDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
} 