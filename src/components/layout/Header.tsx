"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BAND_LEISE, BAND_SCHRIFT, KNOPF, KNOPF_SCHRIFT, LEISE, farben } from "@/lib/farben";
import { company, nav, services, unterseiten } from "@/lib/site";

// Kopfzeile: eine durchgehende Leiste über die ganze Breite.
//
//   links    Wortmarke „ostseedesign" mit kleiner Unterzeile
//   Mitte    die drei Leistungen und der Textilshop, in Großbuchstaben
//   rechts   zwei runde Knöpfe: die Telefonnummer (umrandet) und
//            „Projekt anfragen" (Akzentfarbe)
//   unten    eine schmale Linie in der Akzentfarbe
//
// Die Seite, auf der man gerade ist, ist im Menü in der Akzentfarbe
// unterstrichen. Der Grund der Leiste ist ein fast deckendes Weiß (`--kopf`
// in globals.css), die Schrift darauf dunkel.
//
// HANDY UND TABLET (unter 1280 px): Das Menü passt nicht mehr in die Leiste.
// Dort steht rechts ein runder Menü-Knopf (≡, wird zum ×). Er klappt unter der
// Leiste eine Liste auf: Startseite, die Leistungen mit ihrem Leitspruch,
// Textilshop und Kontakt, darunter „Projekt anfragen" und die Telefonnummer.
// Auf dem Handy steht neben dem Menü-Knopf ein runder Telefon-Knopf; ab
// Tablet-Breite kommen „Projekt anfragen" und die Nummer in die Leiste.
//
// Das Menü schließt sich beim Tippen auf einen Eintrag, beim Tippen daneben,
// mit der Esc-Taste und beim Seitenwechsel. Solange es offen ist, scrollt die
// Seite dahinter nicht mit.
export default function Header() {
  const pfad = (usePathname() ?? "/").replace(/\/$/, "") || "/";
  const aktiv = (href: string) => !href.startsWith("http") && href === pfad;
  const [offen, setOffen] = useState(false);
  const knopfRef = useRef<HTMLButtonElement>(null);

  // Startseite und Leistungsseiten haben unten einen Kontaktbereich – dorthin
  // springt „Projekt anfragen" direkt. Von Impressum und Datenschutz aus geht
  // es zum Kontaktbereich der Startseite.
  const hatKontakt =
    pfad === "/" || unterseiten.some((s) => `/${s.id}` === pfad);
  const kontaktHref = hatKontakt ? "#kontakt" : "/#kontakt";

  // Seitenwechsel → Menü zu.
  useEffect(() => setOffen(false), [pfad]);

  // Offen: Esc schließt (und gibt den Fokus an den Menü-Knopf zurück), die
  // Seite dahinter scrollt nicht.
  useEffect(() => {
    if (!offen) return;
    const taste = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOffen(false);
        knopfRef.current?.focus();
      }
    };
    const html = document.documentElement;
    const vorher = html.style.overflow;
    html.style.overflow = "hidden";
    window.addEventListener("keydown", taste);
    return () => {
      html.style.overflow = vorher;
      window.removeEventListener("keydown", taste);
    };
  }, [offen]);

  // Einträge des aufklappbaren Menüs. Die Leistungen tragen ihre Farbe und
  // ihren Leitspruch (aus site.ts).
  const eintraege = [
    { label: "Startseite", href: "/", hinweis: `Ihr Werbepartner in ${company.city}`, ton: undefined, extern: false },
    ...services.map((s, i) => ({
      label: s.title,
      href: s.external ?? `/${s.id}`,
      hinweis: s.motto ?? "ostseetextilien.de",
      ton: farben[i].ton as string,
      extern: Boolean(s.external),
    })),
    { label: "Kontakt", href: kontaktHref, hinweis: company.phoneDisplay, ton: undefined, extern: false },
  ];

  const knopf =
    "inline-flex items-center justify-center whitespace-nowrap rounded-full px-5 py-3 text-[0.85rem] font-bold uppercase tracking-[0.04em] transition-transform duration-300 hover:-translate-y-0.5";
  const rundknopf =
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors";
  const zu = () => setOffen(false);

  return (
    <>
      {/* Abdunkelung hinter dem offenen Menü; ein Tipp darauf schließt es. */}
      <div
        aria-hidden="true"
        onClick={zu}
        className={`fixed inset-0 z-30 bg-[#0f1b2d]/30 transition-opacity duration-300 xl:hidden ${
          offen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <header
        className="kopf-ein sticky top-0 z-40 backdrop-blur"
        // Bei offenem Menü deckend weiß, sonst schimmert die Abdunkelung durch.
        style={{ backgroundColor: offen ? "#ffffff" : "var(--kopf)", color: BAND_SCHRIFT }}
      >
        <div className="seitenrand flex h-[4.5rem] items-center justify-between gap-4 sm:h-20 sm:gap-6">
          {/* Wortmarke mit Unterzeile */}
          <Link
            href="/"
            aria-label={`${company.name} – zur Startseite`}
            className="flex shrink-0 flex-col leading-none"
          >
            <span className="text-[1.45rem] font-extrabold tracking-[-0.03em] sm:text-[1.6rem]">
              ostseedesign
            </span>
            <span className="mt-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.24em]" style={{ color: BAND_LEISE }}>
              Werbung &amp; Textilien
            </span>
          </Link>

          <nav
            aria-label="Hauptnavigation"
            className="ml-auto hidden items-center gap-8 xl:flex"
          >
            {nav.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.86rem] font-semibold uppercase tracking-[0.05em] text-[#3b4a5e] transition-colors hover:text-tinte"
                >
                  {item.label} ↗
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={aktiv(item.href) ? "page" : undefined}
                  className={`relative py-1 text-[0.86rem] font-semibold uppercase tracking-[0.05em] transition-colors hover:text-tinte ${
                    aktiv(item.href) ? "text-tinte" : "text-[#3b4a5e]"
                  }`}
                >
                  {item.label}
                  {/* Aktive Seite: ein Strich in der Akzentfarbe unter dem Wort. */}
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
              className={`${knopf} hidden md:inline-flex`}
              style={{ boxShadow: `inset 0 0 0 1.5px ${BAND_LEISE}80`, color: BAND_SCHRIFT }}
            >
              {company.phoneDisplay}
            </a>
            <a
              href={kontaktHref}
              className={`${knopf} hidden sm:inline-flex`}
              style={{ backgroundColor: KNOPF, color: KNOPF_SCHRIFT }}
            >
              Projekt anfragen
            </a>

            {/* Handy: runder Telefon-Knopf */}
            <a
              href={`tel:${company.phoneHref}`}
              aria-label={`Anrufen: ${company.phoneDisplay}`}
              className={`${rundknopf} md:hidden`}
              style={{ backgroundColor: KNOPF, color: KNOPF_SCHRIFT }}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6.6 3.5h2.6l1.4 4-2 1.3a12 12 0 0 0 6.6 6.6l1.3-2 4 1.4v2.6a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" />
              </svg>
            </a>

            {/* Menü-Knopf: drei Striche, die sich beim Öffnen zum × drehen */}
            <button
              ref={knopfRef}
              type="button"
              onClick={() => setOffen((o) => !o)}
              aria-expanded={offen}
              aria-controls="handy-menue"
              aria-label={offen ? "Menü schließen" : "Menü öffnen"}
              className={`${rundknopf} xl:hidden`}
              style={{ boxShadow: `inset 0 0 0 1.5px ${BAND_LEISE}80` }}
            >
              <span aria-hidden="true" className="relative block h-3.5 w-5">
                <span
                  className={`absolute left-0 h-[2px] w-5 rounded-full bg-current transition-[top,transform] duration-300 ${
                    offen ? "top-[6px] rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[6px] h-[2px] w-5 rounded-full bg-current transition-opacity duration-200 ${
                    offen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-[2px] w-5 rounded-full bg-current transition-[top,transform] duration-300 ${
                    offen ? "top-[6px] -rotate-45" : "top-[12px]"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Die Linie unter der Leiste: schmal, in der Akzentfarbe. */}
        <div aria-hidden="true" className="h-[3px]" style={{ backgroundColor: farben[0].ton }} />

        {/* ── Aufklappbares Menü (unter 1280 px) ─────────────────────────── */}
        <div
          id="handy-menue"
          className={`absolute inset-x-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto bg-white shadow-[0_24px_48px_-24px_rgba(15,27,45,0.35)] transition-[opacity,transform,visibility] duration-300 xl:hidden ${
            offen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <nav aria-label="Menü" className="seitenrand pb-8 pt-3">
            <ul>
              {eintraege.map((e) => {
                const ist = aktiv(e.href);
                const inhalt = (
                  <>
                    <span
                      aria-hidden="true"
                      className="h-3 w-3 shrink-0 rounded-full"
                      style={
                        e.ton
                          ? { backgroundColor: e.ton }
                          : { boxShadow: `inset 0 0 0 2px ${BAND_LEISE}80` }
                      }
                    />
                    <span className="min-w-0 flex-1">
                      <span className={`block text-[1.2rem] tracking-[-0.015em] ${ist ? "font-black" : "font-extrabold"}`}>
                        {e.label}
                        {e.extern && <span aria-hidden="true"> ↗</span>}
                      </span>
                      <span className="mt-0.5 block text-[0.85rem]" style={{ color: LEISE }}>
                        {e.hinweis}
                      </span>
                    </span>
                    <span aria-hidden="true" className="text-[1.1rem]" style={{ color: farben[0].ton }}>
                      {e.extern ? "↗" : "→"}
                    </span>
                  </>
                );
                const klasse = "relative flex items-center gap-4 border-b border-[#0f1b2d]/10 py-4 pl-1 pr-1";
                return (
                  <li key={e.label}>
                    {e.extern ? (
                      <a href={e.href} target="_blank" rel="noopener noreferrer" onClick={zu} className={klasse}>
                        {inhalt}
                      </a>
                    ) : (
                      <Link href={e.href} aria-current={ist ? "page" : undefined} onClick={zu} className={klasse}>
                        {/* Aktive Seite: ein Balken in der Akzentfarbe links. */}
                        {ist && (
                          <span
                            aria-hidden="true"
                            className="absolute -left-4 top-3 bottom-3 w-1 rounded-full sm:-left-6"
                            style={{ backgroundColor: farben[0].ton }}
                          />
                        )}
                        {inhalt}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={kontaktHref}
                onClick={zu}
                className={`${knopf} py-4`}
                style={{ backgroundColor: KNOPF, color: KNOPF_SCHRIFT }}
              >
                Projekt anfragen
              </a>
              <a
                href={`tel:${company.phoneHref}`}
                className={`${knopf} py-4`}
                style={{ boxShadow: `inset 0 0 0 1.5px ${BAND_LEISE}80`, color: BAND_SCHRIFT }}
              >
                {company.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
