"use client";

import { useEffect, useState } from "react";
import Etikett from "@/components/ui/Etikett";
import { APRICOT, CREME, CREME_LEISE, DUNKEL, DUNKEL_KARTE, farben } from "@/lib/farben";
import { kundenstimmen } from "@/lib/site";

// „Was unsere Kunden sagen" – wie im Vorbild ein Karussell: immer eine
// Stimme groß, Pfeile links/rechts, Punkte darunter, Wechsel alle 7 Sekunden.
//
// ZURZEIT NUR PLATZHALTER (siehe `kundenstimmen` in site.ts). Jede Karte ist
// sichtbar als Platzhalter markiert, damit niemand sie für echt hält.
//
// Barrierefreiheit:
//   • Der automatische Wechsel lässt sich anhalten (Knopf „Pause"); er
//     pausiert auch, solange die Maus darüber liegt oder ein Knopf darin den
//     Fokus hat. Bei „Bewegung reduzieren" läuft er gar nicht erst.
//   • Alle Karten liegen übereinander im selben Rasterfeld. Dadurch ist der
//     Kasten immer so hoch wie die längste Stimme, und beim Wechsel springt
//     nichts darunter. Unsichtbare Karten sind für Screenreader ausgeblendet.
//   • Ohne JavaScript ist die erste Stimme zu sehen.
const TAKT = 7000;

export default function Kundenstimmen() {
  const [aktiv, setAktiv] = useState(0);
  const [laeuft, setLaeuft] = useState(true);
  const [gehalten, setGehalten] = useState(false);
  const anzahl = kundenstimmen.length;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setLaeuft(false);
  }, []);

  useEffect(() => {
    if (!laeuft || gehalten || anzahl < 2) return;
    const t = window.setInterval(() => setAktiv((a) => (a + 1) % anzahl), TAKT);
    return () => window.clearInterval(t);
  }, [laeuft, gehalten, anzahl]);

  const gehe = (n: number) => setAktiv((n + anzahl) % anzahl);

  const rundknopf =
    "flex h-12 w-12 items-center justify-center rounded-full text-[1.2rem] font-bold transition-transform duration-300 hover:-translate-y-0.5";

  return (
    <section
      className="abschnitt dunkel"
      style={{ backgroundColor: DUNKEL, color: CREME }}
      aria-labelledby="stimmen-titel"
    >
      <div className="seitenrand">
        <div data-reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Etikett dunkel>Stimmen, die uns freuen</Etikett>
            <h2 id="stimmen-titel" className="titel mt-6">
              Was unsere <span style={{ color: farben[0].ton }}>Kunden</span>
              <br />
              sagen
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => gehe(aktiv - 1)}
              className={rundknopf}
              style={{ backgroundColor: DUNKEL_KARTE }}
              aria-label="Vorherige Stimme"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              onClick={() => gehe(aktiv + 1)}
              className={rundknopf}
              style={{ backgroundColor: farben[0].ton, color: "#1e1814" }}
              aria-label="Nächste Stimme"
            >
              <span aria-hidden="true">→</span>
            </button>
            <button
              type="button"
              onClick={() => setLaeuft((l) => !l)}
              className="rounded-full px-4 py-3 text-[0.78rem] font-bold uppercase tracking-[0.08em] transition-colors"
              style={{ boxShadow: `inset 0 0 0 1.5px ${CREME_LEISE}66`, color: CREME_LEISE }}
              aria-pressed={!laeuft}
            >
              {laeuft ? "Pause" : "Abspielen"}
            </button>
          </div>
        </div>

        <div
          data-reveal
          className="mt-12 [--verz:120ms]"
          role="region"
          aria-roledescription="Karussell"
          aria-label="Kundenstimmen"
          onMouseEnter={() => setGehalten(true)}
          onMouseLeave={() => setGehalten(false)}
          onFocus={() => setGehalten(true)}
          onBlur={() => setGehalten(false)}
        >
          <div className="grid">
            {kundenstimmen.map((stimme, i) => {
              const ist = i === aktiv;
              const ton = farben[i % farben.length].ton;
              return (
                <figure
                  key={i}
                  role="group"
                  aria-roledescription="Folie"
                  aria-label={`${i + 1} von ${anzahl}`}
                  aria-hidden={!ist}
                  className={`relative overflow-hidden rounded-kachel p-7 transition-[opacity,transform] duration-700 [grid-area:1/1] sm:p-12 ${
                    ist ? "opacity-100" : "pointer-events-none translate-x-6 opacity-0"
                  }`}
                  style={{ backgroundColor: DUNKEL_KARTE }}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-25"
                    style={{ backgroundColor: ton }}
                  />
                  {stimme.platzhalter && (
                    <span
                      className="relative inline-block rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.1em]"
                      style={{ boxShadow: `inset 0 0 0 1.5px ${APRICOT}`, color: APRICOT }}
                    >
                      Platzhalter
                    </span>
                  )}
                  <span
                    aria-hidden="true"
                    className="relative mt-4 block text-[4.5rem] font-black leading-[0.6]"
                    style={{ color: farben[0].ton }}
                  >
                    „
                  </span>
                  <blockquote className="relative mt-5 max-w-[52rem] text-[clamp(1.2rem,2.4vw,1.75rem)] font-semibold leading-snug tracking-[-0.01em]">
                    {stimme.text}
                  </blockquote>
                  <figcaption className="relative mt-8 flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      className="h-12 w-12 shrink-0 rounded-full"
                      style={{ backgroundColor: ton }}
                    />
                    <span className="text-[0.95rem]">
                      <span className="block font-bold">{stimme.name}</span>
                      <span style={{ color: CREME_LEISE }}>{stimme.firma}</span>
                    </span>
                  </figcaption>
                </figure>
              );
            })}
          </div>

          {/* Punkte: zeigen, welche Stimme gerade dran ist, und springen hin. */}
          <div className="mt-6 flex justify-center gap-2">
            {kundenstimmen.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => gehe(i)}
                aria-label={`Stimme ${i + 1} zeigen`}
                aria-current={i === aktiv ? "true" : undefined}
                className="flex h-6 items-center"
              >
                <span
                  className={`block h-2.5 rounded-full transition-[width,background-color] duration-300 ${
                    i === aktiv ? "w-8" : "w-2.5"
                  }`}
                  style={{ backgroundColor: i === aktiv ? farben[0].ton : `${CREME_LEISE}66` }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
