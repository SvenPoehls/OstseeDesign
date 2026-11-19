import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { company } from "@/lib/site";

// Schriften: Cormorant Garamond und Hanken Grotesk liegen als Dateien im
// Projekt (src/app/fonts, eingebunden in globals.css). Kein Aufruf bei Google,
// weder beim Besucher noch beim Bauen.

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

export const viewport: Viewport = { themeColor: "#ffffff" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        {/* Sprungmarke für Tastatur- und Screenreader-Nutzer */}
        <a href="#hauptinhalt" className="skip">Zum Inhalt springen</a>
        <Header />
        {children}
        <Footer />

        {/* EDITOR-PANEL START (nur Entwicklung; fliegt beim Finalisieren raus) */}
        {process.env.NODE_ENV === "development" && (
          <Script src="/__editor/editor-panel.js" strategy="afterInteractive" />
        )}
        {/* EDITOR-PANEL END */}
      </body>
    </html>
  );
}
