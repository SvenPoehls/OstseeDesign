// ────────────────────────────────────────────────────────────────────────
//  FARBEN DER SEITE – ZURZEIT PLATZHALTER
//  Die Website dient erst einmal zum Vorstellen. Die Farben sind ein heller,
//  neutraler Blau-Vorschlag und sollen später durch die endgültigen Farben
//  ersetzt werden.
//
//  UMFÄRBEN: Alles Farbige kommt aus dieser Datei, dazu drei Werte oben in
//  src/app/globals.css (--kopf, --papier, --papier-unten) und die Farben im
//  Favicon (src/app/icon.svg). Die Namen sind bewusst neutral (AKZENT, BAND …),
//  damit sie zu jeder neuen Palette passen.
//
//  Bei neuen Farben den Kontrast prüfen: Schrift braucht 4,5 : 1, große
//  Überschriften 3 : 1 (siehe DESIGN.md).
// ────────────────────────────────────────────────────────────────────────

// Die vier Leistungsfarben. Reihenfolge = Reihenfolge der Leistungen
// (Textilveredelung, Werbetechnik, Drucksachen, Textilshop). Die erste ist
// zugleich die Akzentfarbe der Seite (Linien, Striche, Knöpfe).
export const farben = [
  { ton: "#2b6fd6", name: "Blau" },
  { ton: "#6fb2f2", name: "Hellblau" },
  { ton: "#2fa8a0", name: "Türkis" },
  { ton: "#5a64d6", name: "Indigo" },
] as const;

export const TINTE = "#0f1b2d"; // Schriftfarbe: ein tiefes Nachtblau
// Nebentext, gemessen gegen den tatsächlichen Untergrund (Verlauf, Bänder,
// getönte Kacheln).
export const LEISE = "#3b4a5e";
// Nebentext, der ÜBER den Farbkreisen steht (Kopfbereiche). Die Kreise machen
// den Untergrund dort dunkler – deshalb eine Stufe kräftiger.
export const LEISE_AUF_KREISEN = "#2c394b";
// Knöpfe: Blau mit weißer Schrift (4,8 : 1).
export const KNOPF = "#2b6fd6";
export const KNOPF_SCHRIFT = "#ffffff";
// Ruhige Grundfläche für Karten (Ablauf): ein Hauch dunkler als der Grund.
export const FLAECHE = "rgba(30, 60, 110, 0.06)";

// Akzent als kleine SCHRIFT (z. B. die Etiketten über den Überschriften):
// ein dunkleres Blau. Das helle Akzentblau reicht für kleine Schrift nicht.
export const AKZENT_TEXT = "#1d4f9e";

// ── BÄNDER ───────────────────────────────────────────────────────────────
// Die farbigen Abschnitte über die ganze Breite („So arbeiten wir",
// Kundenstimmen, Schlussaufruf) und die Fußzeile. Hell gehalten: ein
// klares, helles Blau mit dunkler Schrift.
export const BAND = "#cfe1f6"; // Grund der Bänder und der Fußzeile
export const BAND_KARTE = "#f4f8fd"; // Karten auf einem Band
export const BAND_SCHRIFT = TINTE; // Schrift auf einem Band
export const BAND_LEISE = "#3b4a5e"; // Nebentext auf einem Band (6,4 : 1)
// Kleine farbige Schrift auf einem Band (Etiketten, Spaltentitel,
// Schlusssätze). Große Überschriften-Wörter dürfen das helle Akzentblau
// nehmen (3,6 : 1).
export const BAND_AKZENT = "#1d4f9e";

// Schrift AUF den vier Farbflächen (z. B. die Nummern in den Kreisen): je
// Farbe die besser lesbare.
//   Blau: Weiß 4,8 · Hellblau: Tinte 7,6 · Türkis: Tinte 5,9 · Indigo: Weiß 5
export const SCHRIFT_AUF = ["#ffffff", TINTE, TINTE, "#ffffff"] as const;
