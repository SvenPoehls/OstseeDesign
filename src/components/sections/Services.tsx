"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowIcon, CameraIcon, CheckIcon, ExternalIcon } from "@/components/ui/Icons";
import { services } from "@/lib/site";

// „Unsere Leistungen" – alle vier Bereiche nebeneinander, damit man sie auf
// einen Blick erfasst. Jede Kachel: schmale Bildfläche, Titel, drei Stichpunkte
// und ein Link. Beim Hereinscrollen fliegen die Kacheln nacheinander von unten
// ein.
const notes: Record<string, string> = {
  werbetechnik: "Fahrzeug mit frischer Beschriftung",
  textilveredelung: "Detail einer Stickerei",
  drucksachen: "Visitenkarten & Briefpapier",
  textilshop: "Veredelte Kleidung im Shop",
};

export default function Services() {
  // Sobald das Kachel-Raster ins Bild kommt, werden die Kacheln nacheinander
  // eingeblendet – einmalig, danach bleiben sie stehen.
  const [shown, setShown] = useState(false);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          observer.disconnect();
        }
      },
      // Startet, sobald das Raster ein gutes Stück im Bild ist.
      { rootMargin: "0px 0px -20% 0px", threshold: 0 }
    );
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="leistungen" className="bg-paper pb-14 pt-16 sm:pb-28 sm:pt-24">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip">Unsere Leistungen</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Vier Wege, <span className="em">sichtbar</span> zu werden.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
            Beratung, Gestaltung, Fertigung und Montage – alles im eigenen Haus
            in Eckernförde.
          </p>
        </div>

        {/* Auf dem Handy zwei Spalten, damit alle vier Bereiche zusammen auf
            einen Blick sichtbar sind. Ab Tablet wie gehabt. */}
        <div ref={gridRef} className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4">
          {services.map((service, i) => {
            const isExternal = Boolean(service.external);
            const href = service.external ?? "/#kontakt";
            return (
              <article
                key={service.id}
                className="edge edge-lift flex flex-col overflow-hidden transition-[transform,opacity] duration-700 ease-out"
                style={{
                  // Startpunkt: etwas tiefer und unsichtbar. Der Versatz je
                  // Kachel lässt sie nacheinander hereinfliegen.
                  transform: shown ? "translateY(0)" : "translateY(2.5rem)",
                  opacity: shown ? 1 : 0,
                  transitionDelay: `${i * 120}ms`,
                }}
              >
                {/* Bildfläche – noch Platzhalter mit kurzer Bildregie-Notiz.
                    Auf dem Handy flacher, damit alle vier Kacheln zusammen
                    aufs Bild passen. */}
                <div className="relative flex h-16 items-center justify-center border-b-2 border-ink bg-surface px-3 text-center sm:h-24 sm:px-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(135deg, rgba(0,48,135,0.06) 0 2px, transparent 2px 16px)",
                    }}
                  />
                  <span className="absolute left-2 top-2 rounded-full border-2 border-ink bg-paper px-1.5 py-0 text-[0.6rem] font-bold text-ink sm:left-3 sm:top-3 sm:px-2 sm:py-0.5 sm:text-[0.65rem]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="relative hidden items-center gap-2 text-[0.7rem] text-ink-muted sm:flex">
                    <CameraIcon className="h-4 w-4 shrink-0 text-ink/25" />
                    {notes[service.id] ?? service.title}
                  </span>
                  <CameraIcon className="relative h-5 w-5 text-ink/25 sm:hidden" />
                </div>

                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <h3 className="font-display text-base font-extrabold leading-snug tracking-tight text-ink sm:text-lg">
                    {service.title}
                  </h3>

                  {/* Die Stichpunkte würden zwei nebeneinanderstehende Kacheln
                      auf dem Handy sehr hoch machen – dort bleiben sie
                      ausgeblendet, ab Tablet sind sie wieder da. */}
                  <ul className="mt-3 hidden flex-1 space-y-1.5 text-sm leading-snug text-ink sm:block">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-pop" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="mt-3 inline-flex items-center gap-1.5 text-[0.8rem] font-bold text-accent transition-colors hover:text-accent-dark sm:mt-4 sm:text-sm"
                  >
                    {isExternal ? "Zum Textilshop" : "Anfrage stellen"}
                    {isExternal ? (
                      <ExternalIcon className="h-3.5 w-3.5" />
                    ) : (
                      <ArrowIcon className="h-3.5 w-3.5" />
                    )}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
