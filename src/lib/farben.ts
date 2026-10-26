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
// Nebentext. Der Hintergrund wird nach unten hin sandbeige, und getönte
// Kacheln darauf sind noch etwas dunkler – deshalb ein kräftigeres Grau als
// auf reinem Weiß nötig wäre (gemessen gegen den tatsächlichen Untergrund).
export const LEISE = "#3f3b45";
// Nebentext, der ÜBER den Farbkreisen steht (Kopfbereiche). Die Kreise machen
// den Untergrund dort am dunkelsten – deshalb noch eine Stufe kräftiger.
export const LEISE_AUF_KREISEN = "#36323c";
export const KNOPF = "#0e7c86"; // Knöpfe: das Petrol aus dem Fächer
// Ruhige Grundfläche für Karten (Ablauf, Öffnungszeiten): ein Hauch dunkler
// als das Papier und leicht durchscheinend, damit das Knittern durchschimmert.
export const FLAECHE = "rgba(90, 76, 50, 0.07)";

// Zinnober als kleine SCHRIFT auf hellem Grund (z. B. die Etiketten über den
// Überschriften): ein gebranntes Orange-Braun. Das helle Zinnober selbst hat
// auf Weiß nur 2,5 : 1, dieser Ton 7,5 : 1 (auf dem Beige unten 4,8 : 1).
export const ZINNOBER_TEXT = "#8f3307";

// ── DUNKLE ABSCHNITTE ────────────────────────────────────────────────────
// Ein tiefes Espressobraun – die dunkle Fortsetzung des Verlaufs von Weiß zu
// Beige. Darauf steht cremeweiße Schrift. Als Schmuckfarbe für Text taugen
// dort nur Zinnober (6,0 : 1) und Ocker (10 : 1); Petrol und Magenta sind auf
// Braun zu dunkel und bleiben Flächen und Knöpfen vorbehalten.
export const DUNKEL = "#2a2019"; // Grund der dunklen Abschnitte und der Fußzeile
export const DUNKEL_KARTE = "#3a2d23"; // Karten auf dem dunklen Grund
export const CREME = "#f7f1e8"; // Schrift auf Dunkel
export const CREME_LEISE = "#d8cbb8"; // Nebentext auf Dunkel (9 : 1)

// Schrift AUF den vier Farbflächen (z. B. die Nummern in den Kreisen). Weiß
// ist auf Ocker kaum lesbar (1,6 : 1) und auf Zinnober zu schwach (2,6 : 1),
// dunkle Schrift auf Petrol ebenso (3,6 : 1). Gemessen wurde je Farbe, und die
// bessere Schrift gewählt – so liegt jede Kombination bei mindestens 4,9 : 1.
//   Zinnober: Tinte 6,9 · Petrol: Weiß 4,95 · Ocker: Tinte 11,5 · Magenta: Tinte 5,1
export const SCHRIFT_AUF = [TINTE, "#ffffff", TINTE, TINTE] as const;
