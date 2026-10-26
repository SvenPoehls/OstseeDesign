"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { ExternHand, TelefonHand, MenueHand, KreuzHand } from "@/components/ui/Hand";
import { company, nav } from "@/lib/site";

// Kopfzeile: eine Zeile am oberen Blattrand, darunter ein mit dem Stift
// gezogener Strich. Kein Kasten, kein Schatten – der Strich reicht.
// Links die handgeschriebene Wortmarke, rechts die Navigation und die
// Telefonnummer.
//
// Auf dem Handy klappt das Menü als eigenes Blatt auf: wieder Papier,
// wieder Handschrift – nur größer, mit durchnummerierten Zeilen wie auf
// einem Notizzettel.
export default function Header() {
  const [open, setOpen] = useState(false);

  // Onepage-Navigation: Liegt der Abschnitt auf der aktuellen Seite, wird
  // direkt dorthin gescrollt. Auf Unterseiten (Impressum) bleibt der
  // normale Link zur Startseite + Anker erhalten.
  const jumpToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const id = href.split("#")[1];
    if (!id || !document.getElementById(id)) return;
    event.preventDefault();
    setOpen(false);
    // Erst scrollen, wenn das Menü wirklich zu ist: Solange es offen ist,
    // ist die Seite gesperrt und der Sprung würde falsch landen.
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", `#${id}`);
      });
    });
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="linie-hand linie-hand-stark sticky top-0 z-50 bg-paper">
      <div className="wrap flex h-[4.25rem] items-center justify-between gap-6 sm:h-[4.75rem]">
        <Link
          href="/"
          aria-label={`${company.name} – zur Startseite`}
          onClick={() => setOpen(false)}
        >
          <Logo />
        </Link>

        <nav
          aria-label="Hauptnavigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              onClick={(e) => jumpToSection(e, item.href)}
              className="ul-link ul-zeichnen notiz inline-flex items-center gap-1.5 text-[1.05rem] text-ink"
            >
              {item.label}
              {item.external && <ExternHand />}
            </Link>
          ))}
          {/* Die Telefonnummer steht bewusst als Zahl da, nicht als Knopf mit
              Wort – so liest man sie auch, ohne zu klicken. */}
          <a
            href={`tel:${company.phoneHref}`}
            className="ul-link hand ml-1 text-[1.4rem] text-ink"
          >
            {company.phoneDisplay}
          </a>
        </nav>

        <div className="flex items-center gap-2.5 lg:hidden">
          <a
            href={`tel:${company.phoneHref}`}
            className="rahmen rahmen-nachziehen flex h-11 w-11 items-center justify-center text-ink"
            aria-label="Anrufen"
          >
            <TelefonHand className="h-[1.1rem] w-[1.1rem]" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rahmen rahmen-nachziehen flex h-11 w-11 items-center justify-center text-ink"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
          >
            {open ? (
              <KreuzHand className="h-[1.1rem] w-[1.1rem]" />
            ) : (
              <MenueHand className="h-[1.1rem] w-[1.3rem]" />
            )}
          </button>
        </div>
      </div>

      {/* Menü auf dem Handy: ein eigenes Blatt, das sich über die Seite legt. */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-[4.25rem] z-[70] overflow-y-auto bg-paper sm:top-[4.75rem] lg:hidden"
        >
          <nav aria-label="Mobile Navigation" className="wrap py-2">
            {nav.map((item, i) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                onClick={(e) => {
                  setOpen(false);
                  jumpToSection(e, item.href);
                }}
                className="linie-hand linie-hand-fein flex items-baseline gap-4 py-6 text-ink"
              >
                <span className="etikett etikett-rot">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="hand text-[2.5rem] lowercase">
                  {item.label}
                </span>
                {item.external && (
                  <ExternHand className="h-4 w-4 self-center text-ink-soft" />
                )}
              </Link>
            ))}

            <div className="py-9">
              <p className="etikett">Direkt anrufen</p>
              <a
                href={`tel:${company.phoneHref}`}
                className="hand mt-2 block text-[2.2rem] text-ink"
              >
                {company.phoneDisplay}
              </a>
              <p className="notiz mt-7 text-[1.05rem] leading-relaxed text-ink-soft">
                {company.street}
                <br />
                {company.zip} {company.city}
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
