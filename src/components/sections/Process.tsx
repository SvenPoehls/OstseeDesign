"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { PfeilHand } from "@/components/ui/Hand";
import Skizze, { type SkizzenMotiv } from "@/components/ui/Skizze";
import { processSteps } from "@/lib/site";

// „So läuft das" – die vier Schritte laufen links nach oben, rechts bleibt
// eine Skizze stehen (sticky) und wechselt mit dem Schritt, der gerade in
// der Bildschirmmitte steht.
//
// Auf dem Handy schieben sich die Schritte als Blätter übereinander: jedes
// bleibt kurz oben stehen, das nächste legt sich darüber.
//
// Gestaltung: ein zweites, leicht angeschmutztes Blatt mit angedeutetem
// Karoraster – wie die Seite aus dem Skizzenblock, auf der der Ablauf
// notiert wurde. Die Schrittnummern stehen rot eingekringelt daneben.

// Zu jedem Schritt die passende Zeichnung.
const motive: SkizzenMotiv[] = [
  "gespraech",
  "entwurf",
  "feinschliff",
  "umsetzung",
];

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

    // 2. Aktiver Schritt: steuert nur die Skizze rechts. Es zählt das
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
    <section id="ablauf" className="papier-block pb-16 pt-16 sm:pb-24 sm:pt-20">
      <div className="wrap">
        {/* Kapitelkopf. Bleibt auf großen Bildschirmen oben stehen, während
            man durch die Schritte scrollt. */}
        <div className="lg:sticky lg:top-0 lg:z-20 lg:bg-[color:var(--papier-tief)] lg:pb-6 lg:pt-24">
          <div className="grid12 linie-hand-oben linie-hand-stark pt-5">
            <p className="etikett etikett-rot col-span-4 lg:col-span-1">02</p>
            <h2 className="hand col-span-4 mt-2 text-[clamp(2.5rem,7.5vw,4.4rem)] lg:col-span-6 lg:mt-0">
              So läuft das
            </h2>
            <p className="col-span-4 mt-5 text-ink-soft lg:col-span-4 lg:col-start-9 lg:mt-0">
              Ob zwanzig bestickte Poloshirts oder ein beschrifteter
              Transporter: Der Weg ist derselbe. Sie wissen immer, woran wir
              gerade sind, und was es kostet,{" "}
              <span className="marker text-ink">steht vorher fest</span>.
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
                /* Auf dem Handy schieben sich die Schritte übereinander.
                   Damit der darunterliegende nicht durchscheint, braucht
                   jeder einen eigenen Papiergrund. */
                className="sticky top-[4.25rem] bg-[color:var(--papier-tief)] sm:top-[4.75rem] lg:static lg:flex lg:min-h-[70vh] lg:flex-col lg:justify-center lg:bg-transparent"
                style={{ zIndex: i + 1 }}
              >
                <article
                  className="linie-hand-oben pb-7 pt-5 transition-all duration-700 ease-werk"
                  style={{
                    transform: shown[i] ? "translateY(0)" : "translateY(2rem)",
                    opacity: shown[i] ? 1 : 0,
                  }}
                >
                  <div className="flex items-baseline gap-5">
                    {/* Die Schrittnummer, rot eingekringelt – wie eine
                        Position auf einem Auftragszettel. */}
                    <span className="kreis-wort hand shrink-0 text-[1.9rem] leading-none text-mark sm:text-[2.3rem]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="hand text-[clamp(1.8rem,5vw,3rem)]">
                      {step.title}
                    </h3>
                  </div>

                  <p className="mt-5 max-w-reading text-ink-soft sm:ml-[5.4rem]">
                    {step.body}
                  </p>

                  <ul className="mt-5 sm:ml-[5.4rem]">
                    {step.points.map((point) => (
                      <li
                        key={point}
                        className="linie-hand linie-hand-fein notiz flex items-baseline gap-3 py-2.5 text-[1.02rem]"
                      >
                        <span
                          aria-hidden="true"
                          className="h-px w-5 shrink-0 translate-y-[-0.35rem] bg-mark"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>

          {/* ── Skizze ─────────────────────────────────────────────────
              Bleibt stehen und wechselt mit dem aktiven Schritt. Nur auf
              großen Bildschirmen sinnvoll. */}
          <div className="hidden lg:col-span-5 lg:col-start-8 lg:block">
            {/* Der Abstand oben (19vh) setzt die Bildmitte genau auf die
                Mitte des ersten Schritts: Jeder Schritt ist 70vh hoch, seine
                Mitte liegt also bei 35vh; das Bild ist 32vh hoch, seine Mitte
                bei 16vh. 35 − 16 = 19vh. Danach bleibt das Bild stehen. */}
            <div className="sticky top-[max(17.5rem,32vh)] mt-[19vh]">
              <figure className="bildflaeche rahmen schief-1 relative h-[32vh] text-ink">
                {processSteps.map((step, i) => (
                  <div
                    key={step.id}
                    aria-hidden={i !== active}
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{ opacity: i === active ? 1 : 0 }}
                  >
                    <Skizze motiv={motive[i] ?? "entwurf"} />
                    <figcaption className="notiz bildunterschrift absolute inset-x-0 bottom-0 flex flex-col px-4 pb-2 pt-8">
                      <span className="etikett">
                        Skizze {String(i + 1).padStart(2, "0")} · Platzhalter
                      </span>
                      <span className="hand mt-1 text-[1.5rem] text-ink">
                        {step.title}
                      </span>
                    </figcaption>
                  </div>
                ))}
              </figure>

              {/* Fortschritt: Zahl und Strich, mehr braucht es nicht. */}
              <div className="mt-6 flex items-center gap-4">
                <span className="hand text-[1.25rem] tabular-nums">
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(processSteps.length).padStart(2, "0")}
                </span>
                <span className="relative h-px flex-1 bg-mark/25" aria-hidden="true">
                  <span
                    className="absolute inset-y-0 left-0 bg-mark transition-[width] duration-500 ease-werk"
                    style={{
                      width: `${((active + 1) / processSteps.length) * 100}%`,
                      height: "2px",
                      top: "-1px",
                    }}
                  />
                </span>
              </div>

              <Link href="/entwurf-1#kontakt" className="btn-voll mt-8">
                Termin ausmachen
                <PfeilHand />
              </Link>
            </div>
          </div>
        </div>

        {/* Auf kleinen Bildschirmen steht der Knopf unter den Schritten. */}
        <div className="linie-hand-oben linie-hand-stark mt-10 pt-8 lg:hidden">
          <Link href="/entwurf-1#kontakt" className="btn-voll w-full">
            Termin ausmachen
            <PfeilHand />
          </Link>
        </div>
      </div>
    </section>
  );
}
