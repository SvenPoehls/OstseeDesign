import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MotivFoto, Welle } from "@/components/ui/Elemente";
import Blasen from "@/components/ui/Blasen";
import Karussell from "@/components/ui/Karussell";
import Process from "@/components/sections/Process";
import Kontakt from "@/components/sections/Kontakt";
import { company, leistungsLink, services, unterseiten } from "@/lib/site";

// UNTERSEITE EINER LEISTUNG – eine Vorlage für alle drei
// (/werbetechnik, /textilveredelung, /drucksachen).
//
// Welche Seiten es gibt, ergibt sich aus `services` in src/lib/site.ts: Jede
// Leistung ohne externen Link bekommt eine Unterseite unter ihrer `id`.
//
// Aufbau: Kopf unter Wasser (tiefes Blau) · „Das gehört dazu" mit Text ·
// Fotos (Platzhalter) · weitere Leistungen · Ablauf · Kontakt.

// Statischer Export: Es dürfen nur die beim Bauen erzeugten Adressen aufgerufen werden.
export const dynamicParams = false;

export function generateStaticParams() {
  return unterseiten.map((s) => ({ leistung: s.id }));
}

type Props = { params: Promise<{ leistung: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { leistung } = await params;
  const service = unterseiten.find((s) => s.id === leistung);
  if (!service) return {};

  // `canonical` je Seite setzen, sonst würde jede Unterseite als Kopie der Startseite gelten.
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
    twitter: { card: "summary_large_image", title: service.title, description: service.teaser },
  };
}

export default async function LeistungPage({ params }: Props) {
  const { leistung } = await params;
  const service = unterseiten.find((s) => s.id === leistung);
  if (!service) notFound();

  const weitere = services.filter((s) => s.id !== service.id);

  return (
    <>
      <main id="hauptinhalt">
        <section className="deep" data-edit-id="seite-kopf" data-bewegung aria-labelledby="seite-titel">
          <Blasen />
          <div className="wrap kopf">
            <Link className="zurueck" href="/">← Zur Startseite</Link>
            <h1 id="seite-titel" data-edit-id="seite-title">{service.title}</h1>
            {service.motto && <p className="motto" data-edit-id="seite-motto">{service.motto}</p>}
            <p className="lead" data-edit-id="seite-teaser">{service.teaser}</p>
            <div className="aktionen">
              <Link className="btn primary" href="/#kontakt">Projekt besprechen</Link>
              <a className="btn" href={`tel:${company.phoneHref}`}>{company.phoneDisplay}</a>
            </div>
          </div>
        </section>
        <Welle bg="var(--color-deep)" fill="var(--color-bg)" />

        <section className="section" data-edit-id="seite-inhalt">
          <div className="wrap zweispaltig">
            <div>
              <h2 className="h3-gross">Das gehört dazu</h2>
              <ul className="punkte" data-edit-id="seite-punkte">
                {service.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            {service.beschreibung && (
              <div className="text" data-edit-id="seite-text">
                <h2 className="h2">{service.beschreibung.titel}</h2>
                <div style={{ marginTop: 24 }}>
                  {service.beschreibung.absaetze.map((a) => (
                    <p key={a}>{a}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="section surface" data-edit-id="seite-fotos" aria-label="Fotos">
          <div className="wrap">
            <Karussell label={`Fotos zu ${service.title}`}>
              {service.bilder.map((b, i) => (
                <figure key={b} data-edit-id={`seite-foto-${i + 1}`}>
                  <MotivFoto motiv={b} />
                  <figcaption>Platzhalter: {b}</figcaption>
                </figure>
              ))}
            </Karussell>
          </div>
        </section>

        <section className="section" data-edit-id="seite-weitere" aria-labelledby="weitere-titel">
          <div className="wrap">
            <h2 className="h2" id="weitere-titel">Weitere Leistungen</h2>
            <div className="weitere">
              {weitere.map((s) =>
                s.external ? (
                  <a key={s.id} className="btn" href={leistungsLink(s)} target="_blank" rel="noopener noreferrer">
                    {s.title}&nbsp;↗
                  </a>
                ) : (
                  <Link key={s.id} className="btn" href={leistungsLink(s)}>
                    {s.title}
                  </Link>
                )
              )}
            </div>
          </div>
        </section>

        <Process />
        <Kontakt />
      </main>
    </>
  );
}
