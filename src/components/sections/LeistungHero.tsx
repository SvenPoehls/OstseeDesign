import Link from "next/link";
import { KNOPF, LEISE_AUF_KREISEN, farben } from "@/lib/farben";
import { company, type Service } from "@/lib/site";

// Kopfbereich einer Leistungs-Unterseite. Gleiche Sprache wie die Startseite:
// Hinter der Schlagzeile liegen Farbkreise, die sich mischen – hier aber
// führt die Farbe der Leistung (`index` = Platz in `services`, damit die
// Seite dieselbe Farbe trägt wie ihre Karte und ihre Marke im Menü).
//
// Die Schlagzeile steht in Versalien wie alle Überschriften und skaliert mit
// der Bildschirmbreite (7,6 vw), damit das längste Wort („TEXTILVEREDELUNG")
// auch auf 320 px Breite noch passt.
//
// BEWEGUNG wie auf der Startseite: Kreise wachsen auf und treiben, Etikett,
// Schlagzeile, Text und Knöpfe schieben sich nacheinander herein.
export default function LeistungHero({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const hauptton = farben[index].ton;
  // Die beiden anderen Kreise nehmen die Nachbarfarben aus dem Fächer.
  const zweiter = farben[(index + 1) % farben.length].ton;
  const dritter = farben[(index + 2) % farben.length].ton;

  return (
    <section className="relative overflow-hidden pb-6 pt-8 sm:pt-12">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span
          className="kreis absolute left-0 top-0 h-64 w-64 rounded-full opacity-70 mix-blend-multiply [--dauer:19s] [--dx:1.2rem] [--dy:1.6rem] [--verz:0ms] sm:h-[22rem] sm:w-[22rem]"
          style={{ backgroundColor: `${hauptton}66` }}
        />
        <span
          className="kreis absolute left-32 top-16 h-56 w-56 rounded-full opacity-70 mix-blend-multiply [--dauer:23s] [--dx:-1.6rem] [--dy:1rem] [--verz:180ms] sm:h-[18rem] sm:w-[18rem]"
          style={{ backgroundColor: `${zweiter}4d` }}
        />
        <span
          className="kreis absolute left-[42%] top-[-2rem] hidden h-[22rem] w-[22rem] rounded-full opacity-60 mix-blend-multiply [--dauer:27s] [--dx:1.4rem] [--dy:-1.2rem] [--verz:360ms] lg:block"
          style={{ backgroundColor: `${dritter}40` }}
        />
      </div>

      <div className="relative max-w-[46rem]">
        <Link
          href="/"
          className="auftritt inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-[0.85rem] font-bold backdrop-blur transition-colors [--verz:200ms] hover:bg-white"
        >
          <span aria-hidden="true">←</span>
          Startseite
        </Link>

        <p className="auftritt mt-8 flex items-center gap-2 text-[0.88rem] font-bold [--verz:300ms]">
          {/* Die Farbe als Punkt, die Schrift dunkel – helle Farben wie Ocker
              wären als Schrift auf Weiß kaum zu lesen. */}
          <span
            aria-hidden="true"
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: hauptton }}
          />
          Leistung · Farbe {String(index + 1).padStart(2, "0")} ·{" "}
          {farben[index].name}
        </p>

        <h1 className="auftritt mt-4 text-[clamp(1.6rem,7.6vw,5.2rem)] font-black uppercase leading-[0.97] tracking-[-0.03em] [--verz:420ms]">
          {service.title}
        </h1>

        <p
          className="auftritt mt-6 max-w-[34rem] text-[1.08rem] leading-relaxed [--verz:560ms]"
          style={{ color: LEISE_AUF_KREISEN }}
        >
          {service.teaser}
        </p>

        <ul className="auftritt mt-6 flex flex-wrap gap-2 [--verz:680ms]">
          {service.points.map((punkt) => (
            <li
              key={punkt}
              className="rounded-full bg-white/80 px-4 py-1.5 text-[0.88rem] font-medium backdrop-blur"
              style={{ boxShadow: `inset 0 0 0 1.5px ${hauptton}55` }}
            >
              {punkt}
            </li>
          ))}
        </ul>

        <div className="auftritt mt-8 flex flex-wrap items-center gap-3 [--verz:800ms]">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-[0.92rem] font-bold uppercase tracking-[0.04em] text-white transition-transform duration-300 hover:-translate-y-0.5"
            style={{ backgroundColor: KNOPF }}
          >
            <span aria-hidden="true">↓</span> Projekt besprechen
          </a>
          <a
            href={`tel:${company.phoneHref}`}
            className="rounded-full bg-white/80 px-7 py-4 text-[0.92rem] font-bold uppercase tracking-[0.04em] backdrop-blur transition-transform duration-300 hover:-translate-y-0.5"
            style={{ boxShadow: "inset 0 0 0 1.5px rgba(23,22,26,0.2)" }}
          >
            Anrufen
          </a>
        </div>
      </div>
    </section>
  );
}
