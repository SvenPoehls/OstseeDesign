import { company, openingHours } from "@/lib/site";

// „Standort" – aufgebaut wie ein Datenblatt: links die Anschrift groß wie auf
// einem Schild, rechts die Erreichbarkeit und die Öffnungszeiten als Tabelle
// mit feinen Linien. Keine Karte, keine Kacheln, keine Symbole in Kästchen.
export default function FindUs() {
  const kontakt = [
    { label: "Telefon", value: company.phoneDisplay, href: `tel:${company.phoneHref}` },
    { label: "Fax", value: company.faxDisplay },
    { label: "E-Mail", value: company.email, href: `mailto:${company.email}` },
  ];

  return (
    <section id="standort" className="bg-paper pb-16 pt-20 sm:pb-24 sm:pt-28">
      <div className="wrap">
        <div className="grid12 border-t border-ink pt-4">
          <p className="col-span-4 text-[0.72rem] font-semibold uppercase tracking-label text-mark lg:col-span-1">
            03
          </p>
          <h2 className="display col-span-4 mt-2 text-[clamp(2.1rem,6.5vw,3.6rem)] lg:col-span-6 lg:mt-0">
            Sie finden uns
          </h2>
          <p className="col-span-4 mt-5 text-ink-soft lg:col-span-4 lg:col-start-9 lg:mt-0">
            Die Werkstatt liegt im Gewerbegebiet am Rosseer Weg. Rufen Sie am
            besten kurz an, bevor Sie herkommen – dann hat auch jemand Zeit für
            Sie.
          </p>
        </div>

        <div className="grid12 mt-12 gap-y-12 sm:mt-16">
          {/* Anschrift, groß gesetzt wie ein Schild an der Wand. */}
          <div className="col-span-4 lg:col-span-6">
            <p className="text-[0.72rem] uppercase tracking-label text-mark">
              Werkstatt &amp; Laden
            </p>
            {/* Anschrift wie ein Schild: zweizeilig, die Stadt etwas leiser. */}
            <p className="display mt-4 text-[clamp(1.9rem,5.4vw,3.6rem)]">
              {company.street}
              <br />
              <span className="text-ink-soft">
                {company.zip} {company.city}
              </span>
            </p>
            <p className="mt-6 max-w-reading text-ink-soft">
              Parken direkt vor dem Haus. Größere Fahrzeuge fahren auf den Hof –
              dort wird auch beschriftet.
            </p>
          </div>

          {/* Erreichbarkeit und Zeiten als Tabelle. */}
          <div className="col-span-4 lg:col-span-5 lg:col-start-8">
            <dl className="border-t border-ink">
              {kontakt.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-4 border-b border-rule py-3.5"
                >
                  <dt className="text-[0.72rem] uppercase tracking-label text-ink-soft">
                    {row.label}
                  </dt>
                  <dd className="display-lite text-[1.15rem]">
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

            <p className="mt-10 text-[0.72rem] uppercase tracking-label text-mark">
              Öffnungszeiten
            </p>
            <dl className="mt-3 border-t border-ink">
              {openingHours.map((row) => (
                <div
                  key={row.days}
                  className="flex items-baseline justify-between gap-4 border-b border-rule py-3.5"
                >
                  <dt className="text-[0.95rem]">{row.days}</dt>
                  {/* whitespace-nowrap: sonst rutscht das „Uhr" in eine
                      eigene Zeile unter die Uhrzeit. */}
                  <dd
                    className={`whitespace-nowrap text-[0.95rem] ${
                      row.byAppointment ? "text-ink-soft" : "font-semibold"
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
