import Image from "next/image";
import Link from "next/link";

interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

interface CompetitorItem {
  name: string;
  logo: string;
}

interface FeatureBlockProps {
  heading?: string;
  description?: string;
  linkText?: string;
  linkHref?: string;
  features?: FeatureItem[];
  competitors?: CompetitorItem[];
  screenshotSrc?: string;
}

export function FeatureBlock({
  heading = "Ευκαιρίες έργων παντού",
  description = "Ανακαλύψτε διαθέσιμες ευκαιρίες κοντά σας, όπου κι αν δραστηριοποιείστε, με έξυπνη χαρτογραφημένη προβολή έργων σε όλη τη χώρα.",
  linkText = "Join waiting list for private Beta",
  linkHref = "/product/docs",
  features = [
    {
      title: "Εύρεση ευκαιριών",
      description: "Βρείτε διαθέσιμα έργα κοντά σας με χαρτογράφηση",
      icon: "/pin.svg",
    },
    {
        title: "Εξειδικευμένη αναζήτηση",
        description: "Φιλτράρετε αναλογα με την ειδικότητά σας",
        icon: "/door.svg",
      },
      {
        title: "Γρήγορη πρόσβαση",
        description: "Ενημερωθείτε άμεσα και κινηθείτε πρώτοι!",
        icon: "/chat.svg",
      },
    // Add more default features as needed
  ],
  screenshotSrc = "/screenshot-docs.png",
}: FeatureBlockProps) {
  return (
    <section className="py-32">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid items-end md:grid-cols-12 gap-24 md:gap-24 mb-8 md:mb-12">
          <article className="md:col-span-5 space-y-3 md:space-y-4">
            <h3 className="text-2xl md:text-6xl font-bold text-foreground tracking-tight">
              {heading}
            </h3>
            <p className="text-sm md:text-base font-medium leading-4.5 md:leading-5 text-muted-foreground antialiased" style={{
              fontVariationSettings: '"wght" 529',
              letterSpacing: '-0.12px',
              WebkitFontSmoothing: 'antialiased'
            }}>
              {description}
            </p>
            <Link
              href={linkHref}
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group font-medium text-sm"
            >
              <span>{linkText}</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </article>

          <ul className="md:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="p-1 md:p-1 rounded-lg md:rounded-xl bg-background hover:bg-accent/10 transition-colors"
                style={{ height: 'fit-content' }}
              >
                <div className="mb-1 md:mb-1 w-20 h-20 md:w-20 md:h-20 rounded-xl flex items-start justify-start aspect-square">
                  <Image
                    src={feature.icon}
                    alt=""
                    width={128}
                    height={128}
                    className="text-primary md:group-hover:scale-110 w-full h-full object-contain p-1.5"
                  />
                </div>
                <span className="space-y-2">
                  <h4 className="text-base md:text-lg font-semibold tracking-tight text-foreground">
                    {feature.title}
                  </h4>
                  <p className=" text-left text-sm md:text-base font-semibold leading-4 md:leading-5 text-muted-foreground font-medium" style={{
                    fontVariationSettings: '"wght" 500',
                    letterSpacing: '-0.03px',
                    WebkitFontSmoothing: 'antialiased'
                  }}>
                    {feature.description}
                  </p>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-24 rounded-3xl overflow-hidden shadow-xl">
          <Image
            src={screenshotSrc}
            alt="Feature preview"
            width={1252}
            height={640}
            className="w-full h-auto"
          />
        </div>

      </div>
    </section>
  );
} 