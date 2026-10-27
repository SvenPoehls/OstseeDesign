import Etikett from "@/components/ui/Etikett";
import FragenAufklappen from "@/components/ui/FragenAufklappen";
import { LEISE, SCHRIFT_AUF, farben } from "@/lib/farben";
import { company, fragen, oeffnungszeitenProTag } from "@/lib/site";

// Häufige Fragen: links Etikett, Überschrift und der Hinweis aufs Telefon
// (bleibt beim Scrollen stehen), rechts nur drei Fragen – dafür große
// Kacheln mit Nummer.
//
// IMMER NUR EINE OFFEN: Die erste ist beim Laden aufgeklappt (macht neugierig).
// Öffnet man eine andere, schließt sich die vorige. Beides gleitet weich auf
// und zu (FragenAufklappen.tsx). Ohne Skript erledigt das der Browser selbst:
// Alle <details> tragen denselben `name` („fragen") und bilden so eine
// Gruppe, von der nur eine offen sein kann. Mit Tastatur und Screenreader
// bedienbar.
//
// Die Fragen und Antworten stehen in site.ts (`fragen`).
export default function Fragen() {
  return (
    <section className="abschnitt pt-0 sm:pt-0 lg:pt-0">
      <div className="seitenrand grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div data-reveal className="lg:sticky lg:top-32 lg:self-start">
          <Etikett>Gut zu wissen</Etikett>
          <h2 className="titel mt-6">Häufige Fragen</h2>
          <p className="mt-6 max-w-[26rem] leading-relaxed" style={{ color: LEISE }}>
            Ihre Frage ist nicht dabei? Rufen Sie einfach an:{" "}
            <a
              href={`tel:${company.phoneHref}`}
              className="whitespace-nowrap font-bold text-tinte underline decoration-2 underline-offset-4"
              style={{ textDecorationColor: farben[0].ton }}
            >
              {company.phoneDisplay}
            </a>
          </p>
        </div>

        <div data-reveal className="space-y-5 [--verz:120ms]">
          <FragenAufklappen />
          {fragen.map((f, i) => {
            const ton = farben[i % farben.length].ton;
            return (
              <details
                key={f.frage}
                name="fragen"
                open={i === 0}
                className="frage group relative overflow-hidden rounded-kachel bg-white/70 backdrop-blur"
              >
                {/* Farbleiste links, in der Farbe der Nummer */}
                <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5" style={{ backgroundColor: ton }} />
                <summary className="flex cursor-pointer items-center gap-5 rounded-kachel px-6 py-7 sm:gap-7 sm:px-10 sm:py-9">
                  <span
                    aria-hidden="true"
                    className="text-[2rem] font-black leading-none tracking-[-0.04em] text-tinte/80 sm:text-[2.6rem]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-[1.2rem] font-extrabold leading-snug tracking-[-0.015em] sm:text-[1.55rem]">
                    {f.frage}
                  </span>
                  <span
                    aria-hidden="true"
                    className="frage-zeichen flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[1.5rem] font-bold leading-none sm:h-12 sm:w-12"
                    style={{ backgroundColor: ton, color: SCHRIFT_AUF[i % farben.length] }}
                  >
                    +
                  </span>
                </summary>
                <p
                  className={`max-w-[44rem] px-6 text-[1.05rem] leading-relaxed sm:pl-[6.6rem] sm:pr-10 sm:text-[1.12rem] ${
                    f.erreichbarkeit ? "pb-5" : "pb-8 sm:pb-10"
                  }`}
                  style={{ color: LEISE }}
                >
                  {f.antwort}
                </p>
                {f.erreichbarkeit && <Erreichbarkeit />}
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Antwort auf „Wann und wie erreiche ich Sie?" – übersichtlich statt als
// langer Satz:
//   links   die Öffnungszeiten, je Wochentag eine Zeile, die Zeit rechts,
//           dazwischen eine gepunktete Linie (wie auf der bisherigen Website)
//   rechts  Telefon, E-Mail und Anschrift untereinander
// Auf dem Handy steht beides untereinander.
function Erreichbarkeit() {
  const wege = [
    { art: "Telefon", wert: company.phoneDisplay, href: `tel:${company.phoneHref}` },
    { art: "E-Mail", wert: company.email, href: `mailto:${company.email}` },
    { art: "Anschrift", wert: `${company.street}, ${company.zip} ${company.city}` },
  ];
  return (
    <div className="grid gap-8 px-6 pb-9 sm:pb-10 sm:pl-[6.6rem] sm:pr-10 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
      <div>
        <h3 className="text-[0.75rem] font-bold uppercase tracking-[0.14em]" style={{ color: LEISE }}>
          Öffnungszeiten
        </h3>
        <dl className="mt-3">
          {oeffnungszeitenProTag.map((z) => (
            <div key={z.tag} className="flex items-baseline gap-3 py-1.5 text-[1rem]">
              <dt className="shrink-0 font-semibold">{z.tag}</dt>
              <span aria-hidden="true" className="min-w-4 flex-1 translate-y-[-0.3em] border-b-2 border-dotted border-[#0f1b2d]/20" />
              <dd
                className={`shrink-0 whitespace-nowrap ${z.byAppointment ? "" : "font-extrabold"}`}
                style={z.byAppointment ? { color: LEISE } : undefined}
              >
                {z.time}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div>
        <h3 className="text-[0.75rem] font-bold uppercase tracking-[0.14em]" style={{ color: LEISE }}>
          Kontakt
        </h3>
        <ul className="mt-3 space-y-3">
          {wege.map((w) => (
            <li key={w.art}>
              <span className="block text-[0.8rem]" style={{ color: LEISE }}>
                {w.art}
              </span>
              {w.href ? (
                <a
                  href={w.href}
                  className="break-words text-[1rem] font-extrabold underline decoration-2 underline-offset-4"
                  style={{ textDecorationColor: farben[0].ton }}
                >
                  {w.wert}
                </a>
              ) : (
                <span className="text-[1rem] font-extrabold">{w.wert}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
