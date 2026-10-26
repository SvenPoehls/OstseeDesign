import { LEISE, farben } from "@/lib/farben";
import { services } from "@/lib/site";
import Bild from "@/components/ui/Bild";

// Leistungen. Jeder Bereich bekommt seine Farbe und eine eigene Fläche.
// Die erste ist die größte – das ist auch der größte Bereich im Betrieb.
//
// BEWEGUNG: Die Flächen erscheinen beim Scrollen (data-reveal), je zwei
// nebeneinander leicht versetzt. Beim Überfahren hebt sich die Fläche und
// der Eckkreis wächst.
const notes: Record<string, string> = {
  textilveredelung: "Stickmaschine, Nahaufnahme vom Garn",
  werbetechnik: "Frisch beschrifteter Transporter",
  drucksachen: "Visitenkarten auf dem Werkstatttisch",
  textilshop: "Stapel veredelter Arbeitskleidung",
};

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
          const Flaeche = service.external ? "a" : "article";
          return (
            <Flaeche
              key={service.id}
              id={service.id}
              data-reveal
              {...(service.external
                ? { href: service.external, target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={`group relative scroll-mt-28 overflow-hidden rounded-[32px] p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-9 ${
                gross ? "lg:col-span-7" : "lg:col-span-5"
              } ${i % 2 === 1 ? "[--verz:120ms]" : ""}`}
              style={{ backgroundColor: `${farben[i].ton}1a` }}
            >
              {/* Großer Kreis in der Ecke, halb durchsichtig. */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full opacity-60 mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundColor: `${farben[i].ton}59` }}
              />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <span
                    className="h-7 w-7 rounded-full"
                    style={{ backgroundColor: farben[i].ton }}
                  />
                  <h3 className="text-[1.5rem] font-extrabold tracking-[-0.03em] sm:text-[1.85rem]">
                    {service.title}
                  </h3>
                  {service.external && (
                    <span className="ml-auto rounded-full bg-white/80 px-4 py-1.5 text-[0.8rem] font-bold">
                      Zum Shop ↗
                    </span>
                  )}
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
                  note={notes[service.id]}
                  ton={farben[i].ton}
                  className={`mt-7 ${gross ? "h-60 sm:h-72" : "h-48 sm:h-56"}`}
                />
              </div>
            </Flaeche>
          );
        })}
      </div>
    </section>
  );
}
