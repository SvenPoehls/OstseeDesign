# Gestaltung der Website – „Leuchtturm im Meer"

Diese Datei hält fest, **warum die Seite so aussieht, wie sie aussieht**, und
wo man an welcher Stellschraube dreht.

## Die Idee in einem Satz

Die Seite taucht von oben nach unten ins Meer: Ein Leuchtturm steht auf weißem
Grund am Wasser (Eckernförde liegt an der Ostsee), darunter geht das Blau in
tieferes Blau über (Leistungen), dann wieder an die Luft (Ablauf, Einblicke,
Fragen) und zuletzt auf den Meeresgrund (Kontakt, Fußzeile).

## Bausteine

| Teil | Umsetzung |
| --- | --- |
| Kopfbereich | weißer Grund, freigestellter Leuchtturm (`public/img/leuchtturm.webp`) leicht unscharf, darunter Meer als SVG/CSS mit Spiegelung, Möwen, Platzhalterbild rechts |
| Überschrift | drei versetzte Zeilen in Cormorant Garamond, sie liegen auf den weißen Streifen des Turms |
| Leistungen | tiefes Blau, vier Spalten mit feiner Linie, oben weicher Übergang aus dem Meer |
| Abschnittskanten | Wellen (`components/ui/Elemente.tsx`) statt gerader Linien |
| Ablauf, Fragen | weiß, Ziffern nur dort, wo es wirklich eine Reihenfolge ist |
| Einblicke | drei Foto-Platzhalter, gestaffelt |
| Kontakt, Fuß | dunkelstes Blau, große Schrift für Telefon und E-Mail |

## Schrift und Farbe

- **Cormorant Garamond** für Überschriften, **Hanken Grotesk** für Text, beide
  lokal in `src/app/fonts`.
- Weiß, Tinte (`#0f1a2e`), Markenblau (`#2b6fd6`) nur für Handlungen, Meeresblau
  (`#2f66b4`, `#1f4f8f`) für die tiefen Abschnitte. Kontraste: Weiß auf
  `#2f66b4` ca. 5,5:1, auf `#1f4f8f` ca. 8:1.
- Keine Farbverläufe als Fläche. Die weichen Übergänge entstehen aus weichgezeichneten
  Farbbändern (Meer, Übergang nach unten).

## Stellschrauben

Alle Maße, Farben und Schriften stehen als Variablen oben in `src/app/globals.css`
(`:root`). Die Geometrie des Kopfbereichs hängt an `--w` (Breite des Turmbilds),
`--b` (Abstand zum unteren Rand) und `--s` (Skalierung); die Überschrift ist an
diese Werte gekoppelt.

## Bewusst nicht

Kein Hintergrundbild im Kopfbereich außer dem Turm, keine Karten mit Schatten,
kein Karussell, kein Cookie-Banner (es gibt keine Cookies).
