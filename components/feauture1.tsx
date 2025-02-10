interface Feature {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
  }
  
  interface Feature13Props {
    heading?: string;
    features?: Feature[];
  }
  
  const Feature13 = ({
    heading = "Τι κερδίζεις ως μέλος της BuildingID",
    features = [
      {
        id: "feature-1",
        title: "Ευκαιρίες Έργων Παντού",
        subtitle: "Ανακαλύψτε διαθέσιμες ευκαιρίες κοντά σας, όπου κι αν δραστηριοποιείστε, με έξυπνη χαρτογραφημένη προβολή έργων σε όλη τη χώρα.",
        description:
          "Με το BuildingID, έχετε πρόσβαση σε ευκαιρίες έργων από όλη τη χώρα, προσαρμοσμένες στην τοποθεσία σας. Δείτε διαθέσιμα έργα κοντά σας σε πραγματικό χρόνο και μη χάνετε καμία ευκαιρία, όπου κι αν δραστηριοποιείστε!",
        image: "payments.svg",
      },
      {
        id: "feature-2",
        title: "Εκπαίδευση και Πιστοποίηση",
        subtitle: "FOR DEVELOPERS",
        description:
          "Αναβαθμίστε τις γνώσεις σας και εξελίξτε την ομάδα σας με συνεχή εκπαίδευση. Δημιουργούμε ένα ισχυρό δίκτυο γνώσης, εξασφαλίζοντας κορυφαία ποιότητα και διαρκή ανάπτυξη.",
        image: "/training.svg",
      },
      {
        id: "feature-3",
        title: "Εξασφάλιση καλών αμοιβών",
        subtitle: "FOR DEVELOPERS",
        description:"Με την υποστήριξη της κορυφαίας πλατφόρμας για την ταυτότητα κτιρίου, διασφαλίζετε αξιοπιστία, υψηλότερες αμοιβές και πρόσβαση σε περισσότερους πελάτες",
        image: "/payments1.svg",
      },
      {
        id: "feature-4",
        title: "Κλειστός κύκλος μελών",
        subtitle: "FOR DEVELOPERS",
        description:
          "Οι μηχανικοί της BuildingID εκπαιδεύονται και επιλέγονται ανά περιοχή για την υποστήριξη της Ταυτότητας Κτιρίου. Διαθέτουν εκπαιδευτικό υλικό, γνωσιακή βάση, εσωτερικό forum και δια ζώσης επικοινωνία. Εξειδικευμένη ομάδα απαντά σε επιπλέον ερωτήματα, διασφαλίζοντας την τεχνική αρτιότητα του τελικού προϊόντος.",
        image: "/computer.svg",
      },
      {
        id: "feature-5",
        title: "Προτεραιότητα σε νέες δυνατότητες",
        subtitle: "FOR DEVELOPERS",
        description:
          "Η BuildingID φέρνει συνεχώς νέα έργα! Αποκτήστε αποκλειστική πρόσβαση σε αναπτυξιακές πλατφόρμες και μείνετε πάντα ένα βήμα μπροστά",
        image: "/feautures.svg",
      },
      {
        id: "feature-6",
        title: "Ολοκληρωμένη Διαχείριση Μηχανικών Έργων",
        subtitle: "Οργανώστε, διαχειριστείτε και εξελίξτε τα έργα σας με την πιο έξυπνη πλατφόρμα για μηχανικούς.",
        description:
          "Το BuildingID σάς δίνει τον έλεγχο των μηχανικών σας έργων με ένα ισχυρό και εύχρηστο λογισμικό διαχείρισης. Αποδοτικότητα, οργάνωση και εξέλιξη, όλα σε ένα μέρος",
        image: "/sales.svg",
      },
    ],
  }: Feature13Props) => {
    return (
      <section className="py-32">
        <div className="container max-w-7xl">
          <h2 className="text-3xl font-medium lg:text-4xl">{heading}</h2>
          <div className="mt-20 grid gap-9 lg:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col justify-between rounded-lg bg-accent/30"
              >
                <div className="flex justify-between gap-10 border-b">
                  <div className="flex flex-col justify-between gap-14 py-6 pl-4 md:py-10 md:pl-8 lg:justify-normal">
                    <p className="text-xs text-muted-foreground">
                      {feature.subtitle}
                    </p>
                    <h3 className="text-2xl md:text-4xl">{feature.title}</h3>
                  </div>
                  <div className="relative w-2/5 shrink-0 rounded-r-lg flex items-end justify-start h-full">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="object-contain w-full h-full max-h-[200px] max-w-[200px]"
                    />
                  </div>
                </div>
                <div className="p-4 text-muted-foreground md:p-8">
                  {feature.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export { Feature13 };
  