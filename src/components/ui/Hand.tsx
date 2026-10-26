// ───────────────────────────────────────────────────────────────────────
//  GEZEICHNETE KLEINTEILE
// ───────────────────────────────────────────────────────────────────────
//  Pfeile, Haken, Kringel, Klebeband: alles das, was man auf einem Entwurf
//  mit dem Stift danebensetzt. Bewusst als eigene Datei und nicht in
//  Icons.tsx – die dortigen Symbole sind sauber konstruiert und werden
//  weiterhin auf der Auswahlseite benutzt.
//
//  Alle Zeichnungen nehmen die Schriftfarbe an (`currentColor`) und halten
//  ihre Strichstärke, egal wie groß sie dargestellt werden.

type Props = { className?: string };

const svg =
  "skizze-strich inline-block shrink-0 overflow-visible align-middle";

/** Pfeil nach rechts, mit einem Schlenker gezogen. */
export function PfeilHand({ className = "h-4 w-5" }: Props) {
  return (
    <svg
      className={`${svg} ${className}`}
      viewBox="0 0 24 16"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M1.5 8.4c5-.9 10-.6 15-.9 2 0 4 0 6-.2" />
      <path d="M16.5 2.6c2 1.8 4 3.4 6 4.8-2 1.6-4 3.2-5.6 5.2" />
    </svg>
  );
}

/** Haken, wie man ihn neben eine erledigte Zeile setzt. */
export function HakenHand({ className = "h-4 w-4" }: Props) {
  return (
    <svg
      className={`${svg} ${className}`}
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M2.5 10.5c1.8 2 3.4 4 5 6.2C11 10.4 14.4 5.6 18 1.8" />
    </svg>
  );
}

/** Kleiner Pfeil nach schräg oben – für Links, die woanders hinführen. */
export function ExternHand({ className = "h-3.5 w-3.5" }: Props) {
  return (
    <svg
      className={`${svg} ${className}`}
      viewBox="0 0 18 18"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3.2 14.6C6.4 11.2 9.6 7.8 13.4 4.6" />
      <path d="M7.4 3.8c2.2-.4 4.4-.5 6.6-.4.3 2.2.3 4.4.1 6.6" />
    </svg>
  );
}

/** Telefonhörer, mit einem Strich gezeichnet. */
export function TelefonHand({ className = "h-5 w-5" }: Props) {
  return (
    <svg
      className={`${svg} ${className}`}
      viewBox="0 0 22 22"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4.4 2.6c1.4-.4 2.8-.2 3.4 1 .6 1.2 1 2.4 1.4 3.6.2.8-.2 1.4-1 1.9-.8.5-1 1-.6 1.9 1 2.3 2.7 4 5 5 .9.4 1.5.2 2-.6.5-.8 1.1-1.1 1.9-.9 1.2.4 2.4.8 3.6 1.4 1.2.6 1.4 2 1 3.4-.4 1.4-1.6 2.2-3.2 2.1-4-.3-7.6-2-10.6-5S2.3 10.6 2 6.6c-.1-1.8.7-3.4 2.4-4z" />
    </svg>
  );
}

/** Drei krumme Striche – das Menüzeichen auf dem Handy. */
export function MenueHand({ className = "h-5 w-6" }: Props) {
  return (
    <svg
      className={`${svg} ${className}`}
      viewBox="0 0 24 18"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M2.4 4.2c6.4-.9 12.8-.5 19.2-.8" />
      <path d="M2.8 9.2c6.2.6 12.4.2 18.6.4" />
      <path d="M2.4 14.2c6.6-.8 13.2-.3 19.2-.6" />
    </svg>
  );
}

/** Ein durchgestrichenes Kreuz – Menü schließen. */
export function KreuzHand({ className = "h-5 w-5" }: Props) {
  return (
    <svg
      className={`${svg} ${className}`}
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3.4 3c4.6 4.2 9 8.6 13.4 13.2" />
      <path d="M16.6 3.2C12.2 7.6 7.8 11.8 3.2 16.4" />
    </svg>
  );
}

/** Ein kleiner Stern/Kringel als Trennzeichen im Laufband. */
export function SternHand({ className = "h-3.5 w-3.5" }: Props) {
  return (
    <svg
      className={`${svg} ${className}`}
      viewBox="0 0 18 18"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M9 1.8c-.3 4.8-.2 9.6.2 14.4" />
      <path d="M2.4 5.4c4.4 2.6 8.8 5 13.4 7.2" />
      <path d="M15.6 5.2c-4.4 2.8-8.8 5.2-13.2 7.6" />
    </svg>
  );
}

/**
 * Ein von Hand gezogener, geschwungener Pfeil, wie man ihn auf eine
 * Randnotiz setzt. Zeigt standardmäßig nach rechts unten.
 */
export function SchwungPfeil({ className = "h-12 w-16" }: Props) {
  return (
    <svg
      className={`${svg} ${className}`}
      viewBox="0 0 64 48"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3 6c7 2 14 6 20 12 6 6 11 13 19 17 5 2 11 3 17 3" />
      <path d="M50 32c4 2 7 4 10 6" />
      <path d="M52 44c3-3 6-5 8-6" />
    </svg>
  );
}

/** Kritzelecke: ein paar schnelle Striche, die eine Ecke betonen. */
export function Kritzelecke({ className = "h-8 w-8" }: Props) {
  return (
    <svg
      className={`${svg} ${className}`}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M2 14c3.6-4.4 7.6-8.4 12-12" opacity=".8" />
      <path d="M2 22c6-6.8 12.4-13.2 19-19" opacity=".55" />
      <path d="M8 29c6.4-7.2 13.2-14 20.4-20.4" opacity=".35" />
    </svg>
  );
}
