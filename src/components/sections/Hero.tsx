import type { CSSProperties } from "react";
import Bild from "@/components/ui/Bild";
import { BAND_SCHRIFT, BAND, KNOPF, KNOPF_SCHRIFT, LEISE_AUF_KREISEN, farben } from "@/lib/farben";
import { company } from "@/lib/site";

// Auftakt der Startseite, zweispaltig wie im Vorbild:
//
//   links   Unterzeile, große Schlagzeile in Versalien (drei Wörter mit
//           Farbmarker), Text, drei Kennzahlen, zwei Knöpfe. Hinter der
//           Schlagzeile liegen drei Farbkreise, die sich mischen wie
//           Druckfarben auf Papier.
//   rechts  ein großes Foto (zurzeit Platzhalter), darunter ein dunkles Band
//           „Jetzt kontaktieren", das zum Kontaktbereich führt – an der
//           Stelle, an der im Vorbild das Video steht. Bewusst KEIN
//           Hintergrundbild.
//
// Die Kennzahlen geben nur wieder, was auch auf der bisherigen Website steht:
// „seit über 30 Jahren", „Alles aus einer Hand!" und die Öffnungszeiten
// (Montag bis Donnerstag, Freitag nach Vereinbarung).
//
// Text über den Kreisen benutzt LEISE_AUF_KREISEN – die Kreise machen den
// Untergrund dort dunkler (siehe farben.ts).
//
// BEWEGUNG: Die Kreise wachsen auf und treiben, Text, Knöpfe und Foto
// schieben sich nacheinander herein.
export default function Hero() {
  const kennzahlen = [
    { zahl: `${company.yearsExperience}+`, text: "Jahre Erfahrung" },
    { zahl: "100 %", text: "aus einer Hand" },
    { zahl: "Mo–Do", text: "für Sie da" },
  ];

  return (
    <section className="seitenrand grid items-center gap-12 pb-20 pt-10 sm:pb-24 sm:pt-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:pb-32 lg:pt-20">
      {/* ── links: Text, dahinter die Farbkreise ────────────────────────── */}
      <div className="relative">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <span
            className="kreis absolute -left-10 top-6 h-56 w-56 rounded-full opacity-70 mix-blend-multiply [--dauer:19s] [--dx:1.2rem] [--dy:1.6rem] [--verz:0ms] sm:-left-16 sm:h-80 sm:w-80"
            style={{ backgroundColor: `${farben[2].ton}66` }}
          />
          <span
            className="kreis absolute left-28 top-28 h-52 w-52 rounded-full opacity-70 mix-blend-multiply [--dauer:23s] [--dx:-1.6rem] [--dy:1rem] [--verz:180ms] sm:left-56 sm:top-24 sm:h-72 sm:w-72"
            style={{ backgroundColor: `${farben[0].ton}4d` }}
          />
          <span
            className="kreis absolute -top-6 left-[45%] hidden h-80 w-80 rounded-full opacity-60 mix-blend-multiply [--dauer:27s] [--dx:1.4rem] [--dy:-1.2rem] [--verz:360ms] md:block"
            style={{ backgroundColor: `${farben[1].ton}40` }}
          />
        </div>

        <div className="relative">
          <p
            className="auftritt text-[1.02rem] font-semibold [--verz:250ms]"
            style={{ color: LEISE_AUF_KREISEN }}
          >
            {company.claim}
          </p>

          <h1 className="auftritt mt-3 text-[clamp(2.35rem,5.6vw,4.9rem)] font-black uppercase leading-[0.97] tracking-[-0.03em] [--verz:400ms]">
            Ihr Logo aufs{" "}
            <span className="markiert" style={{ "--ton": `${farben[2].ton}b3` } as CSSProperties}>
              Shirt
            </span>
            , aufs{" "}
            <span className="markiert" style={{ "--ton": `${farben[0].ton}99` } as CSSProperties}>
              Auto
            </span>{" "}
            oder an die{" "}
            <span className="markiert" style={{ "--ton": `${farben[1].ton}66` } as CSSProperties}>
              Wand
            </span>
            .
          </h1>

          <p
            className="auftritt mt-7 max-w-[34rem] text-[1.1rem] leading-relaxed [--verz:540ms]"
            style={{ color: LEISE_AUF_KREISEN }}
          >
            Seit über {company.yearsExperience} Jahren stehen wir für
            Werbetechnik und Textilveredelung – dazu kommen Drucksachen. Alles
            aus einer Hand.
          </p>

          {/* Kennzahlen, durch feine Linien getrennt */}
          <dl className="auftritt mt-9 grid max-w-[40rem] grid-cols-3 border-y border-tinte/15 [--verz:640ms]">
            {kennzahlen.map((k, i) => (
              <div
                key={k.text}
                className={`flex flex-col-reverse justify-end py-4 ${
                  i > 0 ? "border-l border-tinte/15 pl-4 sm:pl-6" : "pr-4"
                }`}
              >
                <dt
                  className="mt-1.5 text-[0.66rem] font-semibold uppercase leading-snug tracking-[0.06em] sm:text-[0.7rem] sm:tracking-[0.08em]"
                  style={{ color: LEISE_AUF_KREISEN }}
                >
                  {k.text}
                </dt>
                <dd className="text-[clamp(1.7rem,3.4vw,2.4rem)] font-black leading-none tracking-[-0.03em]">
                  {k.zahl}
                </dd>
              </div>
            ))}
          </dl>

          <div className="auftritt mt-9 flex flex-wrap items-center gap-3 [--verz:760ms]">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-[0.92rem] font-bold uppercase tracking-[0.04em] transition-transform duration-300 hover:-translate-y-0.5"
              style={{ backgroundColor: KNOPF, color: KNOPF_SCHRIFT }}
            >
              <span aria-hidden="true">↓</span> Projekt besprechen
            </a>
            <a
              href={`tel:${company.phoneHref}`}
              className="inline-flex items-center gap-2 rounded-full bg-white/80 px-7 py-4 text-[0.92rem] font-bold uppercase tracking-[0.04em] backdrop-blur transition-transform duration-300 hover:-translate-y-0.5"
              style={{ boxShadow: "inset 0 0 0 1.5px rgba(15,27,45,0.2)" }}
            >
              Anrufen
            </a>
          </div>
        </div>
      </div>

      {/* ── rechts: Foto und „Jetzt kontaktieren" ───────────────────────── */}
      <div className="auftritt [--verz:600ms]">
        <Bild
          note="Foto: Ostseedesign in Eckernförde"
          ton={farben[2].ton}
          className="aspect-[4/3] w-full lg:aspect-[1/1]"
        />

        <a
          href="#kontakt"
          className="group mt-4 flex items-center gap-4 rounded-full py-2.5 pl-2.5 pr-6 transition-transform duration-300 hover:-translate-y-0.5"
          style={{ backgroundColor: BAND, color: BAND_SCHRIFT }}
        >
          <span
            aria-hidden="true"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
            style={{ backgroundColor: farben[0].ton }}
          >
            {/* Sprechblase */}
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinejoin="round">
              <path d="M4.5 5.5h15v10h-8l-4.5 4v-4h-2.5Z" />
            </svg>
          </span>
          <span aria-hidden="true" className="h-7 w-px bg-tinte/15" />
          <span className="min-w-0 flex-1 text-[0.85rem] font-bold uppercase leading-snug tracking-[0.06em]">
            Jetzt kontaktieren
            <span className="block font-medium normal-case tracking-normal">
              Anruf, E-Mail oder vorbeikommen
            </span>
          </span>
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
