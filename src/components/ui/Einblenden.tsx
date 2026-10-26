"use client";

import { useEffect } from "react";

// ───────────────────────────────────────────────────────────────────────
//  EINBLENDEN BEIM SCROLLEN
// ───────────────────────────────────────────────────────────────────────
//  Wird einmal pro Seite eingebaut und zeigt nichts an. Es sucht alle
//  Elemente mit `data-reveal` und sorgt dafür, dass sie erst erscheinen,
//  wenn man bis zu ihnen gescrollt hat.
//
//  Benutzen: an ein beliebiges Element schreiben
//      data-reveal                       → fährt von unten herein
//      data-reveal data-art="faden"      → zeichnet sich von links nach rechts
//      data-reveal data-art="pop"        → poppt auf
//  und optional eine Verzögerung über die Variable `--verz`, z. B.
//      className="[--verz:120ms]"
//
//  Warum so und nicht „alles standardmäßig unsichtbar"?
//  Weil dann ohne JavaScript (oder wenn es kaputt geht) die halbe Seite
//  fehlen würde. Hier ist alles sichtbar, bis dieses Skript läuft – und es
//  versteckt nur Dinge, die ohnehin noch unterhalb des Bildschirms liegen.
//  Man sieht also nie ein Element erst da stehen und dann verschwinden.
//
//  Die Animation selbst steht in globals.css (Abschnitt „EINBLENDEN").
export default function Einblenden() {
  useEffect(() => {
    // Wer „Bewegung reduzieren" eingestellt hat, bekommt gar nichts versteckt.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elemente = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    const beobachter = new IntersectionObserver(
      (eintraege) => {
        for (const eintrag of eintraege) {
          if (!eintrag.isIntersecting) continue;
          const el = eintrag.target as HTMLElement;
          el.dataset.reveal = "an";
          beobachter.unobserve(el);
        }
      },
      // Ein Stück vor dem unteren Rand auslösen, damit nichts „zu spät" kommt.
      { rootMargin: "0px 0px -8% 0px", threshold: 0 }
    );

    for (const el of elemente) {
      // Was schon im Bild oder weiter oben liegt (z. B. nach einem Sprung
      // zu #kontakt), bleibt einfach stehen.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) continue;
      el.dataset.reveal = "aus";
      beobachter.observe(el);
    }

    return () => beobachter.disconnect();
  }, []);

  return null;
}
