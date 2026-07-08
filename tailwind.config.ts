import type { Config } from "tailwindcss";

// Tailwind-Konfiguration.
// Farbwelt & Schriften hängen an CSS-Variablen (siehe src/app/globals.css),
// damit sich die gesamte Optik zentral anpassen lässt.
// Stil-Vorlage: helle, warme „Editorial"-Ästhetik (Creme/Orange, Serifen-Display).
const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warmer Off-White-Hintergrund.
        paper: "var(--paper)",
        cream: "var(--cream)",
        // Textfarben (nahezu Schwarz + warmes Grau).
        ink: {
          DEFAULT: "var(--ink)",
          muted: "var(--ink-muted)",
        },
        // Kräftiger Akzent (Orange) + weicher Sonnen-Ton (Pfirsich) + Tan-Pill.
        orange: "var(--orange)",
        peach: "var(--peach)",
        tan: "var(--tan)",
        line: "var(--line)",
      },
      fontFamily: {
        // Quicksand für Fließtext UND Überschriften (abgerundete Sans).
        sans: ["var(--font-quicksand)", "system-ui", "sans-serif"],
        display: ["var(--font-quicksand)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
        prose: "62rem",
      },
      letterSpacing: {
        label: "0.16em",
      },
    },
  },
  plugins: [],
};

export default config;
