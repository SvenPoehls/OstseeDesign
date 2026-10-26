"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { KNOPF, TINTE, farben } from "@/lib/farben";
import { company, nav } from "@/lib/site";

// Kopfzeile als schwebende Pille.
//
// Menü: die drei Leistungen (jede mit eigener Unterseite) und der externe
// Textilshop. Die Seite, auf der man gerade ist, ist hervorgehoben.
//
// Auf einer weißen Seite wäre eine weiße Leiste kaum zu sehen, schwarz wirkt
// zu schwer. Deshalb trägt sie das Ocker aus dem Farbfächer – leicht
// durchscheinend, sodass die Kreise darunter beim Scrollen durchschimmern.
// WIE STARK das Gelb ist, steht als Variable `--kopf` in globals.css.
//
// Auf dem Handy ersetzt eine Reihe farbiger Marken die Navigation; jede trägt
// die Farbe ihrer Leistung (wie die Karten auf der Startseite). Sie scrollt
// mit der Seite weg, die Pille bleibt.
//
// Warum ein Client-Baustein? Nur, um die aktuelle Adresse zu kennen
// (`usePathname`) und den richtigen Menüpunkt zu markieren.
export default function Header() {
  const pfad = (usePathname() ?? "/").replace(/\/$/, "") || "/";
  const aktiv = (href: string) => !href.startsWith("http") && href === pfad;

  // Handy-Marken: jede Leistung in ihrer Farbe (die Reihenfolge in `nav`
  // entspricht der in `farben`), dazu „Kontakt" in neutralem Grau – der steht
  // am Rechner im Telefonknopf. Der externe Shop kommt zuletzt.
  const leistungen = nav.map((n, i) => ({
    ...n,
    ton: farben[i].ton,
    label: n.external ? `${n.label} ↗` : n.label,
  }));
  const marken = [
    ...leistungen.filter((n) => !n.external),
    { label: "Kontakt", href: "/#kontakt", ton: TINTE, external: false },
    ...leistungen.filter((n) => n.external),
  ];

  return (
    <>
      <header className="kopf-ein sticky top-0 z-40 px-4 pt-4 sm:px-6">
        <div
          className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 rounded-full py-2.5 pl-6 pr-2.5 backdrop-blur"
          style={{
            backgroundColor: "var(--kopf)",
            boxShadow: "var(--kopf-schatten)",
            color: TINTE,
          }}
        >
          <Link
            href="/"
            aria-label={`${company.name} – zur Startseite`}
            className="text-[1.15rem] font-extrabold tracking-[-0.03em]"
          >
            ostseedesign
          </Link>

          <nav
            aria-label="Hauptnavigation"
            className="hidden items-center gap-7 text-[0.92rem] font-semibold lg:flex"
          >
            {nav.map((item, i) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tinte/75 transition-colors hover:text-tinte"
                >
                  {item.label} ↗
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={aktiv(item.href) ? "page" : undefined}
                  className={`relative transition-colors hover:text-tinte ${
                    aktiv(item.href) ? "text-tinte" : "text-tinte/75"
                  }`}
                >
                  {item.label}
                  {/* Aktive Seite: ein Punkt in ihrer Farbe unter dem Wort. */}
                  {aktiv(item.href) && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full"
                      style={{ backgroundColor: farben[i].ton }}
                    />
                  )}
                </Link>
              )
            )}
          </nav>

          <a
            href={`tel:${company.phoneHref}`}
            className="rounded-full px-5 py-2.5 text-[0.9rem] font-bold text-white transition-transform duration-300 hover:-translate-y-0.5"
            style={{ backgroundColor: KNOPF }}
          >
            {company.phoneDisplay}
          </a>
        </div>
      </header>

      <nav
        aria-label="Mobile Navigation"
        className="mx-auto mt-5 flex w-full max-w-[1200px] gap-2 overflow-x-auto px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-6 lg:hidden [&::-webkit-scrollbar]:hidden"
      >
        {marken.map((m) => {
          const extern = m.href.startsWith("http");
          const ist = aktiv(m.href);
          const stil = {
            // Die aktive Marke ist kräftiger eingefärbt und fett.
            backgroundColor: `${m.ton}${ist ? "55" : m.ton === TINTE ? "14" : "2e"}`,
            color: TINTE,
          };
          const klasse = `shrink-0 rounded-full px-4 py-2 text-[0.85rem] ${
            ist ? "font-extrabold" : "font-semibold"
          }`;
          return extern ? (
            <a
              key={m.label}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              className={klasse}
              style={stil}
            >
              {m.label}
            </a>
          ) : (
            <Link
              key={m.label}
              href={m.href}
              aria-current={ist ? "page" : undefined}
              className={klasse}
              style={stil}
            >
              {m.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
