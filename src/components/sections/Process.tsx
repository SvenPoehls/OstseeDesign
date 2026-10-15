"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowIcon } from "@/components/ui/Icons";
import { processSteps } from "@/lib/site";

// „So läuft das" – die vier Schritte laufen links nach oben, rechts bleibt
// eine Bildfläche stehen (sticky) und wechselt mit dem Schritt, der gerade
// in der Bildschirmmitte steht.
//
// Auf dem Handy schieben sich die Schritte als Blätter übereinander: jedes
// bleibt kurz oben stehen, das nächste legt sich darüber.
//
// Gestaltung: keine Kästen mit Schatten, sondern Linien und große Ziffern –
// wie Positionen auf einem Auftragszettel.
export default function Process() {
  const [active, setActive] = useState(0);
  const [shown, setShown] = useState<boolean[]>(() => processSteps.map(() => false));
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const nodes = itemRefs.current.filter(Boolean) as HTMLElement[];

    // 1. Einblenden: Sobald ein Schritt ins Bild kommt, fährt er herein.
    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const i = Number((entry.target as HTMLElement).dataset.stepIndex);
          setShown((prev) => {
            if (prev[i]) return prev;
            const next = [...prev];
            next[i] = true;
            return next;
          });
          revealObserver.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 }
    );

    // 2. Aktiver Schritt: steuert nur die Bildfläche rechts. Es zählt das
    //    mittlere Bildschirmdrittel.
    const activeObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          setActive(Number((entry.target as HTMLElement).dataset.stepIndex));
        }
      },
      { rootMargin: "-35% 0px -35% 0px", threshold: 0 }
    );

    nodes.forEach((node) => {
      revealObserver.observe(node);
      activeObserver.observe(node);
    });

    return () => {
      revealObserver.disconnect();
      activeObserver.disconnect();
    };
  }, []);

  return (
    <section id="ablauf" className="bg-paper-deep pb-16 pt-16 sm:pb-24 sm:pt-20">
      <div className="wrap">
        {/* Kapitelkopf. Bleibt auf großen Bildschirmen oben stehen, während
            man durch die Schritte scrollt. */}
        <div className="lg:sticky lg:top-0 lg:z-20 lg:bg-paper-deep lg:pb-6 lg:pt-24">
          <div className="grid12 border-t border-ink pt-4">
            <p className="col-span-4 text-[0.72rem] font-semibold uppercase tracking-label text-mark lg:col-span-1">
              02
            </p>
            <h2 className="display col-span-4 mt-2 text-[clamp(2.1rem,6.5vw,3.6rem)] lg:col-span-6 lg:mt-0">
              So läuft das
            </h2>
            <p className="col-span-4 mt-5 text-ink-soft lg:col-span-4 lg:col-start-9 lg:mt-0">
              Ob zwanzig bestickte Poloshirts oder ein beschrifteter
              Transporter: Der Weg ist derselbe. Sie wissen immer, woran wir
              gerade sind, und was es kostet, steht vorher fest.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-10 lg:mt-0 lg:grid-cols-12 lg:gap-8">
          {/* ── Schritte ─────────────────────────────────────────────── */}
          <ol className="lg:col-span-6">
            {processSteps.map((step, i) => (
              <li
                key={step.id}
                data-step-index={i}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className="sticky top-[4.25rem] sm:top-[4.75rem] lg:static lg:flex lg:min-h-[70vh] lg:flex-col lg:justify-center"
                style={{ zIndex: i + 1 }}
              >
                <article
                  className="border-t border-ink bg-paper-deep pb-7 pt-5 transition-all duration-700 ease-werk lg:bg-transparent"
                  style={{
                    transform: shown[i] ? "translateY(0)" : "translateY(2rem)",
                    opacity: shown[i] ? 1 : 0,
                  }}
                >
                  <div className="flex items-baseline gap-5">
                    {/* Große Ziffer, nur als Kontur – wie eine Schablone. */}
                    <span className="display cutout cutout-mark shrink-0 text-[2.6rem] leading-none sm:text-[3.4rem]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="display text-[clamp(1.5rem,4.2vw,2.5rem)]">
                      {step.title}
                    </h3>
                  </div>

                  <p className="mt-4 max-w-reading text-ink-soft sm:ml-[4.6rem]">
                    {step.body}
                  </p>

                  <ul className="mt-5 sm:ml-[4.6rem]">
                    {step.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-baseline gap-3 border-t border-rule py-2 text-[0.9rem]"
                      >
                        <span
                          aria-hidden="true"
                          className="h-px w-5 shrink-0 translate-y-[-0.3rem] bg-ink"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>

          {/* ── Bildfläche ─────────────────────────────────────────────
              Bleibt stehen und wechselt mit dem aktiven Schritt. Nur auf
              großen Bildschirmen sinnvoll. */}
          <div className="hidden lg:col-span-5 lg:col-start-8 lg:block">
            {/* Der Abstand oben (19vh) setzt die Bildmitte genau auf die
                Mitte des ersten Schritts: Jeder Schritt ist 70vh hoch, seine
                Mitte liegt also bei 35vh; das Bild ist 32vh hoch, seine Mitte
                bei 16vh. 35 − 16 = 19vh. Danach bleibt das Bild stehen. */}
            <div className="sticky top-[max(17.5rem,32vh)] mt-[19vh]">
              <figure className="plate relative h-[32vh] border border-ink">
                {processSteps.map((step, i) => (
                  <figcaption
                    key={step.id}
                    aria-hidden={i !== active}
                    className="absolute inset-0 flex flex-col justify-end p-5 transition-opacity duration-500"
                    style={{ opacity: i === active ? 1 : 0 }}
                  >
                    <span className="text-[0.65rem] uppercase tracking-label text-ink-soft">
                      Bild {String(i + 1).padStart(2, "0")} · Platzhalter
                    </span>
                    <span className="display mt-1 text-[1.6rem]">{step.title}</span>
                  </figcaption>
                ))}
              </figure>

              {/* Fortschritt: Zahl und Balken, mehr braucht es nicht. */}
              <div className="mt-5 flex items-center gap-4">
                <span className="display-lite text-[0.95rem] tabular-nums">
                  {String(active + 1).padStart(2, "0")} / {String(processSteps.length).padStart(2, "0")}
                </span>
                <span className="relative h-px flex-1 bg-ink/20" aria-hidden="true">
                  <span
                    className="absolute inset-y-0 left-0 bg-ink transition-[width] duration-500 ease-werk"
                    style={{
                      width: `${((active + 1) / processSteps.length) * 100}%`,
                      height: "2px",
                      top: "-1px",
                    }}
                  />
                </span>
              </div>

              <Link href="/#kontakt" className="btn-line mt-7">
                Termin ausmachen
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Auf kleinen Bildschirmen steht der Knopf unter den Schritten. */}
        <div className="mt-10 border-t border-ink pt-8 lg:hidden">
          <Link href="/#kontakt" className="btn-ink w-full">
            Termin ausmachen
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
