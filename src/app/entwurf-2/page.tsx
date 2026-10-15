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
// DAS GERÜST ist der große Unterschied zu Entwurf 1 und 3:
// Die Seite ist ZWEIGETEILT. Links steht eine feste Spalte, die beim
// Scrollen stehen bleibt – Name, Inhaltsverzeichnis, Telefonnummer,
// Adresse. Rechts läuft der Inhalt durch. Entwurf 1 und 3 sind dagegen
// von oben nach unten durchgehend über die volle Breite gebaut.
// Auf dem Handy wird aus der festen Spalte ein kurzer Kopf, danach
// kommt der Inhalt – dort hat eine feste Spalte keinen Sinn.
//
// Weitere Merkmale dieses Entwurfs:
//   • WENIG TEXT: jeder Bereich und jeder Schritt in einer Zeile.
//     Die ausführlichen Texte in src/lib/site.ts bleiben ungenutzt.
//   • EINE Schrift (Archivo) in zwei Stärken, eher klein gesetzt.
//   • Farbe sparsam: ein gedecktes Grün, sonst Weiß und Tinte.
//   • Nur ein Bild auf der ganzen Seite.
//
// FARBE TAUSCHEN: die Werte unten.
export const metadata: Metadata = {
  title: "Entwurf 2 · Weißraum",
  description:
    "Entwurf 2 für ostseedesign.de: feste Spalte links, ruhiger Inhalt rechts, moderne Schrift, wenig Text.",
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

const index = [
  ["01", "Leistungen", "#leistungen"],
  ["02", "Ablauf", "#ablauf"],
  ["03", "Standort", "#standort"],
  ["04", "Kontakt", "#kontakt"],
];

export default function Entwurf2Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `html,body{background:${GRUND};}` }} />
      <VariantBar current={2} />

      <div
        className="min-h-screen font-archivo antialiased lg:grid lg:grid-cols-[21rem_1fr] xl:grid-cols-[24rem_1fr]"
        style={{ backgroundColor: GRUND, color: TINTE }}
      >
        {/* ══ Feste Spalte ══════════════════════════════════════════════
            Bleibt beim Scrollen stehen. Alles, was man ständig braucht,
            steht hier: Name, Inhaltsverzeichnis, Telefonnummer, Adresse. */}
        <aside
          className="px-6 pt-10 sm:px-12 lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:border-r lg:px-10 lg:py-12"
          style={{ borderColor: LINIE }}
        >
          <div>
            <Link href="/entwurf-2" className="text-[1.05rem] font-medium tracking-[-0.01em]">
              ostseedesign
            </Link>
            <p className="mt-2 text-[0.88rem]" style={{ color: LEISE }}>
              Werbung und Textilien · {company.city}
            </p>
          </div>

          {/* Inhaltsverzeichnis statt Navigationsleiste. */}
          <nav className="mt-8 lg:mt-14" aria-label="Inhalt">
            <ul className="flex flex-wrap gap-x-7 gap-y-2 lg:block lg:space-y-3.5">
              {index.map(([nr, label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="group flex items-baseline gap-3 text-[0.98rem] transition-colors"
                    style={{ color: LEISE }}
                  >
                    <span className="text-[0.78rem]" style={{ color: GRUEN }}>
                      {nr}
                    </span>
                    <span className="group-hover:text-[#1a1b19]">{label}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={textilShopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline gap-3 text-[0.98rem]"
                  style={{ color: LEISE }}
                >
                  <span className="text-[0.78rem]" style={{ color: GRUEN }}>
                    ↗
                  </span>
                  <span className="group-hover:text-[#1a1b19]">Textilshop</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Unten in der Spalte: das Wichtigste, immer sichtbar. */}
          <div className="mt-8 border-t pt-6 lg:mt-auto lg:border-0 lg:pt-0" style={{ borderColor: LINIE }}>
            <a
              href={`tel:${company.phoneHref}`}
              className="block text-[1.5rem] font-medium leading-none tracking-[-0.02em] lg:text-[1.75rem]"
            >
              {company.phoneDisplay}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="mt-3 inline-block text-[0.92rem] underline decoration-1 underline-offset-[5px]"
              style={{ color: GRUEN }}
            >
              {company.email}
            </a>
            <p className="mt-6 text-[0.9rem] leading-relaxed" style={{ color: LEISE }}>
              {company.street}
              <br />
              {company.zip} {company.city}
            </p>
          </div>
        </aside>

        {/* ══ Inhaltsspalte ════════════════════════════════════════════ */}
        <div className="flex min-w-0 flex-col">
          <main id="hauptinhalt" className="px-6 sm:px-12 lg:px-16 xl:px-24">
            {/* ── Auftakt ───────────────────────────────────────────── */}
            <section className="pb-20 pt-20 sm:pb-28 sm:pt-32 lg:pt-40">
              <h1 className="max-w-[18ch] text-[clamp(2rem,4vw,3.1rem)] font-medium leading-[1.16] tracking-[-0.02em]">
                Ihr Logo aufs Shirt, aufs Auto oder an die Wand.
              </h1>
              <p
                className="mt-6 max-w-[44ch] text-[1.05rem] leading-relaxed"
                style={{ color: LEISE }}
              >
                Werkstatt in {company.city}, seit über {company.yearsExperience}{" "}
                Jahren.
              </p>
              <a
                href="#kontakt"
                className="mt-9 inline-block text-[0.98rem] underline decoration-1 underline-offset-[6px]"
                style={{ color: GRUEN }}
              >
                Projekt besprechen
              </a>
            </section>

            {/* ── Das einzige Bild der Seite ────────────────────────── */}
            <figure>
              <div
                className="h-[34vh] min-h-[15rem] w-full sm:h-[44vh]"
                style={{
                  backgroundColor: "#e9e8e3",
                  backgroundImage:
                    "repeating-linear-gradient(-45deg, rgba(26,27,25,0.04) 0 1px, transparent 1px 18px)",
                }}
              />
              <figcaption className="mt-3 text-[0.8rem]" style={{ color: LEISE }}>
                Blick in die Werkstatt
              </figcaption>
            </figure>

            {/* ── Leistungen ────────────────────────────────────────── */}
            <section id="leistungen" className="scroll-mt-12 pt-24 sm:pt-32">
              <p className="text-[0.82rem]" style={{ color: LEISE }}>
                01 · Leistungen
              </p>

              <ul className="mt-8">
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
                        className="group block border-t py-7"
                        style={{ borderColor: LINIE }}
                      >
                        <span className="text-[1.25rem] font-medium tracking-[-0.01em] sm:text-[1.35rem]">
                          {service.title}
                          {service.external && (
                            <span className="ml-2 text-[0.9rem]" style={{ color: GRUEN }}>
                              ↗
                            </span>
                          )}
                        </span>
                        <span
                          className="mt-1.5 block text-[0.98rem] leading-relaxed"
                          style={{ color: LEISE }}
                        >
                          {kurz[service.id]}
                        </span>
                        <span className="sr-only">Bereich {i + 1}</span>
                      </Zeile>
                    </li>
                  );
                })}
              </ul>
            </section>

            {/* ── Ablauf ────────────────────────────────────────────── */}
            <section id="ablauf" className="scroll-mt-12 pt-24 sm:pt-32">
              <p className="text-[0.82rem]" style={{ color: LEISE }}>
                02 · Ablauf
              </p>

              <div className="mt-8 grid gap-x-10 gap-y-9 sm:grid-cols-2">
                {ablauf.map(([titel, satz], i) => (
                  <div key={titel}>
                    <span className="text-[0.8rem]" style={{ color: GRUEN }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-[1.15rem] font-medium tracking-[-0.01em]">
                      {titel}
                    </h3>
                    <p
                      className="mt-1.5 text-[0.98rem] leading-relaxed"
                      style={{ color: LEISE }}
                    >
                      {satz}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Standort ──────────────────────────────────────────── */}
            <section id="standort" className="scroll-mt-12 pt-24 sm:pt-32">
              <p className="text-[0.82rem]" style={{ color: LEISE }}>
                03 · Standort
              </p>

              <p className="mt-8 text-[clamp(1.4rem,3vw,1.9rem)] font-medium leading-snug tracking-[-0.01em]">
                {company.street}
                <br />
                {company.zip} {company.city}
              </p>

              <dl className="mt-8 max-w-[34rem] text-[0.98rem]">
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

              <p className="mt-6 text-[0.98rem]" style={{ color: LEISE }}>
                Vorher kurz anrufen lohnt sich.
              </p>
            </section>
          </main>

          {/* ── Kontakt: die eine ruhige Farbfläche ─────────────────── */}
          <section
            id="kontakt"
            className="mt-24 scroll-mt-12 px-6 py-20 sm:mt-32 sm:px-12 sm:py-24 lg:px-16 xl:px-24"
            style={{ backgroundColor: GRUEN }}
          >
            <p className="text-[0.82rem] text-white/55">04 · Kontakt</p>
            <a
              href={`tel:${company.phoneHref}`}
              className="mt-5 block text-[clamp(1.9rem,4.4vw,3rem)] font-medium leading-none tracking-[-0.02em]"
              style={{ color: GRUND }}
            >
              {company.phoneDisplay}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="mt-5 inline-block text-[1.02rem] text-white/75 underline decoration-1 underline-offset-[6px]"
            >
              {company.email}
            </a>
          </section>

          {/* ── Fußzeile ───────────────────────────────────────────── */}
          <footer className="px-6 pb-10 pt-8 sm:px-12 lg:px-16 xl:px-24">
            <div
              className="flex flex-wrap items-center justify-between gap-x-10 gap-y-3 text-[0.85rem]"
              style={{ color: LEISE }}
            >
              <p>© 2026 {company.fullName}</p>
              <nav className="flex flex-wrap items-center gap-x-7 gap-y-2">
                <Link href="/impressum" className="hover:text-[#1a1b19]">
                  Impressum
                </Link>
                <Link href="/datenschutz" className="hover:text-[#1a1b19]">
                  Datenschutz
                </Link>
              </nav>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
