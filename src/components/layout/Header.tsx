import Link from "next/link";
import { KNOPF, TINTE, farben } from "@/lib/farben";
import { company, nav } from "@/lib/site";

// Kopfzeile als schwebende Pille.
//
// Auf einer weißen Seite wäre eine weiße Leiste kaum zu sehen, schwarz wirkt
// zu schwer. Deshalb trägt sie das Ocker aus dem Farbfächer – leicht
// durchscheinend, sodass die Kreise darunter beim Scrollen durchschimmern.
// WIE STARK das Gelb ist, steht als Variable `--kopf` in globals.css.
//
// Auf dem Handy ersetzt eine Reihe farbiger Marken die Navigation; jede trägt
// die Farbe ihres Bereichs. Sie scrollt mit der Seite weg, die Pille bleibt.
export default function Header() {
  // Handy-Marken: die Menüpunkte, dazu „Kontakt" (steht am Rechner im
  // Telefonknopf). Der Shop trägt das Petrol der Knöpfe.
  const marken = [
    { label: "Leistungen", href: "/#leistungen", ton: farben[0].ton },
    { label: "Ablauf", href: "/#ablauf", ton: farben[1].ton },
    { label: "Standort", href: "/#standort", ton: farben[2].ton },
    { label: "Kontakt", href: "/#kontakt", ton: farben[3].ton },
    ...nav
      .filter((n) => n.external)
      .map((n) => ({ label: `${n.label} ↗`, href: n.href, ton: KNOPF })),
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
            className="hidden items-center gap-7 text-[0.92rem] font-semibold text-tinte/75 lg:flex"
          >
            {nav.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-tinte"
                >
                  {item.label} ↗
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="transition-colors hover:text-tinte"
                >
                  {item.label}
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
          return extern ? (
            <a
              key={m.label}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full px-4 py-2 text-[0.85rem] font-semibold"
              style={{ backgroundColor: `${m.ton}2e`, color: TINTE }}
            >
              {m.label}
            </a>
          ) : (
            <Link
              key={m.label}
              href={m.href}
              className="shrink-0 rounded-full px-4 py-2 text-[0.85rem] font-semibold"
              style={{ backgroundColor: `${m.ton}2e`, color: TINTE }}
            >
              {m.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
