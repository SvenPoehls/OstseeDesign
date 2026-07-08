import type { Metadata } from "next";
import { Fraunces, Montserrat } from "next/font/google";
import "./globals.css";
import { company } from "@/lib/site";

// Schriften self-hosted via next/font (kein externer Aufruf beim Nutzer):
//   Fraunces → elegante Serifen-Display (Headlines + kursive Betonungen),
//   Montserrat → Fließtext & Labels.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

// SEO-Grundlagen: sprechender Titel mit lokalem Bezug, Beschreibung,
// Open-Graph/Twitter-Karten und deutsche Sprache.
const description =
  "Ostseedesign in Eckernförde: Werbetechnik, Textilveredelung und Drucksachen – alles aus einer Hand. Ihr Werbepartner in Schleswig-Holstein seit über 30 Jahren.";

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
    <html lang="de" className={`${fraunces.variable} ${montserrat.variable}`}>
      <body>
        {/* Sprungmarke für Tastatur-/Screenreader-Nutzer (Barrierefreiheit). */}
        <a
          href="#hauptinhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-petrol focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
