// ───────────────────────────────────────────────────────────────────────
//  DER BOGEN
// ───────────────────────────────────────────────────────────────────────
//  Umschließt die ganze Seite und macht aus dem Bildschirm ein Blatt
//  Papier. Die Knitterwirkung entsteht komplett im Browser – ohne Bilddatei:
//
//    feTurbulence   erzeugt ein unregelmäßiges Rauschen. Mit einer sehr
//                   niedrigen Grundfrequenz werden daraus keine feinen
//                   Körnchen, sondern große, weiche Beulen – wie bei einem
//                   Bogen, den jemand einmal zusammengeknüllt und wieder
//                   glatt gestrichen hat.
//    feDiffuseLighting beleuchtet dieses Rauschen von schräg oben links.
//                   Erst dadurch werden aus den Beulen Licht und Schatten.
//
//  Die Schicht liegt fest im Bild (position: fixed) und wird mit
//  „multiply" über das Papier gelegt. Sie wird genau einmal berechnet und
//  kostet beim Scrollen nichts.
//
//  STELLSCHRAUBEN: baseFrequency = Größe der Knicke (kleiner = größere
//  Falten), surfaceScale = Tiefe, die Deckkraft steht in globals.css
//  unter `.papier-knick`.
export default function Papier({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`papier ${className}`}>
      <div className="papier-knick" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false">
          <filter
            id="papier-knitter"
            x="0"
            y="0"
            width="100%"
            height="100%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.009 0.013"
              numOctaves={3}
              seed={11}
              result="rauschen"
            />
            <feDiffuseLighting
              in="rauschen"
              lightingColor="#fffdf6"
              surfaceScale={2.4}
              diffuseConstant={1}
            >
              <feDistantLight azimuth={232} elevation={62} />
            </feDiffuseLighting>
          </filter>
          <rect width="100%" height="100%" filter="url(#papier-knitter)" />
        </svg>
      </div>

      <div className="papier-inhalt">{children}</div>
    </div>
  );
}
