import { cn } from "@/lib/utils";

interface FeaturesSectionWithHoverEffectsProps {
  id?: string;
}

export function FeaturesSectionWithHoverEffects({ id }: FeaturesSectionWithHoverEffectsProps) {
  const features = [
    {
      title: "Φτιαγμένο από μηχανικούς για μηχανικούς",
      description: "Γνωρίζουμε τις προκλήσεις του επαγγέλματος γιατί τις ζούμε καθημερινά μαζί σας",
  },
  {
      title: "Χτίζουμε το μέλλον μαζί",
      description: "Δημιουργούμε μια δυναμική κοινότητα μηχανικών που μοιράζεται γνώση και εξελίσσεται",
  },
  {
      title: "Όλη η γνώση στα χέρια σας",
      description: "Από τεχνικά ζητήματα μέχρι νομικά θέματα, όλα συγκεντρωμένα για να δουλεύετε με αυτοπεποίθηση",
  },
  {
      title: "Εξελισσόμαστε μαζί σας",
      description: "Νέες ευκαιρίες, νέες γνώσεις, νέοι πελάτες - είμαστε δίπλα σας σε κάθε επαγγελματικό βήμα",
  }
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
        <div className="absolute left-0 inset-y-24 h-12 w-1 rounded-tr-full rounded-br-full bg-foreground" />
        <span className="text-foreground">
          {title}
        </span>
      </div>
      <p className="text-lg text-muted-foreground font-semibold px-8 leading-tighter">
        {description}
      </p>
    </div>
  );
};
