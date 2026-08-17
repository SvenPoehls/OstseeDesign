"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowIcon, CameraIcon, PhoneIcon } from "@/components/ui/Icons";
import { company, heroFan } from "@/lib/site";

// Kopfbereich: zentrierte Aussage vor einem großen, gräulichen Kreis.
// Kein Foto im Hintergrund – die Bilder liegen als Karten darunter und
// fächern sich beim Laden der Seite aus der Mitte auf.
export default function Hero() {
  // `mounted` schaltet nach dem ersten Rendern um. Dadurch startet die
  // Auffächerung genau einmal beim Seitenaufruf.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 120);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-paper pb-16 pt-14 sm:pb-24 sm:pt-16">
      {/* Grauer Kreis im Hintergrund – hebt sich dezent von Weiß ab.
          (Kein negativer z-index: sonst verschwindet er hinter dem weißen
          Abschnitts-Hintergrund.) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-4 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-circle sm:h-[44rem] sm:w-[44rem] lg:h-[50rem] lg:w-[50rem]"
      />

      <div className="container-site relative">
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

        {/* Bilder-Fächer: Beim Laden fahren die Karten aus der Mitte auseinander.
            Abstand (--fan-step) und Höhenversatz (--fan-lift) wachsen mit der
            Bildschirmbreite, damit der Fächer auf dem Handy nicht abgeschnitten
            wird. Noch Platzhalter – später je Karte ein echtes Foto einsetzen. */}
        <div className="relative mt-14 h-[15rem] [--fan-lift:6px] [--fan-step:60px] sm:mt-16 sm:h-[19rem] sm:[--fan-lift:9px] sm:[--fan-step:118px] lg:h-[22rem] lg:[--fan-lift:11px] lg:[--fan-step:150px]">
          {heroFan.map((note, i) => {
            const d = i - Math.floor(heroFan.length / 2); // -2 … +2
            return (
              <figure
                key={note}
                className="absolute left-1/2 top-0 w-32 origin-bottom overflow-hidden rounded-3xl border-[1.5px] border-ink bg-surface shadow-offset transition-all duration-700 ease-out sm:w-44 lg:w-52"
                style={{
                  // Vor dem Start liegen alle Karten deckungsgleich in der Mitte.
                  transform: mounted
                    ? `translateX(calc(-50% + var(--fan-step) * ${d})) translateY(calc(var(--fan-lift) * ${d * d})) rotate(${d * 7}deg)`
                    : "translateX(-50%) translateY(2.5rem) rotate(0deg) scale(0.9)",
                  opacity: mounted ? 1 : 0,
                  transitionDelay: `${i * 90}ms`,
                  zIndex: 10 - Math.abs(d), // mittlere Karte liegt oben
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
                  <CameraIcon className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 text-ink/25" />
                  {/* Auf dem Handy überlappen die Karten stark – dort bleibt die
                      Bildunterschrift nur für Screenreader vorhanden. */}
                  <figcaption className="sr-only sm:not-sr-only sm:relative sm:border-t-[1.5px] sm:border-ink sm:bg-paper sm:px-3 sm:py-2 sm:text-center sm:text-[0.7rem] sm:font-semibold sm:leading-tight sm:text-ink">
                    {note}
                  </figcaption>
                </div>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
