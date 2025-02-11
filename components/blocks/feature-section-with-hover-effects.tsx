import { cn } from "@/lib/utils";

interface FeaturesSectionWithHoverEffectsProps {
  id?: string;
}

export function FeaturesSectionWithHoverEffects({ id }: FeaturesSectionWithHoverEffectsProps) {
  return (
    <section 
      id={id} 
      className="relative z-10 py-8 max-w-4xl mx-auto scroll-mt-32"
    >
      <div className="bg-secondary/20 rounded-2xl p-6 backdrop-blur-sm border border-secondary/50">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
            <span className="text-2xl">🚀</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight leading-tight max-w-2xl">
            Πίσω από την πλατφόρμα είμαστε κι εμείς μηχανικοί, όπως εσύ!
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl leading-relaxed">
            Ζούμε τις ίδιες προκλήσεις, γι' αυτό φτιάξαμε έναν χώρο όπου μοιραζόμαστε γνώσεις και εμπειρίες. Χτίζουμε κάτι καλύτερο μαζί! ✨
          </p>
        </div>
      </div>
    </section>
  );
}
