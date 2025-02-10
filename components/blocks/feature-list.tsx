import Link from "next/link";
import Image from "next/image";

interface FeatureItem {
  title: string;
  description: string;
  href: string;
  iconSrc: string;
}

interface FeatureListProps {
  heading?: string;
  features?: FeatureItem[];
}

export function FeatureList({
  heading = "Όλα τα εργαλεία σε ένα μέρος",
  features = [
    {
      title: "Έγγραφα",
      description: "Δημιούργησε οποιοδήποτε έγγραφο, επικοινώνησε οποιαδήποτε ιδέα",
      href: "/docs",
      iconSrc: "/documents.svg"
    },
    {
      title: "Βιβλιοθήκη",
      description: "Κεντρικό σημείο για όλη σου την τεχνική γνώση",
      href: "/library",
      iconSrc: "/library.svg"
    },
    {
      title: "Έργα",
      description: "Διαχειρίσου οποιοδήποτε έργο από την αρχή ως το τέλος",
      href: "/projects",
      iconSrc: "/projects.svg"
    },
    {
      title: "Building AI",
      description: "Βρίσκει αυτό που χρειάζεσαι. Κάνει αυτό που χρειάζεσαι",
      href: "/ai",
      iconSrc: "/code1.svg"
    },
    {
      title: "Πρότυπα",
      description: "Ξεκίνησε με ένα από τα 1000+ πρότυπά μας",
      href: "/templates",
      iconSrc: "/templates.svg"
    }
  ]
}: FeatureListProps) {
  return (
    <section className="py-12 container max-w-7xl mx-auto px-4">
      <header className="mb-16">
        <h2 className="text-7xl font-bold text-foreground mb-2">{heading}</h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="group relative pb-12 rounded-xl hover:bg-accent/10 transition-colors">
            <Link href={feature.href} className="absolute inset-0 z-10" aria-label={feature.title} />
            
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
              <h3 className="text-2xl font-bold flex items-center">
                {feature.title}
                <span className="ml-0 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </h3>
              <p className="text-muted-foreground font-semibold leading-tight text-xl">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 