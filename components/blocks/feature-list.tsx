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
  heading = "Όλα όσα χρειάζεσαι για την καλύτερη δουλειά",
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
      iconSrc: "/ai.svg"
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
    <section className="py-24 container max-w-7xl mx-auto px-4">
      <header className="mb-16">
        <h2 className="text-4xl font-bold text-primary mb-4">{heading}</h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="group relative p-6 rounded-xl hover:bg-accent/10 transition-colors">
            <Link href={feature.href} className="absolute inset-0 z-10" aria-label={feature.title} />
            
            <div className="mb-4">
              <div className="w-20 h-20 rounded-lg bg-background p-2">
                <Image
                  src={feature.iconSrc}
                  alt=""
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold flex items-center">
                {feature.title}
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </h3>
              <p className="text-muted-foreground font-medium leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 