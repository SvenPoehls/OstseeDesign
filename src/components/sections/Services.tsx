import Link from "next/link";
import Placeholder from "@/components/ui/Placeholder";
import { ArrowIcon, ExternalIcon } from "@/components/ui/Icons";
import { services } from "@/lib/site";

// Leistungsüberblick als Karten mit Bild, Titel, Kurztext und Link –
// Aufbau analog zu den Service-Karten der Vorlage.
const notes: Record<string, string> = {
  werbetechnik: "Fahrzeug mit frischer Beschriftung, Halbprofil, Tageslicht.",
  textilveredelung: "Bestickte Arbeitskleidung, Detailaufnahme der Stickerei.",
  drucksachen: "Visitenkarten, Briefpapier & Stempel als Flatlay von oben.",
  textilshop: "Übersicht Textilsortiment / veredelte Kleidung auf Ständer.",
};

export default function Services() {
  return (
    <section id="leistungen" className="scroll-mt-28 bg-paper py-20 md:py-28">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <span className="label justify-center">Unsere Leistungen</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Alles für Ihren Auftritt – aus einer Hand
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Von der ersten Idee bis zum montierten Ergebnis: Wir beraten,
            gestalten und fertigen im eigenen Haus.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const isExternal = Boolean(service.external);
            const href = service.external ?? "/#kontakt";
            return (
              <article key={service.id} className="group flex flex-col overflow-hidden card transition-shadow hover:shadow-soft-lg">
                <Placeholder ratio="aspect-[16/11]" note={notes[service.id] ?? service.teaser} frame="border-b border-line" />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold text-ink">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{service.teaser}</p>
                  <Link
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="link-arrow mt-5"
                  >
                    {isExternal ? "Zum Shop" : "Mehr erfahren"}
                    {isExternal ? (
                      <ExternalIcon className="h-4 w-4" />
                    ) : (
                      <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    )}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
