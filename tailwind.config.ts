import type { Config } from "tailwindcss";

// Tailwind-Konfiguration.
//
// Gestaltung „Farbfächer": Papiergrund, vier Werkstattfarben, Kreise und
// leicht gerundete Kacheln.
// Die Farben selbst stehen in src/lib/farben.ts, die Kopfzeilen-Farbe und die
// Animationen in src/app/globals.css.
const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tinte: "#17161a", // Schriftfarbe
        leise: "#3f3b45", // Nebentext (gleich LEISE in src/lib/farben.ts)
      },
      fontFamily: {
        // Schibsted Grotesk: freundliche, etwas rundliche Grotesk aus
        // Skandinavien. Bewusst nicht Inter oder Poppins.
        sans: ["var(--font-schibsted)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        reading: "34rem",
        // Breite des Inhalts auf großen Bildschirmen. Größer = die Seite
        // nutzt mehr von einem breiten Monitor.
        seite: "1440px",
      },
      borderRadius: {
        // RUNDUNG DER KACHELN. Knöpfe, Marken und Kreise bleiben ganz rund
        // (`rounded-full`); nur Flächen benutzen diese beiden Werte.
        kachel: "14px", // Karten und Farbflächen
        bild: "10px", // Foto-Platzhalter, QR-Feld
      },
    },
  },
  plugins: [],
};

export default config;
