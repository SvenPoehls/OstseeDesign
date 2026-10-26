# Ostseedesign – Website

Moderne, statische Marketing-Website für **Ostseedesign – Werbung & Textilien**
in Eckernförde. Redesign der bisherigen WordPress-Seite.

**🔗 Live-Vorschau:** https://svenpoehls.github.io/OstseeDesign/

Jeder Push auf den Branch wird über GitHub Actions automatisch gebaut und dort
veröffentlicht (siehe `.github/workflows/deploy.yml`).

Die gestalterischen Entscheidungen stehen in **[DESIGN.md](DESIGN.md)** –
bitte dort nachlesen, bevor am Aussehen etwas geändert wird.

Gebaut mit **Next.js (App Router) + TypeScript + Tailwind CSS** – bewusst ohne
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
│   ├── layout.tsx        # Grundgerüst, Schrift, SEO, Kopf- und Fußzeile
│   ├── page.tsx          # Startseite – setzt die Abschnitte zusammen
│   ├── [leistung]/       # Vorlage für /textilveredelung, /werbetechnik, /drucksachen
│   ├── globals.css       # Kopfzeilen-Farbe (--kopf), Seitenrand, Animationen
│   ├── icon.svg          # Favicon
│   ├── impressum/        # Pflichtseite
│   └── datenschutz/      # Pflichtseite (DSGVO)
├── components/
│   ├── layout/           # Header, Footer, Legal-Gerüst, Cookie-Hinweis
│   ├── sections/         # Abschnitte der Startseite und der Unterseiten
│   └── ui/               # Bild (Foto-Platzhalter), Einblenden (Scroll-Animation)
└── lib/
    ├── site.ts           # ZENTRALE INHALTE / FIRMENDATEN (Adresse, Zeiten …)
    ├── farben.ts         # die vier Werkstattfarben
    └── assets.ts         # Bildpfade (für GitHub Pages und eigene Domain)
```

## Inhalte pflegen

- **Firmendaten, Öffnungszeiten, Leistungen, Ablauf:** `src/lib/site.ts`
  (aus der Liste der Leistungen entstehen auch Menü und Unterseiten)
- **Farben:** `src/lib/farben.ts`
- **Wie kräftig das Gelb der Kopfzeile ist:** `--kopf` oben in `src/app/globals.css`
- **Seitenbreite und Rundung der Kacheln:** `seite`, `kachel`, `bild` in `tailwind.config.ts`
- **Bilder:** Aktuell Platzhalter mit Notiz, was darauf zu sehen sein soll
  (`components/ui/Bild.tsx`). Sie werden 1:1 durch echte Fotos ersetzt – das
  Vorgehen steht im Dateikopf von `Bild.tsx`. Die Bilddateien kommen in einen
  Ordner `public/` (neu anlegen) und werden über `asset("/datei.jpg")`
  angesprochen.

## Vor dem Livegang ausfüllen

In `impressum/page.tsx` und `datenschutz/page.tsx` stehen rechtlich relevante
Hinweise in den Kommentaren am Dateikopf (u. a. Handwerkskammer-Angaben,
Hosting-Anbieter bei einem Umzug). Diese vor Veröffentlichung klären.

## Umfang

Startseite, je eine Unterseite für **Textilveredelung, Werbetechnik und
Drucksachen** sowie die Pflichtseiten Impressum und Datenschutz. Der
Textilshop ist als externer Link eingebunden.

## Datenschutz / Performance

- Keine Tracking-/Marketing-Cookies, keine Analyse-Dienste.
- Die Schrift (Schibsted Grotesk) wird self-hosted ausgeliefert – kein
  externer Aufruf.
- Animationen bewegen nur `opacity`, `translate`, `scale` und `rotate`
  und werden bei „Bewegung reduzieren" im Betriebssystem komplett
  abgeschaltet.
