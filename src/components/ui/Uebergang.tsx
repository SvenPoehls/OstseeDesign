import { farben } from "@/lib/farben";

// Gestrichelte Übergangslinie zwischen zwei Abschnitten (wie im Vorbild der
// orange gestrichelte Bogen). Sie wird ZWISCHEN zwei Abschnitte gesetzt und
// liegt zur Hälfte im oberen, zur Hälfte im unteren – so verbindet sie zum
// Beispiel einen braunen mit einem hellen Abschnitt. Am Ende zeigt eine
// Pfeilspitze nach unten, zum nächsten Inhalt.
//
// `start`  "links": Die Linie beginnt links und endet rechts.
//          "rechts": gespiegelt.
// `form`   1 = langer Doppelbogen, 2 = flacher Bogen mit Schlaufe. So sehen
//          zwei Übergänge mit gleicher Richtung nicht gleich aus.
//
// Sie nimmt keinen Platz weg (Höhe 0) und liegt im Innenabstand der
// Abschnitte (`.abschnitt` in globals.css), also nie über Text.
//
// SAUBERE PFEILSPITZE:
//   • Jede Linie endet mit einem geraden, senkrechten Stück. Die Spitze sitzt
//     genau an dessen Ende und zeigt in dieselbe Richtung.
//   • `pathLength="100"`: Die Länge der Linie zählt als 100. Strich und Lücke
//     (`strich`) sind so berechnet, dass genau n Mal „Strich + Lücke" plus ein
//     letzter Strich hineinpassen – die Linie hört also immer mit einem Strich
//     an der Spitze auf, nie mit einer Lücke davor. Ändert man eine Form,
//     müssen diese Werte neu berechnet werden (Strich ≈ 11, Lücke ≈ 10
//     Einheiten der echten Länge).
//   • Die Strichstärke steht in globals.css (`.linie-strich`) und wird je
//     Bildschirmbreite so gewählt, dass sie überall etwa gleich dick aussieht.
//
// BEWEGUNG: Beim Hinscrollen zeichnet sie sich von ihrem Anfang her
// (data-art="linie", siehe globals.css).
const FORMEN = {
  1: {
    linie: "M 30 40 C 200 30 250 190 500 172 C 740 155 850 40 1030 66 C 1110 78 1140 130 1140 210",
    spitze: "M 1120 190 L 1140 212 L 1160 190",
    strich: "0.8844 0.7955", // Länge 1244 → 59 × Strich+Lücke + 1 Strich
  },
  2: {
    linie: "M 40 70 C 260 150 470 175 640 120 C 760 80 800 20 730 30 C 660 42 700 150 880 170 C 1010 184 1120 140 1120 190 L 1120 210",
    spitze: "M 1100 190 L 1120 212 L 1140 190",
    strich: "0.8117 0.7382", // Länge 1355 → 64 × Strich+Lücke + 1 Strich
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
              pathLength="100"
              className="linie-strich"
              stroke={farben[0].ton}
              strokeDasharray={FORMEN[form].strich}
              strokeLinecap="round"
            />
            <path
              d={FORMEN[form].spitze}
              className="linie-strich"
              stroke={farben[0].ton}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
