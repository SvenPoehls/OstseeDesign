// ────────────────────────────────────────────────────────────────────────
//  FARBEN DER SEITE
//  Die Seite sieht aus wie der Farbfächer an der Werkstattwand: vier
//  Farben, eine pro Leistung. Alles Farbige kommt von hier – wer die Seite
//  umfärben will, ändert nur diese Datei.
//
//  (Die Farbe der Kopfzeile steht bewusst NICHT hier, sondern als
//  Variable `--kopf` in globals.css, weil sie dort mit dem Rest der
//  Kopfzeilen-Gestaltung zusammensteht.)
// ────────────────────────────────────────────────────────────────────────

// Die vier Werkstattfarben. Reihenfolge = Reihenfolge der Leistungen.
export const farben = [
  { ton: "#ff7a30", name: "Zinnober" },
  { ton: "#0e7c86", name: "Petrol" },
  { ton: "#ffc63d", name: "Ocker" },
  { ton: "#e4557e", name: "Magenta" },
] as const;

export const TINTE = "#17161a"; // Schriftfarbe
export const LEISE = "#605c66"; // Nebentext (auf Weiß 6,5 : 1)
export const KNOPF = "#0e7c86"; // Knöpfe: das Petrol aus dem Fächer
export const FLAECHE = "#f6f6f7"; // ruhige Grundfläche für Karten

// Magenta als SCHRIFT: Das Magenta des Fächers (#e4557e) hat auf Weiß nur
// 3,6 : 1 – für kleine Schrift zu wenig. Für Text deshalb diese dunklere
// Fassung (5,1 : 1). Flächen und Kreise behalten das helle Magenta.
export const MAGENTA_TEXT = "#c23a64";
