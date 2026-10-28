"use client";

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { KNOPF, KNOPF_SCHRIFT, LEISE, SCHRIFT_AUF, farben } from "@/lib/farben";
import { processSteps } from "@/lib/site";

// Ablauf auf dem Handy: die vier Schritte als Stapel Karteikarten.
// Oben liegt der aktuelle Schritt, dahinter lugen die nächsten hervor.
// Wischt man die obere Karte zur Seite (egal, ob nach links oder rechts),
// fliegt sie weg und kommt hinten wieder in den Stapel – nach Schritt 4
// folgt wieder Schritt 1. Darunter Pfeile und Punkte für alle, die lieber
// tippen (und für Tastatur und Screenreader).
//
// Auf größeren Bildschirmen zeigt Process.tsx stattdessen alle vier Karten
// nebeneinander; dieser Stapel ist dort ausgeblendet.
//
// TECHNIK:
//   • Alle Karten liegen im selben Rasterfeld übereinander – der Stapel ist
//     so hoch wie die längste Karte, beim Wechsel springt darunter nichts.
//   • `touch-action: pan-y`: Hoch- und Runterwischen scrollt wie gewohnt die
//     Seite, nur das Seitwärtswischen bewegt die Karte.
//   • Die obere Karte steht in Ruhe gerade (nicht gedreht), damit die
//     Schrift scharf bleibt; nur beim Ziehen neigt sie sich mit.
//   • Karten hinter der obersten sind für Screenreader und Tastatur
//     ausgeblendet (`inert`).
const SCHWELLE = 70; // so weit (in px) muss man ziehen, damit die Karte fliegt
const FLUG = 320; // Dauer des Wegfliegens in ms
const SICHTBAR = 3; // so viele Karten sind im Stapel zu sehen

export default function SchritteStapel() {
  const anzahl = processSteps.length;
  const [oben, setOben] = useState(0); // welcher Schritt oben liegt
  const [zug, setZug] = useState(0); // wie weit die obere Karte gerade gezogen ist
  const [zieht, setZieht] = useState(false);
  const [flug, setFlug] = useState<0 | 1 | -1>(0); // Richtung beim Wegfliegen
  const start = useRef<number | null>(null);
  const zugJetzt = useRef(0); // wie `zug`, aber sofort aktuell (für das Loslassen)
  const zeit = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(zeit.current), []);

  const wegwischen = (richtung: 1 | -1) => {
    if (flug) return;
    setFlug(richtung);
    setZieht(false);
    zeit.current = window.setTimeout(() => {
      setOben((o) => (o + 1) % anzahl);
      setFlug(0);
      setZug(0);
    }, FLUG);
  };
  const zurueck = () => {
    if (flug) return;
    setZug(0);
    setOben((o) => (o - 1 + anzahl) % anzahl);
  };

  const runter = (e: PointerEvent<HTMLElement>) => {
    if (flug) return;
    start.current = e.clientX;
    setZieht(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const ziehen = (e: PointerEvent<HTMLElement>) => {
    if (start.current === null) return;
    zugJetzt.current = e.clientX - start.current;
    setZug(zugJetzt.current);
  };
  const los = () => {
    if (start.current === null) return;
    start.current = null;
    const weit = zugJetzt.current;
    zugJetzt.current = 0;
    if (Math.abs(weit) > SCHWELLE) wegwischen(weit > 0 ? 1 : -1);
    else {
      setZieht(false);
      setZug(0);
    }
  };
  const abbruch = () => {
    start.current = null;
    zugJetzt.current = 0;
    setZieht(false);
    setZug(0);
  };

  const rundknopf =
    "flex h-12 w-12 items-center justify-center rounded-full text-[1.2rem] font-bold transition-transform duration-300 active:scale-95";

  return (
    <div role="region" aria-roledescription="Kartenstapel" aria-label="Ablauf in vier Schritten">
      <div className="grid pb-8">
        {processSteps.map((step, i) => {
          const tiefe = (i - oben + anzahl) % anzahl; // 0 = oben
          const istOben = tiefe === 0;

          let transform: string;
          let opacity = 1;
          if (istOben && flug) {
            transform = `translateX(${flug * 130}%) rotate(${flug * 14}deg)`;
            opacity = 0;
          } else if (istOben) {
            transform = zug ? `translateX(${zug}px) rotate(${zug / 22}deg)` : "none";
          } else {
            // dahinter: etwas tiefer und kleiner, abwechselnd leicht schräg
            const schraeg = tiefe % 2 ? 1.6 : -1.2;
            transform = `translateY(${tiefe * 14}px) scale(${1 - tiefe * 0.05}) rotate(${schraeg}deg)`;
            if (tiefe >= SICHTBAR) opacity = 0;
          }

          return (
            <article
              key={step.id}
              aria-roledescription="Karte"
              aria-label={`Schritt ${i + 1} von ${anzahl}: ${step.title}`}
              inert={!istOben}
              onPointerDown={istOben ? runter : undefined}
              onPointerMove={istOben ? ziehen : undefined}
              onPointerUp={istOben ? los : undefined}
              onPointerCancel={istOben ? abbruch : undefined}
              className={`relative origin-bottom select-none overflow-hidden rounded-kachel bg-white p-6 shadow-[0_14px_34px_-18px_rgba(15,27,45,0.45)] [grid-area:1/1] [touch-action:pan-y] ${
                istOben ? "cursor-grab active:cursor-grabbing" : ""
              }`}
              style={
                {
                  zIndex: anzahl - tiefe,
                  transform,
                  opacity,
                  transition: zieht
                    ? "none"
                    : `transform ${FLUG}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${FLUG}ms ease`,
                } as CSSProperties
              }
            >
              {/* Farbkreis in der Ecke, wie auf den anderen Karten */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-25"
                style={{ backgroundColor: farben[i].ton }}
              />
              <div className="relative flex items-center gap-4">
                <span
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
            </article>
          );
        })}
      </div>

      {/* Bedienung: zurück · Punkte · weiter */}
      <div className="mt-2 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={zurueck}
          className={`${rundknopf} bg-white shadow-[inset_0_0_0_1.5px_rgba(15,27,45,0.18)]`}
          aria-label="Vorheriger Schritt"
        >
          <span aria-hidden="true">←</span>
        </button>
        <div className="flex items-center gap-2">
          {processSteps.map((step, i) => (
            <span
              key={step.id}
              aria-hidden="true"
              className={`block h-2.5 rounded-full transition-[width] duration-300 ${i === oben ? "w-8" : "w-2.5"}`}
              style={{ backgroundColor: i === oben ? farben[i].ton : "rgba(15,27,45,0.2)" }}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => wegwischen(-1)}
          className={rundknopf}
          style={{ backgroundColor: KNOPF, color: KNOPF_SCHRIFT }}
          aria-label="Nächster Schritt"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
      <p className="mt-3 text-center text-[0.82rem]" style={{ color: LEISE }} aria-live="polite">
        <span className="sr-only">
          Schritt {oben + 1} von {anzahl}: {processSteps[oben].title}.{" "}
        </span>
        Zum nächsten Schritt einfach zur Seite wischen.
      </p>
    </div>
  );
}
