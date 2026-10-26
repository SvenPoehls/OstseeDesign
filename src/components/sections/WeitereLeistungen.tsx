import type { CSSProperties } from "react";
import Link from "next/link";
import { LEISE, farben } from "@/lib/farben";
import { leistungsLink, services } from "@/lib/site";

// Am Ende einer Leistungs-Unterseite: die anderen Leistungen als Karten, in
// ihren eigenen Farben. So kommt man von jeder Seite zu jeder anderen, ohne
// ins Menü greifen zu müssen. Der Textilshop führt auf die externe Seite.
//
// BEWEGUNG: Die Karten erscheinen beim Scrollen nacheinander.
export default function WeitereLeistungen({ aktuell }: { aktuell: string }) {
  const weitere = services
    .map((service, i) => ({ service, i }))
    .filter(({ service }) => service.id !== aktuell);

  return (
    <section className="mt-16 sm:mt-24" aria-labelledby="weitere">
      <div data-reveal className="max-w-[30rem]">
        <p className="flex items-center gap-2 text-[0.88rem] font-bold">
          <span aria-hidden="true" className="flex gap-1">
            {weitere.map(({ i }) => (
              <span
                key={i}
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: farben[i].ton }}
              />
            ))}
          </span>
          Leistungen
        </p>
        <h2
          id="weitere"
          className="mt-2 text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight tracking-[-0.04em]"
        >
          Weitere Leistungen
        </h2>
      </div>

      <div className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-3">
        {weitere.map(({ service, i }, n) => {
          const klasse =
            "group relative flex flex-col overflow-hidden rounded-kachel p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7";
          const stil = {
            backgroundColor: `${farben[i].ton}1a`,
            "--verz": `${n * 130}ms`,
          } as CSSProperties;
          const inhalt = (
            <>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-60 mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundColor: `${farben[i].ton}59` }}
              />
              <span
                className="relative block h-10 w-10 rounded-full"
                style={{ backgroundColor: farben[i].ton }}
              />
              <h3 className="relative mt-4 text-[1.35rem] font-extrabold tracking-[-0.03em]">
                {service.title}
              </h3>
              <p
                className="relative mt-2 line-clamp-3 text-[0.95rem] leading-relaxed"
                style={{ color: LEISE }}
              >
                {service.teaser}
              </p>
              <span className="relative mt-5 inline-flex w-fit rounded-full bg-white/80 px-4 py-1.5 text-[0.8rem] font-bold">
                {service.external ? "Zum Shop ↗" : "Mehr erfahren →"}
              </span>
            </>
          );

          return service.external ? (
            <a
              key={service.id}
              data-reveal
              href={leistungsLink(service)}
              target="_blank"
              rel="noopener noreferrer"
              className={klasse}
              style={stil}
            >
              {inhalt}
            </a>
          ) : (
            <Link
              key={service.id}
              data-reveal
              href={leistungsLink(service)}
              className={klasse}
              style={stil}
            >
              {inhalt}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
