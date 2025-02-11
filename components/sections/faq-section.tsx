"use client"

import { useState } from "react"
import { IconChevronDown, IconSearch } from "@tabler/icons-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface FaqSectionProps {
  id?: string;
}

interface FaqGroup {
  title: string;
  description: string;
  items: Array<{
    question: string;
    answer: [string, string[]];
  }>;
}

export function FaqSection({ id }: FaqSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeGroup, setActiveGroup] = useState<number | null>(null);

  const faqGroups: FaqGroup[] = [
    {
      title: "Επαγγελματικές Ευκαιρίες",
      description: "Πληροφορίες σχετικά με την εύρεση και διαχείριση επαγγελματικών ευκαιριών",
      items: [
        {
          question: "Πώς βρίσκω νέα έργα;",
          answer: [
            "Η πλατφόρμα μας συγκεντρώνει σε πραγματικό χρόνο έργα και διαγωνισμούς από την ελληνική αγορά, προσφέροντας στους επαγγελματίες μηχανικούς και αρχιτέκτονες ένα αξιόπιστο εργαλείο αναζήτησης.\n\nΜέσω του διαδραστικού χάρτη, εντοπίστε έργα που σας ενδιαφέρουν. Τα στοιχεία επικοινωνίας του κυρίου του έργου παραμένουν κρυπτογραφημένα μέχρι να επιλέξετε να τα ξεκλειδώσετε.\n\nΗ πλατφόρμα προσφέρει γεωγραφική απεικόνιση έργων και διαγωνισμών σε πραγματικό χρόνο, εξειδικευμένα φίλτρα αναζήτησης βάσει επαγγελματικής ιδιότητας και περιοχής, καθώς και ένα προηγμένο σύστημα ειδοποιήσεων για νέες επαγγελματικές ευκαιρίες. Μπορείτε επίσης να αποθηκεύσετε τα κριτήρια αναζήτησής σας και να χρησιμοποιήσετε το ασφαλές σύστημα αποκάλυψης στοιχείων επικοινωνίας.",
            []
          ]
        },
        {
          question: "Ποια είναι η ευθύνη της πλατφόρμας μετά την αποκάλυψη των στοιχείων επικοινωνίας;",
          answer: [
            "Η πλατφόρμα μας λειτουργεί αποκλειστικά ως μέσο διασύνδεσης επαγγελματιών και πελατών. Μετά την αποκάλυψη των στοιχείων επικοινωνίας, οι όροι συνεργασίας καθορίζονται αποκλειστικά μεταξύ των δύο μερών.\n\nΟι συμφωνίες που διαμορφώνονται μεταξύ των μερών περιλαμβάνουν τους οικονομικούς όρους, τα χρονοδιαγράμματα και τις προθεσμίες, τις τεχνικές προδιαγραφές του έργου, καθώς και τους ειδικούς όρους και απαιτήσεις. Επιπλέον, τα μέρη καθορίζουν τους τρόπους πληρωμής και τιμολόγησης, όπως και τα παραδοτέα και τις εγγυήσεις.\n\nΗ πλατφόρμα δεν εμπλέκεται σε διαπραγματεύσεις και δεν φέρει ευθύνη για τυχόν διαφωνίες που μπορεί να προκύψουν μεταξύ των δύο μερών.",
            []
          ]
        }
      ]
    },
    {
      title: "Project Management",
      description: "Πληροφορίες σχετικά με το εργαλείο διαχείρισης έργων",
      items: [
        {
          question: "Τι είναι το Project Management;",
          answer: [
            "Το Project Management είναι ένα εξειδικευμένο εργαλείο για μηχανικούς και αρχιτέκτονες που σας επιτρέπει να οργανώνετε τα έργα σας, τις εργασίες και τα αρχεία σας σε ένα ενιαίο ψηφιακό περιβάλλον.\n\nΗ Kanban προβολή σας επιτρέπει να παρακολουθείτε την πρόοδο των εργασιών σας μέσω στηλών όπως \"Προς υλοποίηση\", \"Σε εξέλιξη\" και \"Ολοκληρωμένα\". Μπορείτε να μετακινείτε τις εργασίες μεταξύ των στηλών με απλό drag and drop, ενώ το εργαλείο υποστηρίζει τη διαχείριση απεριόριστων έργων και εργασιών.\n\nΤο σύστημα είναι σχεδιασμένο με γνώμονα τη συνεργασία, επιτρέποντας την πρόσκληση συνεργατών με διαφορετικά επίπεδα πρόσβασης. Η πλατφόρμα είναι πλήρως responsive και προσβάσιμη από όλες τις συσκευές, ενώ διαθέτει ένα διαισθητικό περιβάλλον με αναλυτικούς οδηγούς.",
            []
          ]
        },
        {
          question: "Πότε θα είναι διαθέσιμο το εργαλείο;",
          answer: [
            "Το εργαλείο βρίσκεται αυτή τη στιγμή σε φάση private beta, προσφέροντας μια μοναδική ευκαιρία στους early adopters να το χρησιμοποιήσουν πρώτοι. Κατά τη διάρκεια της beta φάσης, μπορείτε να εγγραφείτε στη λίστα αναμονής για να αποκτήσετε πρόσβαση.\n\nΟι συμμετέχοντες στη beta έκδοση απολαμβάνουν απεριόριστη χρήση όλων των λειτουργιών, συμπεριλαμβανομένης της διαχείρισης απεριόριστου αριθμού έργων και εργασιών. Επιπλέον, έχουν τη δυνατότητα να συμβάλουν στη διαμόρφωση των μελλοντικών χαρακτηριστικών και απολαμβάνουν προτεραιότητα στην τεχνική υποστήριξη.",
            []
          ]
        },
        {
          question: "Τι είδους αρχεία υποστηρίζονται;",
          answer: [
            "Το Project Management Tool έχει σχεδιαστεί για να υποστηρίζει όλους τους τύπους αρχείων που χρησιμοποιούν καθημερινά οι μηχανικοί και αρχιτέκτονες στην εργασία τους. Μπορείτε να διαχειριστείτε σχέδια CAD και αρχιτεκτονικά σχέδια, να αποθηκεύσετε φωτογραφίες και εικόνες υψηλής ανάλυσης, καθώς και να οργανώσετε έγγραφα PDF και τεχνικές εκθέσεις.\n\nΤο σύστημα υποστηρίζει επίσης πλήρως υπολογιστικά φύλλα και παρουσιάσεις, όπως και χρονοδιαγράμματα και προγράμματα έργων. Όλα τα αρχεία οργανώνονται με τρόπο που διευκολύνει την πρόσβαση και τη συνεργασία μεταξύ των μελών της ομάδας.",
            []
          ]
        },
        {
          question: "Μπορώ να μοιραστώ τα έργα μου με συνεργάτες;",
          answer: [
            "Η πλατφόρμα έχει σχεδιαστεί με γνώμονα την αποτελεσματική συνεργασία μεταξύ ομάδων. Μπορείτε να προσκαλέσετε συνεργάτες στα έργα σας και να ορίσετε διαφορετικά επίπεδα πρόσβασης για κάθε μέλος της ομάδας, διασφαλίζοντας τον πλήρη έλεγχο των δικαιωμάτων.\n\nΤο σύστημα επιτρέπει την παρακολούθηση των αλλαγών σε πραγματικό χρόνο, διευκολύνοντας τη συνεργασία σε αρχεία και εργασίες. Η διαφανής διαχείριση των δικαιωμάτων πρόσβασης εξασφαλίζει ότι κάθε μέλος της ομάδας έχει ακριβώς το επίπεδο πρόσβασης που χρειάζεται για να συνεισφέρει αποτελεσματικά στο έργο.",
            []
          ]
        },
        {
          question: "Πώς διασφαλίζεται η ασφάλεια των δεδομένων μου;",
          answer: [
            "Η ασφάλεια των δεδομένων σας αποτελεί απόλυτη προτεραιότητα για εμάς. Όλα τα δεδομένα και τα αρχεία σας αποθηκεύονται με ασφάλεια στους πιστοποιημένους servers μας, χρησιμοποιώντας προηγμένες μεθόδους κρυπτογράφησης.\n\nΕφαρμόζουμε ένα ολοκληρωμένο σύστημα τακτικών και αυτοματοποιημένων backups για την προστασία των δεδομένων σας. Η πλατφόρμα μας συμμορφώνεται πλήρως με τα διεθνή πρότυπα ασφαλείας, ενώ η διαχείριση των δικαιωμάτων πρόσβασης γίνεται με απόλυτη διαφάνεια και έλεγχο.",
            []
          ]
        },
        {
          question: "Υπάρχει mobile έκδοση;",
          answer: [
            "Η πλατφόρμα μας είναι σχεδιασμένη για να προσφέρει άψογη εμπειρία χρήσης από οποιαδήποτε συσκευή. Χάρη στον πλήρως responsive σχεδιασμό της, μπορείτε να έχετε πρόσβαση σε όλες τις λειτουργίες από υπολογιστή, tablet ή κινητό τηλέφωνο.\n\nΤο interface είναι ειδικά βελτιστοποιημένο για κινητές συσκευές, εξασφαλίζοντας εύκολη πλοήγηση και χρήση. Επιπλέον, βρίσκεται σε ανάπτυξη μια ειδική mobile εφαρμογή, η οποία θα είναι διαθέσιμη μετά την επίσημη κυκλοφορία της πλατφόρμας. Η εφαρμογή θα προσφέρει πλήρη συγχρονισμό δεδομένων μεταξύ όλων των συσκευών σας.",
            []
          ]
        }
      ]
    },
    {
      title: "Επεξεργαστής Εγγράφων",
      description: "Πληροφορίες σχετικά με τον προηγμένο επεξεργαστή τεχνικών εγγράφων",
      items: [
        {
          question: "Τι είναι ο Επεξεργαστής Εγγράφων;",
          answer: [
            "Είναι ένας προηγμένος επεξεργαστής κειμένου, ειδικά σχεδιασμένος για τεχνικά έγγραφα μηχανικών, με ενσωματωμένη τεχνητή νοημοσύνη και εργαλεία αυτοματισμού. Το εργαλείο συνδυάζει την ευκολία χρήσης ενός σύγχρονου επεξεργαστή κειμένου με εξειδικευμένες λειτουργίες για τεχνικά έγγραφα, προσφέροντας μια ολοκληρωμένη λύση για τη δημιουργία και διαχείριση εγγράφων.",
            []
          ]
        },
        {
          question: "Τι δυνατότητες μορφοποίησης προσφέρει;",
          answer: [
            "Ο επεξεργαστής διαθέτει ένα πλήρες σύνολο εργαλείων μορφοποίησης που καλύπτει όλες τις ανάγκες των τεχνικών εγγράφων. Προσφέρει προηγμένη μορφοποίηση κειμένου και εργαλεία για την εισαγωγή και επεξεργασία πινάκων, ενώ η διαχείριση επικεφαλίδων και ενοτήτων γίνεται με απλό και διαισθητικό τρόπο.\n\nΤο σύστημα υποστηρίζει αυτόματη αρίθμηση και δημιουργία ευρετηρίου, ενώ διαθέτει ειδικά εργαλεία για την εισαγωγή τεχνικών συμβόλων και εξισώσεων. Επιπλέον, παρέχει πρόσβαση σε μια πλούσια συλλογή προσαρμοσμένων προτύπων για κάθε είδους τεχνικό έγγραφο.",
            []
          ]
        },
        {
          question: "Πώς λειτουργεί η AI υποστήριξη;",
          answer: [
            "Η ενσωματωμένη τεχνητή νοημοσύνη λειτουργεί ως ένας έξυπνος βοηθός κατά τη συγγραφή των εγγράφων σας. Προσφέρει αυτόματες προτάσεις για βελτίωση της διατύπωσης και διόρθωση της τεχνικής ορολογίας, ενώ παράλληλα παρέχει έξυπνη συμπλήρωση περιεχομένου βασισμένη στο πλαίσιο του εγγράφου.\n\nΤο σύστημα AI αναλύει τη δομή του κειμένου σας και προτείνει βελτιώσεις για καλύτερη οργάνωση και ροή. Επιπλέον, διαθέτει προηγμένες δυνατότητες αυτόματης μετάφρασης τεχνικών όρων, διασφαλίζοντας την ακρίβεια και συνέπεια στην ορολογία.",
            []
          ]
        },
        {
          question: "Ποιες είναι οι δυνατότητες αναζήτησης;",
          answer: [
            "Το σύστημα αναζήτησης του επεξεργαστή είναι σχεδιασμένο για να εντοπίζει γρήγορα και αποτελεσματικά οποιαδήποτε πληροφορία χρειάζεστε. Προσφέρει αναζήτηση πλήρους κειμένου με προηγμένες δυνατότητες φιλτραρίσματος βάσει τύπου εγγράφου.\n\nΜια ιδιαίτερα χρήσιμη λειτουργία είναι η δυνατότητα αναζήτησης εντός τεχνικών σχεδίων και ο εντοπισμός συγκεκριμένων τμημάτων των εγγράφων. Το σύστημα διατηρεί επίσης ένα πλήρες ιστορικό αναζητήσεων για εύκολη πρόσβαση σε προηγούμενα αποτελέσματα.",
            []
          ]
        },
        {
          question: "Τι μορφές εξαγωγής υποστηρίζονται;",
          answer: [
            "Ο επεξεργαστής προσφέρει ευέλικτες επιλογές εξαγωγής για να καλύψει όλες τις ανάγκες σας. Μπορείτε να εξάγετε τα έγγραφά σας σε τυπικές μορφές όπως PDF, Word και Plain Text, καθώς και σε HTML για διαδικτυακή χρήση.\n\nΕπιπλέον, υποστηρίζονται προσαρμοσμένες μορφές εξαγωγής ειδικά σχεδιασμένες για τεχνικά έγγραφα, διασφαλίζοντας ότι διατηρούνται όλες οι ειδικές μορφοποιήσεις και τα τεχνικά στοιχεία του εγγράφου σας.",
            []
          ]
        },
        {
          question: "Υπάρχει δυνατότητα συνεργασίας;",
          answer: [
            "Η συνεργασία αποτελεί βασικό χαρακτηριστικό του επεξεργαστή. Μπορείτε να μοιραστείτε τα έγγραφά σας με συνεργάτες και να επεξεργαστείτε ταυτόχρονα το ίδιο έγγραφο, βλέποντας τις αλλαγές σε πραγματικό χρόνο.\n\nΤο σύστημα παρακολούθησης αλλαγών σας επιτρέπει να βλέπετε ποιος έκανε τι και πότε, ενώ μπορείτε να προσθέσετε σχόλια και επισημάνσεις για αποτελεσματική επικοινωνία με την ομάδα σας.",
            []
          ]
        },
        {
          question: "Πώς διασφαλίζεται η ασφάλεια των εγγράφων;",
          answer: [
            "Η ασφάλεια των εγγράφων σας είναι κορυφαία προτεραιότητα. Όλα τα έγγραφα προστατεύονται με κρυπτογράφηση end-to-end, ενώ το σύστημα πραγματοποιεί αυτόματη αποθήκευση για την προστασία της εργασίας σας.\n\nΟ ενσωματωμένος έλεγχος εκδόσεων σας επιτρέπει να παρακολουθείτε και να επαναφέρετε προηγούμενες εκδόσεις των εγγράφων σας. Επιπλέον, το προηγμένο σύστημα διαχείρισης δικαιωμάτων πρόσβασης σας επιτρέπει να ελέγχετε ακριβώς ποιος έχει πρόσβαση σε κάθε έγγραφο.",
            []
          ]
        },
        {
          question: "Πότε θα είναι διαθέσιμο το εργαλείο;",
          answer: [
            "Το εργαλείο βρίσκεται αυτή τη στιγμή σε φάση private beta, προσφέροντας μια μοναδική ευκαιρία στους πρώτους χρήστες να το δοκιμάσουν. Κατά τη διάρκεια αυτής της φάσης, μπορείτε να επεξεργαστείτε έγγραφα απεριόριστου μεγέθους χωρίς κανέναν περιορισμό.\n\nΜπορείτε να εγγραφείτε στη λίστα αναμονής για να αποκτήσετε πρόσβαση μόλις είναι διαθέσιμο, και θα ενημερωθείτε άμεσα όταν ανοίξουν οι εγγραφές για την beta έκδοση.",
            []
          ]
        },
        {
          question: "Παρέχεται εκπαίδευση στη χρήση του εργαλείου;",
          answer: [
            "Έχουμε δημιουργήσει ένα ολοκληρωμένο σύστημα εκπαίδευσης για να διασφαλίσουμε ότι θα αξιοποιήσετε στο έπακρο τις δυνατότητες του εργαλείου. Παρέχουμε αναλυτικούς οδηγούς χρήσης και video tutorials που καλύπτουν όλες τις λειτουργίες του εργαλείου.\n\nΔιοργανώνουμε τακτικά webinars εκπαίδευσης όπου παρουσιάζονται οι βέλτιστες πρακτικές χρήσης και δίνονται απαντήσεις σε συχνές ερωτήσεις. Επιπλέον, η ομάδα υποστήριξης χρηστών είναι διαθέσιμη για να βοηθήσει με οποιαδήποτε απορία ή τεχνικό ζήτημα προκύψει κατά τη χρήση του εργαλείου.",
            []
          ]
        }
      ]
    },
    {
      title: "Knowledge Base Μηχανικών",
      description: "Πληροφορίες σχετικά με την ολοκληρωμένη βάση γνώσης για μηχανικούς",
      items: [
        {
          question: "Τι είναι η Knowledge Base;",
          answer: [
            "Η Knowledge Base είναι μια ολοκληρωμένη βάση γνώσης που συγκεντρώνει όλες τις απαραίτητες πληροφορίες για μηχανικούς. Αποτελεί έναν κεντρικό πυρήνα πληροφοριών που περιλαμβάνει την ισχύουσα νομοθεσία, τις απαραίτητες διαδικασίες, τους σχετικούς κανονισμούς, καθώς και καλές πρακτικές και παραδείγματα εφαρμογής.\n\nΣχεδιασμένη ειδικά για τις ανάγκες των επαγγελματιών μηχανικών, η βάση γνώσης λειτουργεί ως ένα ζωντανό εργαλείο που εξελίσσεται και ενημερώνεται συνεχώς, προσφέροντας πάντα έγκυρη και επίκαιρη πληροφόρηση.",
            []
          ]
        },
        {
          question: "Τι περιεχόμενο περιλαμβάνει;",
          answer: [
            "Η βάση γνώσης προσφέρει ένα εκτενές φάσμα περιεχομένου που καλύπτει όλες τις πτυχές του επαγγέλματος του μηχανικού. Περιλαμβάνει αναλυτική παρουσίαση του νομοθετικού πλαισίου και των κανονισμών, καθώς και λεπτομερείς οδηγίες για όλες τις απαραίτητες διαδικασίες και προδιαγραφές.\n\nΙδιαίτερη έμφαση δίνεται στις πολεοδομικές διατάξεις και τις τεχνικές οδηγίες, ενώ παρέχονται πρότυπα μελετών και πρακτικά παραδείγματα εφαρμογής. Επιπλέον, η βάση εμπλουτίζεται συνεχώς με χρήσιμες συμβουλές και καλές πρακτικές από έμπειρους επαγγελματίες του χώρου.",
            []
          ]
        },
        {
          question: "Πώς οργανώνεται το περιεχόμενο;",
          answer: [
            "Το περιεχόμενο της βάσης γνώσης είναι δομημένο με τρόπο που διευκολύνει την εύκολη και γρήγορη πρόσβαση στην πληροφορία που χρειάζεστε. Η οργάνωση γίνεται με πολλαπλά κριτήρια για μέγιστη ευελιξία στην αναζήτηση.\n\nΜπορείτε να περιηγηθείτε στο περιεχόμενο ανά κατηγορία έργου, είδος διαδικασίας, γεωγραφική περιοχή ή ειδικότητα μηχανικού. Αυτή η πολυεπίπεδη οργάνωση επιτρέπει την εύκολη εύρεση της ακριβούς πληροφορίας που αναζητάτε, ανεξάρτητα από το πλαίσιο της αναζήτησής σας.",
            []
          ]
        },
        {
          question: "Πώς διασφαλίζεται η εγκυρότητα του περιεχομένου;",
          answer: [
            "Η εγκυρότητα του περιεχομένου αποτελεί θεμελιώδη προτεραιότητα για την πλατφόρμα μας. Όλο το περιεχόμενο προέρχεται αποκλειστικά από επίσημες πηγές και υπόκειται σε τακτική ενημέρωση για να διασφαλίζεται η ακρίβεια και η επικαιρότητά του.\n\nΗ επιμέλεια του περιεχομένου γίνεται από έμπειρους μηχανικούς με εκτενή γνώση του αντικειμένου, ενώ κάθε πληροφορία συνοδεύεται από λεπτομερείς παραπομπές στις αρχικές πηγές για πλήρη διαφάνεια και τεκμηρίωση.",
            []
          ]
        },
        {
          question: "Πώς λειτουργεί η αναζήτηση;",
          answer: [
            "Το σύστημα αναζήτησης της βάσης γνώσης έχει σχεδιαστεί για να προσφέρει γρήγορα και ακριβή αποτελέσματα. Διαθέτει έξυπνη αναζήτηση πλήρους κειμένου που κατανοεί το πλαίσιο του ερωτήματός σας και προσφέρει στοχευμένα αποτελέσματα.\n\nΜπορείτε να χρησιμοποιήσετε εξειδικευμένα φίλτρα ανά κατηγορία για να περιορίσετε τα αποτελέσματα, ενώ το σύστημα προτείνει αυτόματα σχετικό περιεχόμενο βάσει των αναζητήσεών σας. Επιπλέον, έχετε τη δυνατότητα να αποθηκεύετε bookmarks για γρήγορη πρόσβαση στο περιεχόμενο που χρησιμοποιείτε συχνά.",
            []
          ]
        },
        {
          question: "Πώς παρακολουθώ τις αλλαγές στη νομοθεσία;",
          answer: [
            "Η πλατφόρμα διαθέτει ένα προηγμένο σύστημα παρακολούθησης αλλαγών που σας κρατά ενήμερους για κάθε σημαντική εξέλιξη. Μπορείτε να λαμβάνετε εξατομικευμένες ειδοποιήσεις για ενημερώσεις στη νομοθεσία που σας ενδιαφέρει, ενώ παράλληλα έχετε πρόσβαση σε ένα λεπτομερές ιστορικό αλλαγών.\n\nΤο σύστημα σας επιτρέπει να συγκρίνετε διαφορετικές εκδόσεις νόμων και να παρακολουθείτε την εξέλιξή τους στο χρόνο. Επιπλέον, μπορείτε να επιλέξετε συγκεκριμένες θεματικές για παρακολούθηση, ώστε να λαμβάνετε στοχευμένες ενημερώσεις για τους τομείς που σας ενδιαφέρουν.",
            []
          ]
        },
        {
          question: "Υπάρχει δυνατότητα συνεισφοράς περιεχομένου;",
          answer: [
            "Η βάση γνώσης είναι σχεδιασμένη ως μια δυναμική πλατφόρμα που εμπλουτίζεται από την εμπειρία και τη γνώση της κοινότητας των μηχανικών. Μπορείτε να συμμετέχετε ενεργά προτείνοντας νέο περιεχόμενο και μοιράζοντας την επαγγελματική σας εμπειρία με άλλους συναδέλφους.\n\nΗ πλατφόρμα σας επιτρέπει να σχολιάζετε το υπάρχον περιεχόμενο, προσθέτοντας χρήσιμες πληροφορίες και insights από την πρακτική εφαρμογή. Επιπλέον, μπορείτε να επισημαίνετε τυχόν αλλαγές ή λάθη, συμβάλλοντας στη συνεχή βελτίωση και επικαιροποίηση του περιεχομένου.",
            []
          ]
        },
        {
          question: "Πώς γίνεται η πρόσβαση στις πληροφορίες;",
          answer: [
            "Η πρόσβαση στη βάση γνώσης έχει σχεδιαστεί με γνώμονα την ευελιξία και την ευκολία χρήσης. Όλο το περιεχόμενο είναι διαθέσιμο online, με δυνατότητα πρόσβασης από οποιαδήποτε συσκευή και οποιοδήποτε σημείο.\n\nΓια την εξυπηρέτηση των χρηστών που εργάζονται σε περιοχές με περιορισμένη συνδεσιμότητα, παρέχεται η δυνατότητα offline πρόσβασης στο περιεχόμενο. Επιπλέον, μπορείτε να εξάγετε τις πληροφορίες σε μορφή PDF για εκτύπωση ή αποθήκευση, ενώ η πλατφόρμα είναι πλήρως προσαρμοσμένη για άψογη λειτουργία σε κινητές συσκευές.",
            []
          ]
        },
        {
          question: "Πότε θα είναι διαθέσιμη η υπηρεσία;",
          answer: [
            "Η υπηρεσία βρίσκεται αυτή τη στιγμή σε φάση private beta, όπου δοκιμάζονται και βελτιστοποιούνται όλες οι λειτουργίες της. Μπορείτε να εγγραφείτε στη λίστα αναμονής για να αποκτήσετε πρόσβαση μόλις η υπηρεσία είναι διαθέσιμη.\n\nΟι συμμετέχοντες στην beta φάση θα έχουν την ευκαιρία να επηρεάσουν την τελική μορφή της πλατφόρμας με τα σχόλια και τις προτάσεις τους, διαμορφώνοντας ένα εργαλείο που ανταποκρίνεται πλήρως στις ανάγκες της κοινότητας των μηχανικών.",
            []
          ]
        },
        {
          question: "Παρέχεται εκπαίδευση στη χρήση της πλατφόρμας;",
          answer: [
            "Έχουμε δημιουργήσει ένα ολοκληρωμένο πρόγραμμα εκπαίδευσης για να διασφαλίσουμε ότι κάθε χρήστης μπορεί να αξιοποιήσει στο μέγιστο τις δυνατότητες της πλατφόρμας. Παρέχουμε αναλυτικούς οδηγούς χρήσης και video tutorials που καλύπτουν όλες τις λειτουργίες της βάσης γνώσης.\n\nΔιοργανώνουμε τακτικά webinars εκπαίδευσης όπου παρουσιάζονται οι βέλτιστες πρακτικές χρήσης και δίνονται απαντήσεις σε συχνές ερωτήσεις. Επιπλέον, η ομάδα υποστήριξης χρηστών είναι διαθέσιμη για να βοηθήσει με οποιαδήποτε απορία ή τεχνικό ζήτημα προκύψει κατά τη χρήση της πλατφόρμας.",
            []
          ]
        }
      ]
    }
  ];

  // Filter FAQs based on search query
  const filteredGroups = faqGroups.map(group => ({
    ...group,
    items: group.items.filter(item =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer[0].toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(group => group.items.length > 0);

  return (
    <section id={id} className="relative z-10 py-24 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-left mb-16">
          <h2 className="text-5xl md:text-6xl font-bold flex">
            Συχνές Ερωτήσεις
          </h2>
          <p className="w-full mt-4 text-lg">
            Βρείτε απαντήσεις στις πιο συχνές ερωτήσεις για την πλατφόρμα μας
          </p>
          
          {/* Search Bar */}
          <div className="mt-8 max-w-2xl">
            <div className="relative">
              <IconSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Αναζήτηση στις συχνές ερωτήσεις..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 
                          bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100
                          focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              />
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {filteredGroups.map((group, groupIndex) => (
            <div 
              key={groupIndex} 
              className={cn(
                "rounded-2xl border border-neutral-200 dark:border-neutral-800",
                "bg-white dark:bg-neutral-900 overflow-hidden",
                "transition-all duration-200",
                activeGroup === groupIndex ? "ring-2 ring-blue-500/50" : ""
              )}
            >
              {/* Group Header */}
              <button
                onClick={() => setActiveGroup(activeGroup === groupIndex ? null : groupIndex)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
              >
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                    {group.title}
                  </h3>
                  <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                    {group.description}
                  </p>
                </div>
                <IconChevronDown
                  className={cn(
                    "w-6 h-6 text-neutral-400 transition-transform duration-200",
                    activeGroup === groupIndex && "transform rotate-180"
                  )}
                />
              </button>

              {/* Group Content */}
              <AnimatePresence>
                {activeGroup === groupIndex && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-8 pb-6 border-t border-neutral-200 dark:border-neutral-800">
                      <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
                        {group.items.map((faq, index) => (
                          <FaqItem key={index} faq={faq} index={index} />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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

function FaqItem({ faq, index: _index }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-4 first:pt-6 last:pb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between gap-4 group/faq"
      >
        <h4 className="text-lg font-medium text-left text-neutral-900 dark:text-neutral-100 group-hover/faq:text-blue-500">
          {faq.question}
        </h4>
        <IconChevronDown
          className={cn(
            "w-5 h-5 flex-shrink-0 text-neutral-400 transition-transform duration-200 mt-1",
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
            <div className="mt-4 text-neutral-600 dark:text-neutral-300 prose dark:prose-invert max-w-none">
              <div className="whitespace-pre-wrap text-base leading-relaxed">
                {faq.answer[0]}
              </div>
              {faq.answer[1].length > 0 && (
                <ul className="mt-4 space-y-2">
                  {faq.answer[1].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 