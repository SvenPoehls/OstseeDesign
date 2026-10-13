# Gestaltung der Website — „Werkstatt-Druckbogen"

Diese Datei hält fest, **warum die Seite so aussieht, wie sie aussieht**. Wer
später etwas ändert (auch ein KI-Werkzeug), sollte sich daran halten – sonst
zerfällt der Eindruck wieder in Beliebigkeit.

---

## Die Idee in einem Satz

Die Seite soll aussehen wie etwas, das **in dieser Werkstatt entstanden ist**:
ein Druckbogen, ein Musterblatt, ein Schild. Nicht wie ein Baukasten-Layout.

## Warum das wichtig war

Websites, die mit Baukästen oder KI gebaut werden, sehen inzwischen alle gleich
aus, und viele Leute erkennen das. Die wiederkehrenden Merkmale sind gut
dokumentiert:

- die Schrift **Inter** (Standard in fast jedem Werkzeug)
- **lila/blaue Verläufe**, weiche Schatten
- **alles mittig**: kleine Überschrift, große Überschrift, Absatz, drei Kacheln
- überall **gleich abgerundete Kacheln**, Kasten in Kasten
- kleine **Etiketten** („UNSERE LEISTUNGEN") über jeder Überschrift
- **Sprüche statt Inhalt** („Gemeinsam Großes schaffen")

Die vorherige Fassung dieser Seite hatte fast alle davon. Deshalb wurden sie
bewusst einzeln ersetzt.

## Die Entscheidungen

| Bereich | Entscheidung | Statt |
| --- | --- | --- |
| Schrift (Überschriften) | **Bricolage Grotesque**, schmal (88 %) und sehr eng gesetzt | Standard-Sans |
| Schrift (Text) | **Hanken Grotesk** | Inter |
| Farbe | nur **warmes Papier + Tinte**, keine Buntfarbe | Akzentfarbe + Verläufe |
| Ecken | **0 px, überall eckig** | durchgehend abgerundet |
| Kästen | **Haarlinien und Flächen** | Karten mit Schatten |
| Ausrichtung | **alles linksbündig** an einem 12-Spalten-Raster | zentrierte Blöcke |
| Rhythmus | Kapitel **01–04** mit Linie, Abschnitte verschieden gebaut | jeder Abschnitt gleich |
| Oberfläche | feine **Papierkörnung** über der ganzen Seite | glatte Flächen |
| Besonderheit | ein Wort der Schlagzeile als **Kontur** (wie geschnittene Folie), **Laufband** wie eine echte Laufschrift, leicht schiefer **Stempel** | – |

## Regeln für spätere Änderungen

1. **Nichts zentrieren.** Überschriften, Absätze und Listen stehen links.
2. **Keine runden Ecken.** `rounded-*` ist in `tailwind.config.ts` auf 0
   gestellt; nur Punkte dürfen rund sein.
3. **Keine Schatten.** Trennung entsteht durch Linien (`border-rule`,
   `border-ink`) oder durch eine Fläche (`bg-paper-deep`, `bg-ink`).
4. **Höchstens eine große Schrift pro Abschnitt.** Die Wirkung kommt aus dem
   Größenunterschied, nicht aus vielen mittelgroßen Überschriften.
5. **Konkret schreiben.** „Stickerei, auch auf Jacken und Mützen" statt
   „individuelle Lösungen für jeden Bedarf".
6. **Die Kontur-Schrift (`.cutout`) ist sparsam zu verwenden** – ein Wort in der
   Schlagzeile und die Schrittnummern. Überall sonst wirkt sie billig.

## Wo was steht

- `src/app/globals.css` — Farben, Schriftregeln, alle Bausteine (`.display`,
  `.cutout`, `.chapter`, `.plate`, `.btn-*`, `.stamp`)
- `tailwind.config.ts` — Farben als Tailwind-Klassen, Raster, Ecken = 0
- `src/lib/site.ts` — alle Inhalte: Adresse, Zeiten, Leistungen, Schritte
- `src/app/fonts/` — die beiden Schriften als Datei (kein Abruf bei Google)

## Was noch fehlt

- **Echte Fotos.** Überall, wo jetzt eine schraffierte Fläche steht, gehört ein
  Bild hin. Die Notizen daneben sagen, welches Motiv gedacht ist.
  Das große Bild im Kopfbereich wird in `src/components/sections/Hero.tsx`
  in einer Zeile ausgetauscht (`bildDatei`).
- **Der QR-Code** als `public/qr-code.png` (siehe Hinweis in `CtaBand.tsx`).
- **Die endgültige Hausfarbe.** Bis dahin ist die Seite absichtlich schwarz-weiß.
  Eine Farbe kommt in `globals.css` unter `--mark` dazu.
