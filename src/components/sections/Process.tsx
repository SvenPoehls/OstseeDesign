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
    const nodes = itemRefs.current.filter(Boolean) as HTMLElement[];

    // 1. Einblenden: Sobald eine Kachel überhaupt ins Bild kommt, fliegt sie
    //    ein. Bewusst großzügig – so bleibt auf dem Handy keine Kachel
    //    unsichtbar, wenn jemand schnell scrollt oder direkt hierher springt.
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

    // 2. Aktiver Schritt: nur für das Bild rechts (großer Bildschirm). Hier
    //    zählt das mittlere Bildschirmdrittel, damit das Bild passend wechselt.
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
    <section id="ablauf" className="bg-surface pb-14 pt-16 sm:pb-28 sm:pt-20">
      <div className="container-site">
        {/* Überschrift bleibt auf großen Bildschirmen oben stehen, während man
            durch die Schritte scrollt. Der eigene Hintergrund sorgt dafür, dass
            die Kacheln sauber darunter durchlaufen. */}
        <div className="lg:sticky lg:top-0 lg:z-20 lg:bg-surface lg:pb-5 lg:pt-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="chip">So läuft Ihr Auftrag</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
              So läuft das <span className="em">bei uns</span>.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
              Sie wissen immer, woran wir gerade sind. Und was es kostet, steht
              vorher fest.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-10 lg:mt-0 lg:grid-cols-2 lg:gap-16">
          {/* Textspalte: fliegt Schritt für Schritt von unten ein. */}
          {/* Der Vorsprung oben gleicht aus, wenn das Bild auf flachen
              Bildschirmen nicht ganz auf halber Höhe stehen kann: Er verschiebt
              die Kacheln um genau denselben Betrag nach unten, sodass Kachel-
              und Bildmitte immer auf einer Linie liegen. Auf hohen Bildschirmen
              ergibt die Rechnung null. */}
          <ol className="lg:space-y-0 lg:pt-[calc(max(20.5rem,34vh)_+_16vh_-_50vh)]">
            {processSteps.map((step, i) => (
              <li
                key={step.id}
                data-step-index={i}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                // Handy/Tablet: Jede Karte bleibt oben stehen, die nächste
                // schiebt sich beim Scrollen darüber (Stapel-Effekt).
                // Ab lg: Kachel mittig im Abschnitt, damit sie mit dem Bild
                // rechts auf einer Mittellinie liegt.
                className="sticky top-24 pb-6 lg:static lg:flex lg:min-h-[70vh] lg:flex-col lg:justify-center lg:pb-0"
                style={{ zIndex: i + 1 }}
              >
                <article
                  className="edge p-5 shadow-[0_-6px_20px_-12px_rgba(26,29,35,0.35)] transition-all duration-700 ease-out sm:p-6 lg:shadow-none"
                  style={{
                    transform: shown[i] ? "translateY(0)" : "translateY(3rem)",
                    opacity: shown[i] ? 1 : 0,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-ink bg-pop text-xs font-bold text-ink">
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
            {/* Das Bild wird unterhalb der Überschrift festgehalten. Der Wert
                34vh sorgt dafür, dass seine MITTE auf halber Bildschirmhöhe
                liegt – dort, wo auch die Kacheln links mittig stehen. Das
                max(…) verhindert, dass es auf flachen Bildschirmen unter die
                Überschrift rutscht. */}
            {/* Der Vorsprung setzt das Bild schon beim Betreten des Abschnitts
                auf dieselbe Mittellinie wie die erste Kachel (Kachelmitte =
                halbe Abschnittshöhe, Bildmitte = halbe Bildhöhe). Dadurch
                stehen beide von der ersten Sekunde an nebeneinander. */}
            <div className="sticky top-[max(20.5rem,34vh)] mt-[calc(max(20.5rem,34vh)_-_15vh)]">
              <div className="relative w-full">
              <div className="relative h-[32vh] overflow-hidden rounded-[2rem] border-2 border-ink bg-paper">
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

                {/* Fortschrittsanzeige + Button stehen unter dem Bild. */}
                <div>
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
