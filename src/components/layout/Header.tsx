"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { ArrowIcon, ExternalIcon, PhoneIcon } from "@/components/ui/Icons";
import { company, nav } from "@/lib/site";

// Sticky-Header: Logo links, Navigation mittig/rechts, klarer CTA rechts.
// Auf dem Smartphone Ausklapp-Menü. Clean & modern gehalten.
export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label={`${company.name} – zur Startseite`} className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-1 text-sm font-semibold text-ink transition-colors hover:text-accent"
            >
              {item.label}
              {item.external && <ExternalIcon className="h-3.5 w-3.5 text-ink-muted" />}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={`tel:${company.phoneHref}`} className="btn-primary hidden sm:inline-flex">
            <PhoneIcon className="h-4 w-4" />
            {company.phoneDisplay}
          </a>
          <a href={`tel:${company.phoneHref}`} className="btn-primary px-4 sm:hidden" aria-label="Anrufen">
            <PhoneIcon className="h-4 w-4" />
            Anrufen
          </a>

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
      </div>

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
                className="flex items-center justify-between border-b border-line/70 py-4 text-base font-semibold text-ink last:border-0"
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
    </header>
  );
}
