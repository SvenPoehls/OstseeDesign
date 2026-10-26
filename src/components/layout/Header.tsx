"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CREME, CREME_LEISE, KNOPF, KNOPF_SCHRIFT, TINTE, farben } from "@/lib/farben";
import { company, nav, unterseiten } from "@/lib/site";

// Kopfzeile: eine durchgehende Leiste über die ganze Breite.
//
//   links    Wortmarke „ostseedesign" mit kleiner Unterzeile
//   Mitte    die drei Leistungen und der Textilshop, in Großbuchstaben
//   rechts   zwei runde Knöpfe: die Telefonnummer (cremefarben umrandet)
//            und „Projekt anfragen" (Orange)
//   unten    eine schmale orange Linie
//
// Die Seite, auf der man gerade ist, ist im Menü orange unterstrichen. Der
// Grund der Leiste ist das Braun der dunklen Abschnitte (`--kopf` in
// globals.css), die Schrift darauf cremeweiß.
//
// PLATZ: Menü, Wortmarke und beide Knöpfe passen erst ab 1280 px Breite
// nebeneinander. Darunter rückt das Menü in die Reihe farbiger Marken unter
// der Leiste, auf dem Handy bleibt neben der Wortmarke nur „Anrufen".
//
// Warum ein Client-Baustein? Nur, um die aktuelle Adresse zu kennen
// (`usePathname`) und den richtigen Menüpunkt zu markieren.
export default function Header() {
  const pfad = (usePathname() ?? "/").replace(/\/$/, "") || "/";
  const aktiv = (href: string) => !href.startsWith("http") && href === pfad;

  // Startseite und Leistungsseiten haben unten einen Kontaktbereich – dorthin
  // springt „Projekt anfragen" direkt. Von Impressum und Datenschutz aus geht
  // es zum Kontaktbereich der Startseite.
  const hatKontakt =
    pfad === "/" || unterseiten.some((s) => `/${s.id}` === pfad);

  // Handy-Marken: jede Leistung in ihrer Farbe (die Reihenfolge in `nav`
  // entspricht der in `farben`), dazu „Kontakt" in neutralem Grau. Der
  // externe Shop kommt zuletzt.
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

  const knopf =
    "inline-flex items-center justify-center whitespace-nowrap rounded-full px-5 py-3 text-[0.85rem] font-bold uppercase tracking-[0.04em] transition-transform duration-300 hover:-translate-y-0.5";

  return (
    <>
      <header
        className="kopf-ein dunkel sticky top-0 z-40 backdrop-blur"
        style={{ backgroundColor: "var(--kopf)", color: CREME }}
      >
        <div className="seitenrand flex h-[4.5rem] items-center justify-between gap-6 sm:h-20">
          {/* Wortmarke mit Unterzeile */}
          <Link
            href="/"
            aria-label={`${company.name} – zur Startseite`}
            className="flex shrink-0 flex-col leading-none"
          >
            <span className="text-[1.45rem] font-extrabold tracking-[-0.03em] sm:text-[1.6rem]">
              ostseedesign
            </span>
            <span className="mt-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.24em]" style={{ color: CREME_LEISE }}>
              Werbung &amp; Textilien
            </span>
          </Link>

          <nav
            aria-label="Hauptnavigation"
            className="ml-auto hidden items-center gap-8 xl:flex"
          >
            {nav.map((item, i) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.86rem] font-semibold uppercase tracking-[0.05em] text-[#e3d7c6] transition-colors hover:text-white"
                >
                  {item.label} ↗
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={aktiv(item.href) ? "page" : undefined}
                  className={`relative py-1 text-[0.86rem] font-semibold uppercase tracking-[0.05em] transition-colors hover:text-white ${
                    aktiv(item.href) ? "text-white" : "text-[#e3d7c6]"
                  }`}
                >
                  {item.label}
                  {/* Aktive Seite: ein oranger Strich unter dem Wort. */}
                  {aktiv(item.href) && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
                      style={{ backgroundColor: farben[0].ton }}
                    />
                  )}
                </Link>
              )
            )}
          </nav>

          <div className="flex shrink-0 items-center gap-2.5">
            <a
              href={`tel:${company.phoneHref}`}
              className={`${knopf} hidden sm:inline-flex`}
              style={{ boxShadow: `inset 0 0 0 1.5px ${CREME_LEISE}80`, color: CREME }}
            >
              {company.phoneDisplay}
            </a>
            {hatKontakt ? (
              <a
                href="#kontakt"
                className={`${knopf} hidden sm:inline-flex`}
                style={{ backgroundColor: KNOPF, color: KNOPF_SCHRIFT }}
              >
                Projekt anfragen
              </a>
            ) : (
              <Link
                href="/#kontakt"
                className={`${knopf} hidden sm:inline-flex`}
                style={{ backgroundColor: KNOPF, color: KNOPF_SCHRIFT }}
              >
                Projekt anfragen
              </Link>
            )}
            {/* Handy: nur ein Knopf, damit die Wortmarke Platz behält. */}
            <a
              href={`tel:${company.phoneHref}`}
              className={`${knopf} px-4 py-2.5 sm:hidden`}
              style={{ backgroundColor: KNOPF, color: KNOPF_SCHRIFT }}
            >
              Anrufen
            </a>
          </div>
        </div>

        {/* Die Linie unter der Leiste: schmal und orange. */}
        <div aria-hidden="true" className="h-[3px]" style={{ backgroundColor: farben[0].ton }} />
      </header>

      {/* Unter 1280 px: das Menü als Reihe farbiger Marken. */}
      <nav
        aria-label="Mobile Navigation"
        className="mx-auto mt-5 flex w-full max-w-seite gap-2 overflow-x-auto px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-6 lg:px-10 xl:hidden [&::-webkit-scrollbar]:hidden"
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
