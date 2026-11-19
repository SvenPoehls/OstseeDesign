import Hero from "@/components/sections/Hero";
import Leistungen from "@/components/sections/Leistungen";
import Process from "@/components/sections/Process";
import Einblicke from "@/components/sections/Einblicke";
import Fragen from "@/components/sections/Fragen";
import Kontakt from "@/components/sections/Kontakt";
import { company, services } from "@/lib/site";

// STARTSEITE – „Leuchtturm im Meer" (Begründung und Stellschrauben: DESIGN.md).
//
//   Kopfbereich (weiß, Meer) · Leistungen (unter Wasser) · Ablauf ·
//   Einblicke · Fragen · Kontakt (Meeresgrund)
export default function StartseitePage() {
  return (
    <>
      <main id="hauptinhalt">
        <Hero />
        <Leistungen />
        <Process />
        <Einblicke />
        <Fragen />
        <Kontakt />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
      />
    </>
  );
}

// Schema.org LocalBusiness – aus den zentralen Firmendaten aufgebaut.
function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.fullName,
    description:
      "Werbetechnik, Textilveredelung und Drucksachen in Eckernförde – alles aus einer Hand.",
    telephone: company.phoneHref,
    faxNumber: company.faxDisplay,
    email: company.email,
    url: "https://www.ostseedesign.de",
    areaServed: company.region,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.street,
      postalCode: company.zip,
      addressLocality: company.city,
      addressRegion: company.region,
      addressCountry: "DE",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Thursday"],
        opens: "09:00",
        closes: "16:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Wednesday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title },
    })),
  };
}
