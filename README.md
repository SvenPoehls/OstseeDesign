# Ostseedesign – Website

Statische Marketing-Website für **Ostseedesign – Werbung & Textilien** in
Eckernförde. Redesign der bisherigen WordPress-Seite.

**🔗 Live-Vorschau:** https://svenpoehls.github.io/OstseeDesign/

Jeder Push auf den Branch wird über GitHub Actions automatisch gebaut und dort
veröffentlicht (siehe `.github/workflows/deploy.yml`).

Die gestalterischen Entscheidungen stehen in **[DESIGN.md](DESIGN.md)** –
bitte dort nachlesen, bevor am Aussehen etwas geändert wird.

Gebaut mit **Next.js (App Router) + TypeScript** und reinem CSS – bewusst ohne
Datenbank oder externe Dienste, damit die Seite schnell lädt und
datenschutzfreundlich bleibt.

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktions-Build (statischer Export in den Ordner "out")
```

## Struktur

```
src/
├── app/
│   ├── layout.tsx        # Grundgerüst, SEO, Kopf- und Fußzeile
│   ├── page.tsx          # Startseite – setzt die Abschnitte zusammen
│   ├── [leistung]/       # Vorlage für /werbetechnik, /textilveredelung, /drucksachen
│   ├── globals.css       # Gestaltung: Variablen oben in :root, Schriften, alle Abschnitte
│   ├── fonts/            # Schriften als Dateien (Cormorant Garamond, Hanken Grotesk)
│   ├── icon.svg          # Favicon
│   ├── impressum/        # Pflichtseite
│   └── datenschutz/      # Pflichtseite (DSGVO)
├── components/
│   ├── layout/           # Header, Footer, Gerüst für Rechtstexte
│   ├── sections/         # Hero, Leistungen, Process, Einblicke, Fragen, Kontakt
│   └── ui/               # Welle (Abschnittskante), Foto-Platzhalter
└── lib/
    ├── site.ts           # ZENTRALE INHALTE / FIRMENDATEN (Adresse, Zeiten …)
    └── assets.ts         # Bildpfade (für GitHub Pages und eigene Domain)
public/img/leuchtturm.webp   # freigestellter Leuchtturm im Kopfbereich
```

## Inhalte pflegen

- **Firmendaten, Öffnungszeiten, Leistungen, Ablauf, Fragen:** `src/lib/site.ts`
  (aus der Liste der Leistungen entstehen auch Menü und Unterseiten)
- **Farben, Schrift, Breite, Rundung:** Variablen oben in `src/app/globals.css`
- **Fotos:** Zurzeit Platzhalter („Foto folgt", Bild rechts im Kopfbereich, Einblicke,
  Unterseiten). Echte Fotos in `public/img/` ablegen und über `asset("/img/datei.webp")`
  einbinden.
- **Leuchtturm im Kopfbereich:** Die Überschrift ist auf die weißen Streifen des Turms
  abgestimmt (Erklärung im Dateikopf von `components/sections/Hero.tsx`). Wird das
  Bild getauscht, müssen diese Werte neu bestimmt werden.

## Vor dem Livegang ausfüllen

In `impressum/page.tsx` und `datenschutz/page.tsx` stehen rechtlich relevante
Hinweise in den Kommentaren am Dateikopf (u. a. Handwerkskammer-Angaben,
Hosting-Anbieter bei einem Umzug). Diese vor Veröffentlichung klären.
Der Kopfbereich nutzt ein KI-generiertes Leuchtturm-Bild; die Nutzungsrechte
müssen vor dem Livegang geklärt werden.

## Umfang

Startseite, je eine Unterseite für **Werbetechnik, Textilveredelung und
Drucksachen** sowie die Pflichtseiten Impressum und Datenschutz. Der
Textilshop ist als externer Link eingebunden. Kundenstimmen gibt es noch nicht
(früher nur Platzhalter).

## Datenschutz / Performance

- Keine Tracking-/Marketing-Cookies, keine Analyse-Dienste, kein Aufruf bei Google.
- Die Schriften werden self-hosted ausgeliefert.
- Kein JavaScript für Gestaltung nötig: Menü auf dem Handy und die Fragen
  funktionieren über `<details>`.
- Das Live-Bearbeiten-Panel (`public/__editor/`) ist ein reines
  Entwicklungswerkzeug, steht in `.gitignore` und wird nur in `npm run dev` geladen.
