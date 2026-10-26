import type { CSSProperties } from "react";
import Etikett from "@/components/ui/Etikett";
import { FLAECHE, KNOPF, LEISE, SCHRIFT_AUF, farben } from "@/lib/farben";
import { processSteps } from "@/lib/site";

// Ablauf als Faden mit farbigen Punkten. Bleibt, wie er war (so gewünscht);
// nur Etikett, Überschrift und der Knopf darunter folgen dem neuen Aufbau.
//
// BEWEGUNG: Wenn man hierher scrollt, zeichnet sich der Faden von links nach
// rechts, die Nummernkreise poppen nacheinander auf und die Karten darunter
// schieben sich hinterher herein. Alles gestaffelt – Schritt 1 zuerst.
export default function Process() {
  return (
    <section id="ablauf" className="abschnitt scroll-mt-28">
      <div className="seitenrand">
        <div data-reveal className="max-w-[44rem]">
          <Etikett>Ablauf</Etikett>
          <h2 className="titel mt-6">
            Vom ersten Anruf bis zur{" "}
            <span className="markiert" style={{ "--ton": `${farben[3].ton}80` } as CSSProperties}>
              fertigen Arbeit
            </span>
          </h2>
        </div>

        <ol className="relative mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Der Faden, der die Punkte verbindet. */}
          <span
            aria-hidden="true"
            data-reveal
            data-art="faden"
            className="absolute left-0 right-0 top-[1.4rem] hidden h-[3px] rounded-full lg:block"
            style={{
              background: `linear-gradient(to right, ${farben[0].ton}, ${farben[1].ton}, ${farben[2].ton}, ${farben[3].ton})`,
              opacity: 0.35,
            }}
          />
          {processSteps.map((step, i) => (
            <li
              key={step.id}
              data-reveal
              className="relative"
              style={{ "--verz": `${i * 160}ms` } as CSSProperties}
            >
              <span
                data-reveal
                data-art="pop"
                className="flex h-12 w-12 items-center justify-center rounded-full text-[1.25rem] font-extrabold"
                style={
                  {
                    backgroundColor: farben[i].ton,
                    color: SCHRIFT_AUF[i],
                    "--verz": `${i * 160 + 250}ms`,
                  } as CSSProperties
                }
              >
                {i + 1}
              </span>
              <div
                className="mt-4 rounded-kachel p-6"
                style={{ backgroundColor: FLAECHE }}
              >
                <h3 className="text-[1.15rem] font-extrabold tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p
                  className="mt-3 text-[0.95rem] leading-relaxed"
                  style={{ color: LEISE }}
                >
                  {step.body}
                </p>
                <ul
                  className="mt-4 space-y-1.5 text-[0.88rem]"
                  style={{ color: LEISE }}
                >
                  {step.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span aria-hidden="true" style={{ color: farben[i].ton }}>
                        •
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div data-reveal className="mt-12 flex justify-center">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-[0.92rem] font-bold uppercase tracking-[0.04em] text-white transition-transform duration-300 hover:-translate-y-0.5"
            style={{ backgroundColor: KNOPF }}
          >
            <span aria-hidden="true">→</span> Projekt besprechen
          </a>
        </div>
      </div>
    </section>
  );
}
