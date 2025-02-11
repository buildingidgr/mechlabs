import { cn } from "@/lib/utils";

interface FeaturesSectionWithHoverEffectsProps {
  id?: string;
}

export function FeaturesSectionWithHoverEffects({ id }: FeaturesSectionWithHoverEffectsProps) {
  const features = [
    {
      title: "Φτιαγμένο από μηχανικούς",
      description: "Ξέρουμε πώς είναι να ψάχνεις απεγνωσμένα εκείνο το ΦΕΚ στις 11 το βράδυ...",
  },
  {
      title: "Χτίζουμε κάτι διαφορετικό",
      description: "Μια πλατφόρμα που θα θέλαμε να είχαμε όταν ξεκινούσαμε - απλή, έξυπνη και χρήσιμη",
  },
  {
      title: "Μεγαλώνουμε μαζί παρέα",
      description: "Κάθε νέα λειτουργία έρχεται από τα feedback σας (ναι, όντως τα διαβάζουμε όλα!)",
  },
  {
      title: "Γνώση ελεύθερη, χωρίς τοίχους",
      description: "Από τεχνικά μέχρι νομικά, όλα εδώ - για να μη χάνετε χρόνο σε 15 διαφορετικά sites",
  }
  ];
  return (
    <section id={id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 pt-20 pb-20 pt-20 max-w-7xl mx-auto scroll-mt-32">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </section>
  );
}

const Feature = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-8 relative dark:border-foreground justify-end",
        (index === 0 || index === 4) && "lg:border-l dark:border-foreground",
        index < 4 && "lg:border-b dark:border-foreground"
      )}
    >
      <div className="text-2xl text-foreground font-semibold mb-4 px-8 tracking-tight leading-tighter">
        <div className="absolute left-0 inset-y-24 h-12 w-1 rounded-tr-full rounded-br-full bg-foreground" />
        <span className="text-foreground">
          {title}
        </span>
      </div>
      <p className="text-base text-muted-foreground font-semibold px-8 leading-tighter">
        {description}
      </p>
    </div>
  );
};
