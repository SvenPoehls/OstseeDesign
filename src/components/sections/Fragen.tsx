import Etikett from "@/components/ui/Etikett";
import { LEISE, farben } from "@/lib/farben";
import { company, fragen, openingHours, textilShopUrl } from "@/lib/site";

// Häufige Fragen, aufgebaut wie im Vorbild („FAQ"): links Etikett,
// Überschrift und der Hinweis aufs Telefon (bleibt beim Scrollen stehen),
// rechts die Fragen zum Aufklappen.
//
// Die Fragen und Antworten stehen in site.ts (`fragen`). Aufklappen läuft
// über <details> – ohne Skript, mit Tastatur und Screenreader.
export default function Fragen() {
  return (
    <section className="abschnitt pt-0 sm:pt-0 lg:pt-0">
      <div className="seitenrand grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
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

        <div data-reveal className="space-y-3 [--verz:120ms]">
          {fragen.map((f, i) => (
            <details key={f.frage} className="frage group rounded-kachel bg-white/65 backdrop-blur">
              <summary className="flex cursor-pointer items-center justify-between gap-6 rounded-kachel px-5 py-5 text-[1.05rem] font-extrabold tracking-[-0.01em] sm:px-7">
                {f.frage}
                <span
                  aria-hidden="true"
                  className="frage-zeichen flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[1.3rem] font-bold leading-none"
                  style={{
                    backgroundColor: farben[i % farben.length].ton,
                    color: i % farben.length === 1 ? "#ffffff" : "#17161a",
                  }}
                >
                  +
                </span>
              </summary>
              <div className="px-5 pb-6 text-[0.98rem] leading-relaxed sm:px-7" style={{ color: LEISE }}>
                <p className="max-w-[40rem]">{f.antwort}</p>
                {f.oeffnungszeiten && (
                  <dl className="mt-4 max-w-[28rem] space-y-1.5">
                    {openingHours.map((z) => (
                      <div key={z.days} className="flex justify-between gap-4">
                        <dt>{z.days}</dt>
                        <dd className={z.byAppointment ? "" : "font-bold text-tinte"}>{z.time}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                {f.frage.includes("online") && (
                  <a
                    href={textilShopUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block font-bold text-tinte underline decoration-2 underline-offset-4"
                    style={{ textDecorationColor: farben[1].ton }}
                  >
                    Zum Textilshop ↗
                  </a>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
