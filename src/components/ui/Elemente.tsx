import type { ReactNode } from "react";

// Kleine Bausteine, die an mehreren Stellen vorkommen.

// Wellenkante zwischen zwei Abschnitten. `bg` ist die Farbe darüber, `fill`
// die Farbe darunter; die Welle trennt beide weich statt mit gerader Kante.
export function Welle({ bg, fill }: { bg: string; fill: string }) {
  return (
    <div aria-hidden="true" style={{ background: bg, lineHeight: 0, marginTop: -1 }}>
      <svg
        className="welle"
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        focusable="false"
      >
        <path
          d="M0 64V30C180 4 360 56 540 30S900 4 1080 30 1260 56 1440 30V64Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

// Platzhalterfläche für ein Foto, das noch fehlt. Der Text sagt, was darauf soll.
export function FotoPlatzhalter({
  children,
  className = "foto",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className} role="img" aria-label={`Platzhalter: ${children}`}>
      <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
        <rect x="6" y="10" width="36" height="28" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17" cy="20" r="4" fill="currentColor" />
        <path d="M8 36l11-11 8 8 5-5 8 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
      <span>Foto folgt</span>
    </div>
  );
}
