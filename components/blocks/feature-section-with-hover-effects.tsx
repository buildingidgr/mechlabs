import { cn } from "@/lib/utils";

interface FeaturesSectionWithHoverEffectsProps {
  id?: string;
}

export function FeaturesSectionWithHoverEffects({ id }: FeaturesSectionWithHoverEffectsProps) {
  const features = [
    {
      title: "Φτιαγμένο από μηχανικούς",
      description:
        "Γνωρίζουμε τις προκλήσεις γιατί τις ζούμε.",
    },
    {
      title: "Το όραμά μας είναι απλό",
      description:
        "Χτίζουμε την κοινότητα. Μεγαλώνουμε και πετυχαίνουμε μαζί",
    },
    {
      title: "Η γνώση στα χέρια σας",
      description:
        "Τεχνικά και νομικά θέματα, όλα εδώ. Για να δουλεύετε με σιγουριά, χωρίς άγχος",
    },
    {
      title: "Μεγαλώνουμε μαζί σας",
      description: "Νέες γνώσεις, νέοι πελάτες. Είμαστε δίπλα σας σε κάθε βήμα",
    },
  ];
  return (
    <section id={id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 pb-20 pt-20 max-w-7xl mx-auto scroll-mt-32">
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
        "flex flex-col lg:border-r py-8 relative dark:border-foreground",
        (index === 0 || index === 4) && "lg:border-l dark:border-foreground",
        index < 4 && "lg:border-b dark:border-foreground"
      )}
    >
      <div className="text-2xl text-foreground font-bold mb-4 px-8 tracking-tighter leading-tighter">
        <div className="absolute left-0 inset-y-0 h-12 w-1 rounded-tr-full rounded-br-full bg-foreground" />
        <span className="text-foreground">
          {title}
        </span>
      </div>
      <p className="text-xl text-muted-foreground font-semibold px-8  leading-tighter">
        {description}
      </p>
    </div>
  );
};
