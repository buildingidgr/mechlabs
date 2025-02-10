import Link from "next/link";
import Image from "next/image";

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
    description: "Βρες νέα έργα στην περιοχή σου",
    href: "/templates",
    iconSrc: "/briefcase.svg"
  },
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
      description: "Παρακολούθησε τα έργα σου από αρχή ως τέλος",
      href: "/projects",
      iconSrc: "/projects.svg"
    },
    {
      title: "Building AI",
      description: "Βρίσκει και κάνει αυτό που ζητάς",
      href: "/ai",
      iconSrc: "/code1.svg"
    },
    {
      title: "Πρότυπα",
      description: "1000+ έτοιμα πρότυπα για να ξεκινήσεις αμέσως",
      href: "/templates",
      iconSrc: "/templates.svg"
    }
    
  ]
}: FeatureListProps) {
  return (
    <section id={id} className="py-12 container max-w-7xl mx-auto px-4 scroll-mt-32">
      <header className="mb-20 max-w-[50%]">
        <h2 className="text-7xl font-bold text-foreground mb-16">{heading}</h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="relative pb-12 rounded-xl">
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
    </section>
  );
} 