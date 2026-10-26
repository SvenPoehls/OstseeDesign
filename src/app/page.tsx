import Hero from "@/components/sections/Hero";
import Werkstatt from "@/components/sections/Werkstatt";
import Services from "@/components/sections/Services";
import Einblicke from "@/components/sections/Einblicke";
import Kundenstimmen from "@/components/sections/Kundenstimmen";
import Process from "@/components/sections/Process";
import Fragen from "@/components/sections/Fragen";
import Aufruf from "@/components/sections/Aufruf";
import Contact from "@/components/sections/Contact";
import Uebergang from "@/components/ui/Uebergang";
import { company, services } from "@/lib/site";

// STARTSEITE – Farben „Farbfächer", Aufbau nach dem Vorbild mediaquestweb.com
// (Begründung: DESIGN.md).
//
// Die Abschnitte laufen über die ganze Breite; helle (auf dem Verlauf von
// Weiß zu Beige) und dunkelbraune wechseln sich ab. Gestrichelte Bögen
// (<Uebergang />) verbinden einige davon. Jeder Abschnitt setzt seinen
// Seitenrand selbst, deshalb hat <main> hier keinen.
//
//   Kopfbereich · So arbeiten wir (dunkel) · Leistungen · Einblicke ·
//   Kundenstimmen (dunkel) · Ablauf · Fragen · Schlussaufruf (dunkel) · Kontakt
export default function StartseitePage() {
  return (
    <>
      <main id="hauptinhalt">
        <Hero />
        <Werkstatt />
        <Uebergang start="links" />
        <Services />
        <Einblicke />
        <Uebergang start="rechts" />
        <Kundenstimmen />
        <Uebergang start="links" form={2} />
        <Process />
        <Fragen />
        <Aufruf />
        <Contact />
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
      "Fahrzeugbeschriftung, Schilder, Stickerei und Drucksachen. Werkstatt am Rosseer Weg in Eckernförde.",
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
