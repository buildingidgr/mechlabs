"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface Tab {
  icon: string;
  label: string;
  imageSrc: string;
  mobileImageSrc?: string;
}

export function TabbedCarousel({ tabs }: { tabs: Tab[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);

  const handleTabClick = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section className="container mx-auto max-w-7xl pb-36">
      <div className="grid grid-cols-1 gap-12">
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
                          src={tab.mobileImageSrc ? (window.innerWidth <= 768 ? tab.mobileImageSrc : tab.imageSrc) : tab.imageSrc}
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
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab, index) => {
              const Icon = getIconComponent(tab.icon);
              return (
                <button
                  key={index}
                  onClick={() => handleTabClick(index)}
                  className={`flex items-center space-x-2 rounded-lg p-3 transition-colors ${
                    activeIndex === index
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-accent/10"
                  }`}
                >
                  {Icon && <Icon className="h-5 w-5" />}
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </section>
  );
}

// Helper function to map icon names to SVG components
function getIconComponent(iconName: string) {
  const icons: Record<string, React.FC<{ className?: string }>> = {
    wiki: () => (
      <svg viewBox="0 0 48 48" fill="currentColor">
        <path d="M21 40.86H6.09c-1.08 0-1.98-.9-1.98-1.98V20.22c0-1.17.6-1.83 1.74-1.83h.9v-3.36H4.89c-2.49 0-4.5 2.01-4.5 4.5v20.25c0 2.49 2.01 4.5 4.5 4.5H21v-3.42ZM43.14 15h-1.86v3.36h.99c1.08 0 1.62.63 1.62 1.62v18.93c0 1.08-.87 1.98-1.98 1.98H27v3.36h16.14c2.49 0 4.5-2.01 4.5-4.5V19.5c0-2.49-2.01-4.5-4.5-4.5Z" />
        <path d="M39.39 4.5c-5.19.69-11.4 2.73-15.36 5.16-3.99-2.43-10.2-4.47-15.36-5.16v30.75c4.26.51 8.67 1.5 13.14 3.24l2.25.99 2.25-.99c4.47-1.74 8.88-2.76 13.14-3.24V4.5h-.06ZM13.14 31.89V9.69c3.21.57 6.93 2.01 8.64 3.39v21.24c-2.49-1.02-5.97-1.95-8.64-2.43Zm21.75 0c-2.64.48-6.15 1.41-8.64 2.43V13.08c1.68-1.41 5.43-2.82 8.64-3.39v22.2Z" />
      </svg>
    ),
    docs: () => (
      <svg viewBox="0 0 49 49" fill="currentColor">
        <path d="m40.22 14.512-12.33-9.99c-.72-.6-1.65-.93-2.61-.93H11.36c-2.28 0-4.11 1.83-4.11 4.11v33.78c0 2.28 1.86 4.11 4.11 4.11h26.28c2.28 0 4.11-1.83 4.11-4.11v-23.76c0-1.23-.57-2.43-1.53-3.21Zm-13.11-6.81 10.38 9.06c.42.36.18 1.05-.39 1.05h-8.88c-.6 0-1.11-.48-1.11-1.11v-9Zm8.85 33.75H13.01c-.69 0-1.26-.57-1.26-1.29v-31.2c0-.69.57-1.26 1.26-1.26h10.35v10.14c0 2.07 1.68 3.75 3.75 3.75h10.11v18.6c0 .69-.57 1.26-1.26 1.26Z" />
        <path d="M17.75 27.232h13.5M17.75 34.402h13.5" stroke="currentColor" strokeWidth="1.824" />
      </svg>
    ),
    projects: () => (
      <svg viewBox="0 0 64 64" fill="currentColor">
        <path d="m36,32c0,2.21-1.79,4-4,4s-4-1.79-4-4,1.79-4,4-4,4,1.79,4,4Zm20,0c0,13.25-10.75,24-24,24s-24-10.75-24-24,10.75-24,24-24,24,10.75,24,24Zm-6,0c0-9.94-8.06-18-18-18s-18,8.06-18,18,8.06,18,18,18,18-8.06,18-18Zm-4,0c0,7.73-6.27,14-14,14s-14-6.27-14-14,6.27-14,14-14,14,6.27,14,14Zm-6,0c0-4.42-3.58-8-8-8s-8,3.58-8,8,3.58,8,8,8,8-3.58,8-8Z" />
      </svg>
    ),
    ai: () => (
      <svg viewBox="0 0 20 20" fill="currentColor">
        <path d="M13.91 8.861a.75.75 0 1 1-1.48-.24.75.75 0 0 1 1.48.24ZM7.321 7.793a.75.75 0 1 1-1.48-.24.75.75 0 0 1 1.48.24Z" />
        <path stroke="currentColor" fill="none" d="M17.233 5.656a3.493 3.493 0 0 0-6.012-.031L4.99 16.027l5.412.877M9.47 3.935a3.494 3.494 0 0 0-4.969-.317" />
      </svg>
    ),
    calendar: () => (
      <svg viewBox="0 0 64 64" fill="currentColor">
        <path d="m48,12v-6h-6v6h-20v-6h-6v6h-8v40h48V12h-8Zm2,35H14v-19h36v19Z" />
      </svg>
    ),
    sites: () => (
      <svg viewBox="0 0 64 64" fill="currentColor">
        <path d="m32,8c-13.25,0-24,10.75-24,24s10.75,24,24,24,24-10.75,24-24-10.75-24-24-24Zm14.96,14h-4.98c-.47-2.21-1.11-4.27-1.91-6.07,2.78,1.4,5.16,3.49,6.88,6.07Zm-10.86,0h-8.21c1.9-8.86,6.31-8.86,8.21,0Zm-21.64,14c-.29-1.29-.46-2.62-.46-4s.17-2.71.46-4h6.7c-.1,1.32-.16,2.66-.16,4s.05,2.68.16,4h-6.7Zm2.57,6h4.98c.47,2.21,1.11,4.27,1.91,6.07-2.78-1.4-5.16-3.49-6.88-6.07Zm4.98-20h-4.98c1.72-2.57,4.1-4.66,6.88-6.07-.8,1.8-1.43,3.86-1.91,6.07Zm5.88,20h8.21c-1.9,8.86-6.31,8.86-8.21,0Zm8.99-6h-9.76c-.08-1.24-.12-2.57-.12-4s.04-2.76.12-4h9.76c.08,1.24.12,2.57.12,4s-.04,2.76-.12,4Zm3.2,12.07c.8-1.8,1.43-3.86,1.91-6.07h4.98c-1.72,2.57-4.1,4.66-6.88,6.07Zm2.76-12.07c.1-1.32.16-2.66.16-4s-.05-2.68-.16-4h6.7c.29,1.29.46,2.62.46,4s-.17,2.71-.46,4h-6.7Z" />
      </svg>
    ),
  };

  return icons[iconName] || null;
} 