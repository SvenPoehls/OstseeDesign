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
// nicht unter ihm. (Nur große Bildschirme.)
const spotsWide: Spot[] = [
  { x: 12, y: 26, rot: -12 },
  { x: 8, y: 56, rot: 8 },
  { x: 19, y: 80, rot: -7 },
  { x: 88, y: 24, rot: 11 },
  { x: 92, y: 54, rot: -8 },
  { x: 81, y: 79, rot: 6 },
];

// Auf dem Handy stehen drei Karten als leicht überlappende Reihe im Textfluss –
// zwischen dem Einleitungstext und den Schaltflächen.
const tiltsNarrow = [-8, 3, 9];

// Gestreifte Platzhalter-Fläche mit Kamera-Symbol (später ein echtes Foto).
function CardBody({ note }: { note: string }) {
  return (
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
      {/* Auf dem Handy sind die Karten klein – dort bleibt die Bildunterschrift
          nur für Screenreader vorhanden. */}
      <figcaption className="sr-only sm:not-sr-only sm:relative sm:border-t-2 sm:border-ink sm:bg-paper sm:px-2.5 sm:py-1.5 sm:text-center sm:text-[0.68rem] sm:font-semibold sm:leading-tight sm:text-ink">
        {note}
      </figcaption>
    </div>
  );
}

export default function Hero() {
  // `mounted` schaltet nach dem ersten Rendern um – dadurch fliegen die Bilder
  // genau einmal beim Seitenaufruf auseinander.
  const [mounted, setMounted] = useState(false);
  // Auf schmalen Bildschirmen gilt die Handy-Anordnung.
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

  const narrowCards = heroFan.slice(0, tiltsNarrow.length);

  return (
    <section className="relative flex min-h-[42rem] items-start overflow-hidden bg-paper pb-12 pt-4 sm:min-h-[48rem] sm:pb-28 sm:pt-16 lg:min-h-[52rem]">
      {/* Grauer Kreis im Hintergrund. Statt einer harten Kante läuft er nach
          außen weich aus (Farbverlauf), damit er ruhig im Hintergrund liegt.
          (Kein negativer z-index: sonst verschwindet er hinter dem weißen
          Abschnitts-Hintergrund.) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full sm:h-[42rem] sm:w-[42rem] lg:h-[48rem] lg:w-[48rem]"
        style={{
          background:
            "radial-gradient(circle closest-side, var(--circle) 0 50%, rgba(228,231,236,0.5) 76%, rgba(228,231,236,0) 100%)",
        }}
      />

      {/* Große Bildschirme: Karten frei um den Text herum verteilt. */}
      {!narrow && (
        <div aria-hidden={false} className="pointer-events-none absolute inset-0">
          {heroFan.map((note, i) => {
            const spot = spotsWide[i % spotsWide.length];
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
                    : `translate(-50%, -50%) translate(${50 - spot.x}vw, ${((50 - spot.y) * 50) / 100}rem) scale(0.5)`,
                  opacity: mounted ? 1 : 0,
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <CardBody note={note} />
              </figure>
            );
          })}
        </div>
      )}

      <div className="container-site relative z-10 pt-2 sm:pt-10 lg:pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="chip">
            <span className="h-2 w-2 rounded-full bg-pop" aria-hidden="true" />
            Seit über {company.yearsExperience} Jahren in {company.city}
          </span>

          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:mt-6 sm:text-5xl lg:text-6xl">
            Ihr Auftritt – <span className="em">komplett übernommen.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-muted sm:mt-5">
            Fahrzeug beschriftet, Kleidung bestickt, Schild montiert, Drucksachen
            geliefert. Ein Ansprechpartner, ein Stil, ein Ergebnis.
          </p>

          {/* Handy: Bilder stehen hier – also über den Schaltflächen. */}
          {narrow && (
            <div className="mt-7 flex items-end justify-center">
              {narrowCards.map((note, i) => (
                <figure
                  key={note}
                  className="w-[6.5rem] shrink-0 overflow-hidden rounded-3xl border-2 border-ink bg-surface transition-all duration-[900ms] ease-out [&:not(:first-child)]:-ml-5"
                  style={{
                    transform: mounted
                      ? `rotate(${tiltsNarrow[i]}deg)`
                      : "translateY(1.5rem) scale(0.55)",
                    opacity: mounted ? 1 : 0,
                    transitionDelay: `${i * 110}ms`,
                    zIndex: i === 1 ? 2 : 1,
                  }}
                >
                  <CardBody note={note} />
                </figure>
              ))}
            </div>
          )}

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8">
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
