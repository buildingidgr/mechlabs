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
        heading="Project Opportunities On-the-Go! 🎯"
        description="Ανακάλυψε hot projects στην περιοχή σου και μη χάσεις καμία ευκαιρία! Live updates για νέα έργα, ακριβώς εκεί που σε ενδιαφέρει."
        features={[
          {
            title: "Smart Map View",
            description: "Browse έργα στην περιοχή σου με interactive χάρτη - εύκολα και γρήγορα!",
            icon: "/pin.svg",
          },
          {
            title: "Pro Filtering",
            description: "Custom φίλτρα με βάση την ειδικότητα και τις προτιμήσεις σου",
            icon: "/door.svg",
          },
          {
            title: "Real-time Updates",
            description: "Live ενημερώσεις για να είσαι πάντα ένα βήμα μπροστά!",
            icon: "/chat.svg",
          },
        ]}
        screenshotSrc="/opportunity.png"
        mobileScreenshotSrc="/opportunity-mobile.png"
      />

      <FeatureBlock 
        id="projects"
        heading="Level-up Your Project Game! 🚀"
        description="Organize like a pro! Όλα τα projects σου σε ένα μέρος - απλά, smart και αποτελεσματικά. No more χάος!"
        features={[
          {
            title: "All-in-One Dashboard",
            description: "Κανένα task δε θα σου ξεφύγει με τα super-organized Kanban boards",
            icon: "/template.svg",
          },
          {
            title: "Smart Lists & Files",
            description: "Auto-organized λίστες και files που συγχρονίζονται αυτόματα! ✨",
            icon: "/fast.svg",
          },
          {
            title: "Progress Tracking",
            description: "Track πρόοδο σε real-time και γίνε ο απόλυτος project master",
            icon: "/time.svg",
          },
        ]}
        screenshotSrc="/screenshot-projects.png"
      />

      <FeatureBlock 
        id="pages"
        heading="Next-Gen Document Editor ✨"
        description="Level-up την παραγωγικότητά σου με AI super-powers! Γρήγορη επεξεργασία, smart features και όλα τα εργαλεία που χρειάζεσαι σε ένα μέρος."
        features={[
          {
            title: "Pro Editing Tools",
            description: "Όλα τα formatting tools που χρειάζεσαι, με απλό και intuitive interface",
            icon: "/documents.svg",
          },
          {
            title: "AI Magic ✨",
            description: "Smart suggestions και αυτοματισμοί που κάνουν τη δουλειά σου παιχνιδάκι",
            icon: "/ai.svg",
          },
          {
            title: "Quick Management",
            description: "Search, export και organize σε δευτερόλεπτα - όχι άλλο χαμένο χρόνο!",
            icon: "/find.svg",
          },
        ]}
        screenshotSrc="/editor.png"
      />

      <FeatureBlock 
        id="knowledge-base"
        heading="Όλη η γνώση, one-stop hub! 💡"
        description="Ξέχνα τα outdated PDFs και τα ατελείωτα tabs! Όλη η γνώση του μηχανικού σε μία super-organized πλατφόρμα - από νομοθεσία μέχρι pro tips!"
        features={[
          {
            title: "Complete Knowledge Hub",
            description: "Νομοθεσία, διαδικασίες και κανονισμοί, επιτέλους organized και searchable!",
            icon: "/template.svg",
          },
          {
            title: "Learn from the Pros",
            description: "Real-world cases και insider tips από top μηχανικούς της αγοράς",
            icon: "/fast.svg",
          },
          {
            title: "Smart Search",
            description: "Βρες ακριβώς αυτό που ψάχνεις σε δευτερόλεπτα - no more endless scrolling!",
            icon: "/time.svg",
          },
        ]}
        screenshotSrc="/library.png"
      />

      <FeatureBlock 
        id="templates"
        heading="Ready-to-Use Templates 📋"
        description="Time is money! Ξεκίνα άμεσα με pro templates για κάθε περίπτωση. Όλα customizable, όλα έτοιμα για χρήση!"
        features={[
          {
            title: "Template Library",
            description: "Πλούσια συλλογή από επαγγελματικά templates για κάθε project",
            icon: "/template.svg",
          },
          {
            title: "Quick Implementation",
            description: "Από template σε τελικό έγγραφο σε λίγα λεπτά - εγγυημένα!",
            icon: "/fast.svg",
          },
          {
            title: "Efficiency Boost",
            description: "Standardized διαδικασίες για maximum παραγωγικότητα και ποιότητα",
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