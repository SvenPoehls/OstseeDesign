# Ostseedesign – Website

Moderne, statische Marketing-Website für **Ostseedesign – Werbung & Textilien**
in Eckernförde. Redesign der bisherigen WordPress-Seite.

**🔗 Live-Vorschau:** https://svenpoehls.github.io/OstseeDesign/

Jeder Push auf den Branch wird über GitHub Actions automatisch gebaut und dort
veröffentlicht (siehe `.github/workflows/deploy.yml`).

Gebaut mit **Next.js (App Router) + TypeScript + Tailwind CSS** – bewusst ohne
Datenbank oder externe Dienste, damit die Seite schnell lädt und
datenschutzfreundlich bleibt.

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktions-Build
npm run start    # Build lokal starten
```

## Struktur

```
src/
├── app/
│   ├── layout.tsx        # Grundgerüst, Schriften (self-hosted), SEO-Metadaten
│   ├── page.tsx          # Startseite (setzt die Sektionen zusammen) + JSON-LD
│   ├── globals.css       # ZENTRALE DESIGN-TOKENS (Farben, Buttons)
│   ├── icon.svg          # Favicon
│   ├── impressum/        # Pflichtseite
│   └── datenschutz/      # Pflichtseite (DSGVO)
├── components/
│   ├── layout/           # Header, Footer, Cookie-Hinweis, Legal-Gerüst
│   ├── sections/         # Hero, Services, AllInOne, Trust, Contact
│   └── ui/               # Logo, Platzhalter, Icons
└── lib/
    └── site.ts           # ZENTRALE INHALTE / FIRMENDATEN (Adresse, Zeiten …)
```

## Inhalte pflegen

- **Firmendaten, Öffnungszeiten, Leistungen:** `src/lib/site.ts`
- **Farben / Marke:** die CSS-Variablen oben in `src/app/globals.css`
- **Bilder:** Aktuell Platzhalter mit Bildregie-Notizen
  (`components/ui/Placeholder.tsx`). Sie werden 1:1 durch echte Fotos ersetzt.

## Vor dem Livegang ausfüllen

In `impressum/page.tsx` und `datenschutz/page.tsx` sind rechtlich relevante
Angaben mit `[PLATZHALTER]` markiert (u. a. Inhaber:in, ggf. USt-IdNr.,
Hosting-Anbieter). Diese vor Veröffentlichung ergänzen.

## Umfang

Dieser Ausbauschritt umfasst die **Startseite** als vollständiges Layout sowie
die Pflichtseiten Impressum und Datenschutz. Eigene Unterseiten
(Werbetechnik, Textilveredelung, Drucksachen) folgen später – die Navigation
springt aktuell zu den entsprechenden Sektionen der Startseite. Der Textilshop
ist als externer Link eingebunden.

## Datenschutz / Performance

- Keine Tracking-/Marketing-Cookies, keine Analyse-Dienste.
- Schriften (Inter, Sora) werden self-hosted ausgeliefert – kein externer Aufruf.
- Karten-Vorschau öffnet den Kartendienst erst auf Klick (kein Drittanbieter-Embed
  beim Laden).
