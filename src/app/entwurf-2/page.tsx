import type { Metadata } from "next";
import Link from "next/link";
import VariantBar from "@/components/layout/VariantBar";
import { company, openingHours, processSteps, services, textilShopUrl } from "@/lib/site";

// ════════════════════════════════════════════════════════════════════════
// ENTWURF 2 — „ATELIER"
// ════════════════════════════════════════════════════════════════════════
// Leitsatz: Die Seite soll sich lesen wie eine Zeitschrift über Handwerk –
// Leinenpapier, ein Artikel mit Initial, Randnotizen und Bildstrecken.
//
// Was es NUR in diesem Entwurf gibt (damit er sich klar von 1 und 3 löst):
//   • Bögen: Bildflächen sind oben halbrund, wie Nischen im Atelier
//   • Initial (großer Anfangsbuchstabe) im ersten Absatz
//   • Randnotizen seitlich neben dem Text, klein und kursiv
//   • ein Zitat quer über die Spalte
//   • zweispaltiger Fließtext beim Ablauf, wie im Zeitschriftenartikel
//   • Seitenzahlen am Fuß jedes Abschnitts („Seite 2 von 5")
//
// Entscheidungen:
//   Schrift   Fraunces (Serife, weich) für alles Große, Archivo für Text.
//   Farbe     Leinen als Grund, Tiefgrün als zweite Farbe, Tinte als Text.
//             Hell und warm, nichts Dunkles.
//   Form      Bögen oben, sonst gerade Kanten. Keine Kästen mit Schatten.
//   Raster    breite Außenränder, Text in schmaler Spalte, Bilder dürfen
//             sich überlappen.
//   Bewegung  keine. Eine Zeitschrift bewegt sich auch nicht.
//
// Die Texte sind dieselben wie in den anderen Entwürfen – verglichen wird
// die Gestaltung, nicht der Inhalt.
export const metadata: Metadata = {
  title: "Entwurf 2 · Atelier",
  description:
    "Entwurf 2 für ostseedesign.de: Leinen und Tiefgrün, Bögen, Initial und Randnotizen wie in einer Zeitschrift.",
};

const LEINEN = "#efe7da";
const TINTE = "#1c1a16";
const GRUEN = "#2c4a3b";
const LEISE = "#6b6256";

const notes: Record<string, string> = {
  textilveredelung: "Stickmaschine, Nahaufnahme vom Garn",
  werbetechnik: "Frisch beschrifteter Transporter",
  drucksachen: "Visitenkarten auf dem Werkstatttisch",
  textilshop: "Stapel veredelter Arbeitskleidung",
};

// Bildfläche als Bogen: oben halbrund, unten gerade.
function Bogen({
  note,
  className = "",
  flach = false,
  ton = "#e2d8c6",
}: {
  note: string;
  className?: string;
  flach?: boolean;
  ton?: string;
}) {
  return (
    <figure className={`relative ${className}`}>
      <div
        className={`h-full w-full overflow-hidden ${
          flach ? "rounded-t-[8rem]" : "rounded-t-full"
        }`}
        style={{
          backgroundColor: ton,
          backgroundImage:
            "repeating-linear-gradient(-45deg, rgba(28,26,22,0.05) 0 1px, transparent 1px 17px)",
        }}
      />
      <figcaption className="mt-3 text-[0.78rem] italic" style={{ color: LEISE }}>
        {note}
      </figcaption>
    </figure>
  );
}

// Seitenzahl am Fuß eines Abschnitts.
function Seitenzahl({ nr }: { nr: number }) {
  return (
    <p
      className="mt-16 border-t pt-4 text-center text-[0.72rem] uppercase tracking-[0.3em]"
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
        <header className="mx-auto w-full max-w-[1180px] px-6 pt-10 sm:px-10">
          <div
            className="flex flex-wrap items-end justify-between gap-6 border-b pb-5"
            style={{ borderColor: TINTE }}
          >
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.3em]" style={{ color: GRUEN }}>
                Werkstatt-Heft · {company.city}
              </p>
              <Link
                href="/entwurf-2"
                className="mt-2 block font-fraunces text-[2rem] leading-none sm:text-[2.6rem]"
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

        <main id="hauptinhalt" className="mx-auto w-full max-w-[1180px] px-6 sm:px-10">
          {/* ── Aufmacher ────────────────────────────────────────────── */}
          <section className="grid gap-10 pt-14 lg:grid-cols-12 lg:gap-12 lg:pt-20">
            <div className="lg:col-span-7">
              <p className="text-[0.72rem] uppercase tracking-[0.3em]" style={{ color: GRUEN }}>
                {company.city} · {company.street}
              </p>
              <h1 className="mt-6 font-fraunces text-[clamp(2.5rem,6vw,4.4rem)] font-normal leading-[1.03]">
                Ihr Logo aufs Shirt, aufs Auto oder an die Wand.
              </h1>

              {/* Initial: der erste Buchstabe läuft über drei Zeilen. */}
              <p className="mt-8 max-w-[34rem] text-[1.05rem] leading-[1.75]">
                <span
                  className="float-left mr-3 mt-1 font-fraunces text-[4.2rem] leading-[0.78]"
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

              <div className="mt-9 flex flex-wrap items-center gap-6">
                <a
                  href="#kontakt"
                  className="px-7 py-3.5 text-[0.9rem] uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-85"
                  style={{ backgroundColor: GRUEN }}
                >
                  Projekt besprechen
                </a>
                <a
                  href={`tel:${company.phoneHref}`}
                  className="font-fraunces text-[1.4rem] underline decoration-1 underline-offset-8"
                >
                  {company.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Zwei Bögen, die sich überlappen – wie zwei Abzüge auf dem Tisch. */}
            <div className="relative lg:col-span-5">
              <Bogen note="Werkstatt am Rosseer Weg" className="h-[22rem] sm:h-[28rem]" />
              {/* Der zweite Abzug liegt schräg darunter. Der Leinenrand
                  macht sichtbar, dass es zwei Blätter sind. */}
              <div className="absolute -bottom-20 -left-10 hidden w-36 lg:block">
                <div className="rounded-t-[8rem] p-2" style={{ backgroundColor: LEINEN }}>
                  <Bogen note="Detail einer Stickerei" className="h-40" flach ton="#cdbfa6" />
                </div>
              </div>
            </div>
          </section>

          <Seitenzahl nr={1} />

          {/* ── Leistungen ───────────────────────────────────────────── */}
          <section id="leistungen" className="scroll-mt-16 pt-16">
            <div className="text-center">
              <p className="text-[0.72rem] uppercase tracking-[0.3em]" style={{ color: GRUEN }}>
                Vier Bereiche
              </p>
              <h2 className="mx-auto mt-4 max-w-[24rem] font-fraunces text-[clamp(1.9rem,4.4vw,3rem)] leading-tight">
                Was in dieser Werkstatt entsteht
              </h2>
            </div>

            <div className="mt-12 space-y-14">
              {services.map((service, i) => {
                const rechts = i % 2 === 1;
                return (
                  <article
                    key={service.id}
                    className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12"
                  >
                    <div
                      className={`lg:col-span-4 ${rechts ? "lg:order-2 lg:col-start-9" : ""}`}
                    >
                      <Bogen
                        note={notes[service.id]}
                        className="h-[16rem] sm:h-[22rem]"
                        flach
                      />
                    </div>

                    <div
                      className={`lg:col-span-6 ${
                        rechts ? "lg:order-1 lg:col-start-2" : "lg:col-start-6"
                      }`}
                    >
                      <p className="font-fraunces text-[1.1rem]" style={{ color: GRUEN }}>
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 font-fraunces text-[clamp(1.7rem,3.6vw,2.6rem)] leading-tight">
                        {service.title}
                      </h3>
                      <p className="mt-4 max-w-[32rem] leading-[1.75]">{service.teaser}</p>

                      {/* Randnotiz: steht seitlich, klein und kursiv. */}
                      <div className="mt-6 flex gap-5">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-px w-10 shrink-0"
                          style={{ backgroundColor: GRUEN }}
                        />
                        <ul className="space-y-1.5 text-[0.9rem] italic" style={{ color: LEISE }}>
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
                          className="mt-6 inline-block text-[0.8rem] uppercase tracking-[0.18em] underline underline-offset-8"
                          style={{ color: GRUEN }}
                        >
                          Zum Shop
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <Seitenzahl nr={2} />

          {/* ── Zitat ────────────────────────────────────────────────── */}
          <section className="pt-16">
            <blockquote
              className="mx-auto max-w-[44rem] border-y py-10 text-center font-fraunces text-[clamp(1.5rem,3.4vw,2.3rem)] leading-snug"
              style={{ borderColor: "rgba(28,26,22,0.2)" }}
            >
              „Was es kostet, steht fest, bevor die Maschine anläuft."
              <footer
                className="mt-5 text-[0.72rem] uppercase tracking-[0.3em]"
                style={{ color: GRUEN }}
              >
                Aus der Werkstatt
              </footer>
            </blockquote>
          </section>

          {/* ── Ablauf als Artikel mit Randnotizen ───────────────────── */}
          <section id="ablauf" className="scroll-mt-16 pt-16">
            <div className="text-center">
              <p className="text-[0.72rem] uppercase tracking-[0.3em]" style={{ color: GRUEN }}>
                Ablauf
              </p>
              <h2 className="mx-auto mt-4 max-w-[26rem] font-fraunces text-[clamp(1.9rem,4.4vw,3rem)] leading-tight">
                Vom ersten Anruf bis zur fertigen Arbeit
              </h2>
            </div>

            <div className="mt-12 space-y-12">
              {processSteps.map((step, i) => (
                <article key={step.id} className="grid gap-6 lg:grid-cols-12 lg:gap-10">
                  {/* Randspalte: Nummer und Stichworte */}
                  <aside className="lg:col-span-3 lg:col-start-1 lg:text-right">
                    <p
                      className="font-fraunces text-[2.4rem] leading-none"
                      style={{ color: GRUEN }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <ul className="mt-3 space-y-1 text-[0.85rem] italic" style={{ color: LEISE }}>
                      {step.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </aside>

                  <div className="lg:col-span-8 lg:col-start-5">
                    <h3 className="font-fraunces text-[1.6rem] leading-tight sm:text-[2rem]">
                      {step.title}
                    </h3>
                    {/* Zweispaltig wie im Heft, sobald Platz da ist. */}
                    <p className="mt-4 leading-[1.8] sm:columns-2 sm:gap-10">{step.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <Seitenzahl nr={3} />

          {/* ── Standort ─────────────────────────────────────────────── */}
          <section id="standort" className="scroll-mt-16 pt-16 text-center">
            <p className="text-[0.72rem] uppercase tracking-[0.3em]" style={{ color: GRUEN }}>
              Standort
            </p>
            <p className="mx-auto mt-6 max-w-[24rem] font-fraunces text-[clamp(2rem,5vw,3.4rem)] leading-[1.15]">
              {company.street}
              <br />
              {company.zip} {company.city}
            </p>
            <p className="mx-auto mt-6 max-w-[34rem] leading-[1.75]">
              Rufen Sie am besten kurz an, bevor Sie herkommen – dann hat auch
              jemand Zeit für Sie. Parken direkt vor dem Haus, größere Fahrzeuge
              fahren auf den Hof.
            </p>

            <dl
              className="mx-auto mt-12 max-w-[40rem] border-t text-left"
              style={{ borderColor: TINTE }}
            >
              {openingHours.map((row) => (
                <div
                  key={row.days}
                  className="flex flex-wrap items-baseline justify-between gap-4 border-b py-4"
                  style={{ borderColor: "rgba(28,26,22,0.18)" }}
                >
                  <dt className="text-[0.95rem]">{row.days}</dt>
                  <dd className="whitespace-nowrap font-fraunces text-[1.1rem]">{row.time}</dd>
                </div>
              ))}
              <div className="flex flex-wrap items-baseline justify-between gap-4 py-4">
                <dt className="text-[0.95rem]">Telefon · Fax · E-Mail</dt>
                <dd className="text-[0.95rem]" style={{ color: LEISE }}>
                  {company.phoneDisplay} · {company.faxDisplay} · {company.email}
                </dd>
              </div>
            </dl>
          </section>

          <Seitenzahl nr={4} />

          {/* ── Kontakt als letzte Seite des Hefts ───────────────────── */}
          <section id="kontakt" className="scroll-mt-16 pb-6 pt-16">
            <div
              className="overflow-hidden rounded-t-[12rem] px-8 pb-14 pt-20 text-center sm:px-14"
              style={{ backgroundColor: GRUEN, color: LEINEN }}
            >
              <p className="text-[0.72rem] uppercase tracking-[0.3em] text-white/60">
                Kontakt
              </p>
              <h2 className="mx-auto mt-5 max-w-[24rem] font-fraunces text-[clamp(1.9rem,4.6vw,3rem)] leading-tight">
                Was haben Sie vor?
              </h2>
              <p className="mx-auto mt-5 max-w-[32rem] leading-[1.75] text-white/80">
                Ein Anruf reicht meistens schon. Sagen Sie kurz, worum es geht –
                den Rest klären wir zusammen.
              </p>
              <a
                href={`tel:${company.phoneHref}`}
                className="mt-8 inline-block font-fraunces text-[clamp(2rem,6vw,3.6rem)] leading-none"
              >
                {company.phoneDisplay}
              </a>
              <br />
              <a
                href={`mailto:${company.email}`}
                className="mt-5 inline-block text-[0.95rem] text-white/85 underline underline-offset-8"
              >
                {company.email}
              </a>

              <div className="mx-auto mt-12 flex max-w-[22rem] items-center gap-4 text-left">
                <div
                  className="flex h-20 w-20 shrink-0 items-center justify-center border border-dashed border-white/40 text-center text-[0.6rem] uppercase tracking-[0.18em] text-white/60"
                  role="img"
                  aria-label="Platzhalter für QR-Code"
                >
                  QR-Code
                </div>
                <p className="text-[0.82rem] leading-relaxed text-white/70">
                  Scannen und direkt Kontakt aufnehmen.
                  <span className="mt-1 block text-white/45">
                    (Code wird hier eingesetzt)
                  </span>
                </p>
              </div>
            </div>
          </section>

          <Seitenzahl nr={5} />
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
