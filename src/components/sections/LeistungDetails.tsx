import type { CSSProperties } from "react";
import Bild from "@/components/ui/Bild";
import { SCHRIFT_AUF, farben } from "@/lib/farben";
import type { Service } from "@/lib/site";

// Unter dem Kopfbereich einer Leistungs-Unterseite:
//   1. drei Foto-Platzhalter (ein großes, zwei kleine) in der Leistungsfarbe
//   2. „Das gehört dazu": die Punkte der Leistung als drei Karten
//
// Beides nutzt nur Inhalte aus `site.ts` (Motive und Punkte). Sind echte
// Fotos da, wird jedes <Bild …/> durch ein <img> ersetzt (siehe Bild.tsx).
//
// BEWEGUNG: Alles erscheint beim Scrollen, gestaffelt von links nach rechts.
export default function LeistungDetails({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const ton = farben[index].ton;
  const [gross, klein1, klein2] = service.bilder;

  return (
    <>
      {/* ── Bilder ─────────────────────────────────────────────────────── */}
      <section
        aria-label={`Bilder: ${service.title}`}
        className="mt-10 grid gap-4 sm:gap-5 lg:h-[30rem] lg:grid-cols-3 lg:grid-rows-2"
      >
        <Bild
          note={gross}
          ton={ton}
          reveal
          className="h-72 sm:h-80 lg:col-span-2 lg:row-span-2 lg:h-auto"
        />
        {[klein1, klein2].map((note, i) =>
          note ? (
            <Bild
              key={note}
              note={note}
              ton={farben[(index + i + 1) % farben.length].ton}
              reveal
              className={`h-52 lg:h-auto ${i === 0 ? "[--verz:120ms]" : "[--verz:240ms]"}`}
            />
          ) : null
        )}
      </section>

      {/* ── Das gehört dazu ────────────────────────────────────────────── */}
      <section className="mt-16 sm:mt-24" aria-labelledby="dazu">
        <div data-reveal className="max-w-[30rem]">
          <p className="flex items-center gap-2 text-[0.88rem] font-bold">
            <span
              aria-hidden="true"
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: ton }}
            />
            {service.title}
          </p>
          <h2
            id="dazu"
            className="mt-2 text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight tracking-[-0.04em]"
          >
            Das gehört dazu
          </h2>
        </div>

        <ul className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-3">
          {service.points.map((punkt, i) => (
            <li
              key={punkt}
              data-reveal
              className="relative overflow-hidden rounded-kachel p-6 sm:p-7"
              style={
                {
                  backgroundColor: `${ton}1a`,
                  "--verz": `${i * 130}ms`,
                } as CSSProperties
              }
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-60 mix-blend-multiply"
                style={{ backgroundColor: `${ton}59` }}
              />
              <span
                className="relative flex h-12 w-12 items-center justify-center rounded-full text-[1.25rem] font-extrabold"
                style={{ backgroundColor: ton, color: SCHRIFT_AUF[index] }}
              >
                {i + 1}
              </span>
              <p className="relative mt-5 text-[1.12rem] font-extrabold leading-snug tracking-[-0.02em]">
                {punkt}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
