import type { CSSProperties } from "react";
import Link from "next/link";
import { LEISE, farben } from "@/lib/farben";
import { leistungsLink, services } from "@/lib/site";

// Der Farbfächer: vier Muster nebeneinander, wie die Karte an der Wand.
//
// BEWEGUNG: Die Karten klappen nacheinander auf wie ein Fächer. Jede startet
// leicht verdreht (`--winkel`) und zur Mitte hin verschoben (`--von`) und
// legt sich dann an ihren Platz. Die beiden äußeren drehen am weitesten.
//
// `overflow-x-clip`: Während des Aufklappens stehen die Karten seitlich
// versetzt und würden die Seite kurz breiter machen als den Bildschirm. Das
// wäre auf dem Handy als Wackeln sichtbar. „clip" schneidet nur waagerecht ab
// (anders als „hidden" bleibt oben/unten alles sichtbar, das Anheben beim
// Überfahren also auch).
const aufklappen = [
  { von: "9rem", winkel: "-7deg" },
  { von: "3rem", winkel: "-2.5deg" },
  { von: "-3rem", winkel: "2.5deg" },
  { von: "-9rem", winkel: "7deg" },
];

export default function Faecher() {
  return (
    <section className="mt-10 grid grid-cols-2 gap-3 overflow-x-clip sm:gap-4 lg:grid-cols-4">
      {services.map((service, i) => {
        const stil = {
          backgroundColor: `${farben[i].ton}1f`,
          "--von": aufklappen[i].von,
          "--winkel": aufklappen[i].winkel,
          "--verz": `${900 + i * 130}ms`,
        } as CSSProperties;
        const klasse =
          "faecher-karte group rounded-[28px] p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6";
        const inhalt = (
          <>
            <span
              className="block h-12 w-12 rounded-full transition-transform duration-500 group-hover:scale-110 sm:h-14 sm:w-14"
              style={{ backgroundColor: farben[i].ton }}
            />
            <p className="mt-4 text-[1.05rem] font-extrabold tracking-[-0.02em]">
              {service.title}
            </p>
            <p className="mt-1 text-[0.82rem]" style={{ color: LEISE }}>
              Farbe {String(i + 1).padStart(2, "0")} · {farben[i].name}
            </p>
          </>
        );
        // Drei Karten führen auf ihre Unterseite, die vierte zum externen Shop.
        return service.external ? (
          <a
            key={service.id}
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
            href={leistungsLink(service)}
            className={klasse}
            style={stil}
          >
            {inhalt}
          </Link>
        );
      })}
    </section>
  );
}
