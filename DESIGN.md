# Gestaltung der Website – „Farbfächer"

Diese Datei hält fest, **warum die Seite so aussieht, wie sie aussieht**, und
wo man an welcher Stellschraube dreht. Wer später etwas ändert (auch ein
KI-Werkzeug), sollte sich daran halten – sonst zerfällt der Eindruck wieder
in Beliebigkeit.

> Früher gab es drei Entwürfe zur Auswahl (Handskizze, Klare Kante,
> Farbfächer). Entschieden wurde für den **Farbfächer**; die anderen beiden
> und die Auswahlseite sind entfernt. Sie stehen noch im Git-Verlauf
> (Commit „Entwurf 1 komplett als Handskizze …" und davor), falls man etwas
> nachschlagen will.

## Die Idee in einem Satz

Die Seite sieht aus wie der **Farbfächer an der Werkstattwand**: Garnfarben,
Folienfarben, Druckfarben – vier Muster nebeneinander, und wo sich zwei
überlagern, mischen sie sich wie beim Drucken.

Das passt zum Betrieb, weil Farbe das ist, worauf bei Textilveredelung,
Fahrzeugbeschriftung und Drucksachen alles hinausläuft. Die Seite zeigt
Gestaltungsgespür, ohne nach Werbeagentur zu klingen – wichtig, weil die
Kundschaft Handwerksbetriebe, Vereine und lokale Geschäfte sind, die sich
trauen sollen anzurufen.

## Die Entscheidungen

| Bereich | Entscheidung |
| --- | --- |
| Schrift | **Schibsted Grotesk**, die einzige Schrift der Seite. Freundlich und etwas rund, bewusst nicht Inter. Liegt im Projekt, kein Abruf bei Google. |
| Farbe | Weißer Grund, **vier Werkstattfarben** (Zinnober, Petrol, Ocker, Magenta) – jede gehört zu einer Leistung. Siehe `src/lib/farben.ts`. |
| Form | **Rund**: Flächen 28–32 px, Bilder 24 px, Knöpfe und Marken ganz rund. Die Rundung ist hier das Thema. |
| Transparenz | Kreise liegen übereinander und **mischen sich** (`mix-blend-multiply`) – wie Druckfarben. |
| Kopfzeile | Schwebende Pille im **zarten Ocker**, leicht durchscheinend. Auf dem Handy ersetzen farbige Marken die Navigation. |
| Ablauf | Faden mit farbigen Punkten statt Liste. |
| Knöpfe | Petrol (das zweite Farbfächer-Muster), damit Ocker und Zinnober Flächen bleiben. |

## Die Animationen

Alles steht in `src/app/globals.css` (Abschnitt „ANIMATIONEN") und folgt dem
Farbfächer-Gedanken:

| Was | Wie |
| --- | --- |
| **Auftritt** | Beim Laden gleitet die Kopfzeile von oben herein, Etikett, Schlagzeile, Text und Knöpfe schieben sich nacheinander hoch. |
| **Kreise** | Die drei Farbkreise im Kopfbereich wachsen auf und treiben danach sehr langsam (nur ab Tablet-Breite, weil Dauerbewegung mit Farbmischung auf einem schwachen Handy Akku kostet). |
| **Fächer** | Die vier Farbkarten klappen nacheinander auf wie ein Fächer: erst verdreht und zur Mitte geschoben, dann an ihrem Platz. |
| **Einblenden** | Alles weiter unten erscheint erst, wenn man dort ankommt. Der Ablauf-Faden zeichnet sich dabei von links nach rechts, die Nummernkreise poppen nacheinander auf. |
| **Hover** | Karten und Knöpfe heben sich leicht, Eckkreise wachsen. |

**Wie ein Element zum Einblenden kommt:** `data-reveal` ans Element schreiben
(optional `data-art="faden"` oder `"pop"`, und eine Verzögerung mit
`className="[--verz:120ms]"`). Das Skript dazu steht in
`src/components/ui/Einblenden.tsx` und ist auf jeder Seite über `Seite.tsx`
eingebunden.

**Regeln, damit Animation nicht stört:**

- Bewegt werden nur `opacity`, `translate`, `scale` und `rotate` – das läuft
  auf der Grafikkarte.
- **Ohne JavaScript ist trotzdem alles sichtbar.** Versteckt wird erst, wenn
  das Skript läuft, und nur, was ohnehin noch unterhalb des Bildschirms liegt.
- Wer im Betriebssystem **„Bewegung reduzieren"** eingestellt hat, bekommt
  keine Animation und nichts Verstecktes.
- Animationen nutzen `backwards` statt `both`, damit das Anheben beim
  Überfahren nach dem Einblenden weiter funktioniert.

## Stellschrauben

| Wo | Was |
| --- | --- |
| `src/lib/farben.ts` | die vier Farben, Schrift-, Knopf- und Flächenfarbe |
| `src/app/globals.css` → `--kopf` | **wie kräftig das Gelb der Kopfzeile ist.** Die letzte Zahl ist die Deckkraft: 0,5 = zart (jetzt), 0,88 = so kräftig wie früher, 1 = volles Ocker |
| `src/app/globals.css` → `--kopf-schatten` | der Schatten unter der Kopfzeile |
| `src/app/globals.css` → `--weich` | der Bewegungsverlauf aller Animationen |
| `src/lib/site.ts` | alle Inhalte: Adresse, Zeiten, Leistungen, Ablauf, Navigation |

## Kontraste

Alle Textfarben erfüllen WCAG AA (mindestens 4,5 : 1), gemessen:

| Paar | Verhältnis |
| --- | --- |
| Nebentext auf Weiß | 6,5 : 1 |
| Menüschrift auf der Kopfzeile (Gelb 50 %) | 7,1 : 1 |
| Menüschrift auf der Kopfzeile, ungünstigster Fall über einem Ocker-Kreis | 6,7 : 1 |
| Weiß auf Petrol-Knopf | 4,95 : 1 |
| Überschrift „Ablauf" (dunkleres Magenta `#c23a64`) | 5,1 : 1 |
| Schrift auf der Kontaktfläche (Tinte auf Zinnober) | 6,9 : 1 |

Zwei Stellen waren im ursprünglichen Entwurf zu schwach und wurden angepasst:
Weiße Schrift auf dem Zinnober der Kontaktfläche (nur 2,6 : 1) ist jetzt
dunkel, und das helle Magenta als Schrift (3,6 : 1) ist als Schrift
dunkler – Flächen und Kreise behalten das helle Magenta. **Beim Umfärben
daran denken:** helle Farben taugen nicht als Schriftfarbe.

## Regeln für spätere Änderungen

1. **Farbe kommt aus Flächen**, nicht aus dunklen Hintergründen. Die Seite
   bleibt hell.
2. **Ein Bereich = eine Farbe.** Die vier Farben gehören fest zu den vier
   Leistungen; sie nicht für andere Zwecke wiederverwenden.
3. **Rund, aber ruhig.** Neue Flächen bekommen dieselben Radien wie die
   vorhandenen; keine eckigen Kästen daneben.
4. **Helle Farben nie als Schrift** auf Weiß (siehe Kontraste).
5. **Animation sparsam.** Neue bewegte Elemente brauchen einen Grund;
   Dauerbewegung nur, wo sie nichts kostet.
6. **Konkret schreiben.** „Stickerei, auch auf Jacken und Mützen" statt
   „individuelle Lösungen für jeden Bedarf".

## Wo was steht

```
src/app/page.tsx               Startseite (setzt die Abschnitte zusammen, JSON-LD)
src/app/layout.tsx             Schrift, SEO-Titel und -Beschreibung
src/app/globals.css            Kopfzeilen-Variable, alle Animationen, Rechtstext-Stil
src/lib/farben.ts              Farben
src/lib/site.ts                Inhalte
src/components/layout/         Header, Footer, Seite (Rahmen), LegalPage, CookieNotice
src/components/sections/       Hero, Faecher, Services, Process, FindUs, Contact
src/components/ui/             Bild (Foto-Platzhalter), Einblenden (Scroll-Skript)
```

## Was noch fehlt

- **Echte Fotos.** Überall, wo jetzt eine gestreifte Fläche steht
  (`components/ui/Bild.tsx`), gehört ein Foto hin. Die Notiz auf der Fläche
  sagt, welches Motiv gedacht ist. Für eine Designfirma ist das das
  Wichtigste, was noch fehlt: Arbeitsproben sind der stärkste Beweis.
- **Der QR-Code** als `public/qr-code.png` (siehe Hinweis in `Contact.tsx`).
- **Datenschutz-Hinweis:** Die Datenschutzerklärung (Abschnitt 4) beschreibt
  einen Hinweis-Banner, den es auf der Seite nicht gibt. Entweder
  `CookieNotice` einbinden (siehe Hinweis im Dateikopf) oder den Abschnitt
  streichen.
