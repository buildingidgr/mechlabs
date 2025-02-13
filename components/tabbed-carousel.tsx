"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

interface Tab {
  icon: string;
  label: string;
  imageSrc: string;
  mobileImageSrc?: string;
}

export function TabbedCarousel({ tabs }: { tabs: Tab[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  const [imageSources, setImageSources] = useState<string[]>([]);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    setImageSources(tabs.map(tab => 
      tab.mobileImageSrc && isMobile ? tab.mobileImageSrc : tab.imageSrc
    ));
  }, [isMobile, tabs]);

  const handleTabClick = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section className="container mx-auto max-w-7xl pb-36">
      <div className="grid grid-cols-1 gap-4">
        {/* Image Carousel */}
        <div className="relative">
          <Carousel setApi={setApi} opts={{ skipSnaps: true }}>
            <CarouselContent className="ml-0">
              {tabs.map((tab, index) => (
                <CarouselItem key={index} className="pb-1 pr-1">
                  <div className="rounded-2xl shadow-sm bg-background h-full">
                    <div className="relative overflow-hidden rounded-2xl border border-foreground/10">
                      <AspectRatio ratio={3848/2648}>
                        <Image
                          src={imageSources[index] || tab.imageSrc}
                          alt={tab.label}
                          fill
                          className="object-cover"
                          priority={index === 0}
                          style={{ 
                            background: 'transparent'
                          }}
                        />
                      </AspectRatio>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Tabs Navigation */}
        <nav className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab, index) => (
              <button 
                key={index}
                onClick={() => handleTabClick(index)}
                className={`flex items-center border border-foreground/10 rounded-lg p-2 transition-colors ${
                  activeIndex === index
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-accent/50"
                }`}
              >
                <Image 
                  src={`/button-icons/${tab.icon}`} 
                  alt={tab.label}
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
                <span className="ml-2 text-base font-medium text-foreground">{tab.label}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
} 