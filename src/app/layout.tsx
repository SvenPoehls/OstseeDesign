import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { company } from "@/lib/site";

// Schriften liegen als Dateien im Projekt (src/app/fonts) und werden mit der
// Seite ausgeliefert. Kein Aufruf bei Google – weder beim Besucher noch beim
// Bauen. Das ist datenschutzfreundlich und macht den Bau unabhängig.
//
//   Bricolage Grotesque → Überschriften. Eine eigenwillige, kantige Grotesk
//        mit Breiten-Achse: damit lassen sich Schlagzeilen schmal und
//        plakativ setzen, wie ein Schriftzug auf einem Schild.
//   Hanken Grotesk → Fließtext. Bewusst NICHT Inter: Inter ist die
//        Standardschrift fast aller Baukästen und sieht entsprechend
//        nach Standard aus.
//
// Beides sind variable Schriften – eine Datei deckt alle Stärken ab.
const display = localFont({
  src: [
    { path: "./fonts/bricolage-latin.woff2", style: "normal" },
    { path: "./fonts/bricolage-latin-ext.woff2", style: "normal" },
  ],
  weight: "400 800",
  variable: "--font-display",
  display: "swap",
});

const sans = localFont({
  src: [
    { path: "./fonts/hanken-latin.woff2", style: "normal" },
    { path: "./fonts/hanken-latin-ext.woff2", style: "normal" },
  ],
  weight: "400 800",
  variable: "--font-sans",
  display: "swap",
});

// SEO-Grundlagen: sprechender Titel mit lokalem Bezug, Beschreibung,
// Open-Graph/Twitter-Karten und deutsche Sprache.
const description =
  "Ostseedesign am Rosseer Weg in Eckernförde: Fahrzeuge beschriften, Kleidung besticken, Schilder und Drucksachen. Den Betrieb gibt es seit über 30 Jahren.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ostseedesign.de"),
  title: {
    default: "Ostseedesign – Werbung & Textilien in Eckernförde",
    template: "%s · Ostseedesign Eckernförde",
  },
  description,
  keywords: [
    "Werbetechnik Eckernförde",
    "Fahrzeugbeschriftung",
    "Textilveredelung",
    "Stickerei",
    "Drucksachen",
    "Werbung Schleswig-Holstein",
    "Ostseedesign",
  ],
  authors: [{ name: company.fullName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.ostseedesign.de",
    siteName: company.fullName,
    title: "Ostseedesign – Werbung & Textilien in Eckernförde",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ostseedesign – Werbung & Textilien in Eckernförde",
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${sans.variable} ${display.variable}`}>
      <body>
        {/* Sprungmarke für Tastatur-/Screenreader-Nutzer (Barrierefreiheit). */}
        <a
          href="#hauptinhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-paper"
        >
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
