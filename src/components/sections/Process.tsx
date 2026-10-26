import type { CSSProperties } from "react";
import { FLAECHE, LEISE, MAGENTA_TEXT, farben } from "@/lib/farben";
import { processSteps } from "@/lib/site";

// Ablauf als Faden mit farbigen Punkten.
//
// BEWEGUNG: Wenn man hierher scrollt, zeichnet sich der Faden von links nach
// rechts, die Nummernkreise poppen nacheinander auf und die Karten darunter
// schieben sich hinterher herein. Alles gestaffelt – Schritt 1 zuerst.
export default function Process() {
  return (
    <section id="ablauf" className="mt-16 scroll-mt-28 sm:mt-24">
      <div data-reveal className="max-w-[32rem]">
        <p className="text-[0.88rem] font-bold" style={{ color: MAGENTA_TEXT }}>
          Ablauf
        </p>
        <h2 className="mt-2 text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight tracking-[-0.04em]">
          Vom ersten Anruf bis zur fertigen Arbeit
        </h2>
      </div>

      <ol className="relative mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {/* Der Faden, der die Punkte verbindet. */}
        <span
          aria-hidden="true"
          data-reveal
          data-art="faden"
          className="absolute left-0 right-0 top-[1.4rem] hidden h-[3px] rounded-full lg:block"
          style={{
            background: `linear-gradient(to right, ${farben[0].ton}, ${farben[1].ton}, ${farben[2].ton}, ${farben[3].ton})`,
            opacity: 0.35,
          }}
        />
        {processSteps.map((step, i) => (
          <li
            key={step.id}
            data-reveal
            className="relative"
            style={{ "--verz": `${i * 160}ms` } as CSSProperties}
          >
            <span
              data-reveal
              data-art="pop"
              className="flex h-11 w-11 items-center justify-center rounded-full text-[1rem] font-extrabold text-white"
              style={
                {
                  backgroundColor: farben[i].ton,
                  "--verz": `${i * 160 + 250}ms`,
                } as CSSProperties
              }
            >
              {i + 1}
            </span>
            <div
              className="mt-4 rounded-[28px] p-6"
              style={{ backgroundColor: FLAECHE }}
            >
              <h3 className="text-[1.15rem] font-extrabold tracking-[-0.02em]">
                {step.title}
              </h3>
              <p
                className="mt-3 text-[0.95rem] leading-relaxed"
                style={{ color: LEISE }}
              >
                {step.body}
              </p>
              <ul
                className="mt-4 space-y-1.5 text-[0.88rem]"
                style={{ color: LEISE }}
              >
                {step.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span style={{ color: farben[i].ton }}>•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
