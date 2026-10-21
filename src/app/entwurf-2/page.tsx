import type { Metadata } from "next";
import Link from "next/link";
import VariantBar from "@/components/layout/VariantBar";
import { company, openingHours, services, textilShopUrl } from "@/lib/site";

// ════════════════════════════════════════════════════════════════════════
// ENTWURF 2 — „HAUSSTIL"
// ════════════════════════════════════════════════════════════════════════
// Leitsatz: Sieht aus wie poehlsdigital.de – clean, hell, ein Indigo.
//
// Dieser Entwurf übernimmt bewusst die Gestaltungsmittel der Hauptseite
// von PöhlsDigital. Die Werte stammen 1:1 aus deren Stylesheet
// (css/style.css im Repo SvenPoehls/PlanB):
//
//   Schrift      Plus Jakarta Sans, 200–800, selbst gehostet.
//                Überschriften 800, eng gesetzt (-0.02em).
//                Kleine Marken („eyebrow") in JetBrains Mono, indigo.
//   Farben       Weiß · Hellgrau-Indigo-Verlauf für jeden zweiten
//                Abschnitt · Text #1c2029 · Nebentext #5b6270 ·
//                Rahmen #e3e6ec · Akzent Indigo #4f46e5
//   Rundung      Karten 22 px, Symbolfelder 14 px, Knöpfe ganz rund
//   Schatten     weich und leicht indigo getönt
//   Aufbau       Kopfzeile klebt oben (weiß, leicht durchscheinend),
//                Hero mittig mit feinem Rasterhintergrund, danach
//                Abschnitte im Wechsel Weiß / getönt, Inhalte in Karten.
//
// Anders als Entwurf 1 (kantig, zweifarbig) und Entwurf 3 (bunt, verspielt,
// vier Farben): hier eine einzige Akzentfarbe und durchgehend Karten.
export const metadata: Metadata = {
  title: "Entwurf 2 · Hausstil",
  description:
    "Entwurf 2 für ostseedesign.de: im Stil von poehlsdigital.de – hell, clean, Indigo als einzige Akzentfarbe.",
};

const TEXT = "#1c2029";
const MUTED = "#5b6270";
const BORDER = "#e3e6ec";
const ACCENT = "#4f46e5";
const ACCENT_LIGHT = "#edecfd";
const BG_ALT = "linear-gradient(135deg, #f8f9fc 0%, #eef0fb 55%, #f3eefc 100%)";
const SHADOW = "0 14px 34px rgba(79, 70, 229, 0.16)";
const SHADOW_SM = "0 2px 10px rgba(79, 70, 229, 0.1)";

// Kurzfassungen – eine Zeile je Bereich.
const kurz: Record<string, string> = {
  textilveredelung:
    "Ihr Logo auf Arbeitskleidung, Poloshirts oder Trikots. Gestickt oder gedruckt.",
  werbetechnik:
    "Fahrzeuge, Schilder, Schaufenster und Banner – vom Aufkleber bis zur Vollfolierung.",
  drucksachen:
    "Visitenkarten, Flyer, Briefpapier und Stempel, passend zum Rest.",
  textilshop:
    "Kleidung in Ruhe aussuchen und auf Wunsch direkt bei uns veredeln lassen.",
};

const ablauf = [
  ["Reden", "Sie sagen, was Sie brauchen. Wir sagen, was es kostet."],
  ["Entwurf", "Sie sehen vorab, wie es auf Shirt, Schild oder Fahrzeug aussieht."],
  ["Ändern", "Korrekturen sind eingerechnet – so lange, bis es passt."],
  ["Fertigen", "Gestickt, bedruckt oder foliert in unserer Werkstatt."],
];

// Symbole in der Linienstärke der Hauptseite (1,8).
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
  // „Eyebrow": kleine Marke über der Überschrift, in Mono und Indigo.
  return (
    <span className="font-mono text-[0.82rem] font-medium" style={{ color: ACCENT }}>
      {children}
    </span>
  );
}

export default function Entwurf2Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "html,body{background:#ffffff;}" }} />
      <VariantBar current={2} />

      <div className="min-h-screen bg-white font-jakarta antialiased" style={{ color: TEXT }}>
        {/* ── Kopfzeile: klebt oben, weiß mit leichtem Schleier ──────── */}
        <header
          className="sticky top-0 z-50 border-b backdrop-blur"
          style={{ borderColor: BORDER, backgroundColor: "rgba(255,255,255,0.9)" }}
        >
          <div className="mx-auto flex w-full max-w-[1180px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4">
            <Link href="/entwurf-2" className="flex items-center gap-2.5 text-[1.3rem] font-extrabold">
              <span
                className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] text-[0.95rem] font-extrabold text-white"
                style={{ backgroundColor: ACCENT }}
                aria-hidden="true"
              >
                od
              </span>
              Ostseedesign
            </Link>

            <nav className="flex flex-wrap items-center gap-x-7 gap-y-2 text-[0.9rem] font-medium">
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
                className="rounded-full px-5 py-2.5 text-[0.9rem] font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: ACCENT, boxShadow: SHADOW_SM }}
              >
                Projekt anfragen
              </a>
            </nav>
          </div>
        </header>

        <main id="hauptinhalt">
          {/* ── Hero: mittig, feines Raster im Hintergrund ───────────── */}
          <section className="relative overflow-hidden px-6 pb-28 pt-24 text-center sm:pb-36 sm:pt-28">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(79,70,229,0.11) 1px, transparent 1px), linear-gradient(to bottom, rgba(79,70,229,0.11) 1px, transparent 1px)",
                backgroundSize: "96px 96px",
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0) 100%)",
              }}
            />

            <div className="relative mx-auto flex max-w-[780px] flex-col items-center">
              <Marke>
                Werbung und Textilien · {company.city}
              </Marke>
              <h1 className="mt-5 text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
                Ihr Logo.
                <br />
                <span style={{ color: ACCENT }}>Unsere Werkstatt.</span>
              </h1>
              <p className="mt-6 max-w-[46ch] text-[1.15rem] leading-relaxed" style={{ color: MUTED }}>
                Wir besticken und bedrucken Kleidung, beschriften Fahrzeuge und
                machen Schilder – seit über {company.yearsExperience} Jahren in{" "}
                {company.city}.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#kontakt"
                  className="rounded-full px-7 py-3.5 text-[1rem] font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
                  style={{ backgroundColor: ACCENT, boxShadow: SHADOW_SM }}
                >
                  Kontakt
                </a>
                <a
                  href="#leistungen"
                  className="rounded-full border-2 bg-white px-7 py-3.5 text-[1rem] font-semibold transition-transform duration-200 hover:-translate-y-0.5"
                  style={{ borderColor: BORDER, boxShadow: SHADOW_SM }}
                >
                  Unsere Leistungen
                </a>
              </div>
            </div>
          </section>

          {/* ── Leistungen: Karten auf getöntem Grund ────────────────── */}
          <section id="leistungen" className="scroll-mt-20 px-6 py-20" style={{ background: BG_ALT }}>
            <div className="mx-auto w-full max-w-[1180px]">
              <div className="mx-auto mb-12 max-w-[640px] text-center">
                <Marke>Unsere Leistungen</Marke>
                <h2 className="mt-3 text-[2.25rem] font-bold leading-[1.2] tracking-[-0.01em]">
                  Vier Bereiche, eine Werkstatt
                </h2>
              </div>

              <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                {services.map((service) => {
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
                      className="group block rounded-[22px] border bg-white px-7 py-9 transition-all duration-200 hover:-translate-y-1"
                      style={{ borderColor: BORDER }}
                    >
                      <span
                        className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[14px]"
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
                      <h3 className="text-[1.5rem] font-bold leading-[1.2]">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-[1rem] leading-relaxed" style={{ color: MUTED }}>
                        {kurz[service.id]}
                      </p>
                      {service.external && (
                        <span
                          className="mt-5 inline-block text-[0.95rem] font-semibold"
                          style={{ color: ACCENT }}
                        >
                          Zum Shop →
                        </span>
                      )}
                    </Karte>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── Ablauf: vier Schritte, weißer Grund ──────────────────── */}
          <section id="ablauf" className="scroll-mt-20 px-6 py-20">
            <div className="mx-auto w-full max-w-[1180px]">
              <div className="mx-auto mb-12 max-w-[640px] text-center">
                <Marke>So läuft das</Marke>
                <h2 className="mt-3 text-[2.25rem] font-bold leading-[1.2] tracking-[-0.01em]">
                  Ihr Weg zur fertigen Arbeit in 4 Schritten
                </h2>
              </div>

              <ol className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                {ablauf.map(([titel, satz], i) => (
                  <li
                    key={titel}
                    className="rounded-[22px] border bg-white px-7 py-9"
                    style={{ borderColor: BORDER }}
                  >
                    <span
                      className="flex h-[52px] w-[52px] items-center justify-center rounded-[14px] text-[1.15rem] font-extrabold"
                      style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
                    >
                      {i + 1}
                    </span>
                    <h3 className="mt-6 text-[1.5rem] font-bold leading-[1.2]">{titel}</h3>
                    <p className="mt-3 text-[1rem] leading-relaxed" style={{ color: MUTED }}>
                      {satz}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* ── Standort: zwei Karten auf getöntem Grund ─────────────── */}
          <section id="standort" className="scroll-mt-20 px-6 py-20" style={{ background: BG_ALT }}>
            <div className="mx-auto w-full max-w-[1180px]">
              <div className="mx-auto mb-12 max-w-[640px] text-center">
                <Marke>Standort</Marke>
                <h2 className="mt-3 text-[2.25rem] font-bold leading-[1.2] tracking-[-0.01em]">
                  Sie finden uns am {company.street}
                </h2>
              </div>

              <div className="grid gap-7 lg:grid-cols-2">
                <div
                  className="rounded-[22px] border bg-white px-8 py-9"
                  style={{ borderColor: BORDER }}
                >
                  <h3 className="text-[1.5rem] font-bold leading-[1.2]">Werkstatt &amp; Laden</h3>
                  <p className="mt-4 text-[1.05rem] leading-relaxed" style={{ color: MUTED }}>
                    {company.street}
                    <br />
                    {company.zip} {company.city}
                  </p>
                  <p className="mt-5 text-[1rem] leading-relaxed" style={{ color: MUTED }}>
                    Parken direkt vor dem Haus. Rufen Sie am besten kurz an,
                    bevor Sie herkommen.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={`tel:${company.phoneHref}`}
                      className="rounded-full px-6 py-3 text-[0.95rem] font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
                      style={{ backgroundColor: ACCENT, boxShadow: SHADOW_SM }}
                    >
                      {company.phoneDisplay}
                    </a>
                    <a
                      href={`mailto:${company.email}`}
                      className="rounded-full border-2 bg-white px-6 py-3 text-[0.95rem] font-semibold transition-transform duration-200 hover:-translate-y-0.5"
                      style={{ borderColor: BORDER }}
                    >
                      E-Mail
                    </a>
                  </div>
                </div>

                <div
                  className="rounded-[22px] border bg-white px-8 py-9"
                  style={{ borderColor: BORDER }}
                >
                  <h3 className="text-[1.5rem] font-bold leading-[1.2]">Öffnungszeiten</h3>
                  <dl className="mt-5">
                    {openingHours.map((row, i) => (
                      <div
                        key={row.days}
                        className="flex flex-wrap items-baseline justify-between gap-4 py-3.5"
                        style={{
                          borderTop: i === 0 ? "none" : `1px solid ${BORDER}`,
                        }}
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

          {/* ── Kontakt: Karte in Indigo ─────────────────────────────── */}
          <section id="kontakt" className="scroll-mt-20 px-6 py-20">
            <div
              className="mx-auto w-full max-w-[1180px] rounded-[34px] px-8 py-16 text-center sm:px-14"
              style={{ backgroundColor: ACCENT, boxShadow: SHADOW }}
            >
              <span className="font-mono text-[0.82rem] font-medium text-white/70">
                Kontakt
              </span>
              <h2 className="mx-auto mt-4 max-w-[20ch] text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-[1.12] tracking-[-0.02em] text-white">
                Sprechen wir über Ihr Projekt
              </h2>
              <p className="mx-auto mt-5 max-w-[46ch] text-[1.1rem] leading-relaxed text-white/80">
                Ein Anruf reicht meistens schon. Sagen Sie kurz, worum es geht –
                den Rest klären wir zusammen.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`tel:${company.phoneHref}`}
                  className="rounded-full bg-white px-7 py-3.5 text-[1rem] font-semibold transition-transform duration-200 hover:-translate-y-0.5"
                  style={{ color: ACCENT }}
                >
                  {company.phoneDisplay}
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="rounded-full border-2 border-white/60 px-7 py-3.5 text-[1rem] font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {company.email}
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
