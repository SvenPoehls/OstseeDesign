import Link from "next/link";
import { ArrowIcon, CameraIcon, CheckIcon, ExternalIcon } from "@/components/ui/Icons";
import { services } from "@/lib/site";

// „Unsere Leistungen" – große Kacheln mit Bildfläche, Titel, Kurztext und den
// wichtigsten Punkten. Jede Kachel trägt Kontur und versetzten Schatten.
const notes: Record<string, string> = {
  werbetechnik: "Fahrzeug mit frischer Beschriftung, Halbprofil, Tageslicht",
  textilveredelung: "Bestickte Arbeitskleidung, Detailaufnahme der Stickerei",
  drucksachen: "Visitenkarten, Briefpapier & Stempel als Flatlay von oben",
  textilshop: "Veredelte Kleidung auf dem Ständer im Shop",
};

export default function Services() {
  return (
    <section id="leistungen" className="scroll-mt-32 bg-paper pb-20 sm:pb-28">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip">Unsere Leistungen</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Vier Wege, <span className="em">sichtbar</span> zu werden.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-muted">
            Beratung, Gestaltung, Fertigung und Montage – alles im eigenen Haus
            in Eckernförde.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service, i) => {
            const isExternal = Boolean(service.external);
            const href = service.external ?? "/#kontakt";
            return (
              <article key={service.id} className="edge edge-lift flex flex-col overflow-hidden">
                {/* Bildfläche – noch Platzhalter mit kurzer Bildregie-Notiz. */}
                <div className="relative flex aspect-[16/6] items-center justify-center border-b-[1.5px] border-ink bg-surface">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(135deg, rgba(0,48,135,0.06) 0 2px, transparent 2px 16px)",
                    }}
                  />
                  <span className="absolute left-4 top-4 rounded-full border-[1.5px] border-ink bg-paper px-2.5 py-0.5 text-[0.7rem] font-bold text-ink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative flex max-w-[20rem] items-center gap-2 px-6 text-center">
                    <CameraIcon className="h-5 w-5 shrink-0 text-ink/25" />
                    <span className="text-xs text-ink-muted">
                      {notes[service.id] ?? service.teaser}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-display text-xl font-extrabold tracking-tight text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{service.teaser}</p>

                  <ul className="mt-4 flex-1 space-y-1.5 text-sm text-ink">
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
                    className="btn-pill-light mt-5 self-start"
                  >
                    {isExternal ? "Zum Textilshop" : "Anfrage stellen"}
                    {isExternal ? (
                      <ExternalIcon className="h-4 w-4" />
                    ) : (
                      <ArrowIcon className="h-4 w-4" />
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
