export default function PrivacyTerms() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-12">Πολιτική Απορρήτου & Όροι Χρήσης</h1>

        <section className="space-y-8 mb-12">
          <h2 className="text-2xl font-bold text-primary">Πολιτική Απορρήτου</h2>
          
          <div className="space-y-4 text-gray-600">
            <p>
              Η εταιρεία μας σέβεται το απόρρητο των προσωπικών σας δεδομένων και δεσμεύεται να τα προστατεύει σύμφωνα 
              με τις διατάξεις του Γενικού Κανονισμού Προστασίας Δεδομένων (GDPR) και την ελληνική νομοθεσία.
            </p>

            <h3 className="text-lg font-semibold">Τι δεδομένα συλλέγουμε:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Βασικές πληροφορίες επικοινωνίας (όνομα, email, τηλέφωνο)</li>
              <li>Τεχνικά δεδομένα (IP διεύθυνση, τύπος browser, λειτουργικό σύστημα)</li>
              <li>Δεδομένα χρήσης της πλατφόρμας</li>
            </ul>

            <h3 className="text-lg font-semibold">Πώς χρησιμοποιούμε τα δεδομένα:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Παροχή και βελτίωση των υπηρεσιών μας</li>
              <li>Επικοινωνία με τους χρήστες</li>
              <li>Ασφάλεια και αποτροπή απάτης</li>
            </ul>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-primary">Όροι Χρήσης</h2>
          
          <div className="space-y-4 text-gray-600">
            <h3 className="text-lg font-semibold">Αποδοχή Όρων</h3>
            <p>
              Η χρήση της πλατφόρμας συνεπάγεται την πλήρη και άνευ όρων αποδοχή των παρόντων όρων. 
              Διατηρούμε το δικαίωμα να τροποποιούμε τους όρους χωρίς προειδοποίηση.
            </p>

            <h3 className="text-lg font-semibold">Δικαιώματα Πνευματικής Ιδιοκτησίας</h3>
            <p>
              Όλο το περιεχόμενο της πλατφόρμας (κείμενα, γραφικά, λογισμικό) αποτελεί πνευματική 
              ιδιοκτησία της εταιρείας μας και προστατεύεται από τις ελληνικές και διεθνείς νομοθεσίες.
            </p>

            <h3 className="text-lg font-semibold">Περιορισμός Ευθύνης</h3>
            <p>
              Δεν φέρουμε ευθύνη για τυχόν ζημίες που προκύπτουν από τη χρήση ή αδυναμία χρήσης της πλατφόρμας, 
              συμπεριλαμβανομένων εμμεσων ή επειγουσών ζημιών.
            </p>

            <h3 className="text-lg font-semibold">Ισχύον Δίκαιο</h3>
            <p>
              Οι παρόντες όροι διέπονται από το ελληνικό δίκαιο. Τυχόν διαφορές θα επιλύονται από τα αρμόδια 
              δικαστήρια του Νομού Αττικής.
            </p>
          </div>
        </section>

        <div className="mt-16 pt-8 border-t">
          <p className="text-sm text-gray-600">
            Τελευταία ενημέρωση: {new Date().toLocaleDateString('el-GR')}
          </p>
        </div>
      </div>
    </div>
  )
} 