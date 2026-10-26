import { KNOPF, LEISE, farben } from "@/lib/farben";
import { company } from "@/lib/site";

// Auftakt. Hinter der Schlagzeile liegen drei Kreise übereinander. Sie sind
// halb durchsichtig und mischen sich dort, wo sie sich überlappen – wie
// Druckfarben auf Papier.
//
// BEWEGUNG: Die Kreise wachsen beim Laden auf und treiben danach ganz
// langsam (nur auf größeren Bildschirmen). Schlagzeile, Text und Knöpfe
// schieben sich nacheinander herein. Die Verzögerung steht je Element als
// `[--verz:…]`, die Richtung des Treibens als `[--dx:…] [--dy:…]`.
export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-6 pt-10 sm:pt-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span
          className="kreis absolute left-0 top-0 h-64 w-64 rounded-full opacity-70 mix-blend-multiply [--dauer:19s] [--dx:1.2rem] [--dy:1.6rem] [--verz:0ms] sm:h-[22rem] sm:w-[22rem]"
          style={{ backgroundColor: `${farben[2].ton}66` }}
        />
        <span
          className="kreis absolute left-32 top-16 h-64 w-64 rounded-full opacity-70 mix-blend-multiply [--dauer:23s] [--dx:-1.6rem] [--dy:1rem] [--verz:180ms] sm:h-[22rem] sm:w-[22rem]"
          style={{ backgroundColor: `${farben[0].ton}59` }}
        />
        <span
          className="kreis absolute left-[38%] top-[-3rem] hidden h-[26rem] w-[26rem] rounded-full opacity-60 mix-blend-multiply [--dauer:27s] [--dx:1.4rem] [--dy:-1.2rem] [--verz:360ms] lg:block"
          style={{ backgroundColor: `${farben[1].ton}4d` }}
        />
      </div>

      <div className="relative max-w-[46rem]">
        <span
          className="auftritt inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-[0.85rem] font-semibold backdrop-blur [--verz:250ms]"
          style={{ color: LEISE }}
        >
          {company.city} · seit über {company.yearsExperience} Jahren
        </span>
        <h1 className="auftritt mt-6 text-[clamp(2.3rem,6vw,4.2rem)] font-extrabold leading-[1.04] tracking-[-0.04em] [--verz:400ms]">
          Ihr Logo aufs Shirt, aufs Auto oder an die Wand.
        </h1>
        <p
          className="auftritt mt-6 max-w-[34rem] text-[1.08rem] leading-relaxed [--verz:560ms]"
          style={{ color: LEISE }}
        >
          Wir besticken und bedrucken Kleidung, beschriften Fahrzeuge und machen
          Schilder. Alles in einer Werkstatt.
        </p>
        <div className="auftritt mt-8 flex flex-wrap items-center gap-3 [--verz:700ms]">
          <a
            href="#kontakt"
            className="rounded-full px-7 py-4 text-[1rem] font-bold text-white transition-transform duration-300 hover:-translate-y-0.5"
            style={{ backgroundColor: KNOPF }}
          >
            Projekt besprechen
          </a>
          <a
            href={`tel:${company.phoneHref}`}
            className="rounded-full bg-white/80 px-7 py-4 text-[1rem] font-bold backdrop-blur transition-transform duration-300 hover:-translate-y-0.5"
            style={{ boxShadow: "inset 0 0 0 1.5px rgba(23,22,26,0.15)" }}
          >
            Anrufen
          </a>
        </div>
      </div>
    </section>
  );
}
