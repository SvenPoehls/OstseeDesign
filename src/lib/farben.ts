// ────────────────────────────────────────────────────────────────────────
//  FARBEN DER SEITE
//  Warme Palette: Grund ist der Verlauf von fast Weiß zu Sandbeige
//  (globals.css), dazu Brauntöne und Orange als Kontrastfarbe.
//  Bewusst KEIN Gelb, Blau oder Pink.
//
//  Alles Farbige kommt von hier – wer die Seite umfärben will, ändert diese
//  Datei (und die drei Werte oben in globals.css: --kopf, --papier,
//  --papier-unten).
// ────────────────────────────────────────────────────────────────────────

// Die vier Leistungsfarben – alle warm: kräftiges Orange, Mokka, Karamell und
// Rost. (Ein sehr dunkles Braun wurde verworfen: In hellen Flächen und
// Kreisen wirkte es grau und kalt.) Reihenfolge = Reihenfolge der Leistungen
// (Textilveredelung, Werbetechnik, Drucksachen, Textilshop).
export const farben = [
  { ton: "#ff7a30", name: "Orange" },
  { ton: "#8a5a3c", name: "Mokka" },
  { ton: "#d4a373", name: "Karamell" },
  { ton: "#a3502e", name: "Rost" },
] as const;

export const TINTE = "#1e1814"; // Schriftfarbe: ein warmes Fast-Schwarz
// Nebentext. Der Hintergrund wird nach unten hin sandbeige, und getönte
// Kacheln darauf sind noch etwas dunkler – deshalb ein kräftiger Ton
// (gemessen gegen den tatsächlichen Untergrund).
export const LEISE = "#463b33";
// Nebentext, der ÜBER den Farbkreisen steht (Kopfbereiche). Die Kreise machen
// den Untergrund dort am dunkelsten – deshalb noch eine Stufe kräftiger.
export const LEISE_AUF_KREISEN = "#3a302a";
// Knöpfe: Orange mit dunkler Schrift. Weiß auf Orange hätte nur 2,5 : 1,
// Tinte dagegen 7 : 1.
export const KNOPF = "#ff7a30";
export const KNOPF_SCHRIFT = TINTE;
// Ruhige Grundfläche für Karten (Ablauf): ein Hauch dunkler als das Papier
// und leicht durchscheinend.
export const FLAECHE = "rgba(90, 66, 46, 0.07)";

// Orange als kleine SCHRIFT auf hellem Grund (z. B. die Etiketten über den
// Überschriften): ein gebranntes Orange-Braun. Das helle Orange selbst hat
// auf Weiß nur 2,5 : 1, dieser Ton 7,5 : 1 (auf dem Beige unten 4,8 : 1).
export const ZINNOBER_TEXT = "#8f3307";

// ── BRAUNE ABSCHNITTE ────────────────────────────────────────────────────
// Ein mittleres Braun (Milchkaffee-dunkel) – die kräftige Fortsetzung des
// Verlaufs von Weiß zu Beige. Darauf steht cremeweiße Schrift.
// Heller darf es nicht werden: Orange als Schmuckwort in den Überschriften
// braucht mindestens 3 : 1 (jetzt 3,4 : 1).
export const DUNKEL = "#5e4434"; // Grund der braunen Abschnitte, Kopf- und Fußzeile
export const DUNKEL_KARTE = "#4e3829"; // Karten auf dem braunen Grund (etwas dunkler)
export const CREME = "#f7f1e8"; // Schrift auf Braun (8 : 1)
export const CREME_LEISE = "#e3d7c6"; // Nebentext auf Braun (6 : 1, auf Karten 6,9 : 1)
// Kleine farbige Schrift auf Braun (Etiketten, Spaltentitel, Schlusssätze):
// ein helles Apricot. Das kräftige Orange ist dafür zu dunkel (3,4 : 1).
export const APRICOT = "#ffb48a";

// Schrift AUF den vier Farbflächen (z. B. die Nummern in den Kreisen): je
// Farbe die besser lesbare.
//   Orange: Tinte 7 · Mokka: Weiß 5,8 · Karamell: Tinte 7,9 · Rost: Weiß 5,6
export const SCHRIFT_AUF = [TINTE, "#ffffff", TINTE, "#ffffff"] as const;
