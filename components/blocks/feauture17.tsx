
import Image from "next/image"
  
  interface Feature {
    title: string;
    description: string;
    image: string;
  }
  
  interface Feature17Props {
    heading?: string;
    subheading?: string;
    features?: Feature[];
  }
  
  const Feature17 = ({
    heading = "Πως δουλεύει η BuildingID.gr",
    subheading = "Διαδικασία",
    features = [
      {
        title: "Εγγραφή μηχανικών",
        description:
          "Η εγγραφή διασφαλίζει την ποιότητα και την ταχύτητα της διαδικασίας. Αρχικά, ο μηχανικός καταχωρεί όνομα και email, ενώ η ομάδα επικοινωνεί για τα επόμενα βήματα και την πλήρη καταχώριση",
        image: "/note.svg"
      },
      {
        title: "Εγγραφή ιδιοκτητών ακινήτων",
        description:
          "Ο ενδιαφερόμενος εγγράφεται με βασικά στοιχεία και κινητό, επιβεβαιωμένο μέσω OTP. Στη συνέχεια, εντοπίζει το ακίνητό του και λαμβάνει ενημέρωση. Η πλατφόρμα αναθέτει άμεσα μηχανικό, που επικοινωνεί για αυτοψία",
        image: "/list.svg"
      },
      {
        title: "Ακίνητο",
        description:
          "Ο πολίτης υποδεικνύει το ακίνητο για τον ορισμό αρμόδιου μηχανικού και την επιτάχυνση της επίσκεψης. Ο εντοπισμός γίνεται με διεύθυνση, Τ.Κ. ή απευθείας στον χάρτη",
        image: "/map.svg"
      },
      {
        title: "Επικοινωνία και λεπτομέρειες",
        description:
          "Ο μηχανικός λαμβάνει τη διεύθυνση και τα στοιχεία επικοινωνίας, επικοινωνεί με τον πολίτη και ρυθμίζει την αυτοψία. Η οικονομική διαπραγμάτευση γίνεται αποκλειστικά μεταξύ τους",
        image: "/phone.svg"
      },
    ],
  }: Feature17Props) => {
    return (
      <section className="py-8">
        <div className="container mx-auto max-w-screen-xl">
          <p className="mb-4 text-xs text-muted-foreground md:pl-5">
            {subheading}
          </p>
          <h2 className="text-3xl font-medium md:pl-5 lg:text-4xl">{heading}</h2>
          <div className="mx-auto mt-14 grid gap-x-20 gap-y-8 md:grid-cols-2 md:gap-y-6 lg:mt-20">
            {features.map((feature, idx) => (
              <div className="flex gap-6 rounded-lg md:block md:p-5" key={idx}>
                <div className="mb-8 flex items-center justify-start max-w-25">
                  <Image 
                    src={feature.image} 
                    alt="" 
                    width={100}
                    height={100}
                    className="text-white"
                  />
                </div>
                <div>
                  <h3 className="font-medium md:mb-2 md:text-xl">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export { Feature17 };
  