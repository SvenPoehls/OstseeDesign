import {
  ArrowIcon,
  ClockIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "@/components/ui/Icons";
import { company, openingHours } from "@/lib/site";

// Prominenter Kontaktbereich (Anker #kontakt):
//   • Telefon als klickbarer tel:-Link (wichtigste Handlung)
//   • E-Mail und Adresse
//   • Öffnungszeiten übersichtlich
//   • Karten-Vorschau, die datenschutzfreundlich erst auf Klick zu einem
//     externen Kartendienst führt (kein Drittanbieter-Embed beim Laden).
export default function Contact() {
  // Adresse für den externen Kartendienst URL-sicher kodieren.
  const mapsQuery = encodeURIComponent(
    `${company.fullName}, ${company.street}, ${company.zip} ${company.city}`
  );
  const mapsUrl = `https://www.openstreetmap.org/search?query=${mapsQuery}`;

  return (
    <section id="kontakt" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">Kontakt</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-petrol sm:text-4xl">
            Sprechen Sie uns an
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Am schnellsten geht es telefonisch – oder Sie schauen direkt bei uns
            in {company.city} vorbei.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Kontaktdaten + Öffnungszeiten */}
          <div className="rounded-2xl border border-line bg-sand p-6 shadow-card sm:p-8">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-petrol">
                  So erreichen Sie uns
                </h3>
                <ul className="mt-4 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <ContactIcon>
                      <PinIcon className="h-5 w-5" />
                    </ContactIcon>
                    <span className="text-ink">
                      {company.street}
                      <br />
                      {company.zip} {company.city}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ContactIcon>
                      <PhoneIcon className="h-5 w-5" />
                    </ContactIcon>
                    <span>
                      <a
                        href={`tel:${company.phoneHref}`}
                        className="font-semibold text-ink hover:text-accent-strong"
                      >
                        {company.phoneDisplay}
                      </a>
                      <br />
                      <span className="text-ink-muted">Fax: {company.faxDisplay}</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ContactIcon>
                      <MailIcon className="h-5 w-5" />
                    </ContactIcon>
                    <a
                      href={`mailto:${company.email}`}
                      className="font-semibold text-ink hover:text-accent-strong"
                    >
                      {company.email}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-petrol">
                  <ClockIcon className="h-4 w-4" />
                  Öffnungszeiten
                </h3>
                <dl className="mt-4 space-y-3 text-sm">
                  {openingHours.map((row) => (
                    <div key={row.days} className="flex flex-col">
                      <dt className="font-medium text-ink">{row.days}</dt>
                      <dd
                        className={
                          row.byAppointment
                            ? "text-ink-muted"
                            : "font-semibold text-ink"
                        }
                      >
                        {row.time}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row">
              <a href={`tel:${company.phoneHref}`} className="btn-accent">
                <PhoneIcon className="h-5 w-5" />
                Jetzt anrufen
              </a>
              <a href={`mailto:${company.email}`} className="btn-secondary">
                <MailIcon className="h-5 w-5" />
                E-Mail schreiben
              </a>
            </div>
          </div>

          {/* Karten-Vorschau (öffnet Kartendienst extern – DSGVO-schonend) */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex min-h-[18rem] flex-col justify-end overflow-hidden rounded-2xl border border-line bg-petrol-soft p-6 shadow-card"
            aria-label={`Standort ${company.street}, ${company.zip} ${company.city} in Karte öffnen`}
          >
            {/* Stilisierte „Karte" aus CSS – kein externes Embed beim Laden. */}
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(14,75,90,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(14,75,90,0.08) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <span className="relative flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-strong/50" />
                <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-accent-strong shadow" />
              </span>
            </div>
            <div className="relative flex items-center justify-between rounded-xl bg-white/90 px-4 py-3 backdrop-blur">
              <span className="text-sm font-semibold text-petrol">
                {company.street}, {company.city}
              </span>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent-strong">
                Route
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

// Kleiner runder Icon-Rahmen für die Kontakt-Zeilen.
function ContactIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-petrol shadow-sm">
      {children}
    </span>
  );
}
