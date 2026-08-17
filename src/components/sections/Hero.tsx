"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowIcon, CameraIcon, PhoneIcon } from "@/components/ui/Icons";
import { company, heroFan } from "@/lib/site";

// Endpositionen der Bildkarten – x/y in Prozent des Kopfbereichs (Mittelpunkt
// der Karte), rot = Drehung. Beim Laden starten alle Karten in der Mitte und
// fliegen in ihre Position: nach links, rechts, oben und unten.
type Spot = { x: number; y: number; rot: number };

// Drei Karten links, drei rechts – sie liegen als Bogen neben dem Kreis,
// nicht unter ihm.
const spotsWide: Spot[] = [
  { x: 12, y: 26, rot: -12 },
  { x: 8, y: 56, rot: 8 },
  { x: 19, y: 80, rot: -7 },
  { x: 88, y: 24, rot: 11 },
  { x: 92, y: 54, rot: -8 },
  { x: 81, y: 79, rot: 6 },
];

// Auf dem Handy ist für sechs Karten kein Platz – dort liegen drei etwas
// größere Karten in einer Reihe unter dem Text. So bleibt jede vollständig im
// Bild und nichts überdeckt die Schaltflächen.
const spotsNarrow: Spot[] = [
  { x: 22, y: 87, rot: -10 },
  { x: 50, y: 84, rot: 5 },
  { x: 78, y: 87, rot: 9 },
];

export default function Hero() {
  // `mounted` schaltet nach dem ersten Rendern um – dadurch fliegen die Bilder
  // genau einmal beim Seitenaufruf auseinander.
  const [mounted, setMounted] = useState(false);
  // Auf schmalen Bildschirmen liegen die Karten enger und weiter unten.
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const sync = () => setNarrow(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    const t = window.setTimeout(() => setMounted(true), 120);
    return () => {
      mq.removeEventListener("change", sync);
      window.clearTimeout(t);
    };
  }, []);

  const spots = narrow ? spotsNarrow : spotsWide;
  // Auf dem Handy werden nur so viele Bilder gezeigt, wie Plätze da sind.
  const cards = heroFan.slice(0, spots.length);
  // Ungefähre Höhe des Kopfbereichs – nur für die Flugrichtung nach oben/unten.
  const boxHeight = narrow ? 48 : 50; // in rem

  return (
    <section className="relative flex min-h-[48rem] items-start overflow-hidden bg-paper pb-14 pt-10 sm:min-h-[48rem] sm:pb-28 sm:pt-16 lg:min-h-[52rem]">
      {/* Grauer Kreis im Hintergrund. Statt einer harten Kante läuft er nach
          außen weich aus (Farbverlauf), damit er ruhig im Hintergrund liegt.
          Er sitzt bewusst etwas höher als der Text.
          (Kein negativer z-index: sonst verschwindet er hinter dem weißen
          Abschnitts-Hintergrund.) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full sm:h-[42rem] sm:w-[42rem] lg:h-[48rem] lg:w-[48rem]"
        style={{
          // Langer, weicher Auslauf nach außen. Die Fläche liegt komplett
          // innerhalb des Kopfbereichs und ist an ihrem Rand durchsichtig –
          // dadurch entsteht weder oben noch unten eine sichtbare Kante.
          background:
            "radial-gradient(circle closest-side, var(--circle) 0 50%, rgba(228,231,236,0.5) 76%, rgba(228,231,236,0) 100%)",
        }}
      />

      {/* Bildkarten. Noch Platzhalter – später je Karte ein echtes Foto. */}
      <div aria-hidden={false} className="pointer-events-none absolute inset-0">
        {cards.map((note, i) => {
          const spot = spots[i % spots.length];
          return (
            <figure
              key={note}
              className="absolute w-28 overflow-hidden rounded-3xl border-2 border-ink bg-surface transition-all duration-[900ms] ease-out sm:w-36 lg:w-44"
              style={{
                left: `${spot.x}%`,
                top: `${spot.y}%`,
                // Startpunkt: Mitte des Kopfbereichs, klein und ungedreht.
                transform: mounted
                  ? `translate(-50%, -50%) rotate(${spot.rot}deg)`
                  : `translate(-50%, -50%) translate(${50 - spot.x}vw, ${((50 - spot.y) * boxHeight) / 100}rem) scale(0.5)`,
                opacity: mounted ? 1 : 0,
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div className="relative flex aspect-[3/4] flex-col justify-end">
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(135deg, rgba(0,48,135,0.08) 0 2px, transparent 2px 16px)",
                  }}
                />
                <CameraIcon className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-ink/25" />
                {/* Auf dem Handy sind die Karten klein – dort bleibt die
                    Bildunterschrift nur für Screenreader vorhanden. */}
                <figcaption className="sr-only sm:not-sr-only sm:relative sm:border-t-2 sm:border-ink sm:bg-paper sm:px-2.5 sm:py-1.5 sm:text-center sm:text-[0.68rem] sm:font-semibold sm:leading-tight sm:text-ink">
                  {note}
                </figcaption>
              </div>
            </figure>
          );
        })}
      </div>

      {/* Text liegt über den Bildern. */}
      <div className="container-site relative z-10 pt-6 sm:pt-10 lg:pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="chip">
            <span className="h-2 w-2 rounded-full bg-pop" aria-hidden="true" />
            Seit über {company.yearsExperience} Jahren in {company.city}
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Ihr Auftritt – <span className="em">komplett übernommen.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
            Fahrzeug beschriftet, Kleidung bestickt, Schild montiert, Drucksachen
            geliefert. Ein Ansprechpartner, ein Stil, ein Ergebnis.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/#kontakt" className="btn-pill-pop">
              Projekt besprechen
              <ArrowIcon className="h-4 w-4" />
            </Link>
            <a href={`tel:${company.phoneHref}`} className="btn-pill-light">
              <PhoneIcon className="h-4 w-4" />
              {company.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
