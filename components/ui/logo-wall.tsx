import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoWallProps {
  className?: string;
  logos: Array<{
    src: string;
    alt: string;
    maxWidth: number;
    maxHeight: number;
  }>;
}

export function LogoWall({ className, logos }: LogoWallProps) {
  return (
    <div className={cn("flex flex-col items-start gap-6", className)}>
      <span className="text-base font-semibold text-muted-foreground tracking-tight">
        Build with love and the help of
      </span>
      
      <section className="flex flex-wrap justify-center gap-x-8 gap-y-6">
        {logos.map((logo, index) => (
          <div 
            key={index}
            className="relative opacity-80 hover:opacity-100 transition-opacity"
            style={{
              width: `${logo.maxWidth}px`,
              height: `${logo.maxHeight}px`,
            }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.maxWidth}
              height={logo.maxHeight}
              className="object-contain w-full h-full"
              priority
              loading="eager"
            />
          </div>
        ))}
      </section>
    </div>
  );
} 