"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

// Fotoreihe. Am Desktop eine ruhige, gestaffelte Reihe (reines CSS). Auf dem
// Handy ein Karussell: Ein Bild steht im Vordergrund, vom nächsten ist ein
// Stück am Rand zu sehen. Darunter zeigen Punkte, wie viele Bilder es gibt und
// welches gerade vorn liegt; ein Tipp auf einen Punkt springt dorthin.
export default function Karussell({
  children,
  editId,
  label = "Fotos",
}: {
  children: ReactNode;
  editId?: string;
  label?: string;
}) {
  const spur = useRef<HTMLDivElement>(null);
  const [aktiv, setAktiv] = useState(0);
  const anzahl = Children.count(children);

  const lesen = useCallback(() => {
    const s = spur.current;
    if (!s || s.children.length < 2) return;
    const erster = (s.children[0] as HTMLElement).offsetLeft;
    const schritt = (s.children[1] as HTMLElement).offsetLeft - erster;
    if (schritt > 0) setAktiv(Math.min(anzahl - 1, Math.max(0, Math.round(s.scrollLeft / schritt))));
  }, [anzahl]);

  useEffect(() => {
    lesen();
  }, [lesen]);

  const springen = (i: number) => {
    const s = spur.current;
    const ziel = s?.children[i] as HTMLElement | undefined;
    if (!s || !ziel) return;
    const reduziert = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    s.scrollTo({ left: ziel.offsetLeft - (s.children[0] as HTMLElement).offsetLeft, behavior: reduziert ? "auto" : "smooth" });
  };

  return (
    <div className="karussell">
      <div
        className="einblicke"
        ref={spur}
        onScroll={lesen}
        role="group"
        aria-roledescription="Karussell"
        aria-label={label}
        data-edit-id={editId}
      >
        {children}
      </div>
      <div className="karussell-punkte" role="group" aria-label={`${label}: Bild auswählen`}>
        {Array.from({ length: anzahl }, (_, i) => (
          <button
            key={i}
            type="button"
            className="punkt"
            aria-label={`Bild ${i + 1} von ${anzahl}`}
            aria-current={i === aktiv ? "true" : undefined}
            onClick={() => springen(i)}
          >
            <i />
          </button>
        ))}
      </div>
    </div>
  );
}
