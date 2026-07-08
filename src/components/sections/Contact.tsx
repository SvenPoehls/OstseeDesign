import Divider from "@/components/ui/Divider";
import { ArrowIcon, ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/ui/Icons";
import { company, openingHours } from "@/lib/site";

// Prominenter Kontaktbereich (#kontakt): Telefon als klickbarer tel:-Link,
// E-Mail, Adresse, Öffnungszeiten und eine datenschutzfreundliche
// Karten-Vorschau (öffnet den Kartendienst erst auf Klick).
export default function Contact() {
  const mapsQuery = encodeURIComponent(
    `${company.fullName}, ${company.street}, ${company.zip} ${company.city}`
  );
  const mapsUrl = `https://www.openstreetmap.org/search?query=${mapsQuery}`;

  return (
    <section id="kontakt" className="scroll-mt-24">
      <div className="pb-10 pt-16 sm:pt-24">
        <Divider label="Kontakt" />
      </div>

      <div className="container-site pb-20 sm:pb-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          {/* Kontaktdaten + Öffnungszeiten */}
          <div>
            <h2 className="max-w-[14ch] font-display text-4xl font-medium leading-[1.15] text-ink sm:text-5xl">
              Sprechen Sie uns <span className="em-italic">an</span>.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-muted">
              Am schnellsten geht es telefonisch – oder Sie schauen direkt bei
              uns in {company.city} vorbei.
            </p>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <ul className="space-y-4 text-[15px]">
                <li className="flex items-start gap-3">
                  <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                  <span className="text-ink">
                    {company.street}
                    <br />
                    {company.zip} {company.city}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                  <span>
                    <a href={`tel:${company.phoneHref}`} className="font-semibold text-ink hover:text-orange">
                      {company.phoneDisplay}
                    </a>
                    <br />
                    <span className="text-ink-muted">Fax: {company.faxDisplay}</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                  <a href={`mailto:${company.email}`} className="font-semibold text-ink hover:text-orange">
                    {company.email}
                  </a>
                </li>
              </ul>

              <div>
                <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-label text-ink">
                  <ClockIcon className="h-4 w-4" />
                  Öffnungszeiten
                </h3>
                <dl className="mt-4 space-y-3 text-[15px]">
                  {openingHours.map((row) => (
                    <div key={row.days}>
                      <dt className="text-ink">{row.days}</dt>
                      <dd className={row.byAppointment ? "text-ink-muted" : "font-semibold text-ink"}>
                        {row.time}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* Karten-Vorschau */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex min-h-[20rem] flex-col justify-end overflow-hidden rounded-2xl border border-line bg-cream p-6"
            aria-label={`Standort ${company.street}, ${company.zip} ${company.city} in Karte öffnen`}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(44,44,44,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(44,44,44,0.06) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
            <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="relative flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange/50" />
                <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-paper bg-orange" />
              </span>
            </div>
            <div className="relative flex items-center justify-between rounded-xl bg-paper/90 px-4 py-3 backdrop-blur">
              <span className="text-sm font-semibold text-ink">
                {company.street}, {company.city}
              </span>
              <span className="link-arrow">
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
