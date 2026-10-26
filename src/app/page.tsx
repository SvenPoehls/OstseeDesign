import Hero from "@/components/sections/Hero";
import Faecher from "@/components/sections/Faecher";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import FindUs from "@/components/sections/FindUs";
import Contact from "@/components/sections/Contact";
import { company, services } from "@/lib/site";

// STARTSEITE – Gestaltung „Farbfächer" (Begründung: DESIGN.md).
//
// Die Seite sieht aus wie der Farbfächer an der Werkstattwand: weißer Grund,
// vier Werkstattfarben, runde Formen, Kreise, die sich übereinander mischen
// wie Druckfarben. Der Titel und die Beschreibung der Seite stehen in
// layout.tsx, die Farben in src/lib/farben.ts, die Animationen in globals.css.
export default function StartseitePage() {
  return (
    <>
      <main
        id="hauptinhalt"
        className="seitenrand"
      >
        <Hero />
        <Faecher />
        <Services />
        <Process />
        <FindUs />
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
