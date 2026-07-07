import Link from "next/link";
import { ArrowIcon, CheckIcon, ExternalIcon } from "@/components/ui/Icons";
import { serviceIcons } from "@/components/ui/Icons";
import { services } from "@/lib/site";

// Leistungsüberblick: 3–4 Kacheln. Jede Kachel nennt die Kern-Anwendungen.
// Der Textilshop verweist nach extern; die übrigen führen (später) auf
// eigene Unterseiten – aktuell auf den Kontaktbereich.
export default function Services() {
  return (
    <section id="leistungen" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="container-site">
        <div className="max-w-2xl">
          <span className="eyebrow">Leistungen</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-petrol sm:text-4xl">
            Alles für Ihren Auftritt – aus einer Hand
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Von der Idee bis zum fertigen Produkt: Wir beraten, gestalten und
            fertigen. So sparen Sie Wege, Abstimmungen und Zeit.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];
            const isExternal = Boolean(service.external);
            const href = service.external ?? "/#kontakt";
            return (
              <article
                key={service.id}
                className="group flex flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-petrol-soft text-petrol transition-colors group-hover:bg-petrol group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {service.teaser}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-ink">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-strong" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-strong"
                >
                  {isExternal ? "Zum Shop" : "Mehr erfahren"}
                  {isExternal ? (
                    <ExternalIcon className="h-4 w-4" />
                  ) : (
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  )}
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
