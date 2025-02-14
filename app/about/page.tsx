import Image from "next/image";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-2xl font-medium text-foreground/30 mb-4">Η ιστορία μας</h1>
        <h2 className="text-5xl font-bold tracking-tight mb-12">
          Βελτιώνουμε την καθημερινότητα κάθε μηχανικού
        </h2>
      </div>

      <FeaturesSectionWithHoverEffects id="core-values" />

      <div className="max-w-[1392px] mx-auto space-y-24">
        {/* Section 1 - Problem Statement */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[2/2]">
            <Image
              src="/about-02.svg"
              alt="Team working"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-xl leading-snug">
            Το 2025, μια ομάδα μηχανικών παρατήρησε μια κοινή πρόκληση: Πολλές ομάδες 
            αντιμετώπιζαν δυσκολίες με την έγκαιρη ενημέρωση, την συνεργασία και την 
            πρόσβαση σε αξιόπιστες πηγές. Αποφασίσαμε να δοκιμάσουμε μια νέα προσέγγιση 
            - όχι ως η τελική λύση, αλλά ως ένα βήμα προς την καλύτερη καθημερινότητα.
          </p>
        </section>

        {/* Section 2 - Solution */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square md:order-last">
            <Image
              src="/about-01.svg"
              alt="Office work"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-xl leading-snug">
            Δουλεύουμε σε μια πλατφόρμα που:
            <span className="block h-4" />
            • Βοηθά στη δημιουργία εγγράφων<br/>
            • Διασφαλίζει καλύτερη συνεργασία<br/>
            • Εκμεταλλεύεται τις νέες τεχνολογίες<br/>
            • Προσαρμόζεται στις ανάγκες σας<br/>
            <span className="block h-4" />
            Μια διαδικασία βελτίωσης που βασίζεται στη συνεργασία και την εμπειρία σας.
          </p>
        </section>

        {/* Section 3 - Community Focus */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5]">
            <Image
              src="/about-03.svg"
              alt="Construction"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-xl leading-snug">
            Κάθε βήμα μας καθοδηγείται από την κοινότητα. 
            <span className="block h-4" />
            Ακούμε προσεκτικά τα σχόλια και τις προτάσεις σας, προσπαθώντας να 
            δημιουργήσουμε εργαλεία που πραγματικά βοηθάνε.
            <span className="block h-4" />
            Είμαστε εδώ να μάθουμε και να βελτιωθούμε μαζί σας - με ταπεινότητα 
            και υπομονή.
          </p>
        </section>

        {/* Add Timeline Section */}
        <section className="py-16">
          <h3 className="text-4xl font-bold text-center mb-16">Προς το Μέλλον - Μαζί Σας</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border-l-4 border-primary">
              <h4 className="text-xl font-bold mb-2">Ιαν 2025</h4>
              <p>Ξεκινήσαμε ως μικρή ομάδα με έναν απλό στόχο</p>
            </div>
            <div className="p-6 border-l-4 border-primary">
              <h4 className="text-xl font-bold mb-2">Μαρ 2025</h4>
              <p>Πρώτες δοκιμές βασικών λειτουργιών</p>
            </div>
            <div className="p-6 border-l-4 border-primary">
              <h4 className="text-xl font-bold mb-2">Σεπ 2025</h4>
              <p>Μια μικρή ομάδα πρώτων χρηστών μας βοηθά να βελτιωθούμε</p>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <div className="text-center py-16">
          <blockquote className="text-4xl font-bold italic">
            «Μαθαίνουμε κάθε μέρα - και εσείς είστε οι καλύτεροι δάσκαλοι»
          </blockquote>
          <p className="mt-4 text-xl text-muted-foreground">
            Η ομάδα της Mechlabs
          </p>
        </div>
      </div>
    </div>
  )
} 