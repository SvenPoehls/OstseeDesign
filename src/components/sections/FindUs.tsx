import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/ui/Icons";
import { company, openingHours } from "@/lib/site";

// „Standort" – links die Kontaktdaten frei stehend (ohne Kachel), rechts die
// Öffnungszeiten als Kachel. Eine Karte gibt es hier bewusst nicht mehr.
export default function FindUs() {
  const contacts = [
    {
      icon: MailIcon,
      label: company.email,
      href: `mailto:${company.email}`,
    },
    {
      icon: PhoneIcon,
      label: company.phoneDisplay,
      href: `tel:${company.phoneHref}`,
      note: `Fax: ${company.faxDisplay}`,
    },
    {
      icon: PinIcon,
      label: `${company.street}, ${company.zip} ${company.city}`,
    },
  ];

  return (
    <section id="standort" className="bg-paper pb-20 pt-20 sm:pb-28 sm:pt-28">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip">Standort</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Persönlich vor Ort in {company.city}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-muted">
            Schauen Sie vorbei oder rufen Sie an – wir beraten Sie gern
            persönlich.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Kontaktdaten – frei stehend, ohne Rahmen. */}
          <div>
            <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink">
              Direkt erreichbar
            </h3>

            <ul className="mt-8 space-y-6">
              {contacts.map(({ icon: Icon, label, href, note }) => (
                <li key={label} className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-[17px] text-ink">
                    {href ? (
                      <a href={href} className="transition-colors hover:text-accent">
                        {label}
                      </a>
                    ) : (
                      label
                    )}
                    {note && (
                      <span className="mt-0.5 block text-sm text-ink-muted">{note}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Öffnungszeiten – bleibt als Kachel, Inhalt mittig. */}
          <div className="edge flex flex-col justify-center p-7 sm:p-9">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-label text-accent">
              <ClockIcon className="h-4 w-4" />
              Öffnungszeiten
            </h3>
            <dl className="mt-5 divide-y divide-line text-[15px]">
              {openingHours.map((row) => (
                <div key={row.days} className="flex items-center justify-between gap-4 py-4">
                  <dt className="text-ink">{row.days}</dt>
                  <dd className={row.byAppointment ? "text-ink-muted" : "font-bold text-ink"}>
                    {row.time}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
