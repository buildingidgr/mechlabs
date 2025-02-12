import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">

                  {/* Features Section */}
                  <div className="mt-2 lg:mt-2 scroll-mt-32">
        <FeaturesSectionWithHoverEffects />
      </div>
        <h1 className="text-4xl font-bold text-primary mb-12">Η Ιστορία Μας</h1>

        <section className="space-y-6 mb-20">
          <p className="text-lg leading-relaxed">
            Από το 2011 που «ακούστηκε» για πρώτη φορά η Η.Τ.Κ. μια ομάδα μηχανικών που ασχολείται 
            ιδιαίτερα με την πολεοδομική νομοθεσία μετακίνησε εμπειρία, εξειδίκευση και γνώση στην 
            ιδέα δημιουργίας μιας κοινότητας ειδικευμένων υπηρεσιών γύρω από το μεγάλο πλαίσιο που θα 
            καθιερώσει η «Ταυτότητα». Στόχος μας είναι η διεύρυνση της γνώσης μέσω της πλατφόρμας 
            ώστε να παρέχουμε τις υπηρεσίες μας με ασφάλεια, τίμια και προπαντος χωρίς εκπλήξεις.
          </p>
        </section>

        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-primary">Πιστεύουμε</h2>

          <div className="space-y-8">
            <article>
              <h3 className="text-2xl font-semibold mb-4">Στην δύναμη της τεχνολογίας</h3>
              <p className="text-gray-600 leading-relaxed">
                Η τεχνολογία είναι το εργαλείο. Απαιτείται όμως η προσαρμογή στις ανάγκες του 
                ομιχλώδους τοπίου στο οποίο δραστηριοποιούνται οι μηχανικοί σήμερα. Όσο μοναδική 
                είναι η πρόκληση, τόσο εξειδικευμένη πρέπει να είναι η υποστήριξη που χρειάζεται 
                ο μέσος μηχανικός. Οι δυνατότητες της πλατφόρμας επαναπροσδιορίζονται συνεχώς 
                με αυτό τον γνώμονα.
              </p>
            </article>

            <article>
              <h3 className="text-2xl font-semibold mb-4">Στην δύναμη της αλληλοβοήθειας</h3>
              <p className="text-gray-600 leading-relaxed">
                Πολλά από τα προβλήματα που αντιμετωπίζουμε στην καθημερινές υλοποιήσεις είναι 
                τόσο εξειδικευμένα που κανένα κανονιστικό πλαίσιο δεν τα ρυθμίζει. Παρ&apos; αυτά 
                εμείς καλούμαστε να πάρουμε αποφάσεις άμεσα. Η «σπάνια» περίπτωση όμως που 
                εμφανίζεται σε μια γωνιά της χώρας μπορεί να είναι κάτι γνώριμο σε μια βάση 
                δεδομένων που συγκεντρώνει πληροφορίες από όλη την επικράτεια.
              </p>
            </article>

            <article>
              <h3 className="text-2xl font-semibold mb-4">Στην δύναμη της εξειδίκευσης</h3>
              <p className="text-gray-600 leading-relaxed">
                Ας το παραδεχτούμε, ο μέσος μηχανικός δραστηριοποιείται σε πολλά πεδία. Ας 
                παραδεχτούμε και κάτι ακόμη, αυτό δεν μπορεί να συνεχιστεί για πάντα. Νομοτελειακά 
                ή θα πρέπει να αναζητηθεί «έτοιμη» εξειδικευμένη γνώση ή να εγκαταλειφθούν πεδία. 
                Σε κάθε περίπτωση η buildingid.gr σας προκαλεί, είτε να εξειδικευτείτε και να 
                «δώσετε» είτε να «λάβετε» γνώση που θα σας φέρει καλές αμοιβές.
              </p>
            </article>
          </div>
        </section>

        <div className="mt-16 pt-8 border-t">
          <p className="text-lg font-semibold">Χριστόφορος Ζερμάν</p>
          <p className="text-gray-600">Πολιτικός Μηχανικός</p>
        </div>
      </div>
    </div>
  )
} 