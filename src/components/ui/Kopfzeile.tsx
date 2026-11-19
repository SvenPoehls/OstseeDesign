"use client";

import { useEffect } from "react";

// Kopfzeile auf dem Handy: bleibt oben stehen (sticky per CSS), blendet sich
// beim Runterscrollen aus und beim Hochscrollen sofort wieder ein. Ein offenes
// Menü hält sie sichtbar; ein Tipp auf einen Menüpunkt schließt das Menü.
// Am Desktop passiert nichts (die Regeln dazu stehen nur in der mobilen
// Media Query in globals.css).
export default function Kopfzeile() {
  useEffect(() => {
    const kopf = document.querySelector<HTMLElement>(".site-header");
    const menu = document.querySelector<HTMLDetailsElement>(".site-header .menu");
    if (!kopf) return;
    let letzte = window.scrollY;
    let wartet = false;

    const pruefen = () => {
      wartet = false;
      const y = window.scrollY;
      const mobil = window.matchMedia("(max-width: 760px)").matches;
      kopf.toggleAttribute("data-gescrollt", y > 8);
      if (!mobil || menu?.open) {
        kopf.removeAttribute("data-versteckt");
      } else if (y > letzte + 6 && y > 120) {
        kopf.setAttribute("data-versteckt", "");
      } else if (y < letzte - 6 || y < 80) {
        kopf.removeAttribute("data-versteckt");
      }
      letzte = y;
    };
    const beiScroll = () => {
      if (!wartet) {
        wartet = true;
        requestAnimationFrame(pruefen);
      }
    };
    const beiKlick = (e: Event) => {
      if ((e.target as HTMLElement).closest(".menu a") && menu) menu.open = false;
    };

    pruefen();
    window.addEventListener("scroll", beiScroll, { passive: true });
    menu?.addEventListener("click", beiKlick);
    return () => {
      window.removeEventListener("scroll", beiScroll);
      menu?.removeEventListener("click", beiKlick);
    };
  }, []);
  return null;
}
