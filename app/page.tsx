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
            title: "Ζωντανός χάρτης έργων",
            description: "Δες όλα τα νέα έργα να εμφανίζονται στο χάρτη σε real-time.",
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
            description: "Από σχέδια CAD και φωτογραφίες μέχρι συμβόλαια και τεχνικές εκθέσεις. Κράτα τα πάντα οργανωμένα και εύκολα προσβάσιμα.",
            icon: "/template.svg",
          },
          {
            title: "Ζωντανή συνεργασία",
            description: "Δούλεψε με την ομάδα σου σε πραγματικό χρόνο. Μοιράσου αρχεία, ανάθεσε εργασίες και παρακολούθησε την πρόοδο με drag & drop ευκολία.",
            icon: "/fast.svg",
          },
          {
            title: "Παντού μαζί σου",
            description: "Πρόσβαση σε όλα τα έργα σου από οποιαδήποτε συσκευή. Δούλεψε από το γραφείο, το εργοτάξιο ή καθ' οδόν - είμαστε πάντα εδώ.",
            icon: "/time.svg",
          },
        ]}
        screenshotSrc="/screenshot-projects.png"
      />

      <FeatureBlock 
        id="editor"
        heading="Έξυπνα έγγραφα με AI boost 🤖"
        description="Ένας επεξεργαστής εγγράφων ειδικά για μηχανικούς. Γράψε τεχνικά κείμενα με τη βοήθεια AI και αυτοματοποίησε τα πάντα."
        features={[
          {
            title: "AI στο πλευρό σου",
            description: "Άσε την τεχνητή νοημοσύνη να σε βοηθήσει με την τεχνική ορολογία, τη δομή και τη μορφοποίηση. Προτάσεις που προσαρμόζονται στο στυλ σου.",
            icon: "/documents.svg",
          },
          {
            title: "Τεχνική τελειότητα",
            description: "Εισαγωγή εξισώσεων, τεχνικών συμβόλων και πινάκων με ένα κλικ. Αυτόματη αρίθμηση και δημιουργία ευρετηρίου χωρίς κόπο.",
            icon: "/ai.svg",
          },
          {
            title: "Συνεργασία σε real-time",
            description: "Δούλεψε ταυτόχρονα με την ομάδα σου στο ίδιο έγγραφο. Σχόλια, επισημάνσεις και έλεγχος αλλαγών σε πραγματικό χρόνο.",
            icon: "/find.svg",
          },
        ]}
        screenshotSrc="/editor.png"
      />

      <FeatureBlock 
        id="knowledge-base"
        heading="Γνώση που εξελίσσεται μαζί σου 🧠"
        description="Μια ζωντανή βάση γνώσης που μεγαλώνει καθημερινά. Βρες όλα όσα χρειάζεσαι για να πάρεις σωστές αποφάσεις - από νομοθεσία μέχρι τεχνικές οδηγίες."
        features={[
          {
            title: "Πάντα ενημερωμένος",
            description: "Μείνε μπροστά από τις εξελίξεις με αυτόματες ειδοποιήσεις για αλλαγές στη νομοθεσία και τους κανονισμούς. Σύγκρινε εκδόσεις και δες τι άλλαξε με μια ματιά.",
            icon: "/template.svg",
          },
          {
            title: "Γνώση από την κοινότητα",
            description: "Μάθε από την εμπειρία άλλων μηχανικών. Πρακτικά παραδείγματα, συμβουλές και λύσεις σε καθημερινές προκλήσεις από συναδέλφους που τις έχουν αντιμετωπίσει.",
            icon: "/fast.svg",
          },
          {
            title: "Έξυπνη Αναζήτηση",
            description: "Βρες ακριβώς αυτό που ψάχνεις με contextual search που καταλαβαίνει τι θέλεις. Αποθήκευσε αγαπημένα και δημιούργησε τη δική σου συλλογή πόρων.",
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