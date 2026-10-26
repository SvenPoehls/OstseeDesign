import type { CSSProperties } from "react";
import Link from "next/link";
import Etikett from "@/components/ui/Etikett";
import { platzhalterFlaeche } from "@/components/ui/Bild";
import { LEISE, farben } from "@/lib/farben";
import { services, unterseiten } from "@/lib/site";

// „Einblicke": eine Bildergalerie drei mal drei, wie im Vorbild „Some of our
// favorite work". Je Leistung ihre drei Foto-Motive aus site.ts. Solange es
// keine echten Fotos gibt, stehen dort getönte Platzhalter.
//
// Jede Kachel führt auf die Unterseite ihrer Leistung. Unten liegt eine
// Beschriftung (Leistung, Motiv) und eine Leiste in der Leistungsfarbe, die
// beim Überfahren breiter wird.
//
// ECHTE FOTOS: In der Kachel das <span …platzhalterFlaeche…/> durch ein
//   <img src={asset("/datei.jpg")} alt="…" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
// ersetzen (asset kommt aus @/lib/assets).
export default function Einblicke() {
  const kacheln = unterseiten.flatMap((service) => {
    const i = services.indexOf(service);
    return service.bilder.map((motiv) => ({ service, motiv, ton: farben[i].ton }));
  });

  return (
    <section className="abschnitt pt-0 sm:pt-0 lg:pt-0">
      <div className="seitenrand">
        <div data-reveal className="max-w-[44rem]">
          <Etikett>Einblicke</Etikett>
          <h2 className="titel mt-6">
            Aus der{" "}
            <span className="markiert" style={{ "--ton": `${farben[2].ton}` } as CSSProperties}>
              Werkstatt
            </span>
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {kacheln.map(({ service, motiv, ton }, n) => (
            <Link
              key={motiv}
              href={`/${service.id}`}
              data-reveal
              className="group relative block aspect-[16/11] overflow-hidden rounded-kachel"
              style={{ "--verz": `${(n % 3) * 110}ms` } as CSSProperties}
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={platzhalterFlaeche(ton)}
              />
              <span className="absolute inset-x-3 bottom-3 rounded-bild bg-white/90 p-4 backdrop-blur">
                <span className="flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.14em]" style={{ color: LEISE }}>
                  <span aria-hidden="true" className="h-2 w-2 rounded-full" style={{ backgroundColor: ton }} />
                  {service.title}
                </span>
                <span className="mt-1.5 block text-[1rem] font-extrabold leading-snug tracking-[-0.01em]">
                  {motiv}
                </span>
                <span className="mt-2 inline-flex items-center gap-1.5 text-[0.75rem] font-bold uppercase tracking-[0.08em]">
                  Zur Leistung
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </span>
              {/* Farbleiste am unteren Rand, wird beim Überfahren voll breit. */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-1.5 w-1/3 transition-[width] duration-500 group-hover:w-full"
                style={{ backgroundColor: ton }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
