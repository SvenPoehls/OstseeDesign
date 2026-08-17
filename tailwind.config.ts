import type { Config } from "tailwindcss";

// Tailwind-Konfiguration.
// Farbwelt & Schrift hängen an CSS-Variablen (siehe src/app/globals.css),
// damit sich die gesamte Optik zentral anpassen lässt.
// Stil abgestimmt auf den Textilshop (ostseetextilien.de): Open Sans,
// Marineblau als Akzent, Koralle als Signalfarbe, ruhige Rundungen.
const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)", // Grundfläche (weiß)
        surface: "var(--surface)", // dezent getönte Abschnitte
        ink: {
          DEFAULT: "var(--ink)", // Haupttext
          muted: "var(--ink-muted)", // Nebentext
        },
        accent: {
          DEFAULT: "var(--accent)",
          dark: "var(--accent-dark)",
          soft: "var(--accent-soft)",
        },
        pop: {
          DEFAULT: "var(--pop)",
          dark: "var(--pop-dark)",
        },
        line: "var(--line)",
        circle: "var(--circle)", // grauer Hintergrundkreis im Kopfbereich
      },
      fontFamily: {
        sans: ["var(--font-opensans)", "system-ui", "sans-serif"],
        display: ["var(--font-opensans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
        prose: "60rem",
      },
      letterSpacing: {
        label: "0.12em",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(23,26,31,0.04), 0 10px 30px -12px rgba(23,26,31,0.15)",
        "soft-lg": "0 2px 4px rgba(23,26,31,0.05), 0 24px 48px -16px rgba(23,26,31,0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
