import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Einblenden from "@/components/ui/Einblenden";
import Papiergrund from "@/components/layout/Papiergrund";
import { company } from "@/lib/site";

// Die Schrift liegt als Datei im Projekt (src/app/fonts) und wird mit der
// Seite ausgeliefert. Kein Aufruf bei Google – weder beim Besucher noch beim
// Bauen. Das ist datenschutzfreundlich und macht den Bau unabhängig.
//
//   Schibsted Grotesk → die einzige Schrift der Seite. Eine freundliche,
//        etwas rundliche Grotesk aus Skandinavien. Bewusst nicht Inter, das
//        die Standardschrift fast aller Baukästen ist. Variable Schrift:
//        eine Datei deckt alle Stärken von 400 bis 900 ab.
const schibsted = localFont({
  src: [
    { path: "./fonts/schibsted-latin.woff2", style: "normal" },
    { path: "./fonts/schibsted-latin-ext.woff2", style: "normal" },
  ],
  weight: "400 900",
  variable: "--font-schibsted",
  display: "swap",
});

// SEO-Grundlagen: sprechender Titel mit lokalem Bezug, Beschreibung,
// Open-Graph/Twitter-Karten und deutsche Sprache.
const description =
  "Ostseedesign – Ihr Werbepartner in Eckernförde. Seit über 30 Jahren Werbetechnik und Textilveredelung: Beschriftungen aller Art, Stickereien, Transfers und Drucksachen.";

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
    <html lang="de" className={schibsted.variable}>
      <body className="font-sans">
        {/* Sprungmarke für Tastatur-/Screenreader-Nutzer (Barrierefreiheit). */}
        <a
          href="#hauptinhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-tinte focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Zum Inhalt springen
        </a>
        {/* Kopf- und Fußzeile stehen im Layout, nicht in den Seiten: Beim
            Wechsel zwischen Seiten bleiben sie stehen und gleiten nicht jedes
            Mal neu herein. Sie liegen in einem gemeinsamen Rahmen, damit die
            Kopfzeile (sticky) über die ganze Seitenlänge mitläuft.
            `overflow-x-clip` ist ein Sicherheitsnetz: Kein Element (z. B. ein
            noch seitlich versetzter Animationsstart) darf die Seite breiter
            machen als den Bildschirm. Anders als „hidden" bricht „clip" die
            mitlaufende Kopfzeile nicht.
            `papier` + <Papiergrund />: der Verlauf von hell nach getönt hinter
            allem (siehe globals.css, Abschnitt PAPIER). */}
        <div className="papier min-h-screen overflow-x-clip">
          <Papiergrund />
          <div className="papier-inhalt">
            <Einblenden />
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
