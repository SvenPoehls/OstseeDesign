import type { Config } from "tailwindcss";

// Tailwind-Konfiguration.
// Alle Marken-Farben sind an CSS-Variablen gekoppelt, die zentral in
// src/app/globals.css definiert sind. Um die gesamte Farbwelt der Website
// anzupassen, ändert man nur dort die Werte (--petrol, --sand, --accent ...).
const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primärfarbe: tiefes Petrol/Ostseeblau (Vertrauen, maritim).
        petrol: {
          DEFAULT: "var(--petrol)",
          dark: "var(--petrol-dark)",
          soft: "var(--petrol-soft)",
        },
        // Ruhige Flächenfarbe: Sand/Off-White.
        sand: {
          DEFAULT: "var(--sand)",
          dark: "var(--sand-dark)",
        },
        // Kräftiger Akzent: warmes Orange (CTAs, Hervorhebungen).
        accent: {
          DEFAULT: "var(--accent)", // helles Orange – dekorativ / große Flächen
          strong: "var(--accent-strong)", // kontraststark – für Text/Buttons (AA)
          soft: "var(--accent-soft)",
        },
        ink: {
          DEFAULT: "var(--ink)", // Haupttext
          muted: "var(--ink-muted)", // Nebentext
        },
        line: "var(--line)", // dezente Trennlinien
      },
      fontFamily: {
        // Fließtext: Inter (self-hosted via next/font).
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        // Überschriften: Sora – markant, aber gut lesbar.
        display: ["var(--font-sora)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
      },
      maxWidth: {
        content: "1180px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(10, 56, 70, 0.04), 0 12px 32px -12px rgba(10, 56, 70, 0.16)",
        "card-hover":
          "0 2px 4px rgba(10, 56, 70, 0.06), 0 20px 44px -14px rgba(10, 56, 70, 0.24)",
      },
    },
  },
  plugins: [],
};

export default config;
