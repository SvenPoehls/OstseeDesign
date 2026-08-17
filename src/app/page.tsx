import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieNotice from "@/components/layout/CookieNotice";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import FindUs from "@/components/sections/FindUs";
import CtaBand from "@/components/sections/CtaBand";
import { company, services } from "@/lib/site";

// Startseite. Aufbau nach der Vorlage (projectone.website), umgesetzt in
// unseren Farben und mit unserer Schrift:
// Kopfzeile → Hero mit fliegenden Bildern → Unsere Leistungen →
// So läuft Ihr Auftrag → Standort → Kontakt → Fußzeile.
export default function HomePage() {
  return (
    <>
      <Header />
      <main id="hauptinhalt">
        <Hero />
        <Services />
        <Process />
        <FindUs />
        <CtaBand />
      </main>
      <Footer />
      <CookieNotice />
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
      "Werbetechnik, Textilveredelung und Drucksachen aus einer Hand in Eckernförde.",
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
