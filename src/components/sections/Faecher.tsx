import type { CSSProperties } from "react";
import Link from "next/link";
import { LEISE, farben } from "@/lib/farben";
import { leistungsLink, services } from "@/lib/site";

// Der Farbfächer: vier Muster, zwei mal zwei, wie die Karte an der Wand.
// Steht rechts im Kopfbereich der Startseite (Hero.tsx).
//
// BEWEGUNG: Die Karten klappen nacheinander auf wie ein Fächer. Jede startet
// leicht verdreht (`--winkel`) und zur Mitte hin verschoben (`--von`) und
// legt sich dann an ihren Platz.
const aufklappen = [
  { von: "4rem", winkel: "-6deg" },
  { von: "-4rem", winkel: "6deg" },
  { von: "4rem", winkel: "-4deg" },
  { von: "-4rem", winkel: "4deg" },
];

export default function Faecher() {
  return (
    <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
      {services.map((service, i) => {
        const stil = {
          backgroundColor: "rgba(255,255,255,0.72)",
          "--von": aufklappen[i].von,
          "--winkel": aufklappen[i].winkel,
          "--verz": `${700 + i * 130}ms`,
        } as CSSProperties;
        const klasse =
          "faecher-karte group rounded-kachel p-4 backdrop-blur transition-transform duration-300 hover:-translate-y-1 sm:p-6";
        const inhalt = (
          <>
            <span
              className="block h-11 w-11 rounded-full transition-transform duration-500 group-hover:scale-110 sm:h-16 sm:w-16"
              style={{ backgroundColor: farben[i].ton }}
            />
            <p className="mt-4 text-[0.98rem] font-extrabold tracking-[-0.02em] sm:mt-6 sm:text-[1.1rem]">
              {service.title}
              {service.external && <span aria-hidden="true"> ↗</span>}
            </p>
            <p className="mt-1 text-[0.8rem]" style={{ color: LEISE }}>
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
    </div>
  );
}
