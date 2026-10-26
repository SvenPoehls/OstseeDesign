"use client";

import { useEffect, useRef, useState } from "react";
import { PfeilHand, ExternHand } from "@/components/ui/Hand";
import Skizze, { type SkizzenMotiv } from "@/components/ui/Skizze";
import { services } from "@/lib/site";

// „Das machen wir" – kein Kachelraster, sondern eine Liste wie in einem
// Musterbuch: jeder Bereich bekommt eine eigene Zeile mit großem
// handgeschriebenem Namen, kurzer Erklärung und einer Skizze. Die Zeilen
// sitzen absichtlich unterschiedlich im Raster – mal Bild rechts, mal
// links, mal schmaler. Dadurch wirkt die Seite gezeichnet und nicht aus
// Bausteinen zusammengeklickt.
//
// Die Notizen unter den Skizzen sagen, was später auf das jeweilige Foto
// soll – sie stehen in der kleinen Handschrift, wie eine Bildunterschrift
// auf einem Entwurf.
const notes: Record<string, string> = {
  textilveredelung: "Stickmaschine, Nahaufnahme vom Garn",
  werbetechnik: "Frisch beschrifteter Transporter",
  drucksachen: "Visitenkarten auf dem Werkstatttisch",
  textilshop: "Stapel veredelter Arbeitskleidung",
};

// Welche Skizze zu welchem Bereich gehört.
const motive: Record<string, SkizzenMotiv> = {
  textilveredelung: "textil",
  werbetechnik: "fahrzeug",
  drucksachen: "druck",
  textilshop: "shop",
};

// Platz im Raster je Zeile. Der erste Bereich ist der größte im Betrieb und
// bekommt deshalb auch die größte Fläche.
const layout = [
  {
    text: "lg:col-span-5 lg:col-start-1",
    media: "lg:col-span-6 lg:col-start-7",
    ratio: "lg:aspect-[3/2]",
    schraeg: "schief-2",
  },
  {
    text: "lg:col-span-5 lg:col-start-8",
    media: "lg:col-span-6 lg:col-start-1",
    ratio: "lg:aspect-[16/10]",
    schraeg: "schief-1",
  },
  {
    text: "lg:col-span-4 lg:col-start-2",
    media: "lg:col-span-4 lg:col-start-8",
    ratio: "lg:aspect-square",
    schraeg: "schief-2",
  },
  {
    text: "lg:col-span-5 lg:col-start-1",
    media: "lg:col-span-5 lg:col-start-8",
    ratio: "lg:aspect-[5/3]",
    schraeg: "schief-1",
  },
];

export default function Services() {
  const [shown, setShown] = useState<boolean[]>(() => services.map(() => false));
  const rowRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const i = Number((entry.target as HTMLElement).dataset.row);
          setShown((prev) => {
            if (prev[i]) return prev;
            const next = [...prev];
            next[i] = true;
            return next;
          });
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0 }
    );
    rowRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="leistungen" className="pb-16 pt-20 sm:pb-24 sm:pt-28">
      <div className="wrap">
        {/* Kapitelkopf: Nummer, Titel, Erklärung – alles an einem Strich. */}
        <div className="grid12 linie-hand-oben linie-hand-stark pt-5">
          <p className="etikett etikett-rot col-span-4 lg:col-span-1">01</p>
          <h2 className="hand col-span-4 mt-2 text-[clamp(2.5rem,7.5vw,4.4rem)] lg:col-span-6 lg:mt-0">
            Das machen wir
          </h2>
          <p className="col-span-4 mt-5 text-ink-soft lg:col-span-4 lg:col-start-9 lg:mt-0">
            Den größten Teil macht die Textilveredelung aus. Dazu kommen
            Fahrzeuge, Schilder und Drucksachen – viele nehmen das zusammen,
            damit am Ende alles gleich aussieht.
          </p>
        </div>

        {/* Die vier Bereiche. */}
        <div className="mt-4 sm:mt-6">
          {services.map((service, i) => {
            const plan = layout[i] ?? layout[0];
            const Row = service.external ? "a" : "article";
            return (
              <Row
                key={service.id}
                data-row={i}
                ref={(el: HTMLElement | null) => {
                  rowRefs.current[i] = el;
                }}
                {...(service.external
                  ? {
                      href: service.external,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "aria-label": `${service.title} – Shop im neuen Fenster öffnen`,
                    }
                  : {})}
                className={`group grid12 linie-hand linie-hand-fein items-center py-8 transition-[transform,opacity] duration-700 ease-werk sm:py-9 lg:py-12 ${
                  service.external ? "cursor-pointer" : ""
                }`}
                style={{
                  transform: shown[i] ? "translateY(0)" : "translateY(2rem)",
                  opacity: shown[i] ? 1 : 0,
                  transitionDelay: `${(i % 2) * 90}ms`,
                }}
              >
                {/* Skizze: auf dem Handy schmal links neben dem Namen,
                    ab Tablet groß im Raster. Jede hängt ein kleines Stück
                    schief auf dem Blatt. */}
                <figure
                  className={`bildflaeche rahmen rahmen-nachziehen col-span-1 aspect-square self-start text-ink lg:row-start-1 lg:self-auto ${plan.media} ${plan.ratio} ${plan.schraeg}`}
                >
                  <Skizze motiv={motive[service.id] ?? "textil"} />
                  <figcaption className="notiz bildunterschrift absolute inset-x-0 bottom-0 hidden px-4 pb-2 pt-6 text-[0.85rem] text-ink-soft lg:block">
                    {notes[service.id]}
                  </figcaption>
                </figure>

                <div className={`col-span-3 lg:row-start-1 ${plan.text}`}>
                  {service.external && (
                    <p className="etikett etikett-rot">Externer Shop</p>
                  )}
                  <h3 className="hand text-[clamp(2rem,6.5vw,4rem)]">
                    <span className={service.external ? "ul-link" : undefined}>
                      {service.title}
                    </span>
                    {service.external && (
                      <ExternHand className="ml-3 inline h-6 w-6 align-middle" />
                    )}
                  </h3>
                  <p className="mt-3 line-clamp-2 max-w-reading text-[0.95rem] text-ink-soft sm:line-clamp-none sm:text-[1rem]">
                    {service.teaser}
                  </p>
                  <ul className="notiz mt-5 hidden flex-wrap gap-x-6 gap-y-1.5 text-[1rem] text-ink-soft lg:flex">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <span aria-hidden="true" className="h-px w-4 bg-mark" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  {service.external && (
                    <span className="hand mt-5 hidden items-center gap-2 text-[1.2rem] lg:inline-flex">
                      Zum Shop
                      <PfeilHand className="h-4 w-5 transition-transform duration-200 ease-werk group-hover:translate-x-1" />
                    </span>
                  )}
                </div>
              </Row>
            );
          })}
        </div>
      </div>
    </section>
  );
}
