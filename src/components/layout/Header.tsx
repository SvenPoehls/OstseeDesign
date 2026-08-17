"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { ArrowIcon, ExternalIcon, PhoneIcon } from "@/components/ui/Icons";
import { company, nav } from "@/lib/site";

// Kopfzeile: Logo links, Navigation als dunkle Pille in der Mitte, Anruf-Button
// rechts. Alles betont rund, damit sich der Kopf klar vom Inhalt abhebt.
// Auf dem Smartphone klappt das Menü unter der Leiste aus.
export default function Header() {
  const [open, setOpen] = useState(false);

  // Onepage-Navigation: Liegt der Abschnitt auf der aktuellen Seite, wird
  // direkt dorthin gescrollt (ohne Seitenwechsel). Auf Unterseiten wie
  // Impressum bleibt der normale Link zur Startseite + Anker erhalten.
  const jumpToSection = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("/#")) return;
    const target = document.getElementById(href.slice(2));
    if (!target) return;
    event.preventDefault();
    setOpen(false);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${href.slice(2)}`);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 pt-3 sm:pt-4">
      <div className="container-site">
        <div className="flex items-center justify-between gap-4 rounded-full border-[1.5px] border-ink bg-paper/95 px-4 py-2.5 shadow-offset backdrop-blur sm:px-5">
          <Link
            href="/"
            aria-label={`${company.name} – zur Startseite`}
            className="shrink-0"
            onClick={() => setOpen(false)}
          >
            <Logo />
          </Link>

          {/* Navigation als dunkle Pille – mittig ausgerichtet. */}
          <nav
            aria-label="Hauptnavigation"
            className="hidden items-center gap-1 rounded-full bg-ink px-2 py-1.5 lg:flex"
          >
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                onClick={(e) => jumpToSection(e, item.href)}
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white/85 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.label}
                {item.external && <ExternalIcon className="h-3.5 w-3.5" />}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={`tel:${company.phoneHref}`} className="btn-pill hidden sm:inline-flex">
              <PhoneIcon className="h-4 w-4" />
              {company.phoneDisplay}
            </a>
            <a
              href={`tel:${company.phoneHref}`}
              className="btn-pill px-4 sm:hidden"
              aria-label="Anrufen"
            >
              <PhoneIcon className="h-4 w-4" />
              Anrufen
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-ink text-ink transition-colors hover:bg-surface lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`}
                />
              </span>
            </button>
          </div>
        </div>

        {open && (
          <div
            id="mobile-menu"
            className="mt-3 overflow-hidden rounded-3xl border-[1.5px] border-ink bg-paper shadow-offset lg:hidden"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col px-5 py-2">
              {nav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={(e) => {
                    setOpen(false);
                    jumpToSection(e, item.href);
                  }}
                  className="flex items-center justify-between border-b border-line py-4 text-base font-semibold text-ink last:border-0"
                >
                  {item.label}
                  {item.external ? (
                    <ExternalIcon className="h-4 w-4 text-ink-muted" />
                  ) : (
                    <ArrowIcon className="h-4 w-4 text-ink-muted" />
                  )}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
