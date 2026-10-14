"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { ExternalIcon, PhoneIcon } from "@/components/ui/Icons";
import { company, nav } from "@/lib/site";

// Kopfzeile: eine flache Leiste mit einer durchgehenden Linie darunter –
// wie der Kopf eines Formulars. Kein Kasten, kein Schatten, nichts Rundes.
// Links die Wortmarke, rechts die Navigation und die Telefonnummer.
// Auf dem Handy öffnet sich das Menü als ganzseitige, schwarze Fläche mit
// großen Zeilen; das ist eindeutiger als ein kleines Klappmenü.
export default function Header() {
  const [open, setOpen] = useState(false);

  // Onepage-Navigation: Liegt der Abschnitt auf der aktuellen Seite, wird
  // direkt dorthin gescrollt. Auf Unterseiten (Impressum) bleibt der
  // normale Link zur Startseite + Anker erhalten.
  const jumpToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Liegt der Abschnitt auf der aktuellen Seite? Dann hier scrollen,
    // statt die Seite neu zu laden. Sonst normal dem Link folgen.
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
    <header className="sticky top-0 z-50 border-b border-ink bg-paper">
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
          className="hidden items-center gap-9 lg:flex"
        >
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              onClick={(e) => jumpToSection(e, item.href)}
              className="ul-link inline-flex items-center gap-1.5 text-[0.95rem] font-medium text-ink"
            >
              {item.label}
              {item.external && <ExternalIcon className="h-3.5 w-3.5" />}
            </Link>
          ))}
          {/* Die Telefonnummer steht bewusst als Zahl da, nicht als Knopf mit
              Wort – so liest man sie auch, ohne zu klicken. */}
          <a
            href={`tel:${company.phoneHref}`}
            className="display-lite ml-1 text-[1.15rem] text-ink hover:text-ink-soft"
          >
            {company.phoneDisplay}
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${company.phoneHref}`}
            className="flex h-10 w-10 items-center justify-center border border-ink text-ink"
            aria-label="Anrufen"
          >
            <PhoneIcon className="h-[1.05rem] w-[1.05rem]" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center border border-ink bg-ink text-paper"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
          >
            <span className="relative block h-[14px] w-[18px]">
              <span
                className={`absolute left-0 h-[2px] w-[18px] bg-current transition-all duration-200 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-[2px] w-[18px] bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-[2px] w-[18px] bg-current transition-all duration-200 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Menü auf dem Handy: ganze Fläche, schwarz, große Zeilen. */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-[4.25rem] z-[70] overflow-y-auto bg-ink text-paper sm:top-[4.75rem] lg:hidden"
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
                className="flex items-baseline gap-4 border-b border-paper/20 py-6"
              >
                <span className="text-[0.7rem] tracking-label text-paper/45">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="display text-[2.4rem] lowercase">
                  {item.label}
                </span>
                {item.external && (
                  <ExternalIcon className="h-4 w-4 self-center text-paper/50" />
                )}
              </Link>
            ))}

            <div className="py-8">
              <p className="text-[0.7rem] uppercase tracking-label text-paper/45">
                Direkt anrufen
              </p>
              <a
                href={`tel:${company.phoneHref}`}
                className="display mt-2 block text-[2rem] text-paper"
              >
                {company.phoneDisplay}
              </a>
              <p className="mt-6 text-sm leading-relaxed text-paper/60">
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
