import {
  ArrowIcon,
  ClockIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "@/components/ui/Icons";
import { company, openingHours } from "@/lib/site";

// „So finden Sie uns" – zwei Karten: Standort mit Karten-Vorschau (öffnet den
// Kartendienst erst auf Klick, datenschutzfreundlich) und Öffnungszeiten/Kontakt.
export default function FindUs() {
  const mapsQuery = encodeURIComponent(
    `${company.fullName}, ${company.street}, ${company.zip} ${company.city}`
  );
  const mapsUrl = `https://www.openstreetmap.org/search?query=${mapsQuery}`;

  return (
    <section id="standort" className="scroll-mt-28 bg-paper py-20 md:py-28">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <span className="label justify-center">So finden Sie uns</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Persönlich vor Ort in {company.city}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Schauen Sie vorbei oder rufen Sie an – wir beraten Sie gern
            persönlich.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Standort + Karte */}
          <div className="overflow-hidden card">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-h-[16rem] flex-col justify-end overflow-hidden bg-accent-soft p-6"
              aria-label={`Standort ${company.street}, ${company.zip} ${company.city} in Karte öffnen`}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,48,135,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(0,48,135,0.10) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
              <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="relative flex h-4 w-4">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/50" />
                  <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-accent" />
                </span>
              </div>
              <div className="relative flex items-center justify-between rounded-xl bg-white/90 px-4 py-3 backdrop-blur">
                <span className="text-sm font-semibold text-ink">
                  {company.street}, {company.city}
                </span>
                <span className="link-arrow">
                  Route
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
            <div className="flex items-start gap-3 p-6">
              <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span className="text-[15px] text-ink">
                {company.street}
                <br />
                {company.zip} {company.city}
              </span>
            </div>
          </div>

          {/* Öffnungszeiten + Kontakt */}
          <div className="card p-6 sm:p-8">
            <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-label text-accent">
              <ClockIcon className="h-4 w-4" />
              Öffnungszeiten
            </h3>
            <dl className="mt-4 divide-y divide-line text-[15px]">
              {openingHours.map((row) => (
                <div key={row.days} className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-ink">{row.days}</dt>
                  <dd className={row.byAppointment ? "text-ink-muted" : "font-semibold text-ink"}>
                    {row.time}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row">
              <a href={`tel:${company.phoneHref}`} className="btn-primary">
                <PhoneIcon className="h-4 w-4" />
                {company.phoneDisplay}
              </a>
              <a href={`mailto:${company.email}`} className="btn-ghost">
                <MailIcon className="h-4 w-4" />
                E-Mail
              </a>
            </div>
            <p className="mt-3 text-xs text-ink-muted">Fax: {company.faxDisplay}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
