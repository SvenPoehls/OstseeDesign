import type { Metadata } from "next";
import Link from "next/link";
import VariantBar from "@/components/layout/VariantBar";
import { company, openingHours, services, textilShopUrl } from "@/lib/site";

// ════════════════════════════════════════════════════════════════════════
// ENTWURF 2 — „WEISSRAUM"
// ════════════════════════════════════════════════════════════════════════
// Leitsatz: So ruhig wie ein aufgeräumter Werkstatttisch – viel Platz,
// wenig drauf, und was draufliegt, liegt gerade.
//
// Was diesen Entwurf von 1 und 3 unterscheidet:
//   • WENIG TEXT. Jeder Punkt ist eine Zeile, keine Aufzählungen.
//     Die ausführlichen Texte stehen weiterhin in src/lib/site.ts und
//     werden hier bewusst nicht benutzt – dieser Entwurf lebt vom
//     Weglassen.
//   • EINE Schrift (Archivo) in nur zwei Stärken, eher klein gesetzt.
//     Keine Serife, kein Schmuck, keine Großbuchstaben-Etiketten außer
//     einer winzigen Marke je Abschnitt.
//   • Viel Weißraum: breite Ränder, große Abstände, schmale Textspalte.
//   • Farbe nur in kleinen Mengen: ein gedecktes Grün für Ziffern,
//     Verweise und eine einzige ruhige Fläche am Ende.
//   • Nur ein Bild auf der ganzen Seite.
//
// FARBE TAUSCHEN: die drei Werte unten.
export const metadata: Metadata = {
  title: "Entwurf 2 · Weißraum",
  description:
    "Entwurf 2 für ostseedesign.de: sehr ruhig und aufgeräumt, moderne Schrift, wenig Text.",
};

const GRUND = "#f7f6f3"; // sehr helles, leicht warmes Weiß
const TINTE = "#1a1b19";
const LEISE = "#7a7a74";
const GRUEN = "#35594a";
const LINIE = "rgba(26,27,25,0.12)";

// Kurzfassungen – eine Zeile je Bereich, mehr steht hier bewusst nicht.
const kurz: Record<string, string> = {
  textilveredelung: "Gestickt oder gedruckt, auf Arbeitskleidung und Trikots.",
  werbetechnik: "Fahrzeuge, Schilder, Schaufenster.",
  drucksachen: "Visitenkarten, Flyer, Briefpapier, Stempel.",
  textilshop: "Kleidung aussuchen, auf Wunsch von uns veredelt.",
};

// Der Ablauf in vier Zeilen.
const ablauf = [
  ["Reden", "Sie sagen, was Sie brauchen. Wir sagen, was es kostet."],
  ["Entwurf", "Sie sehen vorab, wie es aussieht."],
  ["Ändern", "So lange, bis es passt."],
  ["Fertigen", "In unserer Werkstatt am Rosseer Weg."],
];

export default function Entwurf2Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `html,body{background:${GRUND};}` }} />
      <VariantBar current={2} />

      <div
        className="min-h-screen font-archivo antialiased"
        style={{ backgroundColor: GRUND, color: TINTE }}
      >
        {/* ── Kopfzeile: klein, leise, ohne Linie ──────────────────────── */}
        <header className="mx-auto w-full max-w-[1100px] px-6 pt-10 sm:px-12 sm:pt-14">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <Link href="/entwurf-2" className="text-[1.05rem] font-medium tracking-[-0.01em]">
              ostseedesign
            </Link>
            <nav
              className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[0.92rem]"
              style={{ color: LEISE }}
            >
              <a href="#leistungen" className="hover:text-[#1a1b19]">
                Leistungen
              </a>
              <a href="#ablauf" className="hover:text-[#1a1b19]">
                Ablauf
              </a>
              <a href="#standort" className="hover:text-[#1a1b19]">
                Standort
              </a>
              <a
                href={textilShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1a1b19]"
              >
                Textilshop
              </a>
              <a href={`tel:${company.phoneHref}`} style={{ color: GRUEN }}>
                {company.phoneDisplay}
              </a>
            </nav>
          </div>
        </header>

        <main id="hauptinhalt" className="mx-auto w-full max-w-[1100px] px-6 sm:px-12">
          {/* ── Auftakt ──────────────────────────────────────────────── */}
          <section className="pb-24 pt-28 sm:pb-32 sm:pt-40">
            <p className="text-[0.82rem]" style={{ color: LEISE }}>
              Werbung und Textilien · {company.city}
            </p>
            <h1 className="mt-6 max-w-[20ch] text-[clamp(2rem,4.6vw,3.2rem)] font-medium leading-[1.18] tracking-[-0.02em]">
              Ihr Logo aufs Shirt, aufs Auto oder an die Wand.
            </h1>
            <p className="mt-6 max-w-[42ch] text-[1.05rem] leading-relaxed" style={{ color: LEISE }}>
              Werkstatt in {company.city}, seit über {company.yearsExperience} Jahren.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[0.98rem]">
              <a
                href="#kontakt"
                className="underline decoration-1 underline-offset-[6px]"
                style={{ color: GRUEN }}
              >
                Projekt besprechen
              </a>
              <a href={`tel:${company.phoneHref}`} className="hover:underline">
                {company.phoneDisplay}
              </a>
            </div>
          </section>

          {/* ── Das einzige Bild der Seite ───────────────────────────── */}
          <figure
            className="h-[38vh] min-h-[16rem] w-full sm:h-[46vh]"
            style={{
              backgroundColor: "#e9e8e3",
              backgroundImage:
                "repeating-linear-gradient(-45deg, rgba(26,27,25,0.04) 0 1px, transparent 1px 18px)",
            }}
          >
            <figcaption className="sr-only">
              Platzhalter: Blick in die Werkstatt
            </figcaption>
          </figure>
          <p className="mt-3 text-[0.8rem]" style={{ color: LEISE }}>
            Blick in die Werkstatt
          </p>

          {/* ── Leistungen: vier Zeilen, mehr nicht ──────────────────── */}
          <section id="leistungen" className="scroll-mt-16 pt-28 sm:pt-36">
            <p className="text-[0.82rem]" style={{ color: LEISE }}>
              Leistungen
            </p>

            <ul className="mt-10">
              {services.map((service, i) => {
                const Zeile = service.external ? "a" : "div";
                return (
                  <li key={service.id}>
                    <Zeile
                      {...(service.external
                        ? {
                            href: service.external,
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : {})}
                      className="group grid grid-cols-[2.5rem_1fr] items-baseline gap-x-6 gap-y-2 border-t py-7 sm:grid-cols-[3.5rem_14rem_1fr]"
                      style={{ borderColor: LINIE }}
                    >
                      <span className="text-[0.82rem]" style={{ color: GRUEN }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[1.25rem] font-medium tracking-[-0.01em] sm:text-[1.35rem]">
                        {service.title}
                        {service.external && (
                          <span className="ml-2 text-[0.9rem]" style={{ color: GRUEN }}>
                            ↗
                          </span>
                        )}
                      </span>
                      <span
                        className="col-start-2 text-[0.98rem] leading-relaxed sm:col-start-3"
                        style={{ color: LEISE }}
                      >
                        {kurz[service.id]}
                      </span>
                    </Zeile>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* ── Ablauf: vier kurze Zeilen ────────────────────────────── */}
          <section id="ablauf" className="scroll-mt-16 pt-28 sm:pt-36">
            <p className="text-[0.82rem]" style={{ color: LEISE }}>
              Ablauf
            </p>

            <div className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {ablauf.map(([titel, satz], i) => (
                <div key={titel}>
                  <span className="text-[0.82rem]" style={{ color: GRUEN }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-[1.15rem] font-medium tracking-[-0.01em]">
                    {titel}
                  </h3>
                  <p className="mt-2 text-[0.98rem] leading-relaxed" style={{ color: LEISE }}>
                    {satz}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Standort: Anschrift und Zeiten, sonst nichts ─────────── */}
          <section id="standort" className="scroll-mt-16 pt-28 sm:pt-36">
            <p className="text-[0.82rem]" style={{ color: LEISE }}>
              Standort
            </p>

            <div className="mt-10 grid gap-12 sm:grid-cols-2">
              <div>
                <p className="text-[clamp(1.4rem,3vw,1.9rem)] font-medium leading-snug tracking-[-0.01em]">
                  {company.street}
                  <br />
                  {company.zip} {company.city}
                </p>
                <p className="mt-6 text-[0.98rem] leading-relaxed" style={{ color: LEISE }}>
                  Vorher kurz anrufen lohnt sich.
                </p>
              </div>

              <dl className="text-[0.98rem]">
                {openingHours.map((row) => (
                  <div
                    key={row.days}
                    className="flex flex-wrap items-baseline justify-between gap-4 border-t py-4"
                    style={{ borderColor: LINIE }}
                  >
                    <dt style={{ color: LEISE }}>{row.days}</dt>
                    <dd className="whitespace-nowrap">{row.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        </main>

        {/* ── Kontakt: die eine ruhige Farbfläche ─────────────────────── */}
        <section id="kontakt" className="mt-28 scroll-mt-16 sm:mt-36" style={{ backgroundColor: GRUEN }}>
          <div className="mx-auto w-full max-w-[1100px] px-6 py-24 sm:px-12 sm:py-32">
            <p className="text-[0.82rem] text-white/55">Kontakt</p>
            <a
              href={`tel:${company.phoneHref}`}
              className="mt-6 block text-[clamp(2rem,5vw,3.4rem)] font-medium leading-none tracking-[-0.02em]"
              style={{ color: GRUND }}
            >
              {company.phoneDisplay}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="mt-6 inline-block text-[1.02rem] text-white/75 underline decoration-1 underline-offset-[6px]"
            >
              {company.email}
            </a>
          </div>
        </section>

        {/* ── Fußzeile ───────────────────────────────────────────────── */}
        <footer className="mx-auto w-full max-w-[1100px] px-6 pb-12 pt-10 sm:px-12">
          <div
            className="flex flex-wrap items-center justify-between gap-x-10 gap-y-3 text-[0.85rem]"
            style={{ color: LEISE }}
          >
            <p>
              © 2026 {company.fullName} · {company.street}, {company.zip}{" "}
              {company.city}
            </p>
            <nav className="flex flex-wrap items-center gap-x-7 gap-y-2">
              <Link href="/impressum" className="hover:text-[#1a1b19]">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-[#1a1b19]">
                Datenschutz
              </Link>
              <a
                href={textilShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1a1b19]"
              >
                Textilshop
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}
