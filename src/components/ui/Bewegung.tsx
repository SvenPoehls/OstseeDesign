"use client";

import { useEffect } from "react";

// Hält Dauerbewegungen an, solange ihr Bereich nicht im Bild ist (Möwen,
// Lichtschein, Luftblasen). Der Bereich bekommt dann `data-pause`; die Regel
// dazu steht in globals.css. Ohne JavaScript laufen die Animationen einfach
// weiter, nichts bleibt unsichtbar.
export default function Bewegung() {
  useEffect(() => {
    const ziele = document.querySelectorAll<HTMLElement>("[data-bewegung]");
    if (!("IntersectionObserver" in window)) return;
    const beobachter = new IntersectionObserver((eintraege) => {
      for (const e of eintraege) {
        if (e.isIntersecting) e.target.removeAttribute("data-pause");
        else e.target.setAttribute("data-pause", "");
      }
    });
    ziele.forEach((z) => beobachter.observe(z));
    return () => beobachter.disconnect();
  }, []);
  return null;
}
