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
| Form | **Kreise und runde Knöpfe, aber eher eckige Kacheln**: Karten und Farbflächen 14 px, Bildflächen 10 px, Knöpfe, Marken und Kreise ganz rund. |
| Transparenz | Kreise liegen übereinander und **mischen sich** (`mix-blend-multiply`) – wie Druckfarben. |
| Kopfzeile | **Durchgehende Leiste** im zarten Ocker: Wortmarke mit Unterzeile links, Menü in Großbuchstaben, rechts zwei runde Knöpfe (Telefon dunkel, „Projekt anfragen" Petrol), unten ein Band aus den vier Fächerfarben. Die aktive Seite ist in ihrer Farbe unterstrichen. Unter 1280 px Breite steht das Menü als farbige Marken unter der Leiste. |
| Breite | Inhalt bis **1440 px** breit (vorher 1200), damit große Monitore genutzt werden. |
| Ablauf | Faden mit farbigen Punkten statt Liste. |
| Knöpfe | Petrol (das zweite Farbfächer-Muster), damit Ocker und Zinnober Flächen bleiben. |

## Die Unterseiten

Jede Leistung mit eigener Seite (Textilveredelung, Werbetechnik,
Drucksachen) läuft über **eine gemeinsame Vorlage**
(`src/app/[leistung]/page.tsx`) und trägt durchgehend **ihre Farbe** – auf
der Karte der Startseite, im Menü (Unterstrich, Handy-Marke) und im
Kopfbereich ihrer Seite. Aufbau: Kopfbereich mit Farbkreisen · drei
Foto-Platzhalter · „Das gehört dazu" · weitere Leistungen · Ablauf ·
Kontakt.

**Neue Leistung hinzufügen:** in `src/lib/site.ts` einen Eintrag in
`services` ergänzen (und in `src/lib/farben.ts` eine Farbe). Seite, Menüpunkt
und Karte entstehen von selbst. Der Textilshop hat einen externen Link und
deshalb keine eigene Seite.

Kopf- und Fußzeile sitzen im Layout und bleiben beim Seitenwechsel stehen.

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
`src/components/ui/Einblenden.tsx` und ist im Layout eingebunden; es läuft bei
jedem Seitenwechsel neu.

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
| `src/app/globals.css` → `--kopf` | **wie kräftig das Gelb der Kopfzeile ist.** Die letzte Zahl ist die Deckkraft: 0,5 = zart (jetzt), 0,88 = so kräftig wie früher, 1 = volles Ocker. Für eine weiße Leiste: `#ffffff` |
| `tailwind.config.ts` → `seite` | **wie breit die Seite auf großen Bildschirmen wird** (jetzt 1440 px) |
| `tailwind.config.ts` → `kachel`, `bild` | **wie rund die Kacheln sind** (jetzt 14 px bzw. 10 px). Knöpfe sind davon nicht betroffen |
| `src/app/globals.css` → `--weich` | der Bewegungsverlauf aller Animationen |
| `src/lib/site.ts` | alle Inhalte: Adresse, Zeiten, Leistungen (samt Foto-Motiven), Ablauf. Das Menü und die Unterseiten ergeben sich von selbst aus der Liste der Leistungen |

## Kontraste

Alle Textfarben erfüllen WCAG AA (mindestens 4,5 : 1), gemessen:

| Paar | Verhältnis |
| --- | --- |
| Nebentext auf Weiß | 6,5 : 1 |
| Menüschrift auf der Kopfzeile (Gelb 50 %) | über 7 : 1 |
| Grauer Text über den Farbkreisen (`LEISE_AUF_KREISEN`), am dunkelsten Punkt gemessen | mind. 4,98 : 1 |
| Nummern in den Farbkreisen (`SCHRIFT_AUF`, je Farbe die bessere Schrift) | mind. 4,95 : 1 |
| Menüschrift auf der Kopfzeile, ungünstigster Fall über einem Ocker-Kreis | 6,7 : 1 |
| Weiß auf Petrol-Knopf | 4,95 : 1 |
| Überschrift „Ablauf" (dunkleres Magenta `#c23a64`) | 5,1 : 1 |
| Schrift auf der Kontaktfläche (Tinte auf Zinnober, auch über dem Magenta-Kreis) | mind. 5,1 : 1 |

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
3. **Kacheln eckig, Knöpfe rund.** Neue Flächen benutzen `rounded-kachel`
   bzw. `rounded-bild`, Knöpfe und Marken `rounded-full` – keine eigenen
   Zwischenwerte.
4. **Helle Farben nie als Schrift** auf Weiß (siehe Kontraste).
5. **Animation sparsam.** Neue bewegte Elemente brauchen einen Grund;
   Dauerbewegung nur, wo sie nichts kostet.
6. **Konkret schreiben.** „Stickerei, auch auf Jacken und Mützen" statt
   „individuelle Lösungen für jeden Bedarf".

## Wo was steht

```
src/app/page.tsx               Startseite (setzt die Abschnitte zusammen, JSON-LD)
src/app/[leistung]/page.tsx    EINE Vorlage für alle Leistungs-Unterseiten
src/app/layout.tsx             Schrift, SEO, Kopf- und Fußzeile, Einblenden-Skript
src/app/globals.css            Kopfzeilen-Farbe, Seitenrand, Animationen, Rechtstexte
src/lib/farben.ts              Farben (auch: welche Schrift auf welcher Farbe)
src/lib/site.ts                Inhalte, Menü, Liste der Unterseiten
src/components/layout/         Header, Footer, LegalPage, CookieNotice
src/components/sections/       Startseite: Hero, Faecher, Services, Process, FindUs, Contact
                               Unterseiten: LeistungHero, LeistungDetails, WeitereLeistungen
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
