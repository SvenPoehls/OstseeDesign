import Link from "next/link";
import { PfeilHand, SternHand } from "@/components/ui/Hand";
import Skizze from "@/components/ui/Skizze";
import { company, openingHours } from "@/lib/site";

// Kopfbereich – aufgebaut wie die erste Seite eines Entwurfs:
//
//   Zeile 1   große handgeschriebene Schlagzeile links, Randnotizen rechts
//   Zeile 2   eine breite Skizze über die ganze Seitenbreite, mit
//             Klebeband aufs Blatt geheftet
//   Zeile 3   ein Streifen zwischen zwei gezogenen Strichen, in dem die
//             vier Bereiche vorbeilaufen
//
// Das letzte Wort der Schlagzeile ist rot eingekringelt – so markiert man
// auf einem Entwurf das, worauf es ankommt.
//
// ECHTES FOTO EINSETZEN: unten das <Skizze motiv="werkstatt" /> durch ein
// <img src={asset("/hero.jpg")} … /> ersetzen. Mehr ist nicht nötig.

// Das Laufband wiederholt dieselbe Liste zweimal – dadurch läuft es nahtlos.
const laufband = [
  "Fahrzeugbeschriftung",
  "Stickerei",
  "Schilder & Banner",
  "Textildruck",
  "Schaufenster",
  "Drucksachen",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Feine senkrechte Hilfslinien – wie auf einem Konstruktionsbogen.
          Sie sind absichtlich schnurgerade: gedruckt, nicht gezeichnet. */}
      <div
        aria-hidden="true"
        className="hilfslinien pointer-events-none absolute inset-0"
      />

      <div className="wrap relative">
        <div className="grid12 pt-10 sm:pt-14 lg:pt-16">
          {/* ── Schlagzeile ─────────────────────────────────────────── */}
          <div className="col-span-4 lg:col-span-8">
            <p className="etikett flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-mark" />
              {company.city} · {company.street}
            </p>

            <h1 className="hand mt-6 text-[clamp(3rem,10.5vw,7rem)] leading-[1.02]">
              Ihr Logo aufs Shirt,
              <br />
              aufs Auto oder
              <br />
              <span className="kreis-wort">an die Wand</span>.
            </h1>

            <p className="mt-9 max-w-reading text-[1.05rem] leading-relaxed text-ink-soft">
              Wir besticken und bedrucken Kleidung, beschriften Fahrzeuge und
              machen Schilder. <span className="marker text-ink">Alles in
              einer Werkstatt</span>, seit über {company.yearsExperience}{" "}
              Jahren.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link href="/entwurf-1#kontakt" className="btn-voll">
                Projekt besprechen
                <PfeilHand />
              </Link>
              <a
                href={`tel:${company.phoneHref}`}
                className="ul-link hand text-[1.7rem] text-ink"
              >
                {company.phoneDisplay}
              </a>
            </div>
          </div>

          {/* ── Randnotizen ─────────────────────────────────────────────
              Stehen rechts oben wie eine Bemerkung am Blattrand. Auf dem
              Handy rutschen sie unter die Schlagzeile. */}
          <aside className="col-span-4 mt-12 self-end lg:col-span-3 lg:col-start-10 lg:mt-0 lg:pb-2">
            <span className="rahmen-rot schief-3 etikett etikett-rot inline-block px-2 py-0.5">
              Seit über {company.yearsExperience} Jahren
            </span>

            <dl className="linie-hand-oben linie-hand-stark mt-8 pt-3 text-[0.95rem]">
              {openingHours.map((row) => (
                <div
                  key={row.days}
                  className="linie-hand linie-hand-fein flex items-baseline justify-between gap-3 py-2.5 last:after:hidden"
                >
                  <dt className="text-ink-soft">{row.days}</dt>
                  <dd className="hand whitespace-nowrap text-[1.15rem]">
                    {row.time}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="notiz mt-4 text-[0.95rem] leading-relaxed text-ink-soft">
              Vorher kurz anrufen lohnt sich – dann hat auch jemand Zeit.
            </p>
          </aside>
        </div>

        {/* ── Skizzenfläche ────────────────────────────────────────────
            Liegt flach über die ganze Breite, mit zwei Streifen Klebeband
            aufs Blatt geheftet. */}
        <figure className="bildflaeche rahmen relative mt-14 h-[34vh] min-h-[14rem] text-ink sm:mt-16 sm:h-[44vh] lg:h-[48vh]">
          <Skizze motiv="werkstatt" />
          <span
            aria-hidden="true"
            className="klebeband schief-3 -left-5 -top-3 hidden sm:block"
          />
          <span
            aria-hidden="true"
            className="klebeband schief-2 -bottom-3 -right-5 hidden sm:block"
          />
        </figure>
      </div>

      {/* ── Laufband ───────────────────────────────────────────────────
          Ein Streifen zwischen zwei gezogenen Strichen. Die vier Bereiche
          laufen darin durch – das, was der Betrieb selbst baut. */}
      <div className="linie-hand linie-hand-oben linie-hand-stark mt-16 overflow-hidden py-4 sm:mt-20">
        <div className="marquee flex w-max items-center gap-9 whitespace-nowrap pr-9">
          {[...laufband, ...laufband].map((wort, i) => (
            <span
              key={i}
              className="hand flex items-center gap-9 text-[1.35rem] text-ink"
            >
              {wort}
              <SternHand className="h-4 w-4 text-mark" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
