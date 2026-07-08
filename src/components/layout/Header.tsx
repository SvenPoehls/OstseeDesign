"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { ExternalIcon, PhoneIcon } from "@/components/ui/Icons";
import { company, nav } from "@/lib/site";

// Kopfzeile analog zur Vorlage: Navigation links, zentrierte Wortmarke,
// Handlungs-Button rechts (hier der Telefon-CTA). Auf dem Smartphone wird
// die Navigation zu einem Ausklapp-Menü.
export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur">
      <div className="container-site grid h-20 grid-cols-[1fr_auto_1fr] items-center gap-4">
        {/* Links: Navigation (Desktop) / Hamburger (Mobil) */}
        <div className="flex items-center">
          <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="nav-link text-xs font-semibold uppercase tracking-label text-ink"
              >
                <span className="nav-link__dot" aria-hidden="true" />
                <span className="nav-link__text">
                  {item.label}
                  {item.external && <ExternalIcon className="ml-1 inline h-3 w-3 align-[-1px]" />}
                </span>
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
          >
            <span className="relative block h-4 w-5">
              <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>

        {/* Mitte: Wortmarke */}
        <Link href="/" aria-label={`${company.name} – zur Startseite`} className="justify-self-center">
          <Logo />
        </Link>

        {/* Rechts: Telefon-CTA */}
        <div className="flex items-center justify-end">
          <a
            href={`tel:${company.phoneHref}`}
            className="btn-solid"
            aria-label={`Anrufen: ${company.phoneDisplay}`}
          >
            <PhoneIcon className="h-4 w-4" />
            <span className="hidden sm:inline">{company.phoneDisplay}</span>
            <span className="sm:hidden">Anrufen</span>
          </a>
        </div>
      </div>

      {/* Mobil-Menü */}
      {open && (
        <div id="mobile-menu" className="border-t border-line bg-paper lg:hidden">
          <nav aria-label="Mobile Navigation" className="container-site flex flex-col py-2">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-line/70 py-4 text-sm font-semibold uppercase tracking-label text-ink last:border-0"
              >
                {item.label}
                {item.external && <ExternalIcon className="h-4 w-4 text-ink-muted" />}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
