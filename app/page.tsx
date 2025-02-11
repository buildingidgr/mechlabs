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
            icon: "/map.svg",
          },
          {
            title: "Έξυπνη Αναζήτηση",
            description: "Φίλτραρε με βάση την ειδικότητα και τις προτιμήσεις σου",
            icon: "/Eye.svg",
          },
          {
            title: "Άμεση Ενημέρωση",
            description: "Μάθε πρώτος για νέες ευκαιρίες και κινήσου άμεσα!",
            icon: "/Megaphone.svg",
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
            description: "Από σχέδια CAD και φωτογραφίες μέχρι συμβόλαια και τεχνικές εκθέσεις.",
            icon: "/folder.svg",
          },
          {
            title: "Ζωντανή συνεργασία",
            description: "Δούλεψε με την ομάδα σου σε πραγματικό χρόνο. Μοιράσου αρχεία, ανάθεσε εργασίες.",
            icon: "/comment.svg",
          },
          {
            title: "Παντού μαζί σου",
            description: "Δούλεψε από το γραφείο, το εργοτάξιο ή καθ' οδόν - είμαστε πάντα εδώ.",
            icon: "/AirPlay.svg",
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
            description: "Άσε την τεχνητή νοημοσύνη να σε βοηθήσει με την τεχνική ορολογία, τη δομή και τη μορφοποίηση",
            icon: "/Microchip.svg",
          },
          {
            title: "Τεχνική τελειότητα",
            description: "Εισαγωγή εξισώσεων, τεχνικών συμβόλων και πινάκων με ένα κλικ.",
            icon: "/settings.svg",
          },
          {
            title: "Συνεργασία σε real-time",
            description: "Δούλεψε με την ομάδα σου στο ίδιο έγγραφο. Σχόλια, επισημάνσεις σε πραγματικό χρόνο.",
            icon: "/Route.svg",
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
            description: "Μείνε μπροστά από τις εξελίξεις για αλλαγές στη νομοθεσία και τους κανονισμούς. Σύγκρινε εκδόσεις",
            icon: "/Bookmark.svg",
          },
          {
            title: "Γνώση από την κοινότητα",
            description: "Μάθε από την εμπειρία άλλων μηχανικών. Πρακτικά παραδείγματα, συμβουλές και λύσεις σε καθημερινές προκλήσεις",
            icon: "/Share Square.svg",
          },
          {
            title: "Έξυπνη Αναζήτηση",
            description: "Βρες ακριβώς αυτό που ψάχνεις με contextual search που καταλαβαίνει τι θέλεις",
            icon: "/File Search.svg",
          },
        ]}
        screenshotSrc="/library.png"
      />

      <FeatureBlock 
        id="templates"
        heading="Ξεκίνα γρήγορα με έτοιμα templates ⚡️"
        description="Μην χάνεις χρόνο! Ξεκίνα άμεσα με έτοιμα πρότυπα για κάθε περίπτωση. Όλα προσαρμόσιμα, όλα έτοιμα για χρήση!"
        features={[
          {
            title: "Τεχνικά έγγραφα με στυλ",
            description: "Από τεχνικές εκθέσεις και μελέτες μέχρι προσφορές και συμβόλαια.",
            icon: "/Building.svg",
          },
          {
            title: "Προσάρμοσε τα όλα",
            description: "Κάθε template είναι πλήρως παραμετροποιήσιμο. Χρώματα, γραμματοσειρές, διάταξη",
            icon: "/Edit.svg",
          },
          {
            title: "Φτιάξε τη συλλογή σου",
            description: "Αποθήκευσε τα αγαπημένα σου templates και μοιράσου τα με την ομάδα σου",
            icon: "/Home.svg",
          },
        ]}
        screenshotSrc="/templates.png"
      
      />
      <FeatureList id="features" />
      <FaqSection id="faq" />
    </main>
  )
}