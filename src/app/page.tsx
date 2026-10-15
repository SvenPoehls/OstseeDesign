import type { Metadata } from "next";
import Link from "next/link";
import CookieNotice from "@/components/layout/CookieNotice";
import { ArrowIcon } from "@/components/ui/Icons";
import { asset } from "@/lib/assets";
import { company } from "@/lib/site";

// AUSWAHLSEITE
// Zeigt die drei Entwürfe nebeneinander. Jede Kachel führt auf eine eigene
// Unterseite, auf der der Entwurf vollständig zu sehen ist.
//
// Die Vorschaubilder liegen unter public/vorschau-1.jpg … -3.jpg. Sie werden
// mit einem Skript erzeugt (siehe README) – wer einen Entwurf ändert, sollte
// das Bild danach neu erzeugen, sonst zeigt die Kachel den alten Stand.
export const metadata: Metadata = {
  title: "Drei Entwürfe für ostseedesign.de",
  description:
    "Dieselbe Website in drei Gestaltungen: Werkstatt-Druckbogen, Vitrine und Laufzettel.",
};

const entwuerfe = [
  {
    nr: "01",
    href: "/entwurf-1",
    bild: "/vorschau-1.jpg",
    name: "Werkstatt-Druckbogen",
    satz: "Soll aussehen wie ein Druckbogen aus der eigenen Werkstatt.",
    merkmale: [
      "Zweifarbendruck: Papier, schwarze Tinte und ein Zinnoberrot",
      "Große schmale Schrift, alles linksbündig am Raster",
      "Haarlinien statt Kästen, durchgehend eckig, Laufband wie ein Banner",
    ],
  },
  {
    nr: "02",
    href: "/entwurf-2",
    bild: "/vorschau-2.jpg",
    name: "Atelier",
    satz: "Soll sich lesen wie eine Zeitschrift über Handwerk.",
    merkmale: [
      "Leinenpapier und Tiefgrün, Serifenschrift",
      "Bögen als Bildform, Initial, Randnotizen, ein Zitat",
      "Seitenzahlen am Fuß – die Seite ist als Heft gebaut",
    ],
  },
  {
    nr: "03",
    href: "/entwurf-3",
    bild: "/vorschau-3.jpg",
    name: "Farbfächer",
    satz: "Soll aussehen wie der Farbfächer an der Werkstattwand.",
    merkmale: [
      "Bunt: jeder Bereich hat seine eigene Farbe",
      "Kreise liegen übereinander und mischen sich wie Druckfarben",
      "Rund und verspielt – Pillen, Scheiben, weiche Flächen",
    ],
  },
];

export default function AuswahlPage() {
  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-ink">
        <div className="wrap flex h-[4.25rem] items-center justify-between gap-6 sm:h-[4.75rem]">
          <span className="display text-[1.35rem] lowercase sm:text-[1.55rem]">
            ostseedesign<span className="text-ink-soft">.de</span>
          </span>
          <span className="text-[0.72rem] uppercase tracking-label text-ink-soft">
            Entwürfe
          </span>
        </div>
      </header>

      <main id="hauptinhalt" className="wrap pb-20 pt-14 sm:pt-20">
        <div className="grid12 border-t border-ink pt-4">
          <p className="col-span-4 text-[0.72rem] font-semibold uppercase tracking-label text-ink-soft lg:col-span-1">
            Auswahl
          </p>
          <h1 className="display col-span-4 mt-2 text-[clamp(2.2rem,6.5vw,4rem)] lg:col-span-6 lg:mt-0">
            Drei Entwürfe.
            <br />
            Einer wird es.
          </h1>
          <p className="col-span-4 mt-5 text-ink-soft lg:col-span-4 lg:col-start-9 lg:mt-0">
            Inhalt, Texte und Firmendaten sind überall gleich – verglichen wird
            nur die Gestaltung. Alle drei kommen ohne Buntfarbe aus, damit man
            sie nebeneinander beurteilen kann. Bilder sind noch Platzhalter.
          </p>
        </div>

        <div className="mt-10 grid gap-10 sm:mt-14 lg:grid-cols-3 lg:gap-8">
          {entwuerfe.map((e) => (
            <Link
              key={e.nr}
              href={e.href}
              className="group flex flex-col border-t border-ink pt-4"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-[0.72rem] font-semibold uppercase tracking-label text-ink-soft">
                  {e.nr}
                </span>
                <span className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-label text-ink-soft transition-colors group-hover:text-ink">
                  Ansehen
                  <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-200 ease-werk group-hover:translate-x-1" />
                </span>
              </div>

              <h2 className="display mt-3 text-[clamp(1.6rem,4vw,2.2rem)]">
                <span className="ul-link">{e.name}</span>
              </h2>

              {/* Vorschaubild: oben ausgerichtet, damit man den Kopfbereich
                  sieht. Der Rahmen gehört zur Kachel, nicht zum Entwurf. */}
              <div className="mt-5 h-[20rem] overflow-hidden border border-ink bg-paper-deep sm:h-[26rem] lg:h-[22rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(e.bild)}
                  alt={`Vorschau: ${e.name}`}
                  className="h-full w-full object-cover object-top transition-transform duration-500 ease-werk group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              <p className="mt-5 text-ink-soft">{e.satz}</p>

              <ul className="mt-4 space-y-2 text-[0.9rem] text-ink-soft">
                {e.merkmale.map((m) => (
                  <li key={m} className="flex gap-3 border-t border-rule pt-2">
                    <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-ink/40" />
                    {m}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>

        <p className="mt-16 max-w-reading border-t border-ink pt-4 text-[0.9rem] text-ink-soft">
          Sobald ein Entwurf gewählt ist, wird er zur eigentlichen Startseite;
          die beiden anderen fliegen raus. Bis dahin liegt jeder unter seiner
          eigenen Adresse, und die Vorschauleiste oben führt direkt von einem
          zum nächsten.
        </p>
      </main>

      <footer className="border-t border-ink">
        <div className="wrap flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-5 text-[0.78rem] text-ink-soft">
          <p>
            © 2026 {company.fullName}
          </p>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/impressum" className="ul-link">
              Impressum
            </Link>
            <Link href="/datenschutz" className="ul-link">
              Datenschutz
            </Link>
          </nav>
        </div>
      </footer>
      <CookieNotice />
    </div>
  );
}
