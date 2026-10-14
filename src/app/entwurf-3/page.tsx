import type { Metadata } from "next";
import Link from "next/link";
import VariantBar from "@/components/layout/VariantBar";
import { company, openingHours, processSteps, services, textilShopUrl } from "@/lib/site";

// ════════════════════════════════════════════════════════════════════════
// ENTWURF 3 — „LAUFZETTEL"
// ════════════════════════════════════════════════════════════════════════
// Leitsatz: Die Seite soll aussehen wie der Auftragszettel, der in der
// Werkstatt am Brett hängt – ein Formular, auf dem alles seinen Platz hat.
//
// Entscheidungen (bewusst anders als Entwurf 1 und 2):
//   Schrift      durchgehend JetBrains Mono. Alle Zeichen gleich breit,
//                dadurch stehen Zahlen und Tabellen sauber untereinander.
//   Farbe        kühles Grauweiß, schwarze Schrift. Wieder ohne Buntfarbe.
//   Form         sichtbare Kästen und Raster – hier ausdrücklich gewollt,
//                weil ein Formular aus Feldern besteht. Ecken eckig.
//   Dichte       klein gesetzt und eng. Viel Information auf wenig Fläche,
//                das Gegenteil der luftigen Vitrine aus Entwurf 2.
//   Zählung      Positionsnummern wie auf einem Lieferschein (POS. 01).
//   Bewegung     keine.
//   Besonderheit der Abriss-Coupon unten: gestrichelte Linie mit Schere,
//                wie der Abschnitt, den man abreißt und einsteckt.
//
// Die Texte sind dieselben wie in den anderen Entwürfen – verglichen werden
// soll die Gestaltung, nicht der Inhalt.
export const metadata: Metadata = {
  title: "Entwurf 3 · Laufzettel",
  description:
    "Entwurf 3 für ostseedesign.de: Formular-Optik, Schreibmaschinenschrift, Tabellen statt Kacheln.",
};

const notes: Record<string, string> = {
  textilveredelung: "Stickmaschine, Garn",
  werbetechnik: "Beschrifteter Transporter",
  drucksachen: "Visitenkarten, Briefbogen",
  textilshop: "Veredelte Kleidung",
};

// Kleine Bildfläche im Formular-Stil: Kasten mit Kreuz, wie ein
// freigelassenes Feld auf einem Vordruck.
function Feld({ note, className = "" }: { note: string; className?: string }) {
  return (
    <figure className={`relative border border-black/25 bg-white ${className}`}>
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full text-black/12"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.4" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.4" />
      </svg>
      <figcaption className="absolute bottom-0 left-0 right-0 truncate border-t border-black/15 bg-white/85 px-2 py-1 text-[10px] uppercase">
        {note}
      </figcaption>
    </figure>
  );
}

// Überschrift einer Formular-Gruppe: schwarzer Balken mit Positionsnummer.
function Kopf({ pos, titel }: { pos: string; titel: string }) {
  return (
    <div className="flex items-stretch border border-black">
      <span className="flex items-center bg-black px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-white">
        {pos}
      </span>
      <span className="flex items-center px-3 py-2 text-[11px] uppercase tracking-[0.18em]">
        {titel}
      </span>
    </div>
  );
}

export default function Entwurf3Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "html,body{background:#ececeb;}" }} />
      <VariantBar current={3} />

      <div className="min-h-screen bg-[#ececeb] font-mono text-[13px] leading-[1.55] text-[#121212] antialiased">
        <div className="mx-auto w-full max-w-[1180px] px-4 py-6 sm:px-7 sm:py-10">
          {/* ── Formularkopf ──────────────────────────────────────────
              Wie der Briefkopf eines Vordrucks: Firma links, Felder rechts. */}
          <header className="border border-black">
            <div className="flex flex-wrap items-stretch">
              <div className="flex-1 border-black p-4 sm:border-r sm:p-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-black/55">
                  Werbung und Textilien
                </p>
                <p className="mt-1.5 text-[1.5rem] font-bold uppercase leading-none tracking-[-0.02em] sm:text-[1.9rem]">
                  Ostseedesign
                </p>
              </div>
              <dl className="grid flex-1 grid-cols-2 border-t border-black/25 sm:border-t-0">
                {[
                  ["Standort", company.city],
                  ["Betrieb seit", `über ${company.yearsExperience} Jahren`],
                  ["Telefon", company.phoneDisplay],
                  ["Telefax", company.faxDisplay],
                ].map(([k, v], i) => (
                  <div
                    key={k}
                    className={`border-black/25 p-3 sm:p-4 ${i % 2 === 0 ? "border-r" : ""} ${
                      i < 2 ? "border-b" : ""
                    }`}
                  >
                    <dt className="text-[10px] uppercase tracking-[0.18em] text-black/50">
                      {k}
                    </dt>
                    <dd className="mt-1 truncate">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <nav className="flex flex-wrap items-center gap-x-6 gap-y-1 border-t border-black bg-black px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white sm:px-5">
              <a href="#leistungen" className="hover:underline">
                Leistungen
              </a>
              <a href="#ablauf" className="hover:underline">
                Ablauf
              </a>
              <a href="#standort" className="hover:underline">
                Standort
              </a>
              <a
                href={textilShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Textilshop ↗
              </a>
              <a href="#kontakt" className="ml-auto hover:underline">
                Kontakt
              </a>
            </nav>
          </header>

          <main id="hauptinhalt">
            {/* ── Auftakt ────────────────────────────────────────────
                Der Satz steht wie ein ausgefülltes Feld im Formular. */}
            <section className="mt-5 border border-black bg-white">
              <div className="grid lg:grid-cols-[1.45fr_1fr]">
                <div className="border-black p-5 lg:border-r lg:p-8">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-black/50">
                    Gegenstand
                  </p>
                  <h1 className="mt-3 text-[clamp(1.5rem,4.4vw,2.7rem)] font-bold uppercase leading-[1.1] tracking-[-0.02em]">
                    Ihr Logo aufs Shirt,
                    <br />
                    aufs Auto oder an die Wand
                  </h1>
                  <p className="mt-5 max-w-[36rem] text-black/70">
                    Wir besticken und bedrucken Kleidung, beschriften Fahrzeuge
                    und machen Schilder. Alles in einer Werkstatt, seit über{" "}
                    {company.yearsExperience} Jahren.
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <a
                      href="#kontakt"
                      className="border border-black bg-black px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] text-white hover:bg-white hover:text-black"
                    >
                      Anfrage stellen
                    </a>
                    <a
                      href={`tel:${company.phoneHref}`}
                      className="border border-black px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] hover:bg-black hover:text-white"
                    >
                      {company.phoneDisplay}
                    </a>
                  </div>
                </div>

                <Feld
                  note="Werkstatt, Außenansicht"
                  className="m-5 h-[13rem] border-black/25 lg:m-8 lg:h-auto"
                />
              </div>
            </section>

            {/* ── Leistungen als Positionsliste ──────────────────────
                Tabelle statt Kacheln: Position, Leistung, Umfang, Bild. */}
            <section id="leistungen" className="mt-8">
              <Kopf pos="Pos. 01" titel="Leistungen" />

              <div className="border-x border-b border-black bg-white">
                {/* Tabellenkopf nur auf großen Bildschirmen */}
                <div className="hidden border-b border-black/25 bg-black/[0.04] px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-black/55 lg:grid lg:grid-cols-[4rem_1fr_1.1fr_9rem] lg:gap-4">
                  <span>Pos.</span>
                  <span>Leistung</span>
                  <span>Umfang</span>
                  <span>Bild</span>
                </div>

                {services.map((service, i) => (
                  <div
                    key={service.id}
                    className="grid gap-4 border-b border-black/20 p-4 last:border-b-0 lg:grid-cols-[4rem_1fr_1.1fr_9rem] lg:items-start"
                  >
                    <span className="text-[11px] uppercase tracking-[0.18em] text-black/55">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[1.05rem] font-bold uppercase tracking-[-0.01em]">
                        {service.external ? (
                          <a
                            href={service.external}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline underline-offset-4"
                          >
                            {service.title} ↗
                          </a>
                        ) : (
                          service.title
                        )}
                      </h3>
                      <p className="mt-2 text-black/70">{service.teaser}</p>
                    </div>
                    <ul className="space-y-1">
                      {service.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span aria-hidden="true" className="text-black/45">
                            ×
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <Feld
                      note={notes[service.id]}
                      className="h-28 lg:h-24"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* ── Ablauf als Checkliste ──────────────────────────────── */}
            <section id="ablauf" className="mt-8">
              <Kopf pos="Pos. 02" titel="Ablauf" />

              <ol className="grid border-x border-b border-black bg-white sm:grid-cols-2">
                {processSteps.map((step, i) => (
                  <li
                    key={step.id}
                    className="border-black/20 p-5 [&:nth-child(odd)]:sm:border-r [&:not(:last-child)]:border-b sm:[&:nth-child(-n+2)]:border-b sm:[&:nth-last-child(-n+2)]:border-b-0"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="flex h-5 w-5 items-center justify-center border border-black text-[11px] leading-none"
                      >
                        ✓
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-black/55">
                        Schritt {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-3 text-[1.05rem] font-bold uppercase tracking-[-0.01em]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-black/70">{step.body}</p>
                    <ul className="mt-4 space-y-1 border-t border-dashed border-black/25 pt-3">
                      {step.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span aria-hidden="true" className="text-black/45">
                            –
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </section>

            {/* ── Standort als Feldblock ─────────────────────────────── */}
            <section id="standort" className="mt-8">
              <Kopf pos="Pos. 03" titel="Standort und Zeiten" />

              <div className="grid border-x border-b border-black bg-white lg:grid-cols-2">
                <dl className="border-black/20 lg:border-r">
                  {[
                    ["Anschrift", `${company.street}, ${company.zip} ${company.city}`],
                    ["Telefon", company.phoneDisplay],
                    ["Telefax", company.faxDisplay],
                    ["E-Mail", company.email],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="flex flex-wrap items-baseline gap-x-4 border-b border-black/15 px-5 py-3.5 last:border-b-0"
                    >
                      <dt className="w-28 shrink-0 text-[10px] uppercase tracking-[0.18em] text-black/50">
                        {k}
                      </dt>
                      <dd className="font-bold">{v}</dd>
                    </div>
                  ))}
                </dl>

                <dl>
                  {openingHours.map((row) => (
                    <div
                      key={row.days}
                      className="flex flex-wrap items-baseline justify-between gap-x-4 border-b border-black/15 px-5 py-3.5"
                    >
                      <dt className="text-black/70">{row.days}</dt>
                      <dd className="whitespace-nowrap font-bold">{row.time}</dd>
                    </div>
                  ))}
                  <p className="px-5 py-3.5 text-black/60">
                    Vorher kurz anrufen lohnt sich – dann hat auch jemand Zeit.
                    Parken direkt vor dem Haus.
                  </p>
                </dl>
              </div>
            </section>

            {/* ── Kontakt als Abriss-Coupon ──────────────────────────
                Gestrichelte Linie mit Schere – der Abschnitt zum Abreißen. */}
            <section id="kontakt" className="mt-10">
              <div
                aria-hidden="true"
                className="flex items-center gap-3 text-[11px] text-black/45"
              >
                <span>✂</span>
                <span className="h-px flex-1 border-t border-dashed border-black/40" />
              </div>

              <div className="mt-4 border border-black bg-black p-5 text-white sm:p-8">
                <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/55">
                      Pos. 04 · Kontakt
                    </p>
                    <h2 className="mt-3 text-[clamp(1.3rem,3.4vw,2rem)] font-bold uppercase leading-tight">
                      Was haben Sie vor?
                    </h2>
                    <p className="mt-3 max-w-[34rem] text-white/70">
                      Ein Anruf reicht meistens schon. Sagen Sie kurz, worum es
                      geht – den Rest klären wir zusammen.
                    </p>
                    <a
                      href={`tel:${company.phoneHref}`}
                      className="mt-6 block text-[clamp(1.6rem,5.5vw,3rem)] font-bold leading-none tracking-[-0.02em]"
                    >
                      {company.phoneDisplay}
                    </a>
                    <a
                      href={`mailto:${company.email}`}
                      className="mt-4 inline-block underline underline-offset-4"
                    >
                      {company.email}
                    </a>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-24 w-24 shrink-0 items-center justify-center border border-dashed border-white/45 text-center text-[10px] uppercase tracking-[0.18em] text-white/60"
                      role="img"
                      aria-label="Platzhalter für QR-Code"
                    >
                      QR-Code
                    </div>
                    <p className="text-white/65">
                      Scannen und direkt Kontakt aufnehmen.
                      <span className="mt-1 block text-white/45">
                        (Code wird hier eingesetzt)
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* ── Formularfuß ───────────────────────────────────────────── */}
          <footer className="mt-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border border-black px-4 py-3 text-[11px] uppercase tracking-[0.14em]">
            <p className="text-black/55">
              © 2026 {company.fullName}
            </p>
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link href="/impressum" className="hover:underline">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:underline">
                Datenschutz
              </Link>
              <Link href="/" className="hover:underline">
                Entwürfe
              </Link>
            </nav>
          </footer>
        </div>
      </div>
    </>
  );
}
