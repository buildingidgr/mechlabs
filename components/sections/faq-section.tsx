"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { IconChevronDown } from "@tabler/icons-react"
import { cn } from "@/lib/utils"

interface FaqSectionProps {
  id?: string;
}

export function FaqSection({ id }: FaqSectionProps) {
  const faqs: Array<{ question: string; answer: [string, string[]] }> = [
    {
      question: "Πώς βρίσκω νέα έργα;",
      answer: [
        "Η πλατφόρμα μας συγκεντρώνει σε πραγματικό χρόνο έργα και διαγωνισμούς από την ελληνική αγορά, προσφέροντας στους επαγγελματίες μηχανικούς και αρχιτέκτονες ένα αξιόπιστο εργαλείο αναζήτησης.\n\nΜέσω του διαδραστικού χάρτη, εντοπίστε έργα που σας ενδιαφέρουν. Τα στοιχεία επικοινωνίας του κυρίου του έργου παραμένουν κρυπτογραφημένα μέχρι να επιλέξετε να τα ξεκλειδώσετε.\n\nΤα εργαλεία μας περιλαμβάνουν:",
        [
          "Γεωγραφική απεικόνιση έργων και διαγωνισμών σε πραγματικό χρόνο",
          "Εξειδικευμένα φίλτρα αναζήτησης βάσει επαγγελματικής ιδιότητας και περιοχής",
          "Σύστημα ειδοποιήσεων για νέες επαγγελματικές ευκαιρίες",
          "Δυνατότητα αποθήκευσης των κριτηρίων αναζήτησης",
          "Ασφαλές σύστημα αποκάλυψης στοιχείων επικοινωνίας"
        ]
      ]
    },
    {
      question: "Ποια είναι η ευθύνη της πλατφόρμας μετά την αποκάλυψη των στοιχείων επικοινωνίας;",
      answer: [
        "Η πλατφόρμα μας λειτουργεί αποκλειστικά ως μέσο διασύνδεσης επαγγελματιών και πελατών. Μετά την αποκάλυψη των στοιχείων επικοινωνίας, οι όροι συνεργασίας καθορίζονται αποκλειστικά μεταξύ των δύο μερών. Αυτό περιλαμβάνει:\n\nΗ πλατφόρμα δεν εμπλέκεται σε διαπραγματεύσεις και δεν φέρει ευθύνη για τυχόν διαφωνίες που μπορεί να προκύψουν μεταξύ των δύο μερών.",
        [
          "Οικονομικούς όρους και συμφωνίες",
          "Χρονοδιαγράμματα και προθεσμίες",
          "Τεχνικές προδιαγραφές του έργου",
          "Ειδικούς όρους και απαιτήσεις",
          "Τρόπους πληρωμής και τιμολόγησης",
          "Παραδοτέα και εγγυήσεις"
        ]
      ]
    },
    {
      question: "Τι είναι το Project Management Tool;",
      answer: [
        "Είναι ένα εξειδικευμένο εργαλείο για μηχανικούς και αρχιτέκτονες που σας επιτρέπει να οργανώνετε τα έργα σας, τις εργασίες και τα αρχεία σας σε ένα ενιαίο ψηφιακό περιβάλλον.\n\nΗ Kanban προβολή σας επιτρέπει να παρακολουθείτε την πρόοδο των εργασιών σας μέσω στηλών (π.χ. \"Προς υλοποίηση\", \"Σε εξέλιξη\", \"Ολοκληρωμένα\"). Μπορείτε να μετακινείτε τις εργασίες μεταξύ των στηλών με απλό drag and drop.",
        [
          "Διαχείριση απεριόριστων έργων και εργασιών",
          "Πρόσκληση συνεργατών με διαφορετικά επίπεδα πρόσβασης",
          "Πλήρως responsive σχεδιασμός για όλες τις συσκευές",
          "Διαισθητικό περιβάλλον με αναλυτικούς οδηγούς",
          "Ασφαλής αποθήκευση με κρυπτογράφηση και τακτικά backups"
        ]
      ]
    },
    {
      question: "Τι είδους αρχεία υποστηρίζονται;",
      answer: [
        "Το Project Management Tool υποστηρίζει όλους τους συνήθεις τύπους αρχείων που χρησιμοποιούν οι μηχανικοί και αρχιτέκτονες στην καθημερινή τους εργασία:",
        [
          "Σχέδια CAD και αρχιτεκτονικά σχέδια",
          "Φωτογραφίες και εικόνες υψηλής ανάλυσης",
          "Έγγραφα PDF και τεχνικές εκθέσεις",
          "Υπολογιστικά φύλλα και παρουσιάσεις",
          "Χρονοδιαγράμματα και προγράμματα έργων"
        ]
      ]
    },
    {
      question: "Πώς μπορώ να συμμετάσχω στο private beta;",
      answer: [
        "Το εργαλείο βρίσκεται σε φάση private beta με πλήρη λειτουργικότητα και απεριόριστη χρήση για τους early adopters. Για να συμμετάσχετε:",
        [
          "Συμπληρώστε τη φόρμα εγγραφής στη λίστα αναμονής",
          "Θα λάβετε ειδοποίηση μόλις είναι διαθέσιμη η πρόσβαση",
          "Αποκτήστε πρόσβαση σε όλες τις premium λειτουργίες",
          "Λάβετε προτεραιότητα στην υποστήριξη",
          "Συμβάλετε στη διαμόρφωση των μελλοντικών χαρακτηριστικών"
        ]
      ]
    }
  ];

  return (
    <section id={id} className="relative z-10 py-24 scroll-mt-32">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Συχνές Ερωτήσεις
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            Βρείτε απαντήσεις στις πιο συχνές ερωτήσεις για την πλατφόρμα μας
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <FaqItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FaqItemProps {
  faq: {
    question: string;
    answer: [string, string[]];
  };
  index: number;
}

function FaqItem({ faq, index }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-xl border border-neutral-200 dark:border-neutral-800",
        "bg-white dark:bg-neutral-900",
        "transition-all duration-200",
        "hover:border-blue-500/50 dark:hover:border-blue-500/50",
        "group/faq"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between"
      >
        <h3 className="text-xl font-semibold text-left text-neutral-900 dark:text-neutral-100 group-hover/faq:text-blue-500">
          {faq.question}
        </h3>
        <IconChevronDown
          className={cn(
            "w-5 h-5 text-neutral-500 transition-transform duration-200",
            isOpen && "transform rotate-180",
            "group-hover/faq:text-blue-500"
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-neutral-600 dark:text-neutral-300">
              {faq.answer[0] && (
                <div className="mb-3 whitespace-pre-wrap">
                  {faq.answer[0]}
                </div>
              )}
              <ul className="space-y-2">
                {faq.answer[1].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 