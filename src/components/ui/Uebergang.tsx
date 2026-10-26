import { farben } from "@/lib/farben";

// Gestrichelte Übergangslinie zwischen zwei Abschnitten (wie im Vorbild der
// orange gestrichelte Bogen). Sie wird ZWISCHEN zwei Abschnitte gesetzt und
// liegt zur Hälfte im oberen, zur Hälfte im unteren – so verbindet sie zum
// Beispiel einen dunklen mit einem hellen Abschnitt. Am Ende zeigt eine
// kleine Pfeilspitze nach unten, zum nächsten Inhalt.
//
// `start`  "links": Die Linie beginnt links und endet rechts.
//          "rechts": gespiegelt.
// `form`   1 = langer Doppelbogen, 2 = flacher Bogen mit Schlaufe. So sehen
//          zwei Übergänge mit gleicher Richtung nicht gleich aus.
//
// Sie nimmt keinen Platz weg (Höhe 0) und liegt im Innenabstand der
// Abschnitte (`.abschnitt` in globals.css), also nie über Text.
//
// BEWEGUNG: Beim Hinscrollen zeichnet sie sich von ihrem Anfang her
// (data-art="linie", siehe globals.css).
//
// `vector-effect: non-scaling-stroke` hält die Strichstärke auf jedem
// Bildschirm gleich, auch wenn die Linie auf dem Handy kleiner wird.
const FORMEN = {
  1: {
    linie: "M 30 40 C 200 30 250 190 500 172 C 740 155 850 40 1030 66 C 1110 78 1140 130 1140 208",
    spitze: "M 1122 190 L 1140 212 L 1158 190",
  },
  2: {
    linie: "M 40 70 C 260 150 470 175 640 120 C 760 80 800 20 730 30 C 660 42 700 150 880 170 C 1010 184 1100 150 1120 212",
    spitze: "M 1102 196 L 1121 214 L 1136 192",
  },
} as const;

export default function Uebergang({
  start = "links",
  form = 1,
}: {
  start?: "links" | "rechts";
  form?: 1 | 2;
}) {
  return (
    <div aria-hidden="true" className="pointer-events-none relative z-10 h-0">
      <div className="seitenrand">
        <svg
          data-reveal
          data-art="linie"
          data-start={start}
          viewBox="0 0 1200 240"
          fill="none"
          className="block h-auto w-full -translate-y-1/2"
        >
          <g transform={start === "rechts" ? "translate(1200 0) scale(-1 1)" : undefined}>
            <path
              d={FORMEN[form].linie}
              stroke={farben[0].ton}
              strokeWidth="2.5"
              strokeDasharray="11 10"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d={FORMEN[form].spitze}
              stroke={farben[0].ton}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
