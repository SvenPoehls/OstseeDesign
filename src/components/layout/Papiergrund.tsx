// ───────────────────────────────────────────────────────────────────────
//  PAPIERGRUND
// ───────────────────────────────────────────────────────────────────────
//  Der Hintergrund der ganzen Seite: ein ruhiger Verlauf von fast Weiß
//  (oben) zu warmem Sandbeige (unten), darüber eine feine Papierkörnung.
//
//  Die Schicht steht fest im Bildschirm und liegt HINTER dem Inhalt: Oben
//  ist es immer hell, unten immer beige, egal wie weit man scrollt. Durch
//  die durchscheinende Kopfzeile und die Farbkacheln schimmert sie hindurch.
//  Sie kostet beim Scrollen nichts.
//
//  Farben und Verlauf stehen in globals.css (Abschnitt PAPIER, `--papier`,
//  `--papier-unten`, `.papier-verlauf`).
export default function Papiergrund() {
  return <div className="papier-verlauf" aria-hidden="true" />;
}
