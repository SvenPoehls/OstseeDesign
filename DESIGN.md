# Gestaltung der Website

## Drei Entwürfe zur Auswahl

Die Startseite (`/`) ist zurzeit eine **Auswahlseite**: Sie zeigt drei
Gestaltungen nebeneinander, jede liegt auf einer eigenen Unterseite.

| | Adresse | Leitsatz | Schrift | Farbe | Form |
| --- | --- | --- | --- | --- | --- |
| **1 Handskizze** | `/entwurf-1` | wie der erste Entwurf auf Papier | Caveat (Handschrift) + Patrick Hand (Notizen) + Hanken Grotesk (Fließtext) | zerknittertes Cremepapier, Graphit, **Rotstift** und **Textmarker** | alles von Hand gezogen, leicht schief |
| **2 Klare Kante** | `/entwurf-2` | so aufgeräumt wie die Hauptseite, aber eigenständig | Mona Sans | Weiß, zart getönte Abschnitte, **Petrolblau #17566b** | wenig Rundung: Karten 12 px, Knöpfe 10 px |
| **3 Farbfächer** | `/entwurf-3` | wie der Farbfächer an der Werkstattwand | Schibsted Grotesk | Weiß + **vier Werkstattfarben** | rund, 32 px und Kreise |

Jeder Entwurf hat außerdem **eigene Bausteine**, die es in den anderen nicht
gibt – daran erkennt man sie auch ohne Farbe:

| | nur hier |
| --- | --- |
| **1** | geknittertes Papier als Grund · Handschrift in den Überschriften · handgezogene Rahmen und Linien (mit Absetzern und doppelten Ecken) · Skizzen statt Platzhalterbildern · rot eingekringelte Wörter · Textmarker · Klebeband und Notizzettel · Laufband wie eine Laufschrift · Schritte, die beim Scrollen stehen bleiben |
| **2** | folgt dem **aufgeräumten Stil der Hauptseite** (helle Seite, Inhalte in Karten, Symbolfelder, Marke über jeder Überschrift, Abschnitte im Wechsel weiß/getönt), aber mit eigener Schrift, eigener Farbe und weniger Rundung · Hero linksbündig mit Infokarte daneben und Punktraster · Leistungen versetzt (breit/schmal) statt Viererreihe · Ablauf als vier Zeilen in EINER Karte · Standort als geteilte Karte · kein Bild |
| **3** | Farbfächer-Reihe · Kreise, die sich übereinander **mischen** (wie Druckfarben) · Faden mit farbigen Punkten · Pillen statt Listen |

Entwurf 2 ist bewusst nah am Stil der Hauptseite poehlsdigital.de gebaut
(Aufbau, Karten, Marken über den Überschriften), setzt sich aber durch
Schrift, Farbe und geringere Rundung davon ab – die Seite soll zur Familie
gehören, aber nicht wie eine Kopie wirken.

Inhalt und Texte sind überall gleich – verglichen wird nur die Gestaltung.
Alle drei sind hell; die Farbe kommt aus Flächen, nicht aus dunklen
Hintergründen. Die Farbwerte sind Platzhalter und stehen je Entwurf an einer
Stelle (Entwurf 1 ganz oben in `globals.css`, Entwurf 2 und 3 oben in
der jeweiligen Seitendatei).

**Vorschaubilder** der Kacheln: `public/vorschau-1.jpg` … `-3.jpg`.
Neu erzeugen mit `node scripts/vorschau.js` (siehe Kopf der Datei).
Die Auswahlseite hängt beim Bauen automatisch eine Kennung an die Adresse
(`…/vorschau-2.jpg?v=8d65389a`), die sich mit dem Bildinhalt ändert. Dadurch
zeigt kein Browser mehr ein altes Bild aus seinem Zwischenspeicher.

**Wenn ein Entwurf gewählt ist:** Seine Seite wird zur Startseite, die beiden
anderen Ordner werden gelöscht, und `VariantBar` fliegt raus (eine Zeile je
Seite). Danach gilt für die gewählte Richtung das, was unten steht – aktuell
beschreibt der Rest dieser Datei **Entwurf 1**.

---

# Entwurf 1 — „Handskizze"

Diese Datei hält fest, **warum die Seite so aussieht, wie sie aussieht**. Wer
später etwas ändert (auch ein KI-Werkzeug), sollte sich daran halten – sonst
zerfällt der Eindruck wieder in Beliebigkeit.

---

## Die Idee in einem Satz

Die Seite soll aussehen wie der **erste Entwurf auf Papier**: ein leicht
zerknitterter Bogen, auf dem jemand mit Bleistift aufgezeichnet hat, was
gebaut werden soll – mit Randnotizen, eingekringelten Wörtern und
Klebeband. Nicht wie ein Baukasten-Layout.

Das passt auch inhaltlich: Am Anfang jedes Auftrags in dieser Werkstatt
steht genau so ein Entwurf.

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

Eine Seite, die aussieht wie von Hand gezeichnet, hat davon nichts – weil
keine zwei Striche gleich sind.

## Die Entscheidungen

| Bereich | Entscheidung | Statt |
| --- | --- | --- |
| Hintergrund | **geknittertes Cremepapier**, im Browser gerechnet (SVG-Filter), keine Bilddatei | glatte Farbfläche |
| Schrift (Überschriften) | **Caveat** – eine flüssige Handschrift | Standard-Sans |
| Schrift (Notizen) | **Patrick Hand** – sauber geschrieben, für Bildunterschriften und Randbemerkungen | Kleintext in Versalien |
| Schrift (Fließtext) | **Hanken Grotesk** – bewusst KEINE Handschrift, weil längere Absätze sonst anstrengend werden | Inter |
| Farbe | **Graphit** als einzige Schriftfarbe, dazu **Rotstift** und **Textmarker** als die einzigen zwei Akzente | Akzentfarbe + Verläufe |
| Rahmen & Linien | **von Hand gezogen**: schiefe Kanten, an den Ecken nachgezogen, der kräftige Strich einmal abgesetzt | gerade Rahmen, `border: 1px` |
| Bilder | **Skizzen**: Rechteck mit Diagonalen, dazu ein Motiv mit Schraffur statt Flächenfüllung | graue Platzhalterflächen |
| Knöpfe | gezeichneter Kasten, der wichtige ist mit dem **Textmarker ausgemalt** (der Strich steht über) | gefüllte Rechtecke |
| Ausrichtung | **alles linksbündig** an einem 12-Spalten-Raster | zentrierte Blöcke |
| Rhythmus | Kapitel **01–04** mit Strich, Abschnitte verschieden gebaut | jeder Abschnitt gleich |
| Besonderheit | rot **eingekringelte** Wörter, **Klebeband**, **Notizzettel**, Kritzelecken, Laufband wie eine echte Laufschrift | – |

## Die Stellschrauben

Alles Farbige und alle Strichstärken hängen an Variablen ganz oben in
`src/app/globals.css`. Wer den Stil verändern will, fasst nur diese an:

| Variable | Was sie macht |
| --- | --- |
| `--papier` | der Papierton (warmes Cremeweiß) |
| `--papier-tief` | die zweite Papierfläche (Abschnitt „So läuft das") |
| `--papier-rand` | wie stark der Bogen zu den Rändern hin abdunkelt |
| `--stift` | die Stiftfarbe (Graphit) – Schrift und alle Zeichnungen |
| `--stift-leicht` | Nebentext |
| `--stift-linie` | Hilfs- und Trennlinien |
| `--strich` | **die Strichstärke.** Größer = dickerer Stift. Zieht auch die Rahmenbreite mit |
| `--rotstift` | der erste Akzent: Kapitelnummern, Kringel, Marken |
| `--marker` | der zweite Akzent: Textmarker-Gelb hinter wichtigen Wörtern und im wichtigen Knopf |

Zwei Dinge hängen NICHT an den Variablen, weil sie Zeichnungen sind:

- die **Rahmen** (`--rahmen-1`, `--rahmen-2`, `--rahmen-rot`, `--rahmen-rot-2`).
  Ihre Farbe steckt in der Zeichnung selbst (`%2326241f` = Graphit,
  `%23b63324` = Rotstift). Wer `--stift` ändert, muss sie dort mitändern.
- die **Knitterwirkung** des Papiers: Sie wird in
  `src/components/layout/Papier.tsx` erzeugt (Frequenz = Größe der Falten,
  `surfaceScale` = Tiefe), die Deckkraft steht in `globals.css` unter
  `.papier-knick`.

## Regeln für spätere Änderungen

1. **Nichts zentrieren.** Überschriften, Absätze und Listen stehen links.
2. **Kein Rahmen ohne Hand.** Umrandungen kommen über `.rahmen`, Trennlinien
   über `.linie-hand` – nie über `border: 1px`.
3. **Keine Schatten**, mit genau einer Ausnahme: der Notizzettel (`.zettel`)
   darf einen haben, weil er obenauf liegt.
4. **Fließtext bleibt in der Leseschrift.** Handschrift nur für Überschriften,
   Namen, Zahlen und kurze Notizen. Lesbarkeit geht vor Wirkung.
5. **Die Akzente sparsam einsetzen.** Der rote Kringel und der Textmarker
   wirken nur, solange sie selten sind – zwei, drei Stellen pro Seite.
6. **Konkret schreiben.** „Stickerei, auch auf Jacken und Mützen" statt
   „individuelle Lösungen für jeden Bedarf".

## Barrierefreiheit und Tempo

- Alle Farbpaare erfüllen **WCAG AA** (Stift auf Papier 14,3:1, Nebentext
  7,1:1, Rotstift 5,0:1, Stift auf Textmarker 11,9:1).
- Wer im Betriebssystem **„Bewegung reduzieren"** eingestellt hat, bekommt
  keine Animationen – auch das Laufband steht dann still.
- Der Papiergrund ist **kein Bild**, sondern eine einzige Rechnung im
  Browser, die beim Scrollen nichts kostet. Alle Skizzen sind SVG und
  wiegen zusammen weniger als ein einzelnes Foto.
- Die Schriften liegen **im Projekt** (`src/app/fonts/`) – kein Abruf bei
  Google, weder beim Besucher noch beim Bauen.

## Wo was steht

- `src/app/globals.css` — Variablen und alle Bausteine (`.papier`, `.hand`,
  `.notiz`, `.etikett`, `.rahmen`, `.linie-hand`, `.marker`, `.kreis-wort`,
  `.btn-*`, `.zettel`, `.klebeband`)
- `src/components/layout/Papier.tsx` — der Bogen samt Knitterwirkung
- `src/components/ui/Skizze.tsx` — die neun Zeichnungen (Werkstatt, Shirt,
  Transporter, Drucksachen, Shop, die vier Ablauf-Schritte)
- `src/components/ui/Hand.tsx` — Pfeile, Haken, Menüzeichen, Kritzelecken
- `tailwind.config.ts` — Farben und Schriften als Tailwind-Klassen
- `src/lib/site.ts` — alle Inhalte: Adresse, Zeiten, Leistungen, Schritte
- `src/app/fonts/` — die Schriften als Datei

## Was noch fehlt

- **Echte Fotos.** Überall, wo jetzt eine Skizze steht, gehört ein Bild hin.
  Die Notizen darunter sagen, welches Motiv gedacht ist. Das große Bild im
  Kopfbereich wird in `src/components/sections/Hero.tsx` ausgetauscht
  (dort das `<Skizze motiv="werkstatt" />` durch ein `<img>` ersetzen).
- **Der QR-Code** als `public/qr-code.png` (siehe Hinweis in `CtaBand.tsx`).
