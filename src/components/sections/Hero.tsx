// Kopfbereich: heller Text auf einem dunkel abgetönten Hintergrundbild.
//
// Aufbau von hinten nach vorn:
//   1. Hintergrundbild (Platzhalter public/hero.svg, formatfüllend)
//   2. dunkler Schleier – macht die weiße Schrift auf jedem Foto lesbar und
//      läuft unten in Weiß aus, damit der Übergang zum nächsten Abschnitt
//      sauber ist
//   3. der weiche Lichtkreis wie bisher, nur hell statt grau
//   4. Text, Schlagzeile und die beiden Schaltflächen
//
// ECHTES FOTO EINSETZEN: Datei als "hero.jpg" in den Ordner public legen und
// in der Zeile `hintergrundBild` unten "/hero.svg" durch "/hero.jpg" ersetzen.
// Mehr ist nicht nötig – der Schleier sorgt dafür, dass die Schrift lesbar
// bleibt, egal wie hell oder dunkel das Foto ist.
//
// HINWEIS: Die sechs Bildkarten, die früher links und rechts neben dem Kreis
// lagen, sind entfernt. Ihre Bildunterschriften stehen noch als `heroFan` in
// src/lib/site.ts, falls sie später wieder gebraucht werden.
import Link from "next/link";
import { ArrowIcon, PhoneIcon } from "@/components/ui/Icons";
import { asset } from "@/lib/assets";
import { company } from "@/lib/site";

const hintergrundBild = "/hero.svg";

export default function Hero() {
  return (
    <section className="relative -mt-[4.375rem] flex min-h-[30rem] items-center overflow-hidden bg-ink pb-14 pt-[7.5rem] sm:-mt-[4.875rem] sm:min-h-[34rem] sm:pb-20 sm:pt-[9rem] lg:min-h-[38rem]">
      {/* 1 – Hintergrundbild */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${asset(hintergrundBild)})` }}
      />

      {/* 2 – Dunkler Schleier. Bewusst mit festen Farbwerten (nicht mit
          Tailwind-Transparenz), damit der Verlauf unten exakt in die weiße
          Fläche des nächsten Abschnitts übergeht. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(20,23,28,0.80) 0%, rgba(20,23,28,0.72) 45%, rgba(20,23,28,0.86) 88%, rgba(26,29,35,1) 100%)",
        }}
      />

      {/* 3 – Weicher Lichtschein hinter der Schlagzeile. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-[38rem] sm:w-[38rem] lg:h-[46rem] lg:w-[46rem]"
        style={{
          background:
            "radial-gradient(circle closest-side, rgba(255,255,255,0.14) 0 45%, rgba(255,255,255,0.05) 74%, rgba(255,255,255,0) 100%)",
        }}
      />

      {/* 4 – Inhalt */}
      <div className="container-site relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-label text-white/60">
            <span
              className="h-1.5 w-1.5 rounded-full bg-white/60"
              aria-hidden="true"
            />
            {company.city}, {company.street}
          </span>

          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ihr Logo aufs Shirt, aufs Auto oder{" "}
            <span className="text-white/55">an die Wand.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/75 sm:mt-6">
            Wir besticken und bedrucken Kleidung, beschriften Fahrzeuge und
            machen Schilder. Seit über {company.yearsExperience} Jahren hier in{" "}
            {company.city}.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/#kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold tracking-tight text-ink shadow-sm transition-colors duration-200 hover:bg-white/90"
            >
              Projekt besprechen
              <ArrowIcon className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${company.phoneHref}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/35 px-5 py-2.5 text-sm font-semibold tracking-tight text-white transition-colors duration-200 hover:bg-white/10"
            >
              <PhoneIcon className="h-4 w-4" />
              {company.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
