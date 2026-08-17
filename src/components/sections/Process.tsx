"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowIcon, CameraIcon, CheckIcon } from "@/components/ui/Icons";
import { processSteps } from "@/lib/site";

// „So läuft Ihr Auftrag" – die Schritte scrollen als Text nach oben und fliegen
// dabei von unten ein. Das Bild rechts bleibt stehen (sticky) und wechselt
// passend zum Schritt, der gerade in der Bildschirmmitte steht.
export default function Process() {
  const [active, setActive] = useState(0);
  const [shown, setShown] = useState<boolean[]>(() => processSteps.map(() => false));
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // Ein Schritt gilt als aktiv, sobald er das mittlere Bildschirmdrittel
    // erreicht. Gleichzeitig wird er einmalig eingeblendet.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const i = Number((entry.target as HTMLElement).dataset.stepIndex);
          if (!entry.isIntersecting) continue;
          setActive(i);
          setShown((prev) => {
            if (prev[i]) return prev;
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }
      },
      { rootMargin: "-35% 0px -35% 0px", threshold: 0 }
    );

    const nodes = itemRefs.current.filter(Boolean) as HTMLElement[];
    nodes.forEach((node) => observer.observe(node));

    // Sicherheitsnetz: Schritte, die schon beim Laden sichtbar sind, sofort
    // einblenden (z. B. wenn jemand direkt zum Anker springt).
    const timer = window.setTimeout(() => {
      setShown((prev) => {
        const next = [...prev];
        nodes.forEach((node, i) => {
          const box = node.getBoundingClientRect();
          if (box.top < window.innerHeight) next[i] = true;
        });
        return next;
      });
    }, 200);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <section id="ablauf" className="bg-surface pb-20 pt-16 sm:pb-28 sm:pt-20">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip">So läuft Ihr Auftrag</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Vom ersten Gespräch bis zur <span className="em">Montage</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-muted">
            Kein Angebots-Dschungel, keine Wartespiele. Sie wissen jederzeit,
            woran wir gerade arbeiten und was als Nächstes kommt.
          </p>
        </div>

        <div className="mt-6 grid gap-10 lg:mt-2 lg:grid-cols-2 lg:gap-16">
          {/* Textspalte: fliegt Schritt für Schritt von unten ein. */}
          <ol className="space-y-10 lg:space-y-0">
            {processSteps.map((step, i) => (
              <li
                key={step.id}
                data-step-index={i}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                // Jeder Schritt bekommt genau eine Bildschirmhöhe und steht
                // darin mittig. Dadurch liegt die Kachel immer exakt auf Höhe
                // des Bildes rechts, das ebenfalls mittig stehen bleibt.
                className="lg:flex lg:min-h-[68vh] lg:flex-col lg:justify-center"
              >
                <article
                  className="edge p-5 transition-all duration-700 ease-out sm:p-6"
                  style={{
                    transform: shown[i] ? "translateY(0)" : "translateY(3rem)",
                    opacity: shown[i] ? 1 : 0,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border-[1.5px] border-ink bg-pop text-xs font-bold text-ink">
                      {i + 1}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-label text-accent">
                      Schritt {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.body}</p>
                  <ul className="mt-4 grid gap-1.5 text-sm text-ink sm:grid-cols-2">
                    {step.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-pop" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>

          {/* Bildspalte: bleibt beim Scrollen stehen und wechselt mit dem
              aktiven Schritt. Nur auf großen Bildschirmen sinnvoll. */}
          <div className="hidden lg:block">
            {/* Der Kasten ist so hoch wie der Bildschirm und der Inhalt darin
                mittig – dadurch steht das Bild beim Scrollen in der Mitte,
                auf gleicher Höhe wie der jeweilige Schritt. */}
            <div className="sticky top-0 flex h-screen items-center">
              {/* Nur das Bild wird mittig ausgerichtet – Fortschritt und Button
                  hängen darunter, damit das Bild exakt auf Höhe der Kachel
                  links steht. */}
              <div className="relative w-full">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-[1.5px] border-ink bg-paper">
                {processSteps.map((step, i) => (
                  <div
                    key={step.id}
                    aria-hidden={i !== active}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-surface transition-opacity duration-500"
                    style={{ opacity: i === active ? 1 : 0 }}
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(135deg, rgba(0,48,135,0.07) 0 2px, transparent 2px 18px)",
                      }}
                    />
                    <CameraIcon className="relative h-8 w-8 text-ink/30" />
                    <p className="relative max-w-xs px-6 text-center font-display text-lg font-extrabold text-ink">
                      {step.title}
                    </p>
                    <span className="relative text-[0.7rem] font-bold uppercase tracking-label text-ink/40">
                      Bildregie – Platzhalter
                    </span>
                  </div>
                ))}
              </div>

                {/* Fortschrittsanzeige + Button hängen unter dem Bild. */}
                <div className="absolute inset-x-0 top-full">
                  <div className="mt-6 flex items-center gap-2" aria-hidden="true">
                    {processSteps.map((step, i) => (
                      <span
                        key={step.id}
                        className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                          i <= active ? "bg-accent" : "bg-ink/15"
                        }`}
                      />
                    ))}
                  </div>

                  <Link href="/#kontakt" className="btn-pill mt-8">
                    Jetzt Termin ausmachen
                    <ArrowIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Auf kleinen Bildschirmen steht der Button unter den Schritten. */}
        <div className="mt-12 flex justify-center lg:hidden">
          <Link href="/#kontakt" className="btn-pill">
            Jetzt Termin ausmachen
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
