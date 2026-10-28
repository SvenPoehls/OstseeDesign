# Gestaltung der Website – „Farbfächer"

> **FARBEN SIND ZURZEIT PLATZHALTER.** Die Website dient erst einmal zum
> Vorstellen. Sie trägt eine helle, neutrale Blau-Palette, die später durch
> die endgültigen Farben ersetzt wird. Wie das geht: Abschnitt
> „Umfärben" weiter unten.

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

Schrift, Formen und Bewegung sind die des Farbfächers, die Farben Platzhalter. Der **Aufbau** der
Seite folgt dem Vorbild mediaquestweb.com – frei abgewandelt, nicht 1:1.
Übernommen wurde nur das Layout, weder Texte noch Leistungen. Grundsatz:
**lieber weniger Inhalte, dafür größer und lockerer angeordnet.**

- **Abschnitte über die ganze Breite.** Abschnitte auf dem hellen Verlauf
  und **farbige Bänder** (zurzeit helles Blau) wechseln sich ab.
- **Gestrichelte Bögen** in der Akzentfarbe verbinden einige Abschnitte und
  laufen über die Kante vom Band zum hellen Grund (`components/ui/Uebergang.tsx`). Sie
  liegen im Innenabstand der Abschnitte, also nie über Text.
- **Etikett über jeder Überschrift**: Versalien mit weitem Abstand, darunter
  eine feine Linie mit kurzem Strich in der Akzentfarbe (`components/ui/Etikett.tsx`).
- **Überschriften groß in Versalien**, einzelne Wörter hervorgehoben: auf
  hellem Grund mit einem Farbmarker hinter dunkler Schrift (`.markiert`), auf
  einem Band direkt in der Akzentfarbe.
- Bewusst **ohne** Hintergrundbild im Kopfbereich und **ohne** Logo-Wand
  („Valuable Clients").

Reihenfolge der Startseite:

| Abschnitt | Vorbild | Inhalt |
| --- | --- | --- |
| Kopfbereich | Hero | links Schlagzeile mit Farbkreisen dahinter, Kennzahlen (30+ Jahre Erfahrung · 100 % aus einer Hand · Mo–Do für Sie da), Knöpfe · rechts ein großes Foto (Platzhalter) und das dunkle Band „Jetzt kontaktieren" (statt Video) |
| Alles aus einer Hand (Band) | „Move forward…" | „Ihr Werbepartner in Eckernförde", drei Punkte als große Zeilen mit einfarbigen Häkchen, darunter „Rufen Sie uns an" |
| Leistungen | „Our Services" | vier Karten 01–04 als **Treppe**: jede ein Stück tiefer als die vorige |
| Einblicke | „Favorite Work" | **drei Fotos**, verschieden groß, schräg und versetzt wie Abzüge auf dem Werktisch, mit Klebestreifen |
| Kundenstimmen (Band) | „What our clients are saying" | Karussell mit Pfeilen, Punkten und Pause-Knopf – **zurzeit Platzhalter** |
| Ablauf | Screenshot 2 | unverändert: Faden mit Nummernkreisen und vier Karten |
| Häufige Fragen | „FAQ" | **drei Fragen** in großen Kacheln mit Nummer; die erste ist beim Laden offen, es ist **immer nur eine offen**, und Auf- und Zuklappen gleiten weich (`FragenAufklappen.tsx`; ohne Skript übernimmt der gemeinsame `name` der `<details>`); Antworten nur aus Angaben in `site.ts`. Die Frage nach der Erreichbarkeit zeigt Öffnungszeiten (je Wochentag eine Zeile, Zeit rechts mit gepunkteter Linie) und Kontaktwege als übersichtliche Liste |
| Schlussaufruf (Band) | „Ready for the next chapter" | mittig, mit gestricheltem S-Bogen, der gerade in die Pfeilspitze läuft |
| Kontakt | „Get in touch" | Kontaktwege, QR-Feld, Öffnungszeiten (statt Formular: ohne Server gäbe es niemanden, der es verschickt) |
| Fußzeile (Band) | Footer | vier Spalten: Marke, Seiten, Kontakt, Öffnungszeiten |

## Die Texte

**Inhalte und Leistungen richten sich nach der bisherigen Website
ostseedesign.de.** Von dort stammen die Reihenfolge (Werbetechnik,
Textilveredelung, Drucksachen, Textilshop), die Leitsprüche („Zeigen Sie,
was Sie können!", „Kleidung vereint in Arbeit & Freizeit!", „Mit Druck
präsent!"), die Leistungsbeschreibungen, „Alles aus einer Hand!",
„Gemeinsam formen wir ein Paket …", „Ihr Werbepartner in Eckernförde",
„Seit über 30 Jahren …", „Wir sind für Sie da" sowie Kontakt und
Öffnungszeiten.

**Keine eigenen Zusagen erfinden.** Preise, kostenlose Beratung,
Korrekturen, Lieferung, Montage, Fristen o. Ä. erst eintragen, wenn
Ostseedesign sie bestätigt hat. Der Ablauf ist deshalb bewusst allgemein
gehalten (siehe Kommentar bei `processSteps` in `site.ts`).

## Die Entscheidungen

| Bereich | Entscheidung |
| --- | --- |
| Schrift | **Schibsted Grotesk**, die einzige Schrift der Seite. Freundlich und etwas rund, bewusst nicht Inter. Liegt im Projekt, kein Abruf bei Google. |
| Grund | **Verlauf von fast Weiß zu hellem Blaugrau** (`#f8fafc` → `#e6eef7`, Platzhalter) mit feiner Körnung im unteren Teil. Steht fest im Bildschirm, liegt hinter dem Inhalt und schimmert durch Kopfzeile und Kacheln. Keine Bilddatei. Die Zwischentöne werden aus den beiden Farben gemischt. |
| Farbe | **Platzhalter: helle Blau-Palette.** Die vier Leistungsfarben sind **Blau, Hellblau, Türkis, Indigo** – jede gehört zu einer Leistung, die erste ist zugleich Akzentfarbe. Siehe `src/lib/farben.ts`. |
| Form | **Kreise und runde Knöpfe, aber eher eckige Kacheln**: Karten und Farbflächen 14 px, Bildflächen 10 px, Knöpfe, Marken und Kreise ganz rund. |
| Transparenz | Kreise liegen übereinander und **mischen sich** (`mix-blend-multiply`) – wie Druckfarben. |
| Kopfzeile | **Durchgehende helle Leiste** (fast deckendes Weiß): Wortmarke mit Unterzeile links, Menü in dunklen Großbuchstaben, rechts zwei runde Knöpfe (Telefon umrandet, „Projekt anfragen" in der Akzentfarbe), unten eine schmale Linie in der Akzentfarbe. Die aktive Seite ist in der Akzentfarbe unterstrichen. Unter 1280 px Breite gibt es stattdessen einen runden **Menü-Knopf** (≡ → ×), der eine Liste aufklappt: Startseite, die Leistungen mit Leitspruch, Textilshop, Kontakt, darunter „Projekt anfragen" und die Telefonnummer. Auf dem Handy steht daneben ein runder Telefon-Knopf. Das Menü schließt bei Auswahl, Tipp daneben, Esc und Seitenwechsel; die Seite dahinter scrollt solange nicht. |
| Breite | Inhalt bis **1440 px** breit (vorher 1200), damit große Monitore genutzt werden. |
| Ablauf | Faden mit farbigen Punkten statt Liste. |
| Bänder | Helles Blau `BAND` `#cfe1f6` (Karten darauf `#f4f8fd`) mit dunkler Schrift; Fußzeile ebenso. Die Akzentfarbe nur für große Schrift (Überschriften-Wörter, 3,6 : 1), kleine farbige Schrift in `BAND_AKZENT` `#1d4f9e`. |
| Knöpfe | **Akzentblau mit weißer Schrift** (4,8 : 1). |

## Die Unterseiten

Jede Leistung mit eigener Seite (Textilveredelung, Werbetechnik,
Drucksachen) läuft über **eine gemeinsame Vorlage**
(`src/app/[leistung]/page.tsx`) und trägt durchgehend **ihre Farbe** – auf
der Karte der Startseite, im Menü (Unterstrich, Handy-Marke) und im
Kopfbereich ihrer Seite. Aufbau: Kopfbereich mit Farbkreisen · drei
Foto-Platzhalter · „Das gehört dazu" · Beschreibungstext (`beschreibung` in
`site.ts`, Baustein `LeistungText.tsx`) · Ablauf · weitere Leistungen ·
Schlussaufruf (Band) · Kontakt.

**Neue Leistung hinzufügen:** in `src/lib/site.ts` einen Eintrag in
`services` ergänzen (und in `src/lib/farben.ts` eine Farbe). Seite, Menüpunkt
und Karte entstehen von selbst. Der Textilshop hat einen externen Link und
deshalb keine eigene Seite.

Kopf- und Fußzeile sitzen im Layout und bleiben beim Seitenwechsel stehen.

## Die Animationen

Alles steht in `src/app/globals.css` (Abschnitt „ANIMATIONEN"):

| Was | Wie |
| --- | --- |
| **Auftritt** | Beim Laden gleitet die Kopfzeile von oben herein, Etikett, Schlagzeile, Text und Knöpfe schieben sich nacheinander hoch. |
| **Kreise** | Die drei Farbkreise hinter der Schlagzeile wachsen auf und treiben danach sehr langsam (nur ab Tablet-Breite, weil Dauerbewegung mit Farbmischung auf einem schwachen Handy Akku kostet). |
| **Einblenden** | Alles weiter unten erscheint erst, wenn man dort ankommt. Der Ablauf-Faden zeichnet sich dabei von links nach rechts, die Nummernkreise poppen nacheinander auf. |
| **Linien** | Die gestrichelten Bögen zeichnen sich beim Hinscrollen von ihrem Anfang her. Jede endet mit einem Strich genau in der Pfeilspitze (`pathLength` + berechnete Strichlängen, siehe `Uebergang.tsx`). |
| **Fragen** | Auf- und Zuklappen gleiten (0,4 s); öffnet man eine Frage, klappt die offene gleichzeitig zu. |
| **Kundenstimmen** | Wechseln alle 7 Sekunden; Pause-Knopf, hält bei Maus oder Tastatur darauf an, läuft bei „Bewegung reduzieren" gar nicht. |
| **Hover** | Karten und Knöpfe heben sich leicht, Eckkreise wachsen. In „Einblicke" liegen die ganzen Karten schräg und drehen sich beim Überfahren als ein Block gerade; die Schrift dreht fest mit und wird nicht neu berechnet (`.schief-karte` in globals.css). |

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
| `src/lib/farben.ts` | **alle Farben**: die vier Leistungsfarben, Schrift, Knöpfe, Bänder |
| `src/app/globals.css` → `--kopf` | **die Farbe der Kopfzeile** (jetzt fast deckendes Weiß). Bei einem dunklen Ton müssen in `Header.tsx` auch die Schriftfarben auf hell. |
| `src/app/globals.css` → `--papier`, `--papier-unten`, `.papier-verlauf` | **der Hintergrund-Verlauf**: oberer und unterer Ton, dazwischen die Prozentpunkte, an denen welcher Ton erreicht ist. Die Körnung hat ihre Stärke bei `.papier-verlauf::after` (opacity). Soll der Verlauf über die ganze Seitenlänge laufen statt im Bildschirm stehen: `position: fixed` → `absolute` |
| `tailwind.config.ts` → `seite` | **wie breit die Seite auf großen Bildschirmen wird** (jetzt 1440 px) |
| `tailwind.config.ts` → `kachel`, `bild` | **wie rund die Kacheln sind** (jetzt 14 px bzw. 10 px). Knöpfe sind davon nicht betroffen |
| `src/app/globals.css` → `--weich` | der Bewegungsverlauf aller Animationen |
| `src/lib/site.ts` | alle Inhalte: Adresse, Zeiten, Leistungen (samt Foto-Motiven), Ablauf. Das Menü und die Unterseiten ergeben sich von selbst aus der Liste der Leistungen |

## Umfärben (wenn die endgültigen Farben feststehen)

1. In `src/lib/farben.ts` die Werte ersetzen. Die Namen sind neutral
   (`farben`, `AKZENT_TEXT`, `KNOPF`, `BAND` …) und passen zu jeder Palette.
2. In `src/app/globals.css` oben `--kopf`, `--papier` und `--papier-unten`
   anpassen; dort auch der Fokusrahmen, die Textauswahl und die Rechtstexte
   (Suche nach `#1d4f9e` und `#2b6fd6`).
3. Das Favicon `src/app/icon.svg` umfärben.
4. **Kontrast messen** (siehe unten). Faustregeln: Schrift auf einem Band
   und kleine farbige Schrift brauchen 4,5 : 1, große Überschriften-Wörter
   3 : 1; `SCHRIFT_AUF` je Farbe auf die besser lesbare Schrift stellen.

## Kontraste

Alle Texte erfüllen **WCAG AA** (4,5 : 1, große Schrift 3 : 1). Gemessen
wird nicht gegen eine angenommene Hintergrundfarbe, sondern gegen das, was
tatsächlich hinter jedem Text liegt – Verlauf, Farbkreise, getönte
Kacheln und Bänder eingerechnet, aufgeklappte Fragen ebenfalls.
Letzte Messung (blaue Platzhalter-Palette): **1.560 Texte** auf allen sechs
Seiten, am Rechner (1440 px) und auf dem Handy (390 px). Normale Schrift
überall über 4,5 : 1; der knappste Wert überhaupt sind die großen blauen
Wörter auf dem Band mit **3,6 : 1** (Grenze für große Schrift: 3 : 1).

Dafür gibt es eigene Schriftfarben in `src/lib/farben.ts`:

| Farbe | wofür |
| --- | --- |
| `LEISE` `#3b4a5e` | Nebentext. Kräftig genug auch für den getönten unteren Grund und getönte Kacheln. |
| `LEISE_AUF_KREISEN` `#2c394b` | Nebentext über den Farbkreisen der Kopfbereiche |
| `AKZENT_TEXT` `#1d4f9e` | die Etiketten über den Überschriften auf hellem Grund – das helle Akzentblau ist dafür zu schwach |
| `BAND_SCHRIFT`, `BAND_LEISE`, `BAND_AKZENT` | Schrift, Nebentext und kleine farbige Schrift auf den Bändern |
| `SCHRIFT_AUF` | Schrift auf den vier Farbflächen (z. B. Nummern in Kreisen): je Farbe die besser lesbare, mind. 4,8 : 1 |

Hervorgehobene Wörter auf hellem Grund bekommen einen Farbmarker hinter
dunkler Schrift statt farbiger Schrift. **Beim Umfärben daran denken:** helle Farben taugen nicht als
Schriftfarbe, und auf dem getönten Grund braucht Text etwas mehr Kraft als auf Weiß.
Die farbigen Aufzählungspunkte im Ablauf sind reiner Schmuck und für
Screenreader ausgeblendet.

## Regeln für spätere Änderungen

1. **Verlauf und Bänder wechseln sich ab.** Grund ist der Verlauf,
   dazwischen stehen farbige Bänder (nie zwei direkt hintereinander). Alle
   Farben kommen aus `farben.ts` – keine Farbwerte direkt in Bausteine
   schreiben.
2. **Ein Bereich = eine Farbe.** Die vier Farben gehören fest zu den vier
   Leistungen; sie nicht für andere Zwecke wiederverwenden.
3. **Kacheln eckig, Knöpfe rund.** Neue Flächen benutzen `rounded-kachel`
   bzw. `rounded-bild`, Knöpfe und Marken `rounded-full` – keine eigenen
   Zwischenwerte.
4. **Helle Farben nie als Schrift** (siehe Kontraste) – für farbige Schrift
   die `…_TEXT`-Fassungen aus `farben.ts` nehmen.
5. **Animation sparsam.** Neue bewegte Elemente brauchen einen Grund;
   Dauerbewegung nur, wo sie nichts kostet.
6. **Konkret und belegt schreiben.** Nur Leistungen und Aussagen, die
   Ostseedesign selbst macht (bisherige Website oder Bestätigung), keine
   erfundenen Zusagen.

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
