import React from "react";
import { FeatureBlock } from "@/components/blocks/feature-block";
import { FeatureList } from "@/components/blocks/feature-list";
import Hero from "@/components/Hero";
import { FaqSection } from "@/components/sections/faq-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureBlock 
        id="opportunities"
        heading="Ανακάλυψε έργα παντού! 🎯"
        description="Βρες τις καλύτερες ευκαιρίες στην περιοχή σου! Ζωντανή ενημέρωση για νέα έργα, ακριβώς εκεί που σε ενδιαφέρει."
        features={[
          {
            title: "Έξυπνος Χάρτης",
            description: "Βρες έργα στην περιοχή σου με διαδραστικό χάρτη - εύκολα και γρήγορα!",
            icon: "/pin.svg",
          },
          {
            title: "Έξυπνη Αναζήτηση",
            description: "Φίλτραρε με βάση την ειδικότητα και τις προτιμήσεις σου",
            icon: "/door.svg",
          },
          {
            title: "Άμεση Ενημέρωση",
            description: "Μάθε πρώτος για νέες ευκαιρίες και κινήσου άμεσα!",
            icon: "/chat.svg",
          },
        ]}
        screenshotSrc="/opportunity.png"
        mobileScreenshotSrc="/opportunity-mobile.png"
      />

      <FeatureBlock 
        id="projects"
        heading="Οργάνωσε τα έργα σου! 🚀"
        description="Τέλος στο χάος! Όλα τα έργα σου σε ένα μέρος - απλά, έξυπνα και αποτελεσματικά."
        features={[
          {
            title: "Όλα σε ένα μέρος",
            description: "Δες όλες τις εργασίες σου με πανέμορφους πίνακες Kanban",
            icon: "/template.svg",
          },
          {
            title: "Έξυπνες Λίστες",
            description: "Λίστες και αρχεία που οργανώνονται αυτόματα! ✨",
            icon: "/fast.svg",
          },
          {
            title: "Παρακολούθηση Προόδου",
            description: "Δες την πρόοδο των έργων σου σε πραγματικό χρόνο",
            icon: "/time.svg",
          },
        ]}
        screenshotSrc="/screenshot-projects.png"
      />

      <FeatureBlock 
        id="editor"
        heading="Έξυπνος Επεξεργαστής Εγγράφων ✨"
        description="Αναβάθμισε την παραγωγικότητά σου με τεχνητή νοημοσύνη! Γρήγορη επεξεργασία και έξυπνα εργαλεία σε ένα μέρος."
        features={[
          {
            title: "Προηγμένη Επεξεργασία",
            description: "Όλα τα εργαλεία μορφοποίησης σε ένα εύχρηστο περιβάλλον",
            icon: "/documents.svg",
          },
          {
            title: "Τεχνητή Νοημοσύνη ✨",
            description: "Έξυπνες προτάσεις και αυτοματισμοί που διευκολύνουν τη δουλειά σου",
            icon: "/ai.svg",
          },
          {
            title: "Γρήγορη Διαχείριση",
            description: "Αναζήτηση και οργάνωση σε δευτερόλεπτα - χωρίς καθυστερήσεις!",
            icon: "/find.svg",
          },
        ]}
        screenshotSrc="/editor.png"
      />

      <FeatureBlock 
        id="knowledge-base"
        heading="Όλη η γνώση σε ένα μέρος! 💡"
        description="Ξέχνα τα παλιά αρχεία PDF! Όλη η γνώση του μηχανικού σε μία οργανωμένη πλατφόρμα - από νομοθεσία μέχρι συμβουλές!"
        features={[
          {
            title: "Κέντρο Γνώσης",
            description: "Νομοθεσία, διαδικασίες και κανονισμοί, επιτέλους οργανωμένα!",
            icon: "/template.svg",
          },
          {
            title: "Γνώση από Ειδικούς",
            description: "Πραγματικά παραδείγματα και συμβουλές από έμπειρους μηχανικούς",
            icon: "/fast.svg",
          },
          {
            title: "Έξυπνη Αναζήτηση",
            description: "Βρες ακριβώς αυτό που ψάχνεις σε δευτερόλεπτα!",
            icon: "/time.svg",
          },
        ]}
        screenshotSrc="/library.png"
      />

      <FeatureBlock 
        id="templates"
        heading="Έτοιμα Πρότυπα για Μηχανικούς 📋"
        description="Μην χάνεις χρόνο! Ξεκίνα άμεσα με έτοιμα πρότυπα για κάθε περίπτωση. Όλα προσαρμόσιμα, όλα έτοιμα για χρήση!"
        features={[
          {
            title: "Βιβλιοθήκη Προτύπων",
            description: "Πλούσια συλλογή από επαγγελματικά πρότυπα για κάθε έργο",
            icon: "/template.svg",
          },
          {
            title: "Γρήγορη Εφαρμογή",
            description: "Από πρότυπο σε τελικό έγγραφο σε λίγα λεπτά!",
            icon: "/fast.svg",
          },
          {
            title: "Αύξηση Απόδοσης",
            description: "Τυποποιημένες διαδικασίες για μέγιστη παραγωγικότητα",
            icon: "/time.svg",
          },
        ]}
        screenshotSrc="/templates.png"
      
      />
      <FeatureList id="features" />
      <FaqSection id="faq" />
    </main>
  )
}