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

## Der Aufbau (nach dem Vorbild mediaquestweb.com)

Farben, Schrift und Hintergrund sind die des Farbfächers. Der **Aufbau** der
Seite folgt dem Vorbild mediaquestweb.com – frei abgewandelt, nicht 1:1.
Übernommen wurde nur das Layout, weder Texte noch Leistungen. Grundsatz:
**lieber weniger Inhalte, dafür größer und lockerer angeordnet.**

- **Abschnitte über die ganze Breite.** Helle (auf dem Verlauf) und
  **dunkelbraune** wechseln sich ab. Das Braun ist die dunkle Fortsetzung des
  Verlaufs von Weiß zu Beige.
- **Gestrichelte Bögen** in Zinnober verbinden einige Abschnitte und laufen
  über die Kante von Dunkel nach Hell (`components/ui/Uebergang.tsx`). Sie
  liegen im Innenabstand der Abschnitte, also nie über Text.
- **Etikett über jeder Überschrift**: Versalien mit weitem Abstand, darunter
  eine feine Linie mit kurzem Zinnober-Strich (`components/ui/Etikett.tsx`).
- **Überschriften groß in Versalien**, einzelne Wörter hervorgehoben: auf
  hellem Grund mit einem Farbmarker hinter dunkler Schrift (`.markiert`), auf
  dunklem Grund direkt in Zinnober.
- Bewusst **ohne** Hintergrundbild im Kopfbereich und **ohne** Logo-Wand
  („Valuable Clients").

Reihenfolge der Startseite:

| Abschnitt | Vorbild | Inhalt |
| --- | --- | --- |
| Kopfbereich | Hero | links Schlagzeile mit Farbkreisen dahinter, Kennzahlen, Knöpfe · rechts ein großes Foto (Platzhalter) und das dunkle Band „Jetzt kontaktieren" (statt Video) |
| So arbeiten wir (dunkel) | „Move forward…" | drei Zusagen als große Zeilen, einfarbige Häkchen |
| Leistungen | „Our Services" | vier Karten 01–04 als **Treppe**: jede ein Stück tiefer als die vorige |
| Einblicke | „Favorite Work" | **drei Fotos**, verschieden groß, schräg und versetzt wie Abzüge auf dem Werktisch, mit Klebestreifen |
| Kundenstimmen (dunkel) | „What our clients are saying" | Karussell mit Pfeilen, Punkten und Pause-Knopf – **zurzeit Platzhalter** |
| Ablauf | Screenshot 2 | unverändert: Faden mit Nummernkreisen und vier Karten |
| Häufige Fragen | „FAQ" | **drei Fragen** in großen Kacheln mit Nummer, die erste aufgeklappt; Antworten nur aus Angaben in `site.ts` |
| Schlussaufruf (dunkel) | „Ready for the next chapter" | mittig, mit kurzer gestrichelter Schlaufe |
| Kontakt | „Get in touch" | Kontaktwege, QR-Feld, Öffnungszeiten (statt Formular: ohne Server gäbe es niemanden, der es verschickt) |
| Fußzeile (dunkel) | Footer | vier Spalten: Marke, Seiten, Kontakt, Öffnungszeiten |

## Die Entscheidungen

| Bereich | Entscheidung |
| --- | --- |
| Schrift | **Schibsted Grotesk**, die einzige Schrift der Seite. Freundlich und etwas rund, bewusst nicht Inter. Liegt im Projekt, kein Abruf bei Google. |
| Grund | **Verlauf von fast Weiß zu Sandbeige** mit feiner Körnung im unteren Teil – nach einer Vorlage abgemessen (`#faf8f5` oben, `#dbccb5` unten). Steht fest im Bildschirm (oben immer hell, unten immer beige), liegt hinter dem Inhalt und schimmert durch Kopfzeile und Kacheln. Keine Bilddatei. |
| Farbe | **Vier Werkstattfarben** (Zinnober, Petrol, Ocker, Magenta) auf dem Papier – jede gehört zu einer Leistung. Siehe `src/lib/farben.ts`. |
| Form | **Kreise und runde Knöpfe, aber eher eckige Kacheln**: Karten und Farbflächen 14 px, Bildflächen 10 px, Knöpfe, Marken und Kreise ganz rund. |
| Transparenz | Kreise liegen übereinander und **mischen sich** (`mix-blend-multiply`) – wie Druckfarben. |
| Kopfzeile | **Durchgehende Leiste** im zarten Ocker: Wortmarke mit Unterzeile links, Menü in Großbuchstaben, rechts zwei runde Knöpfe (Telefon dunkel, „Projekt anfragen" Petrol), unten ein Band aus den vier Fächerfarben. Die aktive Seite ist in ihrer Farbe unterstrichen. Unter 1280 px Breite steht das Menü als farbige Marken unter der Leiste. |
| Breite | Inhalt bis **1440 px** breit (vorher 1200), damit große Monitore genutzt werden. |
| Ablauf | Faden mit farbigen Punkten statt Liste. |
| Dunkle Abschnitte | Espressobraun `#2a2019`, Schrift Creme `#f7f1e8`, Nebentext `#d8cbb8`. Farbige Schrift darauf nur Zinnober und Ocker. |
| Knöpfe | Petrol (das zweite Farbfächer-Muster), damit Ocker und Zinnober Flächen bleiben. |

## Die Unterseiten

Jede Leistung mit eigener Seite (Textilveredelung, Werbetechnik,
Drucksachen) läuft über **eine gemeinsame Vorlage**
(`src/app/[leistung]/page.tsx`) und trägt durchgehend **ihre Farbe** – auf
der Karte der Startseite, im Menü (Unterstrich, Handy-Marke) und im
Kopfbereich ihrer Seite. Aufbau: Kopfbereich mit Farbkreisen · drei
Foto-Platzhalter · „Das gehört dazu" · weitere Leistungen · Ablauf ·
Schlussaufruf (dunkel) · Kontakt.

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
| **Kreise** | Die drei Farbkreise hinter der Schlagzeile wachsen auf und treiben danach sehr langsam (nur ab Tablet-Breite, weil Dauerbewegung mit Farbmischung auf einem schwachen Handy Akku kostet). |
| **Einblenden** | Alles weiter unten erscheint erst, wenn man dort ankommt. Der Ablauf-Faden zeichnet sich dabei von links nach rechts, die Nummernkreise poppen nacheinander auf. |
| **Linien** | Die gestrichelten Bögen zeichnen sich beim Hinscrollen von ihrem Anfang her. |
| **Kundenstimmen** | Wechseln alle 7 Sekunden; Pause-Knopf, hält bei Maus oder Tastatur darauf an, läuft bei „Bewegung reduzieren" gar nicht. |
| **Hover** | Karten und Knöpfe heben sich leicht, Eckkreise wachsen, die schrägen Fotos in „Einblicke" richten sich gerade. |

**Wie ein Element zum Einblenden kommt:** `data-reveal` ans Element schreiben
(optional `data-art="faden"`, `"pop"` oder `"linie"`, und eine Verzögerung mit
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
| `src/app/globals.css` → `--papier`, `--papier-unten`, `.papier-verlauf` | **der Hintergrund-Verlauf**: oberer und unterer Ton, dazwischen die Prozentpunkte, an denen welcher Ton erreicht ist. Die Körnung hat ihre Stärke bei `.papier-verlauf::after` (opacity). Soll der Verlauf über die ganze Seitenlänge laufen statt im Bildschirm stehen: `position: fixed` → `absolute` |
| `tailwind.config.ts` → `seite` | **wie breit die Seite auf großen Bildschirmen wird** (jetzt 1440 px) |
| `tailwind.config.ts` → `kachel`, `bild` | **wie rund die Kacheln sind** (jetzt 14 px bzw. 10 px). Knöpfe sind davon nicht betroffen |
| `src/app/globals.css` → `--weich` | der Bewegungsverlauf aller Animationen |
| `src/lib/site.ts` | alle Inhalte: Adresse, Zeiten, Leistungen (samt Foto-Motiven), Ablauf. Das Menü und die Unterseiten ergeben sich von selbst aus der Liste der Leistungen |

## Kontraste

Alle Texte erfüllen **WCAG AA** (4,5 : 1, große Schrift 3 : 1). Gemessen
wird nicht gegen eine angenommene Hintergrundfarbe, sondern gegen das, was
tatsächlich hinter jedem Text liegt – Beige-Verlauf, Farbkreise und getönte
Kacheln und dunkle Abschnitte eingerechnet, aufgeklappte Fragen ebenfalls.
Letzte Messung: **1.560 Texte** auf allen sechs Seiten, am Rechner (1440 px)
und auf dem Handy (390 px), schwächster Wert **4,94 : 1**.

Dafür gibt es eigene Schriftfarben in `src/lib/farben.ts`:

| Farbe | wofür |
| --- | --- |
| `LEISE` `#3f3b45` | Nebentext. Kräftiger als auf weißem Grund nötig wäre – unten ist der Grund beige, getönte Kacheln darauf noch dunkler. |
| `LEISE_AUF_KREISEN` `#36323c` | Nebentext über den Farbkreisen der Kopfbereiche |
| `ZINNOBER_TEXT` `#8f3307` | die Etiketten über den Überschriften auf hellem Grund – das helle Zinnober ist dafür zu schwach (2,5 : 1) |
| `CREME`, `CREME_LEISE` | Schrift und Nebentext auf den dunkelbraunen Abschnitten (Nebentext 9 : 1) |
| `SCHRIFT_AUF` | Schrift auf den vier Farbflächen (z. B. Nummern in Kreisen): je Farbe die besser lesbare, mind. 4,95 : 1 |

Hervorgehobene Wörter auf hellem Grund bekommen einen Farbmarker hinter
dunkler Schrift statt farbiger Schrift. **Beim Umfärben daran denken:** helle Farben taugen nicht als
Schriftfarbe, und auf dem beigen Grund braucht Text etwas mehr Kraft als auf Weiß.
Die farbigen Aufzählungspunkte im Ablauf sind reiner Schmuck und für
Screenreader ausgeblendet.

## Regeln für spätere Änderungen

1. **Hell und Dunkel wechseln sich ab.** Grund ist der Verlauf, dazwischen
   stehen dunkelbraune Abschnitte (nie zwei dunkle direkt hintereinander).
   Andere dunkle Töne als `DUNKEL` gibt es nicht.
2. **Ein Bereich = eine Farbe.** Die vier Farben gehören fest zu den vier
   Leistungen; sie nicht für andere Zwecke wiederverwenden.
3. **Kacheln eckig, Knöpfe rund.** Neue Flächen benutzen `rounded-kachel`
   bzw. `rounded-bild`, Knöpfe und Marken `rounded-full` – keine eigenen
   Zwischenwerte.
4. **Helle Farben nie als Schrift** (siehe Kontraste) – für farbige Schrift
   die `…_TEXT`-Fassungen aus `farben.ts` nehmen.
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
src/components/layout/         Header, Footer, Papiergrund, LegalPage, CookieNotice
src/components/sections/       Startseite: Hero, Werkstatt, Services, Einblicke,
                               Kundenstimmen, Process, Fragen, Aufruf, Contact
                               Unterseiten: LeistungHero, LeistungDetails, WeitereLeistungen
src/components/ui/             Bild (Foto-Platzhalter), Einblenden (Scroll-Skript),
                               Etikett (Überschriften-Etikett), Uebergang (gestrichelte Bögen)
```

## Was noch fehlt

- **Echte Fotos.** Überall, wo jetzt eine gestreifte Fläche steht
  (`components/ui/Bild.tsx`, Kopfbereich in `Hero.tsx`, Fotos in `Einblicke.tsx`), gehört ein Foto hin. Die Notiz auf der Fläche
  sagt, welches Motiv gedacht ist. Für eine Designfirma ist das das
  Wichtigste, was noch fehlt: Arbeitsproben sind der stärkste Beweis.
- **Echte Kundenstimmen.** Die drei Stimmen sind Platzhalter und auf der
  Seite so beschriftet. Echte Zitate nur mit Einverständnis eintragen
  (`kundenstimmen` in `src/lib/site.ts`).
- **Der QR-Code** als `public/qr-code.png` (siehe Hinweis in `Contact.tsx`).
- **Datenschutz-Hinweis:** Die Datenschutzerklärung (Abschnitt 4) beschreibt
  einen Hinweis-Banner, den es auf der Seite nicht gibt. Entweder
  `CookieNotice` einbinden (siehe Hinweis im Dateikopf) oder den Abschnitt
  streichen.
