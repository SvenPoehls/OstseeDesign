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
// DER KOPFBEREICH ist hier anders gebaut als in Entwurf 1 und 3:
//   Entwurf 1: Schrift oben, Bild als Band DARUNTER.
//   Entwurf 3: Schrift oben, Farbkacheln DARUNTER.
//   Entwurf 2: Bild steht RECHTS und läuft bis an den Bildschirmrand,
//              die Schlagzeile liegt auf einem hellen Streifen DARÜBER
//              und schiebt sich über die Bildkante.
// Darunter folgt sofort ein schmaler Streifen mit drei Angaben – kein
// weiteres Bild, kein Kachelraster.
//
// Weitere Merkmale:
//   • Navigation oben, über die volle Breite, mit feiner Linie darunter.
//   • WENIG TEXT: jeder Bereich und jeder Schritt in einer Zeile.
//   • EINE Schrift (Archivo) in zwei Stärken, eher klein gesetzt.
//   • Farbe sparsam: ein gedecktes Grün, sonst Weiß und Tinte.
//   • Nur ein Bild auf der ganzen Seite.
//
// FARBE TAUSCHEN: die Werte unten.
export const metadata: Metadata = {
  title: "Entwurf 2 · Weißraum",
  description:
    "Entwurf 2 für ostseedesign.de: Bild rechts, Schrift darüber, sehr ruhig und aufgeräumt.",
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

// Der schmale Streifen unter dem Kopfbereich.
const streifen = [
  `Seit über ${company.yearsExperience} Jahren`,
  "Eigene Stickerei",
  "Eigene Folierung",
  "Alles aus einer Hand",
];

export default function Entwurf2Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `html,body{background:${GRUND};}` }} />
      <VariantBar current={2} />

      <div
        className="min-h-screen overflow-x-hidden font-archivo antialiased"
        style={{ backgroundColor: GRUND, color: TINTE }}
      >
        {/* ── Navigation: oben, volle Breite, feine Linie darunter ───── */}
        <header className="border-b" style={{ borderColor: LINIE }}>
          <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 py-5 sm:px-10">
            <Link href="/entwurf-2" className="text-[1.05rem] font-medium tracking-[-0.01em]">
              ostseedesign
            </Link>
            <nav
              className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[0.95rem]"
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
              <a
                href={`tel:${company.phoneHref}`}
                className="font-medium"
                style={{ color: GRUEN }}
              >
                {company.phoneDisplay}
              </a>
            </nav>
          </div>
        </header>

        <main id="hauptinhalt">
          {/* ══ Kopfbereich ══════════════════════════════════════════════
              Das Bild sitzt rechts und läuft bis an den Bildschirmrand.
              Der helle Streifen mit der Schlagzeile liegt darüber und
              schiebt sich über die linke Bildkante. */}
          <section className="mx-auto w-full max-w-[1200px] px-6 sm:px-10">
            <div className="relative grid lg:grid-cols-12 lg:items-center">
              {/* Bild – rechts, randabfallend */}
              <div
                className="-mx-6 h-[34vh] min-h-[14rem] sm:-mx-10 lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:mx-0 lg:mr-[calc(50%-50vw)] lg:h-[66vh]"
                style={{
                  backgroundColor: "#e9e8e3",
                  backgroundImage:
                    "repeating-linear-gradient(-45deg, rgba(26,27,25,0.04) 0 1px, transparent 1px 18px)",
                }}
                role="img"
                aria-label="Platzhalter: Blick in die Werkstatt"
              />

              {/* Schriftstreifen – ein weißer Streifen, der vom linken
                  Bildschirmrand kommt und über die Bildkante schiebt.
                  Weiß statt Grundton, damit die Kante sichtbar ist. */}
              <div
                className="relative z-10 -mx-6 -mt-12 px-6 py-10 sm:-mx-10 sm:-mt-16 sm:px-10 sm:py-12 lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:-mr-20 lg:ml-[calc(50%-50vw)] lg:mt-0 lg:py-16 lg:pl-[calc(50vw-50%)] lg:pr-20"
                style={{ backgroundColor: "#ffffff" }}
              >
                <p className="text-[0.82rem]" style={{ color: LEISE }}>
                  Werbung und Textilien · {company.city}
                </p>
                <h1 className="mt-5 max-w-[17ch] text-[clamp(1.9rem,4.4vw,3.2rem)] font-medium leading-[1.14] tracking-[-0.02em]">
                  Ihr Logo aufs Shirt, aufs Auto oder an die Wand.
                </h1>
                <p
                  className="mt-5 max-w-[46ch] text-[1.02rem] leading-relaxed"
                  style={{ color: LEISE }}
                >
                  Werkstatt in {company.city}, seit über{" "}
                  {company.yearsExperience} Jahren.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-[0.98rem]">
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
              </div>
            </div>
          </section>

          {/* ── Streifen: vier kurze Angaben, volle Breite ───────────── */}
          <div className="mt-14 border-y sm:mt-20" style={{ borderColor: LINIE }}>
            <ul className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center gap-x-10 gap-y-2 px-6 py-5 text-[0.92rem] sm:px-10">
              {streifen.map((eintrag, i) => (
                <li key={eintrag} className="flex items-center gap-10">
                  {i > 0 && (
                    <span aria-hidden="true" style={{ color: LINIE }}>
                      ·
                    </span>
                  )}
                  <span style={{ color: LEISE }}>{eintrag}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-10">
            {/* ── Leistungen: großes Zweier-Raster ──────────────────── */}
            <section id="leistungen" className="scroll-mt-12 pt-24 sm:pt-32">
              <p className="text-[0.82rem]" style={{ color: LEISE }}>
                01 · Leistungen
              </p>

              <ul className="mt-10 grid gap-x-16 gap-y-12 sm:grid-cols-2">
                {services.map((service) => {
                  const Zelle = service.external ? "a" : "div";
                  return (
                    <li key={service.id}>
                      <Zelle
                        {...(service.external
                          ? {
                              href: service.external,
                              target: "_blank",
                              rel: "noopener noreferrer",
                            }
                          : {})}
                        className="group block"
                      >
                        <h3 className="text-[clamp(1.5rem,3vw,2.1rem)] font-medium leading-tight tracking-[-0.02em]">
                          {service.title}
                          {service.external && (
                            <span className="ml-2 text-[0.9rem]" style={{ color: GRUEN }}>
                              ↗
                            </span>
                          )}
                        </h3>
                        {/* Linie wächst beim Überfahren – der einzige Effekt. */}
                        <span
                          aria-hidden="true"
                          className="mt-4 block h-px w-10 transition-all duration-300 group-hover:w-24"
                          style={{ backgroundColor: GRUEN }}
                        />
                        <p
                          className="mt-4 text-[0.98rem] leading-relaxed"
                          style={{ color: LEISE }}
                        >
                          {kurz[service.id]}
                        </p>
                      </Zelle>
                    </li>
                  );
                })}
              </ul>
            </section>

            {/* ── Ablauf: vier Zeilen untereinander ─────────────────── */}
            <section id="ablauf" className="scroll-mt-12 pt-24 sm:pt-32">
              <p className="text-[0.82rem]" style={{ color: LEISE }}>
                02 · Ablauf
              </p>

              <ol className="mt-10">
                {ablauf.map(([titel, satz], i) => (
                  <li
                    key={titel}
                    className="grid grid-cols-[2.5rem_1fr] items-baseline gap-x-6 gap-y-1.5 border-t py-6 sm:grid-cols-[3rem_11rem_1fr]"
                    style={{ borderColor: LINIE }}
                  >
                    <span className="text-[0.8rem]" style={{ color: GRUEN }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-[1.1rem] font-medium tracking-[-0.01em]">
                      {titel}
                    </h3>
                    <p
                      className="col-start-2 text-[0.98rem] leading-relaxed sm:col-start-3"
                      style={{ color: LEISE }}
                    >
                      {satz}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            {/* ── Standort ──────────────────────────────────────────── */}
            <section id="standort" className="scroll-mt-12 pt-24 sm:pt-32">
              <p className="text-[0.82rem]" style={{ color: LEISE }}>
                03 · Standort
              </p>

              <div className="mt-10 grid gap-12 sm:grid-cols-2">
                <div>
                  <p className="text-[clamp(1.4rem,3vw,1.9rem)] font-medium leading-snug tracking-[-0.01em]">
                    {company.street}
                    <br />
                    {company.zip} {company.city}
                  </p>
                  <p className="mt-5 text-[0.98rem]" style={{ color: LEISE }}>
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
          </div>

          {/* ── Kontakt: die eine ruhige Farbfläche ──────────────────── */}
          <section
            id="kontakt"
            className="mt-24 scroll-mt-12 sm:mt-32"
            style={{ backgroundColor: GRUEN }}
          >
            <div className="mx-auto w-full max-w-[1200px] px-6 py-20 sm:px-10 sm:py-24">
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
            </div>
          </section>
        </main>

        {/* ── Fußzeile ───────────────────────────────────────────────── */}
        <footer className="mx-auto w-full max-w-[1200px] px-6 pb-10 pt-8 sm:px-10">
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
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}
