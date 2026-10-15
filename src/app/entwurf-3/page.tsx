import type { Metadata } from "next";
import Link from "next/link";
import VariantBar from "@/components/layout/VariantBar";
import { company, openingHours, processSteps, services, textilShopUrl } from "@/lib/site";

// ════════════════════════════════════════════════════════════════════════
// ENTWURF 3 — „STAPEL"
// ════════════════════════════════════════════════════════════════════════
// Leitsatz: Die Seite soll aussehen wie frisch gefaltete Shirts im Regal –
// weiche Kanten, klare Stapel, Luft dazwischen.
//
// Entscheidungen (bewusst anders als Entwurf 1 und 2):
//   Schrift      Schibsted Grotesk. Freundlich und etwas rundlich, dabei
//                klar – passt zur weichen Form. Bewusst nicht Inter oder
//                Poppins, die in jedem Baukasten stecken.
//   Farbe        helles, leicht kühles Grau als Grund, weiße Flächen
//                darauf. Weiterhin ohne Buntfarbe, damit die drei Entwürfe
//                vergleichbar bleiben.
//   Form         RUNDE ECKEN, und zwar nach einer festen Staffelung:
//                   Flächen  28 px · Bilder 20 px · Knöpfe/Marken  rund
//                Sie sind hier nicht Standard, sondern Thema: gefalteter
//                Stoff hat keine scharfen Kanten.
//   Raster       Flächen unterschiedlicher Größe. Die Textilveredelung ist
//                der größte Bereich und bekommt auch die größte Fläche –
//                kein Raster aus vier gleichen Kacheln.
//   Bewegung     genau ein Effekt: Flächen heben sich beim Überfahren
//                leicht an. Sonst nichts.
//   Besonderheit die „Lasche" am oberen Rand jeder Leistungsfläche – wie
//                das Etikett, das oben aus einem gefalteten Shirt schaut.
//
// Die Texte sind dieselben wie in den anderen Entwürfen – verglichen werden
// soll die Gestaltung, nicht der Inhalt.
export const metadata: Metadata = {
  title: "Entwurf 3 · Stapel",
  description:
    "Entwurf 3 für ostseedesign.de: weiche Formen, runde Ecken, helle Flächen auf Grau.",
};

const notes: Record<string, string> = {
  textilveredelung: "Stickmaschine, Nahaufnahme vom Garn",
  werbetechnik: "Frisch beschrifteter Transporter",
  drucksachen: "Visitenkarten auf dem Werkstatttisch",
  textilshop: "Stapel veredelter Arbeitskleidung",
};

// Größe im Raster: der erste Bereich ist der größte im Betrieb.
const breiten = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
];

// Bildfläche: hellgraues Feld mit weicher Ecke und Bildregie-Notiz.
function Bild({ note, className = "" }: { note: string; className?: string }) {
  return (
    <figure
      className={`relative overflow-hidden rounded-[20px] bg-[#e4e6e7] ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(-45deg, rgba(22,24,26,0.045) 0 1px, transparent 1px 15px)",
      }}
    >
      <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/80 px-3 py-1 text-[0.7rem] text-[#6a6e72]">
        {note}
      </figcaption>
    </figure>
  );
}

export default function Entwurf3Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "html,body{background:#e3e5e5;}" }} />
      <VariantBar current={3} />

      <div className="min-h-screen bg-[#e3e5e5] font-schibsted text-[#16181a] antialiased">
        {/* ── Kopfzeile als schwebende Pille ───────────────────────────
            Rund, weiß, mit Abstand zum Rand – sie liegt auf der Seite,
            statt sie oben abzuschneiden. */}
        <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6 sm:pt-6">
          <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-4 rounded-full bg-white/95 py-2.5 pl-6 pr-2.5 backdrop-blur">
            <Link href="/entwurf-3" className="text-[1.15rem] font-extrabold tracking-[-0.03em]">
              ostseedesign
            </Link>
            <nav className="hidden items-center gap-7 text-[0.92rem] font-medium text-[#6a6e72] lg:flex">
              <a href="#leistungen" className="transition-colors hover:text-[#16181a]">
                Leistungen
              </a>
              <a href="#ablauf" className="transition-colors hover:text-[#16181a]">
                Ablauf
              </a>
              <a href="#standort" className="transition-colors hover:text-[#16181a]">
                Standort
              </a>
              <a
                href={textilShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#16181a]"
              >
                Textilshop ↗
              </a>
            </nav>
            <a
              href={`tel:${company.phoneHref}`}
              className="rounded-full bg-[#16181a] px-5 py-2.5 text-[0.9rem] font-semibold text-white transition-colors hover:bg-[#33383c]"
            >
              {company.phoneDisplay}
            </a>
          </div>

        </header>

        <main id="hauptinhalt" className="mx-auto w-full max-w-[1240px] px-4 pb-6 pt-6 sm:px-6">
          {/* Auf dem Handy wird die Navigation zu einer Reihe runder Marken,
              die man seitwärts schieben kann – kein Klappmenü nötig. */}
          <div className="mb-5 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden">
            {[
              ["Leistungen", "#leistungen"],
              ["Ablauf", "#ablauf"],
              ["Standort", "#standort"],
              ["Kontakt", "#kontakt"],
              ["Textilshop ↗", textilShopUrl],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="shrink-0 rounded-full bg-white px-4 py-2 text-[0.85rem] font-medium text-[#5b6064]"
              >
                {label}
              </a>
            ))}
          </div>
          {/* ── Auftakt ─────────────────────────────────────────────── */}
          <section className="grid gap-5 lg:grid-cols-12">
            <div className="rounded-[28px] bg-white p-7 sm:p-10 lg:col-span-7 lg:p-14">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#f1f2f2] px-4 py-1.5 text-[0.82rem] font-medium text-[#6a6e72]">
                {company.city} · seit über {company.yearsExperience} Jahren
              </span>
              <h1 className="mt-7 text-[clamp(2.1rem,5vw,3.5rem)] font-extrabold leading-[1.08] tracking-[-0.035em]">
                Ihr Logo aufs Shirt, aufs Auto oder an die Wand.
              </h1>
              <p className="mt-6 max-w-[34rem] text-[1.05rem] leading-relaxed text-[#5b6064]">
                Wir besticken und bedrucken Kleidung, beschriften Fahrzeuge und
                machen Schilder. Alles in einer Werkstatt.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#kontakt"
                  className="rounded-full bg-[#16181a] px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-[#33383c]"
                >
                  Projekt besprechen
                </a>
                <a
                  href={`tel:${company.phoneHref}`}
                  className="rounded-full border border-[#16181a]/15 px-7 py-3.5 text-[0.95rem] font-semibold transition-colors hover:bg-[#f1f2f2]"
                >
                  Anrufen
                </a>
              </div>
            </div>

            <Bild
              note="Werkstatt am Rosseer Weg"
              className="h-[34vh] min-h-[15rem] lg:col-span-5 lg:h-auto"
            />
          </section>

          {/* Drei kurze Marken unter dem Auftakt – flach, ohne Kasten. */}
          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            {[
              ["Eigene Stickerei", "Garn statt Aufdruck, hält länger"],
              ["Eigene Folierung", "Vom Aufkleber bis zur Vollfolierung"],
              ["Alles aus einer Hand", "Damit am Ende alles gleich aussieht"],
            ].map(([titel, text]) => (
              <div key={titel} className="rounded-[28px] bg-white px-7 py-6">
                <p className="font-bold tracking-[-0.02em]">{titel}</p>
                <p className="mt-1.5 text-[0.95rem] text-[#6a6e72]">{text}</p>
              </div>
            ))}
          </div>

          {/* ── Leistungen ──────────────────────────────────────────── */}
          <section id="leistungen" className="mt-14 scroll-mt-28 sm:mt-20">
            <div className="px-2 sm:px-4">
              <p className="text-[0.85rem] font-semibold text-[#6a6e72]">Leistungen</p>
              <h2 className="mt-2 max-w-[22rem] text-[clamp(1.7rem,3.6vw,2.6rem)] font-extrabold leading-tight tracking-[-0.035em]">
                Vier Bereiche, eine Werkstatt
              </h2>
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-12">
              {services.map((service, i) => {
                const Flaeche = service.external ? "a" : "article";
                return (
                  <div key={service.id} className={`relative ${breiten[i]}`}>
                    {/* Lasche: schaut oben aus der Fläche heraus wie das
                        Etikett an einem gefalteten Shirt. */}
                    <div
                      aria-hidden="true"
                      className="mx-10 h-3 rounded-t-[14px] bg-[#dcdedf]"
                    />
                    <Flaeche
                      {...(service.external
                        ? {
                            href: service.external,
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : {})}
                      className="group flex h-[calc(100%-0.75rem)] flex-col rounded-[28px] bg-white p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-9"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-[1.45rem] font-extrabold tracking-[-0.03em] sm:text-[1.7rem]">
                          {service.title}
                        </h3>
                        {service.external && (
                          <span className="shrink-0 rounded-full bg-[#f1f2f2] px-4 py-1.5 text-[0.8rem] font-semibold text-[#6a6e72] transition-colors group-hover:bg-[#16181a] group-hover:text-white">
                            Zum Shop ↗
                          </span>
                        )}
                      </div>

                      <p className="mt-3 max-w-[34rem] leading-relaxed text-[#5b6064]">
                        {service.teaser}
                      </p>

                      <ul className="mt-5 flex flex-wrap gap-2">
                        {service.points.map((point) => (
                          <li
                            key={point}
                            className="rounded-full bg-[#f1f2f2] px-3.5 py-1.5 text-[0.85rem] text-[#6a6e72]"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>

                      <Bild
                        note={notes[service.id]}
                        className={`mt-6 ${i === 0 || i === 3 ? "h-56 sm:h-72" : "h-44 sm:h-56"}`}
                      />
                    </Flaeche>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── Ablauf ──────────────────────────────────────────────── */}
          <section id="ablauf" className="mt-14 scroll-mt-28 sm:mt-20">
            <div className="px-2 sm:px-4">
              <p className="text-[0.85rem] font-semibold text-[#6a6e72]">Ablauf</p>
              <h2 className="mt-2 max-w-[26rem] text-[clamp(1.7rem,3.6vw,2.6rem)] font-extrabold leading-tight tracking-[-0.035em]">
                Vom ersten Anruf bis zur fertigen Arbeit
              </h2>
            </div>

            <ol className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, i) => (
                <li
                  key={step.id}
                  className="flex flex-col rounded-[28px] bg-white p-7 transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#16181a] text-[0.9rem] font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-[1.2rem] font-extrabold tracking-[-0.02em]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-[#5b6064]">
                    {step.body}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-[#16181a]/8 pt-4 text-[0.9rem] text-[#6a6e72]">
                    {step.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </section>

          {/* ── Standort ────────────────────────────────────────────── */}
          <section id="standort" className="mt-14 scroll-mt-28 grid gap-5 sm:mt-20 lg:grid-cols-12">
            <div className="rounded-[28px] bg-white p-7 sm:p-10 lg:col-span-7">
              <p className="text-[0.85rem] font-semibold text-[#6a6e72]">Standort</p>
              <p className="mt-4 text-[clamp(1.7rem,4vw,2.8rem)] font-extrabold leading-tight tracking-[-0.035em]">
                {company.street}
                <br />
                <span className="text-[#9aa0a4]">
                  {company.zip} {company.city}
                </span>
              </p>
              <p className="mt-5 max-w-[32rem] leading-relaxed text-[#5b6064]">
                Rufen Sie am besten kurz an, bevor Sie herkommen – dann hat auch
                jemand Zeit für Sie. Parken direkt vor dem Haus, größere
                Fahrzeuge fahren auf den Hof.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                <a
                  href={`tel:${company.phoneHref}`}
                  className="rounded-full bg-[#f1f2f2] px-5 py-2.5 text-[0.9rem] font-semibold transition-colors hover:bg-[#16181a] hover:text-white"
                >
                  {company.phoneDisplay}
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="rounded-full bg-[#f1f2f2] px-5 py-2.5 text-[0.9rem] font-semibold transition-colors hover:bg-[#16181a] hover:text-white"
                >
                  {company.email}
                </a>
                <span className="rounded-full bg-[#f1f2f2] px-5 py-2.5 text-[0.9rem] text-[#6a6e72]">
                  Fax {company.faxDisplay}
                </span>
              </div>
            </div>

            <div className="rounded-[28px] bg-white p-7 sm:p-10 lg:col-span-5">
              <p className="text-[0.85rem] font-semibold text-[#6a6e72]">Öffnungszeiten</p>
              <dl className="mt-5">
                {openingHours.map((row) => (
                  <div
                    key={row.days}
                    className="flex items-baseline justify-between gap-4 border-b border-[#16181a]/8 py-4 last:border-0"
                  >
                    <dt className="text-[0.95rem] text-[#5b6064]">{row.days}</dt>
                    <dd
                      className={`whitespace-nowrap text-[0.95rem] ${
                        row.byAppointment ? "text-[#6a6e72]" : "font-bold"
                      }`}
                    >
                      {row.time}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          {/* ── Kontakt ─────────────────────────────────────────────── */}
          <section
            id="kontakt"
            className="mt-14 scroll-mt-28 rounded-[28px] bg-[#16181a] p-8 text-white sm:mt-20 sm:p-12 lg:p-16"
          >
            <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
              <div>
                <p className="text-[0.85rem] font-semibold text-white/55">Kontakt</p>
                <h2 className="mt-3 text-[clamp(1.8rem,4.2vw,2.8rem)] font-extrabold leading-tight tracking-[-0.035em]">
                  Was haben Sie vor?
                </h2>
                <p className="mt-4 max-w-[32rem] leading-relaxed text-white/70">
                  Ein Anruf reicht meistens schon. Sagen Sie kurz, worum es geht
                  – den Rest klären wir zusammen.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`tel:${company.phoneHref}`}
                    className="rounded-full bg-white px-7 py-3.5 text-[1rem] font-bold text-[#16181a] transition-opacity hover:opacity-85"
                  >
                    {company.phoneDisplay}
                  </a>
                  <a
                    href={`mailto:${company.email}`}
                    className="rounded-full border border-white/25 px-7 py-3.5 text-[1rem] font-semibold transition-colors hover:bg-white/10"
                  >
                    E-Mail schreiben
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div
                  className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[20px] border border-dashed border-white/35 text-center text-[0.72rem] text-white/60"
                  role="img"
                  aria-label="Platzhalter für QR-Code"
                >
                  QR-Code
                </div>
                <p className="text-[0.92rem] leading-relaxed text-white/65">
                  Scannen und direkt Kontakt aufnehmen.
                  <span className="mt-1 block text-white/45">
                    (Code wird hier eingesetzt)
                  </span>
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* ── Fußzeile ───────────────────────────────────────────────── */}
        <footer className="mx-auto w-full max-w-[1240px] px-4 pb-8 pt-6 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 text-[0.88rem] text-[#6a6e72]">
            <p>
              © 2026 {company.fullName} · {company.street}, {company.zip}{" "}
              {company.city}
            </p>
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link href="/impressum" className="hover:text-[#16181a]">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-[#16181a]">
                Datenschutz
              </Link>
              <a
                href={textilShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#16181a]"
              >
                Textilshop ↗
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}
