import type { Config } from "tailwindcss";

// Tailwind-Konfiguration.
//
// Gestaltungsidee „Werkstatt-Druckbogen": warmes Papier, tiefschwarze Tinte,
// große Schrift, Haarlinien statt Kästen, keine abgerundeten Ecken.
// Farben und Schriften hängen an CSS-Variablen (src/app/globals.css), damit
// sich alles an einer Stelle umstellen lässt.
const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // ECKEN: bewusst überall eckig. `rounded-*` ist damit wirkungslos,
    // nur `rounded-full` bleibt rund (Punkte, Nummernkreise).
    borderRadius: {
      none: "0",
      sm: "0",
      DEFAULT: "0",
      md: "0",
      lg: "0",
      xl: "0",
      "2xl": "0",
      "3xl": "0",
      full: "9999px",
    },
    extend: {
      colors: {
        paper: {
          DEFAULT: "var(--paper)", // warmes Papierweiß
          deep: "var(--paper-deep)", // zweite, etwas dunklere Papierfläche
        },
        ink: {
          DEFAULT: "var(--ink)", // Tinte (fast schwarz, leicht warm)
          soft: "var(--ink-soft)", // Nebentext
        },
        rule: "var(--rule)", // Haarlinien
        // PLATZHALTER: die einzige „Farbe" im Entwurf. Steht bis auf Weiteres
        // auf demselben Schwarz – hier später die echte Hausfarbe eintragen.
        mark: "var(--mark)",
      },
      fontFamily: {
        // Bricolage Grotesque: eigenwilliger Grotesk mit Breiten-Achse.
        display: ["var(--font-display)", "Impact", "sans-serif"],
        // Hanken Grotesk: ruhige Leseschrift, bewusst NICHT Inter.
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        // Schriften der beiden anderen Entwürfe (siehe src/app/layout.tsx).
        fraunces: ["var(--font-fraunces)", "Georgia", "serif"],
        archivo: ["var(--font-archivo)", "system-ui", "sans-serif"],
        schibsted: ["var(--font-schibsted)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1360px",
        reading: "34rem",
      },
      letterSpacing: {
        label: "0.16em",
        headline: "-0.035em",
      },
      transitionTimingFunction: {
        // Einziger Bewegungs-Verlauf der Seite.
        werk: "cubic-bezier(0.2, 0.7, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
