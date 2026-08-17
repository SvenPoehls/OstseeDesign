import Link from "next/link";
import { ArrowIcon, CameraIcon, CheckIcon, ExternalIcon } from "@/components/ui/Icons";
import { services } from "@/lib/site";

// „Unsere Leistungen" – alle vier Bereiche nebeneinander, damit man sie auf
// einen Blick erfasst. Jede Kachel: schmale Bildfläche, Titel, drei Stichpunkte
// und ein Link.
const notes: Record<string, string> = {
  werbetechnik: "Fahrzeug mit frischer Beschriftung",
  textilveredelung: "Detail einer Stickerei",
  drucksachen: "Visitenkarten & Briefpapier",
  textilshop: "Veredelte Kleidung im Shop",
};

export default function Services() {
  return (
    <section id="leistungen" className="bg-paper pb-20 pt-16 sm:pb-28 sm:pt-24">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip">Unsere Leistungen</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Vier Wege, <span className="em">sichtbar</span> zu werden.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
            Beratung, Gestaltung, Fertigung und Montage – alles im eigenen Haus
            in Eckernförde.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const isExternal = Boolean(service.external);
            const href = service.external ?? "/#kontakt";
            return (
              <article key={service.id} className="edge edge-lift flex flex-col overflow-hidden">
                {/* Bildfläche – noch Platzhalter mit kurzer Bildregie-Notiz. */}
                <div className="relative flex h-24 items-center justify-center border-b-[1.5px] border-ink bg-surface px-4 text-center">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(135deg, rgba(0,48,135,0.06) 0 2px, transparent 2px 16px)",
                    }}
                  />
                  <span className="absolute left-3 top-3 rounded-full border-[1.5px] border-ink bg-paper px-2 py-0.5 text-[0.65rem] font-bold text-ink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="relative flex items-center gap-2 text-[0.7rem] text-ink-muted">
                    <CameraIcon className="h-4 w-4 shrink-0 text-ink/25" />
                    {notes[service.id] ?? service.title}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-extrabold tracking-tight text-ink">
                    {service.title}
                  </h3>

                  <ul className="mt-3 flex-1 space-y-1.5 text-sm leading-snug text-ink">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-pop" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-accent transition-colors hover:text-accent-dark"
                  >
                    {isExternal ? "Zum Textilshop" : "Anfrage stellen"}
                    {isExternal ? (
                      <ExternalIcon className="h-3.5 w-3.5" />
                    ) : (
                      <ArrowIcon className="h-3.5 w-3.5" />
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
