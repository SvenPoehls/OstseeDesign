"use client";

import { useEffect, useRef, useState } from "react";
import { CameraIcon, ExternalIcon } from "@/components/ui/Icons";
import { services } from "@/lib/site";

// „Unsere Leistungen" – vier Kacheln, bei denen das Bild im Vordergrund steht.
// Darunter steht nur noch der Name als Unterschrift; Links gibt es hier
// bewusst keine mehr. Beim Hereinscrollen fliegen die Kacheln von unten ein.
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
            Das machen <span className="em">wir</span>.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
            Gestaltet und gefertigt wird bei uns in der Werkstatt. Montiert wird
            da, wo es hingehört.
          </p>
        </div>

        {/* Auf dem Handy zwei Spalten, damit alle vier Bereiche zusammen auf
            einen Blick sichtbar sind. Ab Tablet wie gehabt. */}
        <div ref={gridRef} className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4">
          {services.map((service, i) => {
            // Der Textilshop liegt auf einer eigenen Seite – diese Kachel ist
            // deshalb komplett anklickbar. Die übrigen sind reine Kacheln.
            const Kachel = service.external ? "a" : "article";
            return (
            <Kachel
              key={service.id}
              {...(service.external
                ? {
                    href: service.external,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": `${service.title} – im neuen Fenster öffnen`,
                  }
                : {})}
              className={`edge flex flex-col overflow-hidden transition-[transform,opacity] duration-700 ease-out ${
                service.external ? "edge-lift cursor-pointer" : ""
              }`}
              style={{
                // Startpunkt: etwas tiefer und unsichtbar. Der Versatz je
                // Kachel lässt sie nacheinander hereinfliegen.
                transform: shown ? "translateY(0)" : "translateY(2.5rem)",
                opacity: shown ? 1 : 0,
                transitionDelay: `${i * 120}ms`,
              }}
            >
              {/* Bildfläche – nimmt den größten Teil der Kachel ein.
                  Noch Platzhalter mit kurzer Bildregie-Notiz. */}
              <div className="relative flex aspect-[5/4] items-center justify-center border-b-2 border-ink bg-surface px-3 text-center sm:aspect-[4/5] sm:px-4">
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
                <span className="relative flex flex-col items-center gap-2">
                  <CameraIcon className="h-5 w-5 text-ink/25 sm:h-6 sm:w-6" />
                  <span className="hidden text-[0.7rem] leading-snug text-ink-muted sm:block">
                    {notes[service.id] ?? service.title}
                  </span>
                </span>
              </div>

              {/* Unterschrift: nur der Name des Bereichs. */}
              <div className="px-3 py-3 text-center sm:px-4 sm:py-4">
                <h3 className="inline-flex items-center gap-1.5 font-display text-base font-extrabold leading-snug tracking-tight text-ink sm:text-lg">
                  {service.title}
                  {service.external && <ExternalIcon className="h-3.5 w-3.5 text-accent" />}
                </h3>
              </div>
            </Kachel>
            );
          })}
        </div>
      </div>
    </section>
  );
}
