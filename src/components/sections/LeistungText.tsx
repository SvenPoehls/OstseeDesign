import type { CSSProperties } from "react";
import Etikett from "@/components/ui/Etikett";
import { LEISE, farben } from "@/lib/farben";
import { company, type Service } from "@/lib/site";

// Beschreibungstext einer Leistungs-Unterseite – steht auf großen Bildschirmen
// unter „Das gehört dazu", auf Handy und Tablet eine Stufe höher, direkt unter
// dem Bild (`order-1`, siehe page.tsx). Zweispaltig: links Etikett und Überschrift (ein Wort mit Marker in
// der Leistungsfarbe), rechts der Text, der erste Absatz etwas größer. Darunter
// der Hinweis aufs Telefon.
//
// Der Text steht in site.ts bei der jeweiligen Leistung (`beschreibung`).
// Fehlt er, erscheint dieser Abschnitt nicht.
//
// BEWEGUNG: Beide Spalten erscheinen beim Scrollen, die rechte etwas später.
export default function LeistungText({ service, index }: { service: Service; index: number }) {
  const text = service.beschreibung;
  if (!text) return null;

  // Das letzte Wort der Überschrift bekommt den Marker.
  const woerter = text.titel.split(" ");
  const letztes = woerter.pop();

  return (
    <section className="order-1 mt-16 grid gap-8 sm:mt-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16" aria-labelledby="ueber">
      <div data-reveal>
        <Etikett>Über {service.title}</Etikett>
        <h2 id="ueber" className="titel mt-6">
          {woerter.join(" ")}{" "}
          <span className="markiert" style={{ "--ton": `${farben[index].ton}80` } as CSSProperties}>
            {letztes}
          </span>
        </h2>
      </div>
      <div data-reveal className="max-w-[44rem] [--verz:140ms] lg:pt-12">
        {text.absaetze.map((absatz, i) => (
          <p
            key={i}
            className={i === 0 ? "text-[1.2rem] font-medium leading-relaxed sm:text-[1.3rem]" : "mt-5 text-[1.05rem] leading-relaxed"}
            style={i === 0 ? undefined : { color: LEISE }}
          >
            {absatz}
          </p>
        ))}
        <p className="mt-7 text-[1.05rem] font-extrabold">
          Rufen Sie uns an:{" "}
          <a
            href={`tel:${company.phoneHref}`}
            className="whitespace-nowrap underline decoration-2 underline-offset-4"
            style={{ textDecorationColor: farben[0].ton }}
          >
            {company.phoneDisplay}
          </a>
        </p>
      </div>
    </section>
  );
}
