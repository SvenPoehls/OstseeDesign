import type { CSSProperties } from "react";
import Link from "next/link";
import Etikett from "@/components/ui/Etikett";
import { platzhalterFlaeche } from "@/components/ui/Bild";
import { LEISE, farben } from "@/lib/farben";
import { services, unterseiten } from "@/lib/site";

// „Einblicke": drei Fotos, locker hingeworfen wie Abzüge auf dem Werktisch –
// verschieden groß, leicht schräg, in der Höhe versetzt, jedes mit einem
// Streifen Klebeband in der Leistungsfarbe. Je Leistung ihr erstes Foto-Motiv
// aus site.ts. Solange es keine echten Fotos gibt, stehen dort Platzhalter.
//
// Jedes Foto führt auf die Unterseite seiner Leistung.
//
// BEIM ÜBERFAHREN richtet sich die Karte gerade, hebt sich leicht, das Foto
// zoomt ein wenig, das Motiv wird unterstrichen und der Pfeil blau.
//
// SCHRIFT BLEIBT RUHIG: Ohne Gegenmaßnahme dreht der Browser die Karte
// während der Bewegung als Bild und zeichnet am Ende die schräge Schrift neu
// als Text – bei diesem Umschalten sprangen kleine Teile wie i-Punkte. Die
// Klasse `schief-karte` (globals.css) lässt die Karte dauerhaft als ruhendes
// Bild behandeln: Die Schrift wird einmal gezeichnet und dreht sich als
// Ganzes mit, ohne Umschalten. Außerdem wird sie dort ohne Runden auf ganze
// Bildpunkte gezeichnet, damit auch im Ruhezustand kein i-Punkt verrutscht.
//
// ANORDNUNG je Foto (`LAGE`): Spaltenbreite auf großen Bildschirmen,
// Seitenverhältnis, Versatz nach unten und Drehung. Auf dem Handy stehen die
// drei untereinander, abwechselnd nach links und rechts gerückt.
//
// ECHTE FOTOS: In der Kachel das <span …platzhalterFlaeche…/> durch ein
//   <img src={asset("/datei.jpg")} alt="…" className="absolute inset-0 h-full w-full object-cover" />
// ersetzen (asset kommt aus @/lib/assets).
const LAGE = [
  { spalte: "lg:col-span-5", form: "aspect-[4/5]", versatz: "", drehung: "-rotate-2", seite: "mr-6 sm:mr-24 lg:mr-0" },
  { spalte: "lg:col-span-4", form: "aspect-square", versatz: "lg:mt-28", drehung: "rotate-3", seite: "ml-6 sm:ml-24 lg:ml-0" },
  { spalte: "lg:col-span-3", form: "aspect-[3/4]", versatz: "lg:mt-10", drehung: "-rotate-1", seite: "mr-10 sm:mr-32 lg:mr-0" },
];

export default function Einblicke() {
  const fotos = unterseiten.map((service) => ({
    service,
    motiv: service.bilder[0],
    ton: farben[services.indexOf(service)].ton,
  }));

  return (
    <section className="abschnitt overflow-x-clip pt-0 sm:pt-0 lg:pt-0">
      <div className="seitenrand">
        <div data-reveal className="max-w-[44rem]">
          <Etikett>Einblicke</Etikett>
          <h2 className="titel mt-6">
            Aus unserer{" "}
            <span className="markiert" style={{ "--ton": farben[2].ton } as CSSProperties}>
              Arbeit
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-10">
          {fotos.map(({ service, motiv, ton }, n) => {
            const lage = LAGE[n];
            return (
              <div
                key={motiv}
                data-reveal
                className={`${lage.spalte} ${lage.versatz} ${lage.seite}`}
                style={{ "--verz": `${n * 140}ms` } as CSSProperties}
              >
                <Link
                  href={`/${service.id}`}
                  className={`schief-karte group relative block ${lage.drehung} rounded-kachel bg-white p-3 pb-5 shadow-[0_18px_40px_-18px_rgba(15,27,45,0.4)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:rotate-0 hover:shadow-[0_26px_50px_-18px_rgba(15,27,45,0.55)]`}
                >
                  {/* Klebeband oben in der Mitte */}
                  <span
                    aria-hidden="true"
                    className="absolute -top-3 left-1/2 z-10 h-7 w-24 -translate-x-1/2 -rotate-3 rounded-[3px] opacity-80"
                    style={{ backgroundColor: ton }}
                  />
                  <span className={`relative block ${lage.form} overflow-hidden rounded-bild`}>
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                      style={platzhalterFlaeche(ton)}
                    />
                  </span>
                  <span className="mt-4 block px-2">
                    <span
                      className="flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.14em]"
                      style={{ color: LEISE }}
                    >
                      <span aria-hidden="true" className="h-2 w-2 rounded-full" style={{ backgroundColor: ton }} />
                      {service.title}
                    </span>
                    <span className="mt-1.5 flex items-baseline justify-between gap-3 text-[1.05rem] font-extrabold leading-snug tracking-[-0.01em]">
                      <span className="decoration-2 underline-offset-4 group-hover:underline" style={{ textDecorationColor: ton }}>
                        {motiv}
                      </span>
                      <span
                        aria-hidden="true"
                        className="shrink-0 transition-colors duration-300 group-hover:text-[var(--akzent)]"
                        style={{ "--akzent": farben[0].ton } as CSSProperties}
                      >
                        →
                      </span>
                    </span>
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
