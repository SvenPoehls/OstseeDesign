"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { ArrowIcon, ExternalIcon, PhoneIcon } from "@/components/ui/Icons";
import { company, nav } from "@/lib/site";

// Sticky-Header mit klarer Navigation und Telefon-CTA.
// Auf dem Smartphone wird die Navigation zu einem Ausklapp-Menü
// (Hamburger), damit nichts umbricht und die CTA sichtbar bleibt.
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Dezenter Schatten/Trennlinie erst, sobald man scrollt – ruhiger Start.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bei geöffnetem Mobil-Menü das Scrollen der Seite sperren.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_1px_0_rgba(0,0,0,0.06)]" : ""
      }`}
    >
      <div className="container-site flex h-20 items-center justify-between gap-4">
        <Link href="/" aria-label={`${company.name} – zur Startseite`} className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop-Navigation */}
        <nav aria-label="Hauptnavigation" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-1 text-sm font-semibold text-ink transition-colors hover:text-accent-strong"
            >
              {item.label}
              {item.external && <ExternalIcon className="h-3.5 w-3.5" />}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Telefon-CTA – auf Mobil kompakt (nur Icon), ab sm mit Nummer. */}
          <a
            href={`tel:${company.phoneHref}`}
            className="btn-accent px-4 py-2.5 text-sm sm:px-5"
            aria-label={`Anrufen: ${company.phoneDisplay}`}
          >
            <PhoneIcon className="h-4 w-4" />
            <span className="hidden sm:inline">{company.phoneDisplay}</span>
            <span className="sm:hidden">Anrufen</span>
          </a>

          {/* Hamburger nur auf kleineren Screens */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-petrol lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobil-Menü */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-line bg-white lg:hidden"
        >
          <nav aria-label="Mobile Navigation" className="container-site flex flex-col py-2">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-line/70 py-3.5 text-base font-semibold text-ink last:border-0"
              >
                <span className="inline-flex items-center gap-2">
                  {item.label}
                  {item.external && <ExternalIcon className="h-4 w-4 text-ink-muted" />}
                </span>
                <ArrowIcon className="h-4 w-4 text-ink-muted" />
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
