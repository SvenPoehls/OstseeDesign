"use client";

import { useEffect } from "react";

// ───────────────────────────────────────────────────────────────────────
//  WEICHES AUF- UND ZUKLAPPEN DER FRAGEN
// ───────────────────────────────────────────────────────────────────────
//  Zeigt nichts an. Es sucht die Fragen (<details class="frage">) im
//  Abschnitt „Häufige Fragen" und lässt sie langsam auf- und zuklappen,
//  statt dass die Antwort schlagartig erscheint oder verschwindet.
//
//  Regeln:
//   • Es ist immer nur eine Frage offen. Öffnet man eine, klappt die gerade
//     offene gleichzeitig zu.
//   • Ohne JavaScript übernimmt der Browser: Die Fragen tragen denselben
//     `name` und bilden so eine Gruppe, von der nur eine offen sein kann –
//     dann eben ohne Animation. Sobald dieses Skript läuft, nimmt es den
//     `name` weg und regelt das selbst (sonst würde der Browser die alte
//     Frage sofort schließen, bevor sie zuklappen kann).
//   • Wer „Bewegung reduzieren" eingestellt hat, bekommt kein Gleiten.
//   • Klickt man mitten in der Bewegung erneut, dreht sie einfach um.
const DAUER = 420;
const VERLAUF = "cubic-bezier(0.2, 0.7, 0.2, 1)";

export default function FragenAufklappen() {
  useEffect(() => {
    const fragen = Array.from(document.querySelectorAll<HTMLDetailsElement>("details.frage"));
    if (!fragen.length) return;
    fragen.forEach((f) => f.removeAttribute("name"));

    const ruhig = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const laufend = new Map<HTMLDetailsElement, Animation>();

    // Höhe der geschlossenen Frage = Höhe ihrer Frage-Zeile.
    const zuHoehe = (f: HTMLDetailsElement) => f.querySelector("summary")!.offsetHeight;

    function bewege(f: HTMLDetailsElement, von: number, bis: number, fertig: () => void) {
      laufend.get(f)?.cancel();
      const a = f.animate([{ height: `${von}px` }, { height: `${bis}px` }], {
        duration: DAUER,
        easing: VERLAUF,
      });
      laufend.set(f, a);
      a.onfinish = () => {
        laufend.delete(f);
        fertig();
      };
    }

    function zuklappen(f: HTMLDetailsElement) {
      if (!f.open || f.classList.contains("zu")) return;
      if (ruhig) {
        f.open = false;
        return;
      }
      const von = f.offsetHeight;
      f.classList.add("zu");
      bewege(f, von, zuHoehe(f), () => {
        f.open = false;
        f.classList.remove("zu");
      });
    }

    function aufklappen(f: HTMLDetailsElement) {
      fragen.filter((g) => g !== f).forEach(zuklappen);
      // Wurde sie gerade zugeklappt, von der aktuellen Höhe aus umdrehen.
      const von = f.open ? f.offsetHeight : zuHoehe(f);
      f.classList.remove("zu");
      f.open = true;
      if (ruhig) return;
      bewege(f, von, f.scrollHeight, () => {});
    }

    const ohren = fragen.map((f) => {
      const klick = (e: Event) => {
        e.preventDefault();
        if (f.open && !f.classList.contains("zu")) zuklappen(f);
        else aufklappen(f);
      };
      const summary = f.querySelector("summary")!;
      summary.addEventListener("click", klick);
      return () => summary.removeEventListener("click", klick);
    });

    return () => {
      ohren.forEach((weg) => weg());
      laufend.forEach((a) => a.cancel());
      fragen.forEach((f) => f.setAttribute("name", "fragen"));
    };
  }, []);

  return null;
}
