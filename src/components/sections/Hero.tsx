// Kopfbereich: zentrierter Text vor einem großen, weich auslaufenden Kreis.
//
// HINWEIS: Die sechs Bildkarten, die früher links und rechts neben dem Kreis
// lagen (auf dem Handy als Reihe darunter), sind entfernt. Der Platz daneben
// bleibt vorerst frei – dort kommt später etwas anderes hin.
// Wenn es so weit ist: Der Kreis steht als eigener Block ganz oben in diesem
// Abschnitt, der Textblock darunter hat `relative z-10`. Neues also entweder
// in den Textblock einhängen oder als weiteren absolut gesetzten Block direkt
// nach dem Kreis einfügen. Die Bildunterschriften von damals stehen noch als
// `heroFan` in src/lib/site.ts.
import Link from "next/link";
import { ArrowIcon, PhoneIcon } from "@/components/ui/Icons";
import { company } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-[26rem] items-start overflow-hidden bg-paper pb-14 pt-8 sm:min-h-[30rem] sm:pb-20 sm:pt-12 lg:min-h-[34rem]">
      {/* Grauer Kreis im Hintergrund. Er läuft nach außen weich aus, damit
          keine sichtbare Kante entsteht, und liegt vollständig innerhalb des
          Kopfbereichs. (Kein negativer z-index: sonst verschwindet er hinter
          dem weißen Abschnitts-Hintergrund.) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full sm:h-[34rem] sm:w-[34rem] lg:h-[40rem] lg:w-[40rem]"
        style={{
          background:
            "radial-gradient(circle closest-side, var(--circle) 0 50%, rgba(228,231,236,0.5) 76%, rgba(228,231,236,0) 100%)",
        }}
      />

      <div className="container-site relative z-10 pt-4 sm:pt-8 lg:pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="chip">
            <span className="h-2 w-2 rounded-full bg-pop" aria-hidden="true" />
            {company.city}, {company.street}
          </span>

          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:mt-6 sm:text-5xl lg:text-6xl">
            Ihr Logo aufs Shirt, aufs Auto oder{" "}
            <span className="em">an die Wand.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-muted sm:mt-5">
            Wir besticken und bedrucken Kleidung, beschriften Fahrzeuge und
            machen Schilder. Seit über {company.yearsExperience} Jahren hier in{" "}
            {company.city}.
          </p>

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
