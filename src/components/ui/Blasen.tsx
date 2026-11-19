import type { CSSProperties } from "react";

// Luftblasen unter Wasser: wenige, dünne Kreise, die sehr langsam aufsteigen
// und dabei leicht hin und her schwanken. Nur Deko (aria-hidden). Bei
// „Bewegung reduzieren" werden sie ausgeblendet (globals.css).
// Links `l` in Prozent, Größe `g` in Pixel, Steigdauer `d` und Verzögerung `v`
// in Sekunden, seitliches Schwanken `s` in Pixel.
const blasen = [
  { l: 6, g: 14, d: 19, v: 0, s: 14 },
  { l: 13, g: 7, d: 24, v: -9, s: -10 },
  { l: 22, g: 10, d: 21, v: -15, s: 12 },
  { l: 34, g: 6, d: 27, v: -4, s: -8 },
  { l: 46, g: 12, d: 23, v: -12, s: 16 },
  { l: 57, g: 8, d: 26, v: -20, s: -12 },
  { l: 68, g: 16, d: 20, v: -7, s: 14 },
  { l: 77, g: 6, d: 28, v: -17, s: -9 },
  { l: 86, g: 11, d: 22, v: -2, s: 12 },
  { l: 94, g: 8, d: 25, v: -13, s: -11 },
];

export default function Blasen() {
  return (
    <div className="blasen" aria-hidden="true">
      {blasen.map((b, i) => (
        <span
          key={i}
          className="blase"
          style={
            {
              left: `${b.l}%`,
              width: b.g,
              height: b.g,
              "--d": `${b.d}s`,
              "--v": `${b.v}s`,
              "--s": `${b.s}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
