// ───────────────────────────────────────────────────────────────────────
//  SKIZZEN STATT PLATZHALTERBILDER
// ───────────────────────────────────────────────────────────────────────
//  Überall dort, wo später ein echtes Foto hinkommt, steht jetzt eine
//  Handzeichnung. Jede besteht aus zwei Teilen:
//
//    1. dem klassischen Platzhalter-Zeichen – ein Rechteck mit zwei
//       Diagonalen. Es wird über die ganze Fläche gezogen, egal wie breit
//       oder hoch sie ist.
//    2. einem Motiv, das zum Inhalt passt (Werkstatt, Transporter, Shirt,
//       Drucksachen …). Es liegt mittig darin und wird nie verzerrt.
//
//  Die Linien sind von Hand „krumm" gezeichnet: Jede Kurve weicht ein
//  Stück von der Geraden ab. Dadurch ist kein Strich wie der andere –
//  genau das unterscheidet eine Skizze von einer Computergrafik.
//
//  WENN ECHTE FOTOS DA SIND: In der jeweiligen Sektion das <Skizze …/>
//  durch ein <img> ersetzen. Die Bildunterschriften daneben sagen schon
//  heute, welches Motiv gedacht ist.
//
//  Strichstärke: Alle Linien benutzen `vector-effect: non-scaling-stroke`.
//  Das heißt: derselbe Stift für die große Fläche im Kopfbereich wie für
//  die kleine Skizze in der Liste – die Linie wird nie mitvergrößert.

export type SkizzenMotiv =
  | "werkstatt"
  | "textil"
  | "fahrzeug"
  | "druck"
  | "shop"
  | "gespraech"
  | "entwurf"
  | "feinschliff"
  | "umsetzung";

// ── Hilfsmittel ─────────────────────────────────────────────────────────

// Schraffur: parallele Striche in einem Rechteck, schräg von unten links
// nach oben rechts. So füllt ein Zeichner eine Fläche – nicht mit Farbe,
// sondern mit Strichen.
function schraffur(
  x: number,
  y: number,
  w: number,
  h: number,
  abstand = 9
): string {
  const striche: string[] = [];
  for (let t = -h; t < w; t += abstand) {
    let x1 = x + t;
    let y1 = y + h;
    let x2 = x + t + h;
    let y2 = y;
    if (x1 < x) {
      const d = x - x1;
      x1 = x;
      y1 -= d;
    }
    if (x2 > x + w) {
      const d = x2 - (x + w);
      x2 = x + w;
      y2 += d;
    }
    if (x2 - x1 < 1.5) continue;
    // Jeder Strich endet ein kleines Stück vorher oder später – sonst
    // sieht die Schraffur wie mit dem Lineal gezogen aus.
    const k = wackel(t);
    striche.push(
      `M${(x1 + k).toFixed(1)} ${(y1 - k).toFixed(1)}L${(x2 - k * 1.4).toFixed(
        1
      )} ${(y2 + k * 1.4).toFixed(1)}`
    );
  }
  return striche.join("");
}

// Immer dieselbe „Zufälligkeit": Aus einer Zahl wird ein kleiner Versatz
// zwischen etwa −1 und +1. Weil die Rechnung feststeht, sieht die Zeichnung
// auf dem Server und im Browser identisch aus.
function wackel(n: number): number {
  const s = Math.sin(n * 12.9898) * 43758.5453;
  return (s - Math.floor(s)) * 2 - 1;
}

type MotivProps = { className?: string };

// ── Die Motive ──────────────────────────────────────────────────────────
// Alle im selben Koordinatenfeld 320 × 200, damit sie sich gleich verhalten.

// Der Kopfbereich ist viel breiter als hoch. Damit die Zeichnung ihn füllt
// und nicht als kleiner Klecks in der Mitte sitzt, hat dieses Motiv ein
// breiteres Feld (520 statt 320) und die Bausteine stehen nebeneinander:
// Halle – jemand davor – Transporter – Schild. Die einzelnen Gruppen sind
// nur verschoben, nicht vergrößert; die Striche bleiben also gleich dick.
function Werkstatt() {
  return (
    <>
      {/* Horizont über die ganze Breite */}
      <path d="M8 150c64-2 128 1 192-1 70-2 140 2 210 0 38-1 76 1 104 0" opacity=".45" />

      {/* Halle mit Satteldach */}
      <g transform="translate(28 0)">
        <path d="M26 150c-1-24 0-44-1-62 0-3 1-5 4-6 20-9 40-18 60-26 3-1 5-1 8 0 19 9 39 17 58 26 2 1 3 3 3 6-1 20 0 41-1 62" />
        <path d="M22 84c22-10 44-20 67-29 23 9 45 19 67 29" opacity=".8" />
        {/* Tor */}
        <path d="M62 150c0-20-1-35 0-44 0-2 1-3 3-3 15-1 31-1 46 0 2 0 3 1 3 3 0 9 0 24-1 44" />
        <path d={schraffur(64, 106, 48, 42, 11)} opacity=".4" />
        {/* Fenster */}
        <path d="M38 96c0-5 0-9 1-12 5-1 11-1 16 0 1 3 1 7 0 12-6 1-11 1-17 0z" />
        <path d="M124 96c0-5 0-9 1-12 5-1 11-1 16 0 1 3 1 7 1 12-6 1-12 1-18 0z" />
        {/* Firmenschild an der Fassade */}
        <path d="M52 62c24-2 48-1 72 0 2 0 3 1 3 3 0 4 0 8-1 12 0 2-1 3-3 3-24 1-47 1-71 0-2 0-3-1-3-3 0-4 0-8 0-12 0-2 1-3 3-3z" />
        <path d="M62 71c9-1 17 0 25-1M94 71c8 0 15 0 22-1" opacity=".55" />
      </g>

      {/* Jemand steht davor und zeigt auf die frische Beschriftung */}
      <g transform="translate(62 0)">
        <path d="M152 150c-1-14 0-23 1-27 1-4 4-6 7-6s6 2 7 6c1 4 2 13 1 27" />
        <path d="M160 111c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z" />
        <path d="M166 124c9-6 18-11 27-14" opacity=".85" />
      </g>

      {/* Transporter, wird gerade beschriftet */}
      <g transform="translate(66 0)">
        <path d="M176 150c-1-14 0-23 1-27 1-3 3-4 6-4 10-1 19 0 28-1 3-6 6-11 9-16 2-3 4-4 8-4 18-1 36 0 54 1 4 0 6 2 7 6 2 9 3 18 3 28 0 6 0 11-1 17" />
        <path d="M221 103c15-1 29-1 44 0 1 6 2 11 2 17-15 1-31 1-47 1 0-6 1-12 1-18z" />
        <path d="M277 150c-24 1-49 1-74 0" opacity=".7" />
        {/* Beschriftungsfläche */}
        <path d="M236 126c14-1 29-1 43 0" strokeDasharray="5 5" opacity=".6" />
        <path d={schraffur(236, 128, 44, 14, 8)} opacity=".35" />
        {/* Räder */}
        <path d="M195 150c0-7 5-12 11-12s11 5 11 12" />
        <path d="M258 150c0-7 5-12 11-12s12 5 12 12" />
      </g>

      {/* Rechts daneben ein Schild auf zwei Pfosten, frisch beschriftet */}
      <path d="M392 72c38-2 76-1 114 0 3 0 4 1 4 4 1 14 1 28 0 42 0 3-1 4-4 4-38 1-76 1-114 0-3 0-4-1-4-4-1-14-1-28 0-42 0-3 1-4 4-4z" />
      <path d="M404 92c18-2 36-1 54-1M404 104c12 0 24 0 36-1" opacity=".55" />
      <path d={schraffur(466, 86, 36, 28, 8)} opacity=".3" />
      <path d="M412 122c1 11 1 21 1 31M488 122c-1 11-1 21-1 31" opacity=".8" />
    </>
  );
}

function Textil() {
  return (
    <>
      {/* Bügel */}
      <path d="M160 40c0-5 3-8 7-8s7 3 7 7c0 4-3 6-7 8" />
      <path d="M167 47c-22 9-44 18-65 27" opacity=".9" />
      <path d="M167 47c22 9 44 18 65 27" opacity=".9" />

      {/* Shirt */}
      <path d="M102 76c6-4 13-8 20-11 4-2 7-3 11-3 4 6 10 9 17 9 8 0 14-3 18-9 4 0 7 1 11 3 7 3 14 7 20 11 2 1 2 3 1 5-4 7-8 14-13 21-2 2-4 2-6 1-3-2-6-4-9-6-1 11-1 22-1 33 0 10 0 20 1 30 0 3-1 4-4 4-21 1-42 1-63 0-3 0-4-1-4-4 1-21 1-42 0-63-3 2-6 4-9 6-2 1-4 1-6-1-5-7-9-14-13-21-1-2-1-4 1-5z" />
      {/* Kragen */}
      <path d="M134 62c3 6 9 9 16 9 7 0 13-3 17-9" opacity=".7" />
      {/* Gesticktes Logo auf der Brust */}
      <path d="M186 102c0-2 1-3 3-3 9-1 18-1 27 0 2 0 3 1 3 3 0 7 0 14-1 21 0 2-1 3-3 3-9 1-17 1-26 0-2 0-3-1-3-3-1-7-1-14 0-21z" />
      <path d={schraffur(188, 102, 28, 24, 6)} opacity=".45" />
      {/* Nadel mit Faden */}
      <path d="M246 60c6 9 13 18 19 27" opacity=".8" />
      <path d="M244 56c1-1 3-1 4 1s0 4-2 4-3-2-2-5z" />
      <path d="M266 90c5 3 6 9 2 13s-11 2-13-3" opacity=".6" />
    </>
  );
}

function Fahrzeug() {
  return (
    <>
      {/* Kastenwagen von der Seite */}
      <path d="M30 148c-2-22-1-38 0-44 1-4 3-6 7-7 12-2 24-2 36-3 7-11 14-21 21-31 3-4 7-6 13-6 48-1 96 0 144 1 8 0 12 4 13 12 2 20 3 41 3 61 0 6 0 12-1 17" />
      <path d="M31 148c74 2 148 2 222 1" opacity=".75" />
      {/* Fahrerhaus-Fenster */}
      <path d="M99 69c5-8 11-15 16-23 2-2 4-3 7-3 11-1 22 0 33 0-1 9-1 18-1 27-18 1-37 1-55-1z" />
      <path d="M163 70c0-9 0-18 1-27" opacity=".5" />
      {/* Beschriftungsfläche – gestrichelt, mit Schraffur und Kritzel-Logo */}
      <path
        d="M176 56c28-1 56-1 84 0 2 0 3 1 3 3 1 18 1 36 0 54 0 2-1 3-3 3-28 1-56 1-84 0-2 0-3-1-3-3-1-18-1-36 0-54 0-2 1-3 3-3z"
        strokeDasharray="7 6"
        opacity=".7"
      />
      <path d={schraffur(178, 58, 80, 54, 12)} opacity=".3" />
      <path d="M194 84c6-10 13-10 18-1 4 8 9 9 14 1 5-9 12-8 17 2" opacity=".85" />
      {/* Räder */}
      <path d="M57 148c-1-11 8-20 19-20s20 9 19 20" />
      <path d="M196 148c-1-11 8-20 19-20s20 9 19 20" />
      {/* Bodenlinie */}
      <path d="M12 156c48-2 96 1 144-1 48-2 96 2 144 0" opacity=".4" />
    </>
  );
}

function Druck() {
  return (
    <>
      {/* Tischkante */}
      <path d="M8 162c50-3 100 1 150-1 50-2 100 2 154 0" opacity=".45" />

      {/* Stapel Visitenkarten, leicht versetzt */}
      <path d="M44 150c-1-7-1-14 0-21 0-2 1-3 3-3 26-2 52-2 78-1 2 0 3 1 3 3 1 7 1 14 0 21 0 2-1 3-3 3-26 1-52 1-78 0-2 0-3-1-3-2z" />
      <path d="M50 126c0-5 0-9 1-13 0-2 1-3 3-3 25-2 50-1 75 0 2 0 3 1 3 3 0 4 0 8 0 13" opacity=".8" />
      <path d="M56 110c0-4 0-7 1-10 0-2 1-3 3-3 23-1 46-1 69 0 2 0 3 1 3 3 0 3 0 6 0 10" opacity=".6" />
      {/* Beschriftung auf der obersten Karte */}
      <path d="M58 136c14-1 28 0 42-1" opacity=".7" />
      <path d="M58 143c9-1 18 0 26-1" opacity=".5" />
      <path d={schraffur(100, 132, 28, 14, 6)} opacity=".4" />

      {/* Flyer, aufgefächert daneben */}
      <path d="M172 148c-3-18-5-36-7-54 0-2 1-3 3-4 15-4 30-7 45-10 2-1 4 0 4 2 4 18 7 36 10 54" />
      <path d="M186 83c13-3 26-6 39-8" opacity=".6" />
      <path d="M189 97c13-3 25-5 38-7" opacity=".5" />
      <path d="M192 111c12-2 24-4 36-6" opacity=".45" />
      <path d={schraffur(176, 118, 40, 24, 8)} opacity=".3" />

      {/* Stempel: breiter Fuß, schmaler Schaft, Griff obenauf */}
      <path d="M244 148c-1-9 0-14 1-17 1-2 3-3 6-3 12-1 25-1 37 0 3 0 5 1 6 3 1 3 2 8 1 17" />
      <path d="M244 148c15 1 31 1 46 0" opacity=".6" />
      <path d="M257 128c0-8 0-14 1-18 0-2 1-3 3-3 4-1 9-1 13 0 2 0 3 1 3 3 1 4 1 10 1 18" />
      <path d="M254 101c-1-4 1-7 5-8 5-1 11-1 16 0 4 1 6 4 5 8-1 3-4 5-9 5h-8c-5 0-8-2-9-5z" />
      <path d={schraffur(246, 134, 42, 12, 7)} opacity=".3" />
    </>
  );
}

function Shop() {
  return (
    <>
      {/* Kleiderstange */}
      <path d="M40 54c60-3 120 1 180-1 20-1 40 1 58 0" />
      <path d="M62 54c-1 28 0 56-1 84M268 53c1 28 0 57 0 85" opacity=".55" />
      <path d="M44 140c52-2 104 1 156-1 28-1 56 1 84 0" opacity=".45" />

      {/* Drei Bügel mit Kleidungsstücken */}
      {[0, 1, 2].map((i) => {
        const x = 86 + i * 64;
        return (
          <g key={i}>
            <path
              d={`M${x} 54c0 6-2 10-4 13M${x} 54c0 6 3 10 5 13`}
              opacity=".8"
            />
            <path
              d={`M${x - 24} 72c5-3 11-6 17-8 4 5 10 7 15 5 3-1 5-3 6-5 6 2 12 5 17 8 1 1 2 2 1 4-3 5-5 9-8 14-1 1-3 2-4 1l-5-3c-1 15-1 30 0 45 0 2-1 3-3 3-11 1-23 1-34 0-2 0-3-1-3-3 1-15 1-30 0-45l-5 3c-1 1-3 0-4-1-3-5-6-9-8-14-1-2-1-3 1-4z`}
            />
            {i === 1 && (
              <path d={schraffur(x - 16, 92, 32, 28, 7)} opacity=".35" />
            )}
          </g>
        );
      })}

      {/* Preisschild am Ende */}
      <path d="M250 70c8-3 16-5 24-7 2 0 3 1 3 3 1 7 2 13 2 20 0 2-1 3-3 3-8 1-16 1-24 0-2 0-3-1-3-3 0-5 0-10 0-14 0-1 0-2 1-2z" />
      <path d="M258 80c6-1 11-1 16 0M258 87c4 0 8 0 12-1" opacity=".55" />
    </>
  );
}

function Gespraech() {
  return (
    <>
      {/* Zwei Personen über einem Tresen */}
      <path d="M26 158c62-3 124 1 186-1 34-1 68 1 82 0" opacity=".45" />
      <path d="M96 158c-1-16 0-26 1-30 1-4 4-6 8-6 12-1 24-1 36 0 4 0 7 2 8 6 1 4 2 14 1 30" opacity=".5" />

      {/* Person links */}
      <path d="M68 158c-1-22 0-35 2-41 2-5 6-8 12-8s10 3 11 8c2 6 3 19 2 41" />
      <path d="M82 102c-7 0-13-6-13-13s6-13 13-13 13 6 13 13-6 13-13 13z" />
      {/* Person rechts */}
      <path d="M226 158c-1-20 0-32 2-38 2-5 6-8 12-8s10 3 12 8c2 6 3 18 2 38" />
      <path d="M240 105c-7 0-12-5-12-12s5-12 12-12 12 5 12 12-5 12-12 12z" />

      {/* Zwei Sprechblasen */}
      <path d="M110 34c-2 0-4 1-4 4-1 9-1 18 0 27 0 3 2 4 4 4 8 1 16 1 24 1-2 5-4 9-6 13 7-4 13-9 19-14 7 0 14 0 21-1 3 0 4-1 4-4 1-9 1-18 0-27 0-3-1-4-4-4-19-1-39-1-58 1z" />
      <path d="M118 48c13-1 26 0 39-1M118 58c9 0 18 0 26-1" opacity=".55" />
      <path d="M196 62c-2 0-3 1-3 3-1 6-1 12 0 18 0 2 1 3 3 3 11 1 23 1 34 0 5 4 10 7 15 10-2-3-3-7-4-11 2 0 3-1 3-3 1-6 1-12 0-18 0-2-1-3-3-3-15-1-30-1-45 1z" />
      <path d="M204 72c10-1 20 0 30-1" opacity=".5" />
    </>
  );
}

function Entwurf() {
  return (
    <>
      {/* Blatt auf dem Tisch, leicht schief */}
      <path d="M72 30c58-4 116 0 174-2 3 0 5 2 5 5 2 44 3 88 2 132 0 3-2 5-5 5-58 2-116-1-174 1-3 0-5-2-5-5-2-44-2-88-2-131 0-3 2-5 5-5z" />
      {/* Logo-Entwurf darauf */}
      <path d="M104 78c10-14 22-13 29 2 6 13 15 14 22 2 7-13 19-12 26 3" />
      <path d="M100 100c22-2 44-1 66-1 10 0 20 0 29 1" opacity=".6" />
      <path d="M104 114c17-1 34 0 51-1" opacity=".45" />
      <path d={schraffur(100, 126, 96, 22, 9)} opacity=".3" />
      {/* Maßlinie mit Pfeilen */}
      <path d="M100 160c33-1 66 0 98-1" opacity=".7" />
      <path d="M100 160l7-4M100 160l7 4M198 159l-7-4M198 159l-7 4" opacity=".7" />
      {/* Bleistift */}
      <path d="M248 42c8 10 16 21 24 31 3 4 3 8 0 11-3 2-7 2-10-2-8-10-16-20-23-31z" />
      <path d="M244 40l4 2 5-4" opacity=".7" />
      <path d="M268 80c3 4 5 8 8 12-5-1-9-3-13-5" />
    </>
  );
}

function Feinschliff() {
  return (
    <>
      {/* Korrekturbogen */}
      <path d="M62 24c62-3 124 0 186-2 3 0 5 2 5 5 2 46 2 92 1 138 0 3-2 5-5 5-62 2-124-1-186 1-3 0-5-2-5-5-2-46-2-92-1-138 0-3 2-5 5-4z" />
      {/* Textzeilen */}
      <path d="M86 60c24-1 48 0 72-1M86 76c33-1 66 0 98-1M86 92c18 0 36 0 53-1M86 122c28-1 56 0 83-1M86 138c20 0 40 0 59-1" opacity=".5" />
      {/* Durchgestrichene Zeile */}
      <path d="M84 91c19 2 38 2 56 1" opacity=".9" />
      {/* Korrektur-Kringel und Pfeil */}
      <path d="M176 84c-12-3-22 0-24 6-2 7 6 12 16 11 11-1 18-7 15-13-2-4-8-5-14-4" opacity=".9" />
      <path d="M196 70c10-6 20-10 30-12" opacity=".8" />
      <path d="M226 58l-9 1M226 58l-3 8" opacity=".8" />
      {/* Häkchen unten */}
      <path d="M200 134c5 6 9 11 13 17 7-14 16-26 27-37" opacity=".9" />
    </>
  );
}

function Umsetzung() {
  return (
    <>
      {/* Stickmaschine, sehr vereinfacht */}
      <path d="M34 150c-1-10 0-16 1-19 1-3 3-4 6-4 30-2 60-1 90 0 3 0 5 1 6 4 1 3 2 9 1 19" />
      <path d="M46 127c-1-20 0-34 1-40 1-4 3-6 7-6 22-2 44-1 66 0 4 0 6 2 7 6 1 6 2 20 1 40" />
      <path d="M58 60c0-6 0-11 1-14 0-2 1-3 3-3 15-1 30-1 45 0 2 0 3 1 3 3 1 3 1 8 1 14" />
      {/* Nadelkopf */}
      <path d="M78 87c7-1 14-1 21 0 1 6 1 12 0 18-7 1-14 1-21 0-1-6-1-12 0-18z" />
      <path d="M84 105c0 6 0 11 1 16M93 105c0 6 0 11 0 16" opacity=".7" />
      <path d={schraffur(60, 128, 56, 18, 8)} opacity=".3" />

      {/* Fertiges Shirt daneben, mit Häkchen */}
      <path d="M186 80c6-4 12-7 18-9 3 4 7 6 12 6s9-2 12-6c6 2 12 5 18 9 2 1 2 3 1 4-3 5-6 10-9 15-1 2-3 2-5 1l-6-4c-1 18-1 36 0 54 0 2-1 3-3 3-14 1-29 1-43 0-2 0-3-1-3-3 1-18 1-36 0-54l-6 4c-2 1-4 1-5-1-3-5-6-10-9-15-1-1-1-3 1-4z" />
      <path d="M204 71c3 4 7 6 12 6s9-2 12-6" opacity=".6" />
      <path d="M196 110c0-2 1-3 3-3 11-1 23-1 34 0 2 0 3 1 3 3 0 8 0 16-1 24 0 2-1 3-3 3-11 1-21 1-32 0-2 0-3-1-3-3-1-8-1-16-1-24z" />
      <path d={schraffur(198, 110, 36, 26, 7)} opacity=".4" />
      {/* Häkchen */}
      <path d="M254 134c6 7 11 13 16 20 9-18 20-33 34-47" opacity=".9" />
    </>
  );
}

// Fast alle Motive teilen sich dasselbe Feld 320 × 200. Nur die Werkstatt
// im Kopfbereich ist breiter – siehe dort.
const felder: Partial<Record<SkizzenMotiv, string>> = {
  werkstatt: "0 0 520 200",
};

const motive: Record<SkizzenMotiv, () => React.ReactElement> = {
  werkstatt: Werkstatt,
  textil: Textil,
  fahrzeug: Fahrzeug,
  druck: Druck,
  shop: Shop,
  gespraech: Gespraech,
  entwurf: Entwurf,
  feinschliff: Feinschliff,
  umsetzung: Umsetzung,
};

// ── Die Komponente ──────────────────────────────────────────────────────

export default function Skizze({
  motiv,
  className = "",
  ohneDiagonalen = false,
}: {
  motiv: SkizzenMotiv;
  className?: string;
  /** Lässt das Platzhalter-Kreuz weg – für Flächen, die schon voll sind. */
  ohneDiagonalen?: boolean;
}) {
  const Motiv = motive[motiv];
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 block ${className}`}
    >
      {!ohneDiagonalen && (
        <svg
          className="skizze-kreuz"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          focusable="false"
        >
          {/* Die beiden Diagonalen sind in der Mitte unterbrochen – so
              bleibt das Platzhalter-Zeichen erkennbar, ohne dass die
              Striche quer durch das Motiv laufen. */}
          <path d="M2.5 3.2C12 13 21 22 30.5 31.5" />
          <path d="M69.5 69C79 78.5 88.5 87.5 97.5 97.5" />
          <path d="M97.4 3C88 12.5 79 21.5 69.5 31" />
          <path d="M30.5 69C21 78.5 11.5 87.5 2.6 97.4" />
        </svg>
      )}
      <svg
        className="skizze-motiv"
        viewBox={felder[motiv] ?? "0 0 320 200"}
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
      >
        <Motiv />
      </svg>
    </span>
  );
}
