import type { Config } from "tailwindcss";

// Tailwind-Konfiguration.
//
// Gestaltung „Farbfächer": weißer Grund, vier Werkstattfarben, runde Formen.
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
        leise: "#605c66", // Nebentext
      },
      fontFamily: {
        // Schibsted Grotesk: freundliche, etwas rundliche Grotesk aus
        // Skandinavien. Bewusst nicht Inter oder Poppins.
        sans: ["var(--font-schibsted)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        reading: "34rem",
      },
    },
  },
  plugins: [],
};

export default config;
