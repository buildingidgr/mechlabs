"use client"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="flex justify-center container mx-auto px-4 py-24">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-12">Συχνές Ερωτήσεις</h2>
        
        <Accordion type="single" collapsible className="w-full">
          {/* Item 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline text-left">
              <h3 className="text-xl flex items-center font-semibold">Πώς βρίσκω νέα έργα;</h3>
            </AccordionTrigger>
            <AccordionContent className="pt-4 text-lg text-gray-600 space-y-4">
              <p>
                Η πλατφόρμα μας προσφέρει προηγμένα εργαλεία αναζήτησης:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Χαρτογραφημένη προβολή έργων σε πραγματικό χρόνο</li>
                <li>Φίλτρα αναζήτησης βάσει ειδικότητας και τοποθεσίας</li>
                <li>Ειδοποιήσεις για νέες ευκαιρίες</li>
                <li>Δυνατότητα αποθήκευσης αναζητήσεων</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Item 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="hover:no-underline text-left">
              <h3 className="text-xl font-semibold">Πώς λειτουργεί η πιστοποίηση;</h3>
            </AccordionTrigger>
            <AccordionContent className="pt-4 text-lg text-gray-600 space-y-4">
              <p>Η διαδικασία πιστοποίησης περιλαμβάνει:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ολοκληρωμένο εκπαιδευτικό πρόγραμμα</li>
                <li>Πρακτικές ασκήσεις και τεστ γνώσεων</li>
                <li>Ετήσια ανανέωση πιστοποίησης</li>
                <li>Διαθεσιμότητα online υλικού 24/7</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Item 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="hover:no-underline text-left">
              <h3 className="text-xl font-semibold">Μπορώ να χρησιμοποιήσω δικά μου πρότυπα;</h3>
            </AccordionTrigger>
            <AccordionContent className="pt-4 text-lg text-gray-600 space-y-4">
              <p>
                Η πλατφόρμα υποστηρίζει:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Εισαγωγή προσαρμοσμένων προτύπων</li>
                <li>Διαχείριση βιβλιοθήκης εγγράφων</li>
                <li>Συνδυασμό με τα έτοιμα πρότυπα της πλατφόρμας</li>
                <li>Ασφαλή αποθήκευση στο cloud</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Item 4 */}
          <AccordionItem value="item-4">
            <AccordionTrigger className="hover:no-underline text-left">
              <h3 className="text-xl font-semibold">Πώς βοηθάει το AI στον επεξεργαστή;</h3>
            </AccordionTrigger>
            <AccordionContent className="pt-4 text-lg text-gray-600 space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Αυτόματη μορφοποίηση εγγράφων</li>
                <li>Προτάσεις βάσει νομοθεσίας</li>
                <li>Έξυπνη αναζήτηση σε τεχνική βιβλιοθήκη</li>
                <li>Επιλογή σχετικών προτύπων</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Item 5 */}
          <AccordionItem value="item-5">
            <AccordionTrigger className="hover:no-underline text-left">
              <h3 className="text-xl font-semibold">Τι περιλαμβάνει η γνωσιακή βάση;</h3>
            </AccordionTrigger>
            <AccordionContent className="pt-4 text-lg text-gray-600 space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Ενημερωμένη νομοθεσία</li>
                <li>Best practices από εμπειρογνώμονες</li>
                <li>Case studies πραγματικών έργων</li>
                <li>Βίντεο εκπαιδευτικών σεμιναρίων</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Item 6 */}
          <AccordionItem value="item-6">
            <AccordionTrigger className="hover:no-underline text-left">
              <h3 className="text-xl font-semibold">Πώς γίνεται η συνεργασία με ομάδες;</h3>
            </AccordionTrigger>
            <AccordionContent className="pt-4 text-lg text-gray-600 space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Real-time επεξεργασία εγγράφων</li>
                <li>Συστήματα version control</li>
                <li>Αποδοχές και σχόλια απευθείας στα έγγραφα</li>
                <li>Διαχείριση δικαιωμάτων πρόσβασης</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Item 7 */}
          <AccordionItem value="item-7">
            <AccordionTrigger className="hover:no-underline text-left">
              <h3 className="text-xl font-semibold">Πώς διασφαλίζεται η ασφάλεια των δεδομένων μου;</h3>
            </AccordionTrigger>
            <AccordionContent className="pt-4 text-lg text-gray-600 space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Κρυπτογράφηση end-to-end</li>
                <li>Καθημερινά backups</li>
                <li>Πιστοποιήσεις GDPR</li>
                <li>Διαθεσιμότητα 99.9%</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
} 