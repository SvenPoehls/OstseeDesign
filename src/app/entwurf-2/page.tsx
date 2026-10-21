import type { Metadata } from "next";
import Link from "next/link";
import VariantBar from "@/components/layout/VariantBar";
import { company, openingHours, services, textilShopUrl } from "@/lib/site";

// ════════════════════════════════════════════════════════════════════════
// ENTWURF 2 — „KLARE KANTE"
// ════════════════════════════════════════════════════════════════════════
// Leitsatz: So aufgeräumt wie die Hauptseite von PöhlsDigital, aber mit
// eigener Handschrift – ruhig, hell, in Karten, ohne Schnörkel.
//
// WAS VOM HAUSSTIL BLEIBT (der „clean" Look):
//   • helle Seite, Inhalte in Karten mit feinem Rahmen
//   • Abschnitte im Wechsel: weiß und zart getönt
//   • kleine Marke („eyebrow") über jeder Überschrift
//   • Symbolfelder vor den Überschriften der Karten
//   • weiche, leicht in der Akzentfarbe getönte Schatten
//
// WAS ANDERS IST (damit die Seite nicht wie eine Kopie wirkt):
//   Schrift   Mona Sans statt Plus Jakarta Sans.
//   Farbe     tiefes Petrolblau statt Indigo (passt zur Ostsee).
//   Rundung   spürbar weniger: Karten 12 px, Symbolfelder 8 px,
//             Knöpfe 10 px – keine Pillen.
//   Anordnung kein Vierer-Raster: die Leistungen sitzen versetzt
//             (breit/schmal, dann schmal/breit), der Ablauf steht als
//             vier Zeilen in EINER Karte, der Standort in einer
//             geteilten Karte.
//   Hero      linksbündig statt mittig, mit einer kleinen Infokarte
//             rechts daneben; Punktraster statt Linienraster.
//
// FARBE TAUSCHEN: die Werte unten.
export const metadata: Metadata = {
  title: "Entwurf 2 · Klare Kante",
  description:
    "Entwurf 2 für ostseedesign.de: aufgeräumt und hell, Petrolblau als Akzent, Inhalte in Karten.",
};

const TEXT = "#15202b";
const MUTED = "#5a6673";
const BORDER = "#e2e7ec";
const ACCENT = "#17566b"; // tiefes Petrolblau
const ACCENT_DARK = "#0f3d4d";
const ACCENT_LIGHT = "#e5eef2";
const BG_ALT = "#f5f8f9";
const SHADOW_SM = "0 2px 10px rgba(23, 86, 107, 0.08)";
const SHADOW = "0 16px 36px rgba(23, 86, 107, 0.14)";

const kurz: Record<string, string> = {
  textilveredelung:
    "Ihr Logo auf Arbeitskleidung, Poloshirts oder Trikots. Gestickt oder gedruckt – je nachdem, was länger halten muss.",
  werbetechnik:
    "Fahrzeuge, Schilder, Schaufenster und Banner – vom Aufkleber bis zur Vollfolierung.",
  drucksachen: "Visitenkarten, Flyer, Briefpapier und Stempel, passend zum Rest.",
  textilshop:
    "Kleidung in Ruhe aussuchen und auf Wunsch direkt bei uns veredeln lassen.",
};

const ablauf = [
  ["Reden", "Sie sagen, was Sie brauchen. Wir sagen, was es kostet."],
  ["Entwurf", "Sie sehen vorab, wie es auf Shirt, Schild oder Fahrzeug aussieht."],
  ["Ändern", "Korrekturen sind eingerechnet – so lange, bis es passt."],
  ["Fertigen", "Gestickt, bedruckt oder foliert in unserer Werkstatt."],
];

// Breite der Leistungskarten: versetzt statt vier gleiche nebeneinander.
const breiten = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
];

const Symbole: Record<string, React.ReactNode> = {
  textilveredelung: (
    <path d="M8 4l4 2 4-2 4 3-2.5 3L16 9v11H8V9l-1.5 1L4 7z" strokeLinejoin="round" />
  ),
  werbetechnik: (
    <>
      <path d="M3 16V9h11l4 3h3v4h-2" strokeLinejoin="round" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </>
  ),
  drucksachen: (
    <>
      <rect x="4" y="13" width="16" height="7" rx="1.5" />
      <path d="M7 13V4h10v9M8 17h8" strokeLinecap="round" />
    </>
  ),
  textilshop: (
    <>
      <path d="M5 8h14l-1 12H6L5 8z" strokeLinejoin="round" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
    </>
  ),
};

function Marke({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-[0.8rem] font-semibold uppercase tracking-[0.12em]"
      style={{ color: ACCENT }}
    >
      {children}
    </span>
  );
}

export default function Entwurf2Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "html,body{background:#ffffff;}" }} />
      <VariantBar current={2} />

      <div className="min-h-screen bg-white font-mona antialiased" style={{ color: TEXT }}>
        {/* ── Kopfzeile ──────────────────────────────────────────────── */}
        <header
          className="sticky top-0 z-50 border-b bg-white"
          style={{ borderColor: BORDER }}
        >
          <div className="mx-auto flex w-full max-w-[1180px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4">
            {/* Nur der Schriftzug – kein Logo-Kästchen. */}
            <Link
              href="/entwurf-2"
              className="text-[1.3rem] font-extrabold tracking-[-0.02em]"
            >
              ostseedesign
            </Link>

            <nav className="flex flex-wrap items-center gap-x-7 gap-y-2 text-[0.92rem] font-medium">
              <a href="#leistungen" className="hover:opacity-70">
                Leistungen
              </a>
              <a href="#ablauf" className="hover:opacity-70">
                Ablauf
              </a>
              <a href="#standort" className="hover:opacity-70">
                Standort
              </a>
              <a
                href={textilShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70"
              >
                Textilshop
              </a>
              <a
                href="#kontakt"
                className="rounded-[10px] px-5 py-2.5 text-[0.9rem] font-semibold text-white transition-colors duration-200"
                style={{ backgroundColor: ACCENT }}
              >
                Projekt anfragen
              </a>
            </nav>
          </div>
        </header>

        <main id="hauptinhalt">
          {/* ── Hero: linksbündig, Infokarte rechts ──────────────────── */}
          <section className="relative overflow-hidden border-b" style={{ borderColor: BORDER }}>
            {/* Punktraster statt Linienraster. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(23,86,107,0.16) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.25) 65%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.25) 65%, rgba(0,0,0,0) 100%)",
              }}
            />

            <div className="relative mx-auto grid w-full max-w-[1180px] gap-10 px-6 pb-20 pt-20 lg:grid-cols-12 lg:items-center lg:pb-24 lg:pt-24">
              <div className="lg:col-span-7">
                <Marke>Werbung und Textilien · {company.city}</Marke>
                <h1 className="mt-5 max-w-[16ch] text-[clamp(2.3rem,5.2vw,3.9rem)] font-extrabold leading-[1.08] tracking-[-0.025em]">
                  Ihr Logo. Unsere Werkstatt.
                </h1>
                <p className="mt-6 max-w-[48ch] text-[1.1rem] leading-relaxed" style={{ color: MUTED }}>
                  Wir besticken und bedrucken Kleidung, beschriften Fahrzeuge und
                  machen Schilder – seit über {company.yearsExperience} Jahren in{" "}
                  {company.city}.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a
                    href="#kontakt"
                    className="rounded-[10px] px-6 py-3.5 text-[1rem] font-semibold text-white transition-colors duration-200"
                    style={{ backgroundColor: ACCENT }}
                  >
                    Kontakt aufnehmen
                  </a>
                  <a
                    href="#leistungen"
                    className="rounded-[10px] border bg-white px-6 py-3.5 text-[1rem] font-semibold"
                    style={{ borderColor: BORDER, boxShadow: SHADOW_SM }}
                  >
                    Unsere Leistungen
                  </a>
                </div>
              </div>

              {/* Kleine Infokarte – ersetzt die mittige Anordnung. */}
              <aside
                className="rounded-[12px] border bg-white p-7 lg:col-span-4 lg:col-start-9"
                style={{ borderColor: BORDER, boxShadow: SHADOW_SM }}
              >
                <Marke>Direkt erreichbar</Marke>
                <a
                  href={`tel:${company.phoneHref}`}
                  className="mt-4 block text-[1.6rem] font-extrabold tracking-[-0.02em]"
                >
                  {company.phoneDisplay}
                </a>
                <p className="mt-4 text-[0.95rem] leading-relaxed" style={{ color: MUTED }}>
                  {company.street}
                  <br />
                  {company.zip} {company.city}
                </p>
                <dl className="mt-5 border-t pt-4 text-[0.92rem]" style={{ borderColor: BORDER }}>
                  {openingHours.slice(0, 2).map((row) => (
                    <div key={row.days} className="flex justify-between gap-4 py-1">
                      <dt style={{ color: MUTED }}>{row.days.split(",")[0]}</dt>
                      <dd className="whitespace-nowrap font-semibold">{row.time}</dd>
                    </div>
                  ))}
                </dl>
              </aside>
            </div>
          </section>

          {/* ── Leistungen: versetzte Karten ─────────────────────────── */}
          <section id="leistungen" className="scroll-mt-20 px-6 py-20" style={{ backgroundColor: BG_ALT }}>
            <div className="mx-auto w-full max-w-[1180px]">
              <div className="mb-10 max-w-[620px]">
                <Marke>Unsere Leistungen</Marke>
                <h2 className="mt-3 text-[2.1rem] font-extrabold leading-[1.18] tracking-[-0.02em]">
                  Vier Bereiche, eine Werkstatt
                </h2>
              </div>

              <div className="grid gap-5 lg:grid-cols-12">
                {services.map((service, i) => {
                  const Karte = service.external ? "a" : "article";
                  return (
                    <Karte
                      key={service.id}
                      {...(service.external
                        ? {
                            href: service.external,
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : {})}
                      className={`group flex gap-5 rounded-[12px] border bg-white p-7 transition-shadow duration-200 hover:shadow-[0_16px_36px_rgba(23,86,107,0.14)] sm:p-8 ${breiten[i]}`}
                      style={{ borderColor: BORDER }}
                    >
                      <span
                        className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[8px]"
                        style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
                        aria-hidden="true"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          className="h-6 w-6"
                        >
                          {Symbole[service.id]}
                        </svg>
                      </span>

                      <div>
                        <h3 className="text-[1.35rem] font-extrabold leading-[1.2] tracking-[-0.01em]">
                          {service.title}
                        </h3>
                        <p className="mt-2.5 text-[1rem] leading-relaxed" style={{ color: MUTED }}>
                          {kurz[service.id]}
                        </p>
                        {service.external && (
                          <span
                            className="mt-4 inline-block text-[0.95rem] font-semibold"
                            style={{ color: ACCENT }}
                          >
                            Zum Shop →
                          </span>
                        )}
                      </div>
                    </Karte>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── Ablauf: vier Zeilen in EINER Karte ───────────────────── */}
          <section id="ablauf" className="scroll-mt-20 px-6 py-20">
            <div className="mx-auto w-full max-w-[1180px]">
              <div className="mb-10 max-w-[620px]">
                <Marke>So läuft das</Marke>
                <h2 className="mt-3 text-[2.1rem] font-extrabold leading-[1.18] tracking-[-0.02em]">
                  Ihr Weg zur fertigen Arbeit
                </h2>
              </div>

              <ol
                className="overflow-hidden rounded-[12px] border bg-white"
                style={{ borderColor: BORDER }}
              >
                {ablauf.map(([titel, satz], i) => (
                  <li
                    key={titel}
                    className="grid items-start gap-x-5 gap-y-2 p-6 sm:grid-cols-[3rem_12rem_1fr] sm:p-7"
                    style={{ borderTop: i === 0 ? "none" : `1px solid ${BORDER}` }}
                  >
                    <span
                      className="flex h-[38px] w-[38px] items-center justify-center rounded-[8px] text-[1rem] font-extrabold"
                      style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
                    >
                      {i + 1}
                    </span>
                    <h3 className="self-center text-[1.2rem] font-extrabold tracking-[-0.01em]">
                      {titel}
                    </h3>
                    <p
                      className="self-center text-[1rem] leading-relaxed"
                      style={{ color: MUTED }}
                    >
                      {satz}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* ── Standort: eine geteilte Karte ────────────────────────── */}
          <section id="standort" className="scroll-mt-20 px-6 py-20" style={{ backgroundColor: BG_ALT }}>
            <div className="mx-auto w-full max-w-[1180px]">
              <div className="mb-10 max-w-[620px]">
                <Marke>Standort</Marke>
                <h2 className="mt-3 text-[2.1rem] font-extrabold leading-[1.18] tracking-[-0.02em]">
                  Sie finden uns am {company.street}
                </h2>
              </div>

              <div
                className="grid overflow-hidden rounded-[12px] border bg-white lg:grid-cols-2"
                style={{ borderColor: BORDER }}
              >
                <div className="p-8 sm:p-10">
                  <h3 className="text-[1.35rem] font-extrabold tracking-[-0.01em]">
                    Werkstatt &amp; Laden
                  </h3>
                  <p className="mt-4 text-[1.05rem] leading-relaxed" style={{ color: MUTED }}>
                    {company.street}
                    <br />
                    {company.zip} {company.city}
                  </p>
                  <p className="mt-4 text-[1rem] leading-relaxed" style={{ color: MUTED }}>
                    Parken direkt vor dem Haus. Rufen Sie am besten kurz an,
                    bevor Sie herkommen.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={`tel:${company.phoneHref}`}
                      className="rounded-[10px] px-5 py-3 text-[0.95rem] font-semibold text-white"
                      style={{ backgroundColor: ACCENT }}
                    >
                      {company.phoneDisplay}
                    </a>
                    <a
                      href={`mailto:${company.email}`}
                      className="rounded-[10px] border bg-white px-5 py-3 text-[0.95rem] font-semibold"
                      style={{ borderColor: BORDER }}
                    >
                      E-Mail
                    </a>
                  </div>
                </div>

                <div
                  className="border-t p-8 sm:p-10 lg:border-l lg:border-t-0"
                  style={{ borderColor: BORDER, backgroundColor: "#fbfdfd" }}
                >
                  <h3 className="text-[1.35rem] font-extrabold tracking-[-0.01em]">
                    Öffnungszeiten
                  </h3>
                  <dl className="mt-5">
                    {openingHours.map((row, i) => (
                      <div
                        key={row.days}
                        className="flex flex-wrap items-baseline justify-between gap-4 py-3.5"
                        style={{ borderTop: i === 0 ? "none" : `1px solid ${BORDER}` }}
                      >
                        <dt className="text-[1rem]" style={{ color: MUTED }}>
                          {row.days}
                        </dt>
                        <dd className="whitespace-nowrap text-[1rem] font-semibold">
                          {row.time}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-5 text-[0.95rem]" style={{ color: MUTED }}>
                    Telefax {company.faxDisplay}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Kontakt: Farbfläche, linksbündig ─────────────────────── */}
          <section id="kontakt" className="scroll-mt-20 px-6 py-20">
            <div
              className="mx-auto grid w-full max-w-[1180px] gap-8 rounded-[16px] px-8 py-14 sm:px-12 lg:grid-cols-12 lg:items-end"
              style={{ backgroundColor: ACCENT, boxShadow: SHADOW }}
            >
              <div className="lg:col-span-7">
                <span className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-white/60">
                  Kontakt
                </span>
                <h2 className="mt-4 max-w-[20ch] text-[clamp(1.8rem,3.6vw,2.6rem)] font-extrabold leading-[1.14] tracking-[-0.02em] text-white">
                  Sprechen wir über Ihr Projekt
                </h2>
                <p className="mt-5 max-w-[46ch] text-[1.05rem] leading-relaxed text-white/80">
                  Ein Anruf reicht meistens schon. Sagen Sie kurz, worum es geht
                  – den Rest klären wir zusammen.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
                <a
                  href={`tel:${company.phoneHref}`}
                  className="rounded-[10px] bg-white px-6 py-3.5 text-[1rem] font-semibold"
                  style={{ color: ACCENT_DARK }}
                >
                  {company.phoneDisplay}
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="rounded-[10px] border border-white/50 px-6 py-3.5 text-[1rem] font-semibold text-white"
                >
                  E-Mail schreiben
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* ── Fußzeile ───────────────────────────────────────────────── */}
        <footer className="border-t px-6 py-8" style={{ borderColor: BORDER }}>
          <div
            className="mx-auto flex w-full max-w-[1180px] flex-wrap items-center justify-between gap-x-10 gap-y-3 text-[0.9rem]"
            style={{ color: MUTED }}
          >
            <p>
              © 2026 {company.fullName} · {company.street}, {company.zip}{" "}
              {company.city}
            </p>
            <nav className="flex flex-wrap items-center gap-x-7 gap-y-2">
              <Link href="/impressum" className="hover:opacity-70">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:opacity-70">
                Datenschutz
              </Link>
              <a
                href={textilShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70"
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
