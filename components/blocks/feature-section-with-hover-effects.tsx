import {
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconTerminal2,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

interface FeaturesSectionWithHoverEffectsProps {
  id?: string;
}

export function FeaturesSectionWithHoverEffects({ id }: FeaturesSectionWithHoverEffectsProps) {
  const features = [
    {
      title: "Από μηχανικούς για μηχανικούς",
      description:
        "Γνωρίζουμε τις προκλήσεις γιατί τις ζούμε. Φέρνουμε κοντά σας τις ευκαιρίες που αξίζετε",
      icon: <IconTerminal2 />,
    },
    {
      title: "Το όραμά μας είναι απλό",
      description:
        "Χτίζουμε την καλύτερη κοινότητα μηχανικών. Μεγαλώνουμε και πετυχαίνουμε μαζί",
      icon: <IconEaseInOut />,
    },
    {
      title: "Η γνώση στα χέρια σας",
      description:
        "Τεχνικά και νομικά θέματα, όλα εδώ. Για να δουλεύετε με σιγουριά, χωρίς άγχος",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Μεγαλώνουμε μαζί σας",
      description: "Νέες γνώσεις, νέοι πελάτες, νέες ευκαιρίες. Είμαστε δίπλα σας σε κάθε βήμα της επαγγελματικής σας ανάπτυξης",
      icon: <IconCloud />,
    },

  ];
  return (
    <section id={id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 pt-28 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-2 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
