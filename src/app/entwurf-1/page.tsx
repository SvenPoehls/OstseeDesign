import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Papier from "@/components/layout/Papier";
import VariantBar from "@/components/layout/VariantBar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import FindUs from "@/components/sections/FindUs";
import CtaBand from "@/components/sections/CtaBand";
import { company, services } from "@/lib/site";

// ENTWURF 1 — „Handskizze"
// Leicht zerknittertes Papier, Handschrift, von Hand gezogene Rahmen und
// Linien, Skizzen statt Platzhalterbildern. Siehe DESIGN.md.
export const metadata: Metadata = {
  title: "Entwurf 1 · Handskizze",
  description:
    "Entwurf 1 für ostseedesign.de: zerknittertes Papier, Handschrift, gezeichnete Rahmen und Skizzen.",
};

export default function Entwurf1Page() {
  return (
    <>
      <VariantBar current={1} />
      <Papier>
        <Header />
        <main id="hauptinhalt">
          <Hero />
          <Services />
          <Process />
          <FindUs />
          <CtaBand />
        </main>
        <Footer />
      </Papier>
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
