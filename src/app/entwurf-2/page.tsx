import type { Metadata } from "next";
import Link from "next/link";
import VariantBar from "@/components/layout/VariantBar";
import { company, openingHours, processSteps, services, textilShopUrl } from "@/lib/site";

// ════════════════════════════════════════════════════════════════════════
// ENTWURF 2 — „VITRINE"
// ════════════════════════════════════════════════════════════════════════
// Leitsatz: Die Seite soll sich anfühlen wie ein helles Schaufenster am
// Vormittag – viel Tageslicht, wenig drin, und das Wenige liegt gut da.
//
// Entscheidungen (bewusst anders als Entwurf 1):
//   Schrift      Fraunces (Serife, weich, eigenwillig) für Überschriften,
//                Archivo für den Text. Keine schmale Grotesk.
//   Farbe        helles, leicht kühles Grauweiß als Grund, fast schwarze
//                Schrift. Weiterhin ohne Buntfarbe, damit alle Entwürfe
//                vergleichbar bleiben.
//   Form         keine Rahmen um Texte; Flächen trennen, nicht Linien.
//                Ecken leicht gerundet (4 px) – hier begründet: die Kanten
//                sollen weich wirken, nicht geschnitten.
//   Raster       zweigeteilt, Text und Bild stehen sich gegenüber und
//                tauschen abschnittsweise die Seite.
//   Zählung      römische Ziffern (I–IV) statt 01–04.
//   Bewegung     fast keine. Nur die Bilder heben sich beim Überfahren.
//   Besonderheit der dunkle Kontaktblock am Ende: die einzige geschlossene
//                Fläche der Seite, wie ein Schild im hellen Raum.
//
// Die Texte sind absichtlich dieselben wie in Entwurf 1 – verglichen werden
// soll die Gestaltung, nicht der Inhalt.
export const metadata: Metadata = {
  title: "Entwurf 2 · Vitrine",
  description:
    "Entwurf 2 für ostseedesign.de: helles Grauweiß, Serifenschrift, große Bildflächen.",
};

const roman = ["I", "II", "III", "IV"];

// Bildregie-Notizen – was auf das jeweilige Foto soll.
const notes: Record<string, string> = {
  textilveredelung: "Stickmaschine, Nahaufnahme vom Garn",
  werbetechnik: "Frisch beschrifteter Transporter",
  drucksachen: "Visitenkarten auf dem Werkstatttisch",
  textilshop: "Stapel veredelter Arbeitskleidung",
};

// Platzhalterfläche: dunkles Feld mit feiner Schraffur und Bildunterschrift.
function Plate({
  note,
  className = "",
}: {
  note: string;
  className?: string;
}) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-[4px] bg-[#e7e5df] ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(-45deg, rgba(22,22,20,0.055) 0 1px, transparent 1px 16px)",
      }}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 40%, rgba(22,22,20,0.07) 0%, rgba(22,22,20,0) 100%)",
        }}
      />
      <figcaption className="absolute bottom-0 left-0 p-5 text-[0.68rem] uppercase tracking-[0.2em] text-[#86827b]">
        {note}
      </figcaption>
    </figure>
  );
}

export default function Entwurf2Page() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: "html,body{background:#f6f5f2;}",
        }}
      />
      <VariantBar current={2} />

      <div className="min-h-screen bg-[#f6f5f2] font-archivo text-[#161614] antialiased">
        {/* ── Kopfzeile ───────────────────────────────────────────────
            Nicht klebend, keine Leiste: Sie gehört zum Bild und scrollt mit. */}
        <header className="mx-auto w-full max-w-[1400px] px-6 pt-8 sm:px-10 lg:px-16">
          <div className="flex items-center justify-between gap-6">
            <Link href="/entwurf-2" className="font-fraunces text-[1.5rem] lowercase">
              ostseedesign
            </Link>
            <nav className="hidden items-center gap-10 text-[0.72rem] uppercase tracking-[0.22em] text-[#86827b] lg:flex">
              <a href="#leistungen" className="transition-colors hover:text-[#161614]">
                Leistungen
              </a>
              <a href="#ablauf" className="transition-colors hover:text-[#161614]">
                Ablauf
              </a>
              <a href="#standort" className="transition-colors hover:text-[#161614]">
                Standort
              </a>
              <a
                href={textilShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#161614]"
              >
                Textilshop
              </a>
            </nav>
            <a
              href={`tel:${company.phoneHref}`}
              className="font-fraunces text-[1.05rem] text-[#161614] sm:text-[1.2rem]"
            >
              {company.phoneDisplay}
            </a>
          </div>
          {/* Auf dem Handy klappt die Navigation ohne Programmcode auf
              (natives <details>) – ein Baustein weniger, der kaputtgehen kann. */}
          <details className="mt-6 border-t border-[#161614]/15 pt-4 lg:hidden">
            <summary className="cursor-pointer list-none text-[0.72rem] uppercase tracking-[0.22em] text-[#86827b]">
              Übersicht
            </summary>
            <nav className="mt-4 flex flex-col gap-3 text-[0.95rem]">
              <a href="#leistungen">Leistungen</a>
              <a href="#ablauf">Ablauf</a>
              <a href="#standort">Standort</a>
              <a href={textilShopUrl} target="_blank" rel="noopener noreferrer">
                Textilshop
              </a>
            </nav>
          </details>
        </header>

        <main id="hauptinhalt">
          {/* ── Auftakt ──────────────────────────────────────────────
              Text links, Bild rechts bis an den Rand. */}
          <section className="mx-auto grid w-full max-w-[1400px] items-center gap-12 px-6 pb-20 pt-16 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:pb-32 lg:pt-24">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[#86827b]">
                {company.city} · seit über {company.yearsExperience} Jahren
              </p>
              <h1
                className="mt-7 font-fraunces text-[clamp(2.6rem,6.4vw,4.6rem)] font-light leading-[1.04]"
                style={{ fontVariationSettings: '"SOFT" 40, "WONK" 1, "opsz" 120' }}
              >
                Ihr Logo aufs Shirt, aufs Auto oder an die Wand.
              </h1>
              <p className="mt-8 max-w-[34rem] text-[1.05rem] leading-relaxed text-[#4f4c47]">
                Wir besticken und bedrucken Kleidung, beschriften Fahrzeuge und
                machen Schilder. Alles in einer Werkstatt.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-8">
                <a
                  href="#kontakt"
                  className="rounded-[4px] bg-[#161614] px-7 py-3.5 text-[0.9rem] font-semibold text-[#f6f5f2] transition-opacity hover:opacity-85"
                >
                  Projekt besprechen
                </a>
                <a
                  href={`tel:${company.phoneHref}`}
                  className="text-[0.9rem] uppercase tracking-[0.2em] text-[#86827b] underline underline-offset-8 transition-colors hover:text-[#161614]"
                >
                  Anrufen
                </a>
              </div>
            </div>

            <Plate
              note="Werkstatt bei Tageslicht"
              className="h-[46vh] min-h-[18rem] lg:h-[70vh]"
            />
          </section>

          {/* ── Leistungen ───────────────────────────────────────────
              Vier große Tafeln untereinander, abwechselnd Bild links und
              rechts. Jede Tafel ist so hoch, dass immer nur eine wirkt. */}
          <section id="leistungen" className="border-t border-[#161614]/12">
            <div className="mx-auto w-full max-w-[1400px] px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[#86827b]">
                Leistungen
              </p>
              <h2 className="mt-5 max-w-[26rem] font-fraunces text-[clamp(1.9rem,4vw,3rem)] font-light leading-tight">
                Vier Bereiche, eine Werkstatt
              </h2>
            </div>

            {services.map((service, i) => {
              const linksherum = i % 2 === 1;
              return (
                <article
                  key={service.id}
                  className="border-t border-[#161614]/12"
                >
                  <div className="mx-auto grid w-full max-w-[1400px] items-center gap-10 px-6 py-12 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:px-16 lg:py-20">
                    <Plate
                      note={notes[service.id]}
                      className={`h-[32vh] min-h-[14rem] lg:h-[52vh] ${
                        linksherum ? "lg:order-2" : ""
                      }`}
                    />
                    <div className={linksherum ? "lg:order-1" : ""}>
                      <p className="font-fraunces text-[1.1rem] text-[#86827b]">
                        {roman[i]}
                      </p>
                      <h3 className="mt-4 font-fraunces text-[clamp(1.8rem,4.2vw,3.2rem)] font-light leading-tight">
                        {service.title}
                      </h3>
                      <p className="mt-5 max-w-[32rem] leading-relaxed text-[#4f4c47]">
                        {service.teaser}
                      </p>
                      <ul className="mt-7 space-y-2.5 text-[0.95rem] text-[#86827b]">
                        {service.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      {service.external && (
                        <a
                          href={service.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-7 inline-block text-[0.8rem] uppercase tracking-[0.2em] underline underline-offset-8"
                        >
                          Zum Shop
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </section>

          {/* ── Ablauf ───────────────────────────────────────────────
              Vier Spalten nebeneinander, nur durch feine Linien getrennt.
              Bewusst ohne Scroll-Kunststück: ruhig und auf einen Blick. */}
          <section id="ablauf" className="border-t border-[#161614]/12">
            <div className="mx-auto w-full max-w-[1400px] px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[#86827b]">
                Ablauf
              </p>
              <h2 className="mt-5 max-w-[30rem] font-fraunces text-[clamp(1.9rem,4vw,3rem)] font-light leading-tight">
                Vom ersten Anruf bis zur fertigen Arbeit
              </h2>

              <div className="mt-14 grid gap-px bg-[#161614]/12 sm:grid-cols-2 lg:grid-cols-4">
                {processSteps.map((step, i) => (
                  <div key={step.id} className="bg-[#f6f5f2] p-7 lg:p-8">
                    <p className="font-fraunces text-[1.6rem] font-light text-[#86827b]">
                      {roman[i]}
                    </p>
                    <h3 className="mt-5 font-fraunces text-[1.35rem] font-normal leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-[0.92rem] leading-relaxed text-[#4f4c47]">
                      {step.body}
                    </p>
                    <ul className="mt-5 space-y-2 text-[0.85rem] text-[#86827b]">
                      {step.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Standort ─────────────────────────────────────────────
              Hier zentriert – im Gegensatz zu Entwurf 1. Die Anschrift ist
              der ruhige Mittelpunkt des Abschnitts. */}
          <section id="standort" className="border-t border-[#161614]/12">
            <div className="mx-auto w-full max-w-[1400px] px-6 py-20 text-center sm:px-10 lg:px-16 lg:py-28">
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[#86827b]">
                Standort
              </p>
              <p className="mx-auto mt-8 max-w-[22rem] font-fraunces text-[clamp(2rem,5vw,3.4rem)] font-light leading-[1.15]">
                {company.street}
                <br />
                {company.zip} {company.city}
              </p>
              <p className="mx-auto mt-7 max-w-[32rem] leading-relaxed text-[#4f4c47]">
                Rufen Sie am besten kurz an, bevor Sie herkommen – dann hat auch
                jemand Zeit für Sie. Parken direkt vor dem Haus.
              </p>

              <dl className="mx-auto mt-14 grid max-w-[44rem] gap-px bg-[#161614]/12 sm:grid-cols-3">
                {openingHours.map((row) => (
                  <div key={row.days} className="bg-[#f6f5f2] px-5 py-7">
                    <dt className="text-[0.7rem] uppercase tracking-[0.18em] text-[#86827b]">
                      {row.days}
                    </dt>
                    <dd className="mt-3 whitespace-nowrap font-fraunces text-[1.1rem]">
                      {row.time}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          {/* ── Kontakt ──────────────────────────────────────────────
              Die einzige helle Fläche der Seite. */}
          <section id="kontakt" className="px-6 pb-16 sm:px-10 lg:px-16 lg:pb-24">
            <div className="mx-auto grid w-full max-w-[1400px] items-end gap-10 rounded-[4px] bg-[#161614] p-8 text-[#f6f5f2] sm:p-14 lg:grid-cols-[1.5fr_1fr] lg:p-20">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[#f6f5f2]/55">
                  Kontakt
                </p>
                <h2 className="mt-6 font-fraunces text-[clamp(2rem,5vw,3.4rem)] font-light leading-tight">
                  Was haben Sie vor?
                </h2>
                <p className="mt-5 max-w-[30rem] leading-relaxed text-[#f6f5f2]/70">
                  Ein Anruf reicht meistens schon. Sagen Sie kurz, worum es geht
                  – den Rest klären wir zusammen.
                </p>
                <a
                  href={`tel:${company.phoneHref}`}
                  className="mt-8 inline-block font-fraunces text-[clamp(1.8rem,4.5vw,3rem)] font-normal"
                >
                  {company.phoneDisplay}
                </a>
                <br />
                <a
                  href={`mailto:${company.email}`}
                  className="mt-4 inline-block text-[0.95rem] underline underline-offset-8"
                >
                  {company.email}
                </a>
              </div>

              <div className="flex items-start gap-5">
                <div
                  className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[4px] border border-dashed border-[#f6f5f2]/40 text-center text-[0.6rem] uppercase tracking-[0.18em] text-[#f6f5f2]/55"
                  role="img"
                  aria-label="Platzhalter für QR-Code"
                >
                  QR-Code
                </div>
                <p className="text-[0.85rem] leading-relaxed text-[#f6f5f2]/65">
                  Scannen und direkt Kontakt aufnehmen.
                  <span className="mt-1 block text-[#f6f5f2]/45">
                    (Code wird hier eingesetzt)
                  </span>
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* ── Fußzeile ───────────────────────────────────────────────── */}
        <footer className="border-t border-[#161614]/12">
          <div className="mx-auto flex w-full max-w-[1400px] flex-wrap items-center justify-between gap-x-10 gap-y-4 px-6 py-10 text-[0.8rem] text-[#86827b] sm:px-10 lg:px-16">
            <p>
              © 2026 {company.fullName} · {company.street}, {company.zip}{" "}
              {company.city}
            </p>
            <nav className="flex flex-wrap items-center gap-x-8 gap-y-2">
              <Link href="/impressum" className="hover:text-[#161614]">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-[#161614]">
                Datenschutz
              </Link>
              <a
                href={textilShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#161614]"
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
