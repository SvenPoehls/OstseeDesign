"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { LEISE, SCHRIFT_AUF, farben } from "@/lib/farben";
import { processSteps } from "@/lib/site";

// Ablauf auf dem Handy: die vier Schritte als Stapel Karteikarten, die sich
// BEIM SCROLLEN von selbst wegwischen – man muss nichts antippen.
//
// So läuft es ab: Kommt der Stapel ins Bild, bleibt er in der Mitte des
// Bildschirms stehen („sticky"; auf kleinen Handys knapp unter der Kopfzeile). Scrollt man weiter, fliegt die oberste Karte
// Stück für Stück nach links weg, und die nächste rückt nach vorn. Nach dem
// letzten Schritt löst sich der Stapel und die Seite scrollt normal weiter.
// Scrollt man zurück, kommen die Karten in umgekehrter Reihenfolge wieder.
// Die Punkte darunter zeigen, bei welchem Schritt man ist.
//
// Auf größeren Bildschirmen zeigt Process.tsx stattdessen alle vier Karten
// nebeneinander; dieser Stapel ist dort ausgeblendet.
//
// TECHNIK:
//   • Der Rahmen ist um `STRECKE` Bildschirmhöhen je Kartenwechsel höher als
//     der Stapel. Solange man durch diese Strecke scrollt, steht der Stapel
//     still, und aus der Scroll-Position wird `stand` berechnet: 0 = Schritt 1
//     oben, 1 = Schritt 2 oben, … – auch Zwischenwerte, damit die Karte dem
//     Finger stufenlos folgt.
//   • Alle Karten liegen im selben Rasterfeld übereinander – der Stapel ist
//     so hoch wie die längste Karte.
//   • Die vordere Karte steht in Ruhe gerade (nicht gedreht), damit die
//     Schrift scharf bleibt; nur beim Wegfliegen neigt sie sich.
//   • Wer „Bewegung reduzieren" eingestellt hat, sieht die vier Karten
//     einfach untereinander.
//   • Screenreader lesen die vier Schritte als normale Liste vor.
const STRECKE = 55; // Scrollweg je Kartenwechsel, in Prozent der Bildschirmhöhe
const OBEN = 96; // Mindestabstand des stehenden Stapels vom oberen Rand (unter der Kopfzeile), px
const SICHTBAR = 3; // so viele Karten sind im Stapel zu sehen

export default function SchritteStapel() {
  const anzahl = processSteps.length;
  const [stand, setStand] = useState(0);
  const [ruhig, setRuhig] = useState(false);
  const rahmen = useRef<HTMLDivElement>(null);
  const strecke = useRef<HTMLDivElement>(null);
  const stapel = useRef<HTMLDivElement>(null);
  const [hoehe, setHoehe] = useState(0); // Höhe des Stapels, für die Mitte

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRuhig(true);
      return;
    }
    let bild = 0;
    const messen = () => {
      bild = 0;
      const r = rahmen.current?.getBoundingClientRect();
      const weg = strecke.current?.offsetHeight ?? 0;
      const st = stapel.current;
      if (!r || !weg || !st) return;
      setHoehe(st.offsetHeight);
      const oben = parseFloat(getComputedStyle(st).top) || OBEN;
      const anteil = Math.min(1, Math.max(0, (oben - r.top) / weg));
      setStand(anteil * (anzahl - 1));
    };
    const planen = () => {
      if (!bild) bild = window.requestAnimationFrame(messen);
    };
    messen();
    window.addEventListener("scroll", planen, { passive: true });
    window.addEventListener("resize", planen);
    return () => {
      window.removeEventListener("scroll", planen);
      window.removeEventListener("resize", planen);
      window.cancelAnimationFrame(bild);
    };
  }, [anzahl]);

  const aktiv = Math.min(anzahl - 1, Math.round(stand));

  return (
    <div ref={rahmen}>
      <div
        ref={stapel}
        className={ruhig ? "" : "sticky"}
        // mittig in der kleinsten Bildschirmhöhe (svh: ändert sich nicht, wenn
        // die Adressleiste des Handys ein- und ausfährt), mindestens unter der Kopfzeile
        style={{ top: hoehe ? `max(${OBEN}px, calc((100svh - ${hoehe}px) / 2 + 2rem))` : OBEN }}
      >
        <ol className={ruhig ? "space-y-5" : "grid pb-8"} aria-label="Ablauf in vier Schritten">
          {processSteps.map((step, i) => {
            // Abstand zur vorderen Position: < 0 = fliegt weg, 0 = vorn, > 0 = dahinter
            const tiefe = i - stand;
            let transform = "none";
            let opacity = 1;
            if (!ruhig) {
              if (tiefe < 0) {
                const f = Math.min(1, -tiefe);
                // bleibt voll deckend (sonst schiene die Schrift der nächsten
                // Karte durch) und fliegt ganz aus dem Bild
                transform = `translateX(${-f * 125}%) rotate(${-f * 12}deg)`;
                if (f >= 1) opacity = 0;
              } else if (tiefe > 0.001) {
                const t = Math.min(tiefe, SICHTBAR);
                const schraeg = (i % 2 ? 1.6 : -1.2) * Math.min(t, 1);
                transform = `translateY(${t * 14}px) scale(${1 - t * 0.05}) rotate(${schraeg}deg)`;
                if (tiefe > SICHTBAR - 1) opacity = Math.max(0, SICHTBAR - tiefe);
              }
            }

            return (
              <li
                key={step.id}
                className={`relative overflow-hidden rounded-kachel bg-white p-6 shadow-[0_14px_34px_-18px_rgba(15,27,45,0.45)] ${
                  ruhig ? "" : "origin-bottom [grid-area:1/1]"
                }`}
                style={{ zIndex: anzahl - i, transform, opacity } as CSSProperties}
              >
                {/* Farbkreis in der Ecke, wie auf den anderen Karten */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-25"
                  style={{ backgroundColor: farben[i].ton }}
                />
                <div className="relative flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[1.25rem] font-extrabold"
                    style={{ backgroundColor: farben[i].ton, color: SCHRIFT_AUF[i] }}
                  >
                    {i + 1}
                  </span>
                  <span
                    className="text-[0.75rem] font-bold uppercase tracking-[0.14em]"
                    style={{ color: LEISE }}
                  >
                    Schritt {i + 1} von {anzahl}
                  </span>
                </div>
                <h3 className="relative mt-5 text-[1.3rem] font-extrabold tracking-[-0.02em]">{step.title}</h3>
                <p className="relative mt-3 text-[1rem] leading-relaxed" style={{ color: LEISE }}>
                  {step.body}
                </p>
                <ul className="relative mt-4 space-y-1.5 text-[0.92rem]" style={{ color: LEISE }}>
                  {step.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span aria-hidden="true" style={{ color: farben[i].ton }}>
                        •
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>

        {/* Punkte: bei welchem Schritt man gerade ist */}
        {!ruhig && (
          <div aria-hidden="true" className="mt-2 flex items-center justify-center gap-2">
            {processSteps.map((step, i) => (
              <span
                key={step.id}
                className={`block h-2.5 rounded-full transition-[width] duration-300 ${i === aktiv ? "w-8" : "w-2.5"}`}
                style={{ backgroundColor: i === aktiv ? farben[i].ton : "rgba(15,27,45,0.2)" }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Scrollweg, auf dem der Stapel stehen bleibt und die Karten wechseln */}
      {!ruhig && <div ref={strecke} aria-hidden="true" style={{ height: `${(anzahl - 1) * STRECKE}svh` }} />}
    </div>
  );
}
