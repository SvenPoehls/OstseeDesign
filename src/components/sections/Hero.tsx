import type { CSSProperties } from "react";
import Faecher from "@/components/sections/Faecher";
import { CREME, DUNKEL, KNOPF, LEISE, farben } from "@/lib/farben";
import { company, unterseiten } from "@/lib/site";

// Auftakt der Startseite, zweispaltig wie im Vorbild:
//
//   links   kleines Etikett, Unterzeile, große Schlagzeile in Versalien
//           (drei Wörter mit Farbmarker), Text, drei Kennzahlen, zwei Knöpfe
//   rechts  der Farbfächer (vier Karten) auf drei Farbkreisen, darunter ein
//           dunkles Band mit der Anschrift – an der Stelle, an der im
//           Vorbild das Video steht. Bewusst KEIN Hintergrundbild.
//
// Die Kennzahlen stammen aus site.ts (Jahre, Zahl der Leistungen, „immer
// derselbe Ansprechpartner" aus dem Ablauf).
//
// BEWEGUNG: Die Kreise wachsen auf und treiben, Text und Knöpfe schieben sich
// nacheinander herein, die Fächerkarten klappen auf.
export default function Hero() {
  const kennzahlen = [
    { zahl: `${company.yearsExperience}+`, text: "Jahre Erfahrung" },
    { zahl: String(unterseiten.length), text: "Leistungen, eine Werkstatt" },
    // \u00AD = weiches Trennzeichen: Auf schmalen Handys wird hier getrennt.
    { zahl: "1", text: "fester Ansprech\u00ADpartner" },
  ];

  return (
    <section className="seitenrand grid items-center gap-12 pb-20 pt-10 sm:pb-24 sm:pt-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:pb-32 lg:pt-20">
      {/* ── links: Text ─────────────────────────────────────────────────── */}
      <div>
        <span
          className="auftritt inline-flex items-center gap-2.5 rounded-full bg-white/80 px-4 py-1.5 text-[0.82rem] font-semibold backdrop-blur [--verz:200ms]"
          style={{ color: LEISE }}
        >
          <span aria-hidden="true" className="flex -space-x-1">
            {farben.map((f) => (
              <span
                key={f.ton}
                className="h-2.5 w-2.5 rounded-full ring-2 ring-white"
                style={{ backgroundColor: f.ton }}
              />
            ))}
          </span>
          {company.city} · seit über {company.yearsExperience} Jahren
        </span>

        <p
          className="auftritt mt-7 text-[1.02rem] font-semibold [--verz:300ms]"
          style={{ color: LEISE }}
        >
          {company.claim}
        </p>

        <h1 className="auftritt mt-3 text-[clamp(2.35rem,5.6vw,4.9rem)] font-black uppercase leading-[0.97] tracking-[-0.03em] [--verz:400ms]">
          Ihr Logo aufs{" "}
          <span className="markiert" style={{ "--ton": farben[2].ton } as CSSProperties}>
            Shirt
          </span>
          , aufs{" "}
          <span className="markiert" style={{ "--ton": `${farben[0].ton}b3` } as CSSProperties}>
            Auto
          </span>{" "}
          oder an die{" "}
          <span className="markiert" style={{ "--ton": `${farben[3].ton}99` } as CSSProperties}>
            Wand
          </span>
          .
        </h1>

        <p
          className="auftritt mt-7 max-w-[34rem] text-[1.1rem] leading-relaxed [--verz:540ms]"
          style={{ color: LEISE }}
        >
          Wir besticken und bedrucken Kleidung, beschriften Fahrzeuge und machen
          Schilder. Alles in einer Werkstatt.
        </p>

        {/* Kennzahlen, durch feine Linien getrennt */}
        <dl className="auftritt mt-9 grid max-w-[36rem] grid-cols-3 border-y border-tinte/15 [--verz:640ms]">
          {kennzahlen.map((k, i) => (
            <div
              key={k.text}
              className={`flex flex-col-reverse justify-end py-4 ${
                i > 0 ? "border-l border-tinte/15 pl-4 sm:pl-6" : "pr-4"
              }`}
            >
              <dt
                className="mt-1.5 text-[0.66rem] font-semibold uppercase leading-snug tracking-[0.06em] sm:text-[0.7rem] sm:tracking-[0.08em]"
                style={{ color: LEISE }}
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
            className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-[0.92rem] font-bold uppercase tracking-[0.04em] text-white transition-transform duration-300 hover:-translate-y-0.5"
            style={{ backgroundColor: KNOPF }}
          >
            <span aria-hidden="true">↓</span> Projekt besprechen
          </a>
          <a
            href={`tel:${company.phoneHref}`}
            className="inline-flex items-center gap-2 rounded-full bg-white/80 px-7 py-4 text-[0.92rem] font-bold uppercase tracking-[0.04em] backdrop-blur transition-transform duration-300 hover:-translate-y-0.5"
            style={{ boxShadow: "inset 0 0 0 1.5px rgba(23,22,26,0.2)" }}
          >
            Anrufen
          </a>
        </div>
      </div>

      {/* ── rechts: Farbfächer und Anschrift ────────────────────────────── */}
      <div className="relative">
        <div className="relative p-2 sm:p-4">
          {/* Drei Farbkreise hinter dem Fächer, die sich mischen wie
              Druckfarben auf Papier. */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <span
              className="kreis absolute -left-8 -top-10 h-60 w-60 rounded-full opacity-70 mix-blend-multiply [--dauer:19s] [--dx:1.2rem] [--dy:1.6rem] [--verz:0ms] sm:h-80 sm:w-80"
              style={{ backgroundColor: `${farben[2].ton}80` }}
            />
            <span
              className="kreis absolute -right-6 top-1/4 h-60 w-60 rounded-full opacity-70 mix-blend-multiply [--dauer:23s] [--dx:-1.6rem] [--dy:1rem] [--verz:180ms] sm:h-80 sm:w-80"
              style={{ backgroundColor: `${farben[0].ton}66` }}
            />
            <span
              className="kreis absolute -bottom-12 left-1/4 h-56 w-56 rounded-full opacity-60 mix-blend-multiply [--dauer:27s] [--dx:1.4rem] [--dy:-1.2rem] [--verz:360ms] sm:h-72 sm:w-72"
              style={{ backgroundColor: `${farben[1].ton}59` }}
            />
          </div>
          <Faecher />
        </div>

        {/* Das Band unter dem Fächer: führt zur Anschrift im Kontaktbereich. */}
        <a
          href="#kontakt"
          className="auftritt group mt-4 flex items-center gap-4 rounded-full py-2.5 pl-2.5 pr-6 transition-transform duration-300 [--verz:1300ms] hover:-translate-y-0.5"
          style={{ backgroundColor: DUNKEL, color: CREME }}
        >
          <span
            aria-hidden="true"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
            style={{ backgroundColor: farben[0].ton }}
          >
            {/* Ortsmarke */}
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#17161a" strokeWidth="2.2">
              <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21Z" />
              <circle cx="12" cy="10" r="2.3" />
            </svg>
          </span>
          <span aria-hidden="true" className="h-7 w-px bg-white/20" />
          <span className="min-w-0 flex-1 text-[0.82rem] font-bold uppercase leading-snug tracking-[0.06em]">
            Werkstatt am {company.street}
            <span className="block font-medium normal-case tracking-normal">
              {company.zip} {company.city}
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
