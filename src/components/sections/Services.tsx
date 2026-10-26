import Link from "next/link";
import { LEISE, farben } from "@/lib/farben";
import { leistungsLink, services } from "@/lib/site";
import Bild from "@/components/ui/Bild";

// Leistungen. Jeder Bereich bekommt seine Farbe und eine eigene Fläche.
// Die erste ist die größte – das ist auch der größte Bereich im Betrieb.
//
// Jede Fläche führt auf die Unterseite ihrer Leistung (der Textilshop auf die
// externe Seite). Das Motiv des Platzhalterfotos steht in `site.ts`.
//
// BEWEGUNG: Die Flächen erscheinen beim Scrollen (data-reveal), je zwei
// nebeneinander leicht versetzt. Beim Überfahren hebt sich die Fläche und
// der Eckkreis wächst.
export default function Services() {
  return (
    <section id="leistungen" className="mt-16 scroll-mt-28 sm:mt-24">
      <div data-reveal className="max-w-[30rem]">
        <p className="text-[0.88rem] font-bold" style={{ color: farben[1].ton }}>
          Leistungen
        </p>
        <h2 className="mt-2 text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight tracking-[-0.04em]">
          Vier Farben, eine Werkstatt
        </h2>
      </div>

      <div className="mt-8 grid gap-4 sm:gap-5 lg:grid-cols-12">
        {services.map((service, i) => {
          const gross = i === 0 || i === 3;
          const klasse = `group relative overflow-hidden rounded-kachel p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-9 ${
            gross ? "lg:col-span-7" : "lg:col-span-5"
          } ${i % 2 === 1 ? "[--verz:120ms]" : ""}`;
          const stil = { backgroundColor: `${farben[i].ton}1a` };

          const inhalt = (
            <>
              {/* Großer Kreis in der Ecke, halb durchsichtig. */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full opacity-60 mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundColor: `${farben[i].ton}59` }}
              />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <span
                    className="h-7 w-7 shrink-0 rounded-full"
                    style={{ backgroundColor: farben[i].ton }}
                  />
                  <h3 className="text-[1.5rem] font-extrabold tracking-[-0.03em] sm:text-[1.85rem]">
                    {service.title}
                  </h3>
                  <span className="ml-auto shrink-0 rounded-full bg-white/80 px-4 py-1.5 text-[0.8rem] font-bold">
                    {service.external ? "Zum Shop ↗" : "Mehr erfahren →"}
                  </span>
                </div>

                <p
                  className="mt-4 max-w-[34rem] leading-relaxed"
                  style={{ color: LEISE }}
                >
                  {service.teaser}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-full bg-white/70 px-4 py-1.5 text-[0.85rem] font-medium"
                    >
                      {point}
                    </li>
                  ))}
                </ul>

                <Bild
                  note={service.bilder[0]}
                  ton={farben[i].ton}
                  className={`mt-7 ${gross ? "h-60 sm:h-72" : "h-48 sm:h-56"}`}
                />
              </div>
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
    </section>
  );
}
