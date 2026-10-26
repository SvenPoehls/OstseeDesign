import { company, openingHours } from "@/lib/site";

// „Standort" – aufgebaut wie ein Datenblatt auf dem Entwurf: links die
// Anschrift groß mit der Hand geschrieben, wie der Schriftzug, der später
// ans Haus kommt; rechts die Erreichbarkeit und die Öffnungszeiten als
// Tabelle mit gezogenen Trennstrichen. Keine Karte, keine Kacheln.
export default function FindUs() {
  const kontakt = [
    { label: "Telefon", value: company.phoneDisplay, href: `tel:${company.phoneHref}` },
    { label: "Fax", value: company.faxDisplay },
    { label: "E-Mail", value: company.email, href: `mailto:${company.email}` },
  ];

  return (
    <section id="standort" className="pb-16 pt-20 sm:pb-24 sm:pt-28">
      <div className="wrap">
        <div className="grid12 linie-hand-oben linie-hand-stark pt-5">
          <p className="etikett etikett-rot col-span-4 lg:col-span-1">03</p>
          <h2 className="hand col-span-4 mt-2 text-[clamp(2.5rem,7.5vw,4.4rem)] lg:col-span-6 lg:mt-0">
            Sie finden uns
          </h2>
          <p className="col-span-4 mt-5 text-ink-soft lg:col-span-4 lg:col-start-9 lg:mt-0">
            Die Werkstatt liegt im Gewerbegebiet am Rosseer Weg. Rufen Sie am
            besten kurz an, bevor Sie herkommen – dann hat auch jemand Zeit für
            Sie.
          </p>
        </div>

        <div className="grid12 mt-12 gap-y-12 sm:mt-16">
          {/* Anschrift, groß geschrieben wie der Entwurf für ein Schild. */}
          <div className="col-span-4 lg:col-span-6">
            <p className="etikett etikett-rot">Werkstatt &amp; Laden</p>
            <p className="hand mt-5 text-[clamp(2.3rem,6.4vw,4.2rem)] leading-[1.08]">
              {company.street}
              <br />
              <span className="text-ink-soft">
                {company.zip} {company.city}
              </span>
            </p>
            <p className="mt-7 max-w-reading text-ink-soft">
              Parken direkt vor dem Haus. Größere Fahrzeuge fahren auf den Hof –
              dort wird auch beschriftet.
            </p>
          </div>

          {/* Erreichbarkeit und Zeiten als Tabelle. */}
          <div className="col-span-4 lg:col-span-5 lg:col-start-8">
            <dl className="linie-hand-oben pt-1">
              {kontakt.map((row) => (
                <div
                  key={row.label}
                  className="linie-hand linie-hand-fein flex items-baseline justify-between gap-4 py-3.5"
                >
                  <dt className="etikett">{row.label}</dt>
                  <dd className="hand text-[1.35rem]">
                    {row.href ? (
                      <a href={row.href} className="ul-link">
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="etikett etikett-rot mt-10">Öffnungszeiten</p>
            <dl className="linie-hand-oben mt-3 pt-1">
              {openingHours.map((row) => (
                <div
                  key={row.days}
                  className="linie-hand linie-hand-fein flex items-baseline justify-between gap-4 py-3.5"
                >
                  <dt className="text-[0.95rem]">{row.days}</dt>
                  {/* whitespace-nowrap: sonst rutscht das „Uhr" in eine
                      eigene Zeile unter die Uhrzeit. */}
                  <dd
                    className={`hand whitespace-nowrap text-[1.25rem] ${
                      row.byAppointment ? "text-ink-soft" : ""
                    }`}
                  >
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
