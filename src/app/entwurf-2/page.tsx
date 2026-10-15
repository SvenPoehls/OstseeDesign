import type { Metadata } from "next";
import Link from "next/link";
import VariantBar from "@/components/layout/VariantBar";
import { company, openingHours, processSteps, services, textilShopUrl } from "@/lib/site";

// ════════════════════════════════════════════════════════════════════════
// ENTWURF 2 — „ATELIER"
// ════════════════════════════════════════════════════════════════════════
// Leitsatz: Die Seite soll sich lesen wie eine Zeitschrift über Handwerk –
// Leinenpapier, Bildstrecken, Spalten und ein Artikel, der Luft hat.
//
// Was es NUR in diesem Entwurf gibt (damit er sich klar von 1 und 3 löst):
//   • Bildstrecke: ein breites Bild über die volle Seitenbreite
//   • Initial (großer Anfangsbuchstabe) im ersten Absatz
//   • Randnotizen seitlich neben dem Text, klein und kursiv
//   • ein Zitat auf grünem Band über die ganze Breite
//   • Ablauf in vier Zeitungsspalten
//   • Seitenzahlen am Fuß jedes Abschnitts („Seite 2 von 5")
//
// Entscheidungen:
//   Schrift   Fraunces (Serife) für alles Große, Archivo für den Text.
//   Farbe     Leinen als Grund, Tiefgrün als zweite Farbe. Hell und warm.
//   Form      RECHTECKE. Keine runden Ecken, keine Bögen, keine Kästen mit
//             Schatten – die Bilder sind einfach Bilder.
//   Raster    versetzte Spalten: nicht alles beginnt auf einer Höhe.
//   Bewegung  keine. Eine Zeitschrift bewegt sich auch nicht.
//
// Die Texte sind dieselben wie in den anderen Entwürfen – verglichen wird
// die Gestaltung, nicht der Inhalt.
export const metadata: Metadata = {
  title: "Entwurf 2 · Atelier",
  description:
    "Entwurf 2 für ostseedesign.de: Leinen und Tiefgrün, Bildstrecken, Spalten und Randnotizen wie in einer Zeitschrift.",
};

const LEINEN = "#efe7da";
const TINTE = "#1c1a16";
const GRUEN = "#2c4a3b";
const LEISE = "#6b6256";
const FLAECHE = "#e3d9c7";

const notes: Record<string, string> = {
  textilveredelung: "Stickmaschine, Nahaufnahme vom Garn",
  werbetechnik: "Frisch beschrifteter Transporter",
  drucksachen: "Visitenkarten auf dem Werkstatttisch",
  textilshop: "Stapel veredelter Arbeitskleidung",
};

// Bildfläche: schlichtes Rechteck mit Bildunterschrift darunter.
function Bild({
  note,
  className = "",
  caption = true,
}: {
  note: string;
  className?: string;
  caption?: boolean;
}) {
  return (
    <figure className={className}>
      <div
        className="h-full w-full"
        style={{
          backgroundColor: FLAECHE,
          backgroundImage:
            "repeating-linear-gradient(-45deg, rgba(28,26,22,0.05) 0 1px, transparent 1px 17px)",
        }}
      />
      {caption && (
        <figcaption className="mt-2.5 text-[0.78rem] italic" style={{ color: LEISE }}>
          {note}
        </figcaption>
      )}
    </figure>
  );
}

function Seitenzahl({ nr }: { nr: number }) {
  return (
    <p
      className="mt-14 border-t pt-4 text-center text-[0.72rem] uppercase tracking-[0.3em]"
      style={{ borderColor: "rgba(28,26,22,0.18)", color: LEISE }}
    >
      Seite {nr} von 5
    </p>
  );
}

export default function Entwurf2Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `html,body{background:${LEINEN};}` }} />
      <VariantBar current={2} />

      <div
        className="min-h-screen font-archivo antialiased"
        style={{ backgroundColor: LEINEN, color: TINTE }}
      >
        {/* ── Titelkopf wie auf einem Heftumschlag ────────────────────── */}
        <header className="mx-auto w-full max-w-[1180px] px-6 pt-8 sm:px-10">
          <div
            className="flex flex-wrap items-end justify-between gap-5 border-b pb-4"
            style={{ borderColor: TINTE }}
          >
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.3em]" style={{ color: GRUEN }}>
                Werkstatt-Heft · {company.city}
              </p>
              <Link
                href="/entwurf-2"
                className="mt-1.5 block font-fraunces text-[1.8rem] leading-none sm:text-[2.3rem]"
                style={{ fontVariationSettings: '"SOFT" 30, "WONK" 1' }}
              >
                ostseedesign
              </Link>
            </div>
            <nav className="flex flex-wrap items-center gap-x-7 gap-y-2 text-[0.8rem] uppercase tracking-[0.18em]">
              <a href="#leistungen" className="hover:italic">
                Leistungen
              </a>
              <a href="#ablauf" className="hover:italic">
                Ablauf
              </a>
              <a href="#standort" className="hover:italic">
                Standort
              </a>
              <a
                href={textilShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:italic"
              >
                Textilshop
              </a>
              <a
                href={`tel:${company.phoneHref}`}
                className="font-fraunces text-[1.1rem] normal-case tracking-normal"
                style={{ color: GRUEN }}
              >
                {company.phoneDisplay}
              </a>
            </nav>
          </div>
        </header>

        <main id="hauptinhalt">
          <div className="mx-auto w-full max-w-[1180px] px-6 sm:px-10">
          {/* ── Aufmacher: Text links, hochformatiges Bild rechts ────── */}
          <section className="grid gap-8 pt-12 lg:grid-cols-12 lg:gap-10 lg:pt-16">
            <div className="lg:col-span-7">
              <p className="text-[0.72rem] uppercase tracking-[0.3em]" style={{ color: GRUEN }}>
                {company.city} · {company.street}
              </p>
              <h1 className="mt-5 font-fraunces text-[clamp(2.4rem,5.6vw,4rem)] font-normal leading-[1.05]">
                Ihr Logo aufs Shirt, aufs Auto oder an die Wand.
              </h1>

              {/* Initial: der erste Buchstabe läuft über drei Zeilen. */}
              <p className="mt-7 max-w-[36rem] text-[1.02rem] leading-[1.7]">
                <span
                  className="float-left mr-3 mt-1 font-fraunces text-[3.8rem] leading-[0.78]"
                  style={{ color: GRUEN }}
                  aria-hidden="true"
                >
                  W
                </span>
                <span className="sr-only">W</span>
                ir besticken und bedrucken Kleidung, beschriften Fahrzeuge und
                machen Schilder. Alles in einer Werkstatt am Rosseer Weg, seit
                über {company.yearsExperience} Jahren – vom einzelnen Poloshirt
                bis zum Transporter, der morgens fertig vor der Tür steht.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-6">
                <a
                  href="#kontakt"
                  className="px-7 py-3.5 text-[0.85rem] uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-85"
                  style={{ backgroundColor: GRUEN }}
                >
                  Projekt besprechen
                </a>
                <a
                  href={`tel:${company.phoneHref}`}
                  className="font-fraunces text-[1.35rem] underline decoration-1 underline-offset-8"
                >
                  {company.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Bild note="Werkstatt am Rosseer Weg" className="h-[20rem] sm:h-[26rem] lg:h-[30rem]" />
            </div>
          </section>

          {/* ── Bildstrecke über die volle Breite ─────────────────────── */}
          <section className="mt-12">
            <div className="grid gap-5 sm:grid-cols-12">
              <Bild
                note="Detail einer Stickerei"
                className="h-44 sm:col-span-4 sm:h-56"
              />
              <Bild
                note="Blick in die Werkstatt"
                className="h-44 sm:col-span-5 sm:h-56"
              />
              <Bild
                note="Folienzuschnitt"
                className="h-44 sm:col-span-3 sm:h-56"
              />
            </div>
          </section>

          <Seitenzahl nr={1} />

          {/* ── Leistungen: versetztes Doppelraster ───────────────────── */}
          <section id="leistungen" className="scroll-mt-16 pt-14">
            <div className="flex flex-wrap items-end justify-between gap-6 border-b pb-4"
                 style={{ borderColor: "rgba(28,26,22,0.25)" }}>
              <h2 className="font-fraunces text-[clamp(1.8rem,4vw,2.8rem)] leading-tight">
                Was in dieser Werkstatt entsteht
              </h2>
              <p className="text-[0.72rem] uppercase tracking-[0.3em]" style={{ color: GRUEN }}>
                Vier Bereiche
              </p>
            </div>

            <div className="mt-10 grid gap-x-10 gap-y-12 sm:grid-cols-2">
              {services.map((service, i) => (
                <article
                  key={service.id}
                  /* Die rechte Spalte beginnt tiefer – wie im Heft. */
                  className={i % 2 === 1 ? "sm:mt-16" : undefined}
                >
                  <Bild
                    note={notes[service.id]}
                    className={i % 2 === 0 ? "h-60 sm:h-72" : "h-56 sm:h-64"}
                  />

                  <div className="mt-5 flex items-baseline gap-4">
                    <span className="font-fraunces text-[1.2rem]" style={{ color: GRUEN }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-fraunces text-[clamp(1.5rem,3vw,2.1rem)] leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p className="mt-3 leading-[1.7]">{service.teaser}</p>

                  {/* Randnotiz: klein, kursiv, mit kurzem Strich davor. */}
                  <div className="mt-4 flex gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-px w-8 shrink-0"
                      style={{ backgroundColor: GRUEN }}
                    />
                    <ul className="space-y-1 text-[0.88rem] italic" style={{ color: LEISE }}>
                      {service.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  {service.external && (
                    <a
                      href={service.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-block text-[0.78rem] uppercase tracking-[0.18em] underline underline-offset-8"
                      style={{ color: GRUEN }}
                    >
                      Zum Shop
                    </a>
                  )}
                </article>
              ))}
            </div>
          </section>

            <Seitenzahl nr={2} />
          </div>

        {/* ── Zitat auf grünem Band, volle Breite ─────────────────────── */}
        <section className="mt-14" style={{ backgroundColor: GRUEN }}>
          <div className="mx-auto w-full max-w-[1180px] px-6 py-16 sm:px-10 sm:py-20">
            <blockquote
              className="max-w-[46rem] font-fraunces text-[clamp(1.6rem,3.8vw,2.6rem)] leading-snug"
              style={{ color: LEINEN }}
            >
              „Was es kostet, steht fest, bevor die Maschine anläuft."
              <footer className="mt-6 text-[0.72rem] uppercase tracking-[0.3em] text-white/60">
                Aus der Werkstatt
              </footer>
            </blockquote>
          </div>
        </section>

          <div className="mx-auto w-full max-w-[1180px] px-6 sm:px-10">
          {/* ── Ablauf in vier Zeitungsspalten ────────────────────────── */}
          <section id="ablauf" className="scroll-mt-16 pt-14">
            <div className="flex flex-wrap items-end justify-between gap-6 border-b pb-4"
                 style={{ borderColor: "rgba(28,26,22,0.25)" }}>
              <h2 className="font-fraunces text-[clamp(1.8rem,4vw,2.8rem)] leading-tight">
                Vom ersten Anruf bis zur fertigen Arbeit
              </h2>
              <p className="text-[0.72rem] uppercase tracking-[0.3em]" style={{ color: GRUEN }}>
                Ablauf
              </p>
            </div>

            <ol className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, i) => (
                <li key={step.id}>
                  <p
                    className="font-fraunces text-[2.6rem] leading-none"
                    style={{ color: GRUEN }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-fraunces text-[1.35rem] leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-[1.7]">{step.body}</p>
                  <ul
                    className="mt-4 space-y-1 text-[0.85rem] italic"
                    style={{ color: LEISE }}
                  >
                    {step.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </section>

          <Seitenzahl nr={3} />

          {/* ── Standort: Bild links, Angaben rechts ──────────────────── */}
          <section id="standort" className="scroll-mt-16 pt-14">
            <div className="flex flex-wrap items-end justify-between gap-6 border-b pb-4"
                 style={{ borderColor: "rgba(28,26,22,0.25)" }}>
              <h2 className="font-fraunces text-[clamp(1.8rem,4vw,2.8rem)] leading-tight">
                Sie finden uns
              </h2>
              <p className="text-[0.72rem] uppercase tracking-[0.3em]" style={{ color: GRUEN }}>
                Standort
              </p>
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <Bild note="Die Werkstatt von außen" className="h-64 sm:h-80" />
              </div>

              <div className="lg:col-span-6">
                <p className="font-fraunces text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.15]">
                  {company.street}
                  <br />
                  {company.zip} {company.city}
                </p>
                <p className="mt-5 max-w-[32rem] leading-[1.7]">
                  Rufen Sie am besten kurz an, bevor Sie herkommen – dann hat
                  auch jemand Zeit für Sie. Parken direkt vor dem Haus, größere
                  Fahrzeuge fahren auf den Hof.
                </p>

                <dl className="mt-8 border-t" style={{ borderColor: TINTE }}>
                  {openingHours.map((row) => (
                    <div
                      key={row.days}
                      className="flex flex-wrap items-baseline justify-between gap-4 border-b py-3.5"
                      style={{ borderColor: "rgba(28,26,22,0.18)" }}
                    >
                      <dt className="text-[0.95rem]">{row.days}</dt>
                      <dd className="whitespace-nowrap font-fraunces text-[1.05rem]">
                        {row.time}
                      </dd>
                    </div>
                  ))}
                  <div className="flex flex-wrap items-baseline justify-between gap-4 py-3.5">
                    <dt className="text-[0.95rem]">Telefon · Fax · E-Mail</dt>
                    <dd className="text-[0.92rem]" style={{ color: LEISE }}>
                      {company.phoneDisplay} · {company.faxDisplay} ·{" "}
                      {company.email}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>

            <Seitenzahl nr={4} />
          </div>

        {/* ── Kontakt: grünes Band, volle Breite ──────────────────────── */}
        <section id="kontakt" className="mt-14 scroll-mt-16" style={{ backgroundColor: GRUEN }}>
          <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-[0.72rem] uppercase tracking-[0.3em] text-white/60">
                Kontakt
              </p>
              <h2
                className="mt-5 font-fraunces text-[clamp(1.9rem,4.4vw,3rem)] leading-tight"
                style={{ color: LEINEN }}
              >
                Was haben Sie vor?
              </h2>
              <p className="mt-4 max-w-[32rem] leading-[1.7] text-white/80">
                Ein Anruf reicht meistens schon. Sagen Sie kurz, worum es geht –
                den Rest klären wir zusammen.
              </p>
              <a
                href={`tel:${company.phoneHref}`}
                className="mt-7 block font-fraunces text-[clamp(2rem,6vw,3.4rem)] leading-none"
                style={{ color: LEINEN }}
              >
                {company.phoneDisplay}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="mt-5 inline-block text-[0.95rem] text-white/85 underline underline-offset-8"
              >
                {company.email}
              </a>
            </div>

            <div className="flex items-start gap-4 lg:col-span-4 lg:col-start-9">
              <div
                className="flex h-24 w-24 shrink-0 items-center justify-center border border-dashed border-white/40 text-center text-[0.6rem] uppercase tracking-[0.18em] text-white/60"
                role="img"
                aria-label="Platzhalter für QR-Code"
              >
                QR-Code
              </div>
              <p className="text-[0.85rem] leading-relaxed text-white/70">
                Scannen und direkt Kontakt aufnehmen.
                <span className="mt-1 block text-white/45">
                  (Code wird hier eingesetzt)
                </span>
              </p>
            </div>
          </div>
        </section>

          <div className="mx-auto w-full max-w-[1180px] px-6 sm:px-10">
            <Seitenzahl nr={5} />
          </div>
        </main>

        {/* ── Kolophon ───────────────────────────────────────────────── */}
        <footer className="mx-auto w-full max-w-[1180px] px-6 pb-10 pt-8 sm:px-10">
          <div
            className="flex flex-wrap items-center justify-between gap-x-10 gap-y-3 border-t pt-5 text-[0.8rem]"
            style={{ borderColor: TINTE, color: LEISE }}
          >
            <p>
              © 2026 {company.fullName} · {company.street}, {company.zip}{" "}
              {company.city}
            </p>
            <nav className="flex flex-wrap items-center gap-x-7 gap-y-2">
              <Link href="/impressum" className="hover:italic">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:italic">
                Datenschutz
              </Link>
              <a
                href={textilShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:italic"
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
