import Link from "next/link";
import { ArrowIcon } from "@/components/ui/Icons";
import { asset } from "@/lib/assets";
import { company, openingHours } from "@/lib/site";

// Kopfbereich – aufgebaut wie ein Druckbogen:
//
//   Zeile 1   große Schlagzeile links, kleine Datenspalte rechts
//   Zeile 2   breites Bildband über die ganze Seitenbreite
//   Zeile 3   schwarzes Laufband mit den vier Bereichen
//
// Nichts ist zentriert, nichts hat runde Ecken. Das letzte Wort der
// Schlagzeile steht als Kontur („ausgestanzt") – eine Anspielung auf
// Folienschrift, bevor sie verklebt wird.
//
// ECHTES FOTO EINSETZEN: Datei als „hero.jpg" in den Ordner public legen und
// unten in der Zeile `bildDatei` den Namen ändern. Mehr ist nicht nötig.
const bildDatei = "/hero.svg";

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
    <section className="relative overflow-hidden bg-paper">
      {/* Feine senkrechte Rasterlinien – wie der Raster eines Zeichenbogens. */}
      <div aria-hidden="true" className="guides pointer-events-none absolute inset-0" />

      <div className="wrap relative">
        <div className="grid12 pt-10 sm:pt-14 lg:pt-16">
          {/* ── Schlagzeile ─────────────────────────────────────────── */}
          <div className="col-span-4 lg:col-span-8">
            <p className="flex items-center gap-3 text-[0.72rem] uppercase tracking-label text-ink-soft">
              <span aria-hidden="true" className="h-px w-10 bg-ink" />
              {company.city} · {company.street}
            </p>

            <h1 className="display mt-6 text-[clamp(2.7rem,9.2vw,6.4rem)] leading-[1.02] sm:leading-[0.94]">
              Ihr Logo aufs Shirt,
              <br />
              aufs Auto oder
              <br />
              <span className="cutout">an die Wand</span>.
            </h1>

            <p className="mt-7 max-w-reading text-[1.05rem] leading-relaxed text-ink-soft">
              Wir besticken und bedrucken Kleidung, beschriften Fahrzeuge und
              machen Schilder. Alles in einer Werkstatt, seit über{" "}
              {company.yearsExperience} Jahren.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link href="/#kontakt" className="btn-ink">
                Projekt besprechen
                <ArrowIcon className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${company.phoneHref}`}
                className="display-lite ul-link text-[1.45rem] text-ink"
              >
                {company.phoneDisplay}
              </a>
            </div>
          </div>

          {/* ── Datenspalte ─────────────────────────────────────────────
              Steht rechts oben wie ein Vermerk auf dem Bogen. Auf dem Handy
              rutscht sie unter die Schlagzeile. */}
          <aside className="col-span-4 mt-10 self-end lg:col-span-3 lg:col-start-10 lg:mt-0 lg:pb-2">
            <span className="stamp">Seit über {company.yearsExperience} Jahren</span>

            <dl className="mt-7 border-t border-ink pt-3 text-[0.9rem]">
              {openingHours.map((row) => (
                <div
                  key={row.days}
                  className="flex items-baseline justify-between gap-3 border-b border-rule py-2.5 last:border-0"
                >
                  <dt className="text-ink-soft">{row.days}</dt>
                  <dd className="whitespace-nowrap font-semibold">{row.time}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-[0.8rem] leading-relaxed text-ink-soft">
              Vorher kurz anrufen lohnt sich – dann hat auch jemand Zeit.
            </p>
          </aside>
        </div>

        {/* ── Bildband ─────────────────────────────────────────────────
            Liegt flach über die ganze Breite, wie ein aufgeklebtes Foto. */}
        <figure className="plate mt-12 h-[34vh] min-h-[13rem] border border-ink sm:mt-16 sm:h-[42vh] lg:h-[46vh]">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${asset(bildDatei)})` }}
          />
        </figure>
      </div>

      {/* ── Laufband ───────────────────────────────────────────────────
          Eine Laufschrift – genau das, was der Betrieb selbst baut. */}
      <div className="mt-12 overflow-hidden border-y border-ink bg-ink py-3 sm:mt-16">
        <div className="marquee flex w-max items-center gap-10 whitespace-nowrap pr-10">
          {[...laufband, ...laufband].map((wort, i) => (
            <span
              key={i}
              className="display-lite flex items-center gap-10 text-[1.1rem] uppercase text-paper"
            >
              {wort}
              <span aria-hidden="true" className="text-paper/40">
                ✳
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
