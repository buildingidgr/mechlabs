import Link from "next/link";
import Image from "next/image";

interface DownloadItem {
  title: string;
  imageSrc: string;
  tryHref: string;
  downloadHref: string;
}

interface DownloadSectionProps {
  heading?: string;
  downloadItems?: DownloadItem[];
}

export function DownloadSection({
  heading = "Ξεκίνα τώρα",
  downloadItems = [
    {
      title: "Building AI",
      imageSrc: "/screenshot-ai.png",
      tryHref: "/signup",
      downloadHref: "/download"
    },
    {
      title: "Calendar",
      imageSrc: "/screenshot-calendar.png",
      tryHref: "/signup",
      downloadHref: "/product/calendar/download"
    }
  ]
}: DownloadSectionProps) {
  return (
    <section className="py-24 container max-w-7xl mx-auto px-4">
      <header className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">{heading}</h2>
      </header>

      <div className="space-y-16">
        {downloadItems.map((item, index) => (
          <div key={index} className="group relative rounded-xl overflow-hidden shadow-lg">
            <div className="p-8 md:p-12 bg-background">
              <h3 className="text-2xl font-semibold text-primary mb-6">{item.title}</h3>
              
              <nav className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href={item.tryHref}
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Δοκίμασέ το δωρεάν
                </Link>
                <Link
                  href={item.downloadHref}
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-accent/10 transition-colors"
                >
                  Κατέβασέ το τώρα
                </Link>
              </nav>

              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  width={1232}
                  height={793}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 