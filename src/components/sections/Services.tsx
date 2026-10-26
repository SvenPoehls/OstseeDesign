import type { CSSProperties } from "react";
import Link from "next/link";
import Etikett from "@/components/ui/Etikett";
import { KNOPF, KNOPF_SCHRIFT, LEISE, farben } from "@/lib/farben";
import { leistungsLink, services, textilShopUrl } from "@/lib/site";

// Leistungen: oben Etikett und Überschrift, darunter vier Karten – je
// Leistung eine, mit großer Nummer (= Farbe 01 bis 04 aus dem Fächer),
// Farbpunkt, Kurztext und den Punkten als Liste. Ganz unten ein Satz und zwei
// Knöpfe.
//
// TREPPE: Auf breiten Bildschirmen steht jede Karte ein Stück tiefer als die
// vorige (`STUFE`), sodass die vier zusammen eine Treppe nach rechts unten
// bilden. Alle Karten sind gleich hoch, damit die Stufen gleichmäßig sind.
// Auf dem Tablet (zwei Spalten) ist nur die rechte Spalte versetzt, auf dem
// Handy stehen sie einfach untereinander.
//
// Jede Karte führt auf die Unterseite ihrer Leistung (der Textilshop auf die
// externe Seite).
//
// BEWEGUNG: Die Karten erscheinen beim Scrollen nacheinander. Beim Überfahren
// hebt sich die Karte und der Eckkreis wächst.
const STUFE = ["", "sm:mt-16 lg:mt-20", "lg:mt-40", "sm:mt-16 lg:mt-60"];

export default function Services() {
  return (
    <section id="leistungen" className="abschnitt scroll-mt-28">
      <div className="seitenrand">
        <div data-reveal className="max-w-[44rem]">
          <Etikett>Leistungen</Etikett>
          <h2 className="titel mt-6">
            Vier Farben,{" "}
            <span className="markiert" style={{ "--ton": `${farben[1].ton}66` } as CSSProperties}>
              eine Werkstatt
            </span>
          </h2>
        </div>

        <div className="mt-12 grid items-start gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {services.map((service, i) => {
            const klasse =
              `group relative flex flex-col overflow-hidden rounded-kachel p-6 transition-transform duration-300 hover:-translate-y-1 sm:min-h-[33rem] sm:p-7 ${STUFE[i]}`;
            const stil = {
              backgroundColor: `${farben[i].ton}1a`,
              "--verz": `${i * 120}ms`,
            } as CSSProperties;

            const inhalt = (
              <>
                {/* Großer Kreis in der Ecke, halb durchsichtig. */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full opacity-60 mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundColor: `${farben[i].ton}59` }}
                />
                <div className="relative flex items-start justify-between">
                  <span
                    aria-hidden="true"
                    className="h-12 w-12 rounded-full"
                    style={{ backgroundColor: farben[i].ton }}
                  />
                  <span aria-hidden="true" className="text-[2.6rem] font-black leading-none tracking-[-0.04em] text-tinte/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="relative mt-6 text-[1.35rem] font-black uppercase tracking-[-0.02em]">
                  {service.title}
                </h3>
                <p className="relative mt-3 text-[0.95rem] leading-relaxed" style={{ color: LEISE }}>
                  {service.teaser}
                </p>

                <ul className="relative mt-5 space-y-2 border-t border-tinte/10 pt-5 text-[0.92rem] font-medium">
                  {service.points.map((punkt) => (
                    <li key={punkt} className="flex gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-[0.45rem] h-2 w-2 shrink-0 rounded-full"
                        style={{ backgroundColor: farben[i].ton }}
                      />
                      {punkt}
                    </li>
                  ))}
                </ul>

                <span className="relative mt-auto inline-flex items-center gap-2 pt-7 text-[0.85rem] font-bold uppercase tracking-[0.06em]">
                  {service.external ? "Zum Shop" : "Mehr erfahren"}
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                    {service.external ? "↗" : "→"}
                  </span>
                </span>
              </>
            );

            return service.external ? (
              <a
                key={service.id}
                data-reveal
                href={leistungsLink(service)}
                target="_blank"
                rel="noopener noreferrer"
                className={klasse}
                style={stil}
              >
                {inhalt}
              </a>
            ) : (
              <Link
                key={service.id}
                data-reveal
                href={leistungsLink(service)}
                className={klasse}
                style={stil}
              >
                {inhalt}
              </Link>
            );
          })}
        </div>

        <div
          data-reveal
          className="mt-12 flex flex-col gap-6 rounded-kachel bg-white/60 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <p className="text-[1.15rem] font-semibold leading-snug">
            Sie wissen noch nicht genau, was Sie brauchen?{" "}
            <em className="font-extrabold not-italic">Wir sagen Ihnen, welche Technik passt.</em>
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[0.88rem] font-bold uppercase tracking-[0.04em] transition-transform duration-300 hover:-translate-y-0.5"
              style={{ backgroundColor: KNOPF, color: KNOPF_SCHRIFT }}
            >
              <span aria-hidden="true">→</span> Projekt besprechen
            </a>
            <a
              href={textilShopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[0.88rem] font-bold uppercase tracking-[0.04em] transition-transform duration-300 hover:-translate-y-0.5"
              style={{ boxShadow: "inset 0 0 0 1.5px rgba(30,24,20,0.2)" }}
            >
              Zum Textilshop <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
