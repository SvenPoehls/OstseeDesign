import Etikett from "@/components/ui/Etikett";
import { LEISE, SCHRIFT_AUF, farben } from "@/lib/farben";
import { company, fragen } from "@/lib/site";

// Häufige Fragen: links Etikett, Überschrift und der Hinweis aufs Telefon
// (bleibt beim Scrollen stehen), rechts nur drei Fragen – dafür große
// Kacheln mit Nummer.
//
// IMMER NUR EINE OFFEN: Die erste ist beim Laden aufgeklappt (macht neugierig).
// Öffnet man eine andere, schließt sich die vorige. Das erledigt der Browser
// selbst: Alle <details> tragen denselben `name` („fragen") und bilden so
// eine Gruppe, von der nur eine offen sein kann. Kein Skript nötig, mit
// Tastatur und Screenreader bedienbar.
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
                  className="max-w-[44rem] px-6 pb-8 text-[1.05rem] leading-relaxed sm:pb-10 sm:pl-[6.6rem] sm:pr-10 sm:text-[1.12rem]"
                  style={{ color: LEISE }}
                >
                  {f.antwort}
                </p>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
