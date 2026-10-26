import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LeistungHero from "@/components/sections/LeistungHero";
import LeistungDetails from "@/components/sections/LeistungDetails";
import WeitereLeistungen from "@/components/sections/WeitereLeistungen";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import { company, services, unterseiten } from "@/lib/site";

// UNTERSEITE EINER LEISTUNG – eine Vorlage für alle drei
// (/textilveredelung, /werbetechnik, /drucksachen).
//
// Welche Seiten es gibt, ergibt sich aus `services` in src/lib/site.ts: Jede
// Leistung ohne externen Link bekommt eine Unterseite unter ihrer `id`.
// Neue Leistung dort eintragen → Seite, Menüpunkt und Karte entstehen von
// selbst. Texte, Punkte und Foto-Motive kommen ebenfalls von dort.
//
// Aufbau: Kopfbereich in der Leistungsfarbe · Bilder · „Das gehört dazu" ·
// weitere Leistungen · Ablauf (derselbe wie auf der Startseite) · Kontakt.

// Der Export ist statisch: Es dürfen nur die Adressen aufgerufen werden, die
// beim Bauen erzeugt wurden. Alles andere ergibt die 404-Seite.
export const dynamicParams = false;

export function generateStaticParams() {
  return unterseiten.map((s) => ({ leistung: s.id }));
}

type Props = { params: Promise<{ leistung: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { leistung } = await params;
  const service = unterseiten.find((s) => s.id === leistung);
  if (!service) return {};

  // `canonical` muss je Seite gesetzt werden – der Wert aus layout.tsx („/")
  // würde sonst jede Unterseite als Kopie der Startseite ausweisen.
  const adresse = `/${service.id}/`;
  return {
    title: service.title,
    description: service.teaser,
    alternates: { canonical: adresse },
    openGraph: {
      type: "website",
      locale: "de_DE",
      url: adresse,
      siteName: company.fullName,
      title: service.title,
      description: service.teaser,
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.teaser,
    },
  };
}

export default async function LeistungPage({ params }: Props) {
  const { leistung } = await params;
  const service = unterseiten.find((s) => s.id === leistung);
  if (!service) notFound();

  // Platz in `services` = Platz in `farben`: So trägt die Seite dieselbe Farbe
  // wie ihre Karte auf der Startseite und ihre Marke im Menü.
  const index = services.findIndex((s) => s.id === service.id);

  return (
    <>
      <main
        id="hauptinhalt"
        className="mx-auto w-full max-w-[1200px] px-4 sm:px-6"
      >
        <LeistungHero service={service} index={index} />
        <LeistungDetails service={service} index={index} />
        <WeitereLeistungen aktuell={service.id} />
        <Process />
        <Contact />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.teaser,
            areaServed: company.region,
            provider: {
              "@type": "LocalBusiness",
              name: company.fullName,
              telephone: company.phoneHref,
              url: "https://www.ostseedesign.de",
            },
          }),
        }}
      />
    </>
  );
}
