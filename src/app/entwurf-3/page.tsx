import type { Metadata } from "next";
import Link from "next/link";
import VariantBar from "@/components/layout/VariantBar";
import { company, openingHours, processSteps, services, textilShopUrl } from "@/lib/site";

// ════════════════════════════════════════════════════════════════════════
// ENTWURF 3 — „FARBFÄCHER"
// ════════════════════════════════════════════════════════════════════════
// Leitsatz: Die Seite soll aussehen wie der Farbfächer, der in jeder
// Werkstatt an der Wand hängt – Garnfarben, Folienfarben, Druckfarben.
//
// Was es NUR in diesem Entwurf gibt (damit er sich klar von 1 und 2 löst):
//   • bunt: jeder Bereich hat eine eigene Farbe, wie ein Farbmuster
//   • echte Transparenz: Kreise liegen übereinander und MISCHEN sich
//     (mix-blend-multiply) – genau das passiert beim Drucken auch
//   • runde Formen überall: Kreise, Pillen, weiche Flächen
//   • eine Farbfächer-Reihe direkt unter dem Auftakt
//   • Ablauf als Faden mit farbigen Punkten
//   • verspielt statt streng: nichts steht auf einer Linie
//
// Entscheidungen:
//   Schrift   Schibsted Grotesk, freundlich und rund. Nicht Inter.
//   Farbe     Weiß als Grund, vier kräftige Farben als Muster.
//             Bewusst hell – die Farbe kommt aus den Flächen, nicht aus
//             einem dunklen Hintergrund.
//   Form      RUND: Flächen 32 px, Bilder 24 px, Knöpfe und Marken ganz
//             rund. Hier ist die Rundung das Thema, keine Voreinstellung.
//   Bewegung  Flächen heben sich beim Überfahren leicht an. Mehr nicht.
//
// FARBEN TAUSCHEN: nur die Liste `farben` unten ändern.
export const metadata: Metadata = {
  title: "Entwurf 3 · Farbfächer",
  description:
    "Entwurf 3 für ostseedesign.de: bunte Farbmuster, runde Formen, übereinanderliegende Transparenzen.",
};

// Die vier Werkstattfarben. Reihenfolge = Reihenfolge der Leistungen.
const farben = [
  { ton: "#ff7a30", name: "Zinnober" },
  { ton: "#0e7c86", name: "Petrol" },
  { ton: "#ffc63d", name: "Ocker" },
  { ton: "#e4557e", name: "Magenta" },
];

const TINTE = "#17161a"; // Schriftfarbe
// Flächen sind weder schwarz noch grau, sondern nehmen Farben aus dem
// Fächer: die Kopfzeile das helle Ocker (leicht durchscheinend, damit die
// Kreise darunter durchschimmern), Knöpfe das Petrol.
const KOPF_GLAS = "rgba(255, 198, 61, 0.88)";
const KNOPF = "#0e7c86";
const LEISE = "#605c66";

const notes: Record<string, string> = {
  textilveredelung: "Stickmaschine, Nahaufnahme vom Garn",
  werbetechnik: "Frisch beschrifteter Transporter",
  drucksachen: "Visitenkarten auf dem Werkstatttisch",
  textilshop: "Stapel veredelter Arbeitskleidung",
};

// Bildfläche: runde Ecken, in der Farbe des Bereichs eingefärbt.
function Bild({
  note,
  ton,
  className = "",
}: {
  note: string;
  ton: string;
  className?: string;
}) {
  return (
    <figure
      className={`relative overflow-hidden rounded-[24px] ${className}`}
      style={{
        backgroundColor: `${ton}1f`,
        backgroundImage: `repeating-linear-gradient(-45deg, ${ton}26 0 1px, transparent 1px 15px)`,
      }}
    >
      <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/85 px-3 py-1 text-[0.72rem] text-[#605c66]">
        {note}
      </figcaption>
    </figure>
  );
}

export default function Entwurf3Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "html,body{background:#ffffff;}" }} />
      <VariantBar current={3} />

      <div className="min-h-screen bg-white font-schibsted antialiased" style={{ color: TINTE }}>
        {/* ── Kopfzeile als schwebende Pille ────────────────────────────
            Eine weiße Leiste war auf der weißen Seite kaum zu erkennen,
            schwarz wirkte zu schwer. Jetzt trägt sie das helle Ocker aus
            dem Farbfächer, leicht durchscheinend – die Kreise schimmern
            durch, die Leiste bleibt aber klar sichtbar. */}
        <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6">
          <div
            className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 rounded-full py-2.5 pl-6 pr-2.5 shadow-[0_8px_24px_rgba(23,22,26,0.12)] backdrop-blur"
            style={{ backgroundColor: KOPF_GLAS, color: TINTE }}
          >
            <Link href="/entwurf-3" className="text-[1.15rem] font-extrabold tracking-[-0.03em]">
              ostseedesign
            </Link>
            <nav className="hidden items-center gap-7 text-[0.92rem] font-semibold text-[#17161a]/70 lg:flex">
              <a href="#leistungen" className="hover:text-[#17161a]">
                Leistungen
              </a>
              <a href="#ablauf" className="hover:text-[#17161a]">
                Ablauf
              </a>
              <a href="#standort" className="hover:text-[#17161a]">
                Standort
              </a>
              <a
                href={textilShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#17161a]"
              >
                Textilshop ↗
              </a>
            </nav>
            <a
              href={`tel:${company.phoneHref}`}
              className="rounded-full px-5 py-2.5 text-[0.9rem] font-bold text-white transition-opacity hover:opacity-85"
              style={{ backgroundColor: KNOPF }}
            >
              {company.phoneDisplay}
            </a>
          </div>
        </header>

        <main id="hauptinhalt" className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          {/* Auf dem Handy ersetzt diese Reihe die Navigation. Jede Marke
              trägt die Farbe ihres Bereichs. */}
          <div className="mt-5 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden">
            {[
              ["Leistungen", "#leistungen", farben[0].ton],
              ["Ablauf", "#ablauf", farben[1].ton],
              ["Standort", "#standort", farben[2].ton],
              ["Kontakt", "#kontakt", farben[3].ton],
              ["Textilshop ↗", textilShopUrl, KNOPF],
            ].map(([label, href, ton]) => (
              <a
                key={label}
                href={href}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="shrink-0 rounded-full px-4 py-2 text-[0.85rem] font-semibold"
                style={{ backgroundColor: `${ton}2e`, color: TINTE }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* ── Auftakt ────────────────────────────────────────────────
              Hinter der Schlagzeile liegen drei Kreise übereinander. Sie
              sind halb durchsichtig und mischen sich dort, wo sie sich
              überlappen – wie Druckfarben auf Papier. */}
          <section className="relative overflow-hidden pb-6 pt-10 sm:pt-16">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <span
                className="absolute left-0 top-0 h-64 w-64 rounded-full opacity-70 mix-blend-multiply sm:h-[22rem] sm:w-[22rem]"
                style={{ backgroundColor: `${farben[2].ton}66` }}
              />
              <span
                className="absolute left-32 top-16 h-64 w-64 rounded-full opacity-70 mix-blend-multiply sm:h-[22rem] sm:w-[22rem]"
                style={{ backgroundColor: `${farben[0].ton}59` }}
              />
              <span
                className="absolute left-[38%] top-[-3rem] hidden h-[26rem] w-[26rem] rounded-full opacity-60 mix-blend-multiply lg:block"
                style={{ backgroundColor: `${farben[1].ton}4d` }}
              />
            </div>

            <div className="relative max-w-[46rem]">
              <span
                className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-[0.85rem] font-semibold backdrop-blur"
                style={{ color: LEISE }}
              >
                {company.city} · seit über {company.yearsExperience} Jahren
              </span>
              <h1 className="mt-6 text-[clamp(2.3rem,6vw,4.2rem)] font-extrabold leading-[1.04] tracking-[-0.04em]">
                Ihr Logo aufs Shirt, aufs Auto oder an die Wand.
              </h1>
              <p className="mt-6 max-w-[34rem] text-[1.08rem] leading-relaxed" style={{ color: LEISE }}>
                Wir besticken und bedrucken Kleidung, beschriften Fahrzeuge und
                machen Schilder. Alles in einer Werkstatt.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#kontakt"
                  className="rounded-full px-7 py-4 text-[1rem] font-bold text-white transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ backgroundColor: KNOPF }}
                >
                  Projekt besprechen
                </a>
                <a
                  href={`tel:${company.phoneHref}`}
                  className="rounded-full bg-white/80 px-7 py-4 text-[1rem] font-bold backdrop-blur transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ boxShadow: "inset 0 0 0 1.5px rgba(23,22,26,0.15)" }}
                >
                  Anrufen
                </a>
              </div>
            </div>
          </section>

          {/* ── Farbfächer ──────────────────────────────────────────────
              Vier Muster nebeneinander, wie die Karte an der Wand. */}
          <section className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {services.map((service, i) => (
              <a
                key={service.id}
                href={service.external ?? `#${service.id}`}
                {...(service.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group rounded-[28px] p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6"
                style={{ backgroundColor: `${farben[i].ton}1f` }}
              >
                <span
                  className="block h-12 w-12 rounded-full sm:h-14 sm:w-14"
                  style={{ backgroundColor: farben[i].ton }}
                />
                <p className="mt-4 text-[1.05rem] font-extrabold tracking-[-0.02em]">
                  {service.title}
                </p>
                <p className="mt-1 text-[0.82rem]" style={{ color: LEISE }}>
                  Farbe {String(i + 1).padStart(2, "0")} · {farben[i].name}
                </p>
              </a>
            ))}
          </section>

          {/* ── Leistungen ──────────────────────────────────────────────
              Jeder Bereich bekommt seine Farbe und eine eigene Fläche.
              Die erste ist die größte – das ist auch der größte Bereich. */}
          <section id="leistungen" className="mt-16 scroll-mt-28 sm:mt-24">
            <div className="max-w-[30rem]">
              <p className="text-[0.88rem] font-bold" style={{ color: farben[1].ton }}>
                Leistungen
              </p>
              <h2 className="mt-2 text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight tracking-[-0.04em]">
                Vier Farben, eine Werkstatt
              </h2>
            </div>

            <div className="mt-8 grid gap-4 sm:gap-5 lg:grid-cols-12">
              {services.map((service, i) => {
                const gross = i === 0 || i === 3;
                const Flaeche = service.external ? "a" : "article";
                return (
                  <Flaeche
                    key={service.id}
                    id={service.id}
                    {...(service.external
                      ? { href: service.external, target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={`group relative overflow-hidden rounded-[32px] p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-9 ${
                      gross ? "lg:col-span-7" : "lg:col-span-5"
                    }`}
                    style={{ backgroundColor: `${farben[i].ton}1a` }}
                  >
                    {/* Großer Kreis in der Ecke, halb durchsichtig. */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full opacity-60 mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundColor: `${farben[i].ton}59` }}
                    />

                    <div className="relative">
                      <div className="flex items-center gap-3">
                        <span
                          className="h-7 w-7 rounded-full"
                          style={{ backgroundColor: farben[i].ton }}
                        />
                        <h3 className="text-[1.5rem] font-extrabold tracking-[-0.03em] sm:text-[1.85rem]">
                          {service.title}
                        </h3>
                        {service.external && (
                          <span className="ml-auto rounded-full bg-white/80 px-4 py-1.5 text-[0.8rem] font-bold">
                            Zum Shop ↗
                          </span>
                        )}
                      </div>

                      <p className="mt-4 max-w-[34rem] leading-relaxed" style={{ color: LEISE }}>
                        {service.teaser}
                      </p>

                      <ul className="mt-5 flex flex-wrap gap-2">
                        {service.points.map((point) => (
                          <li
                            key={point}
                            className="rounded-full bg-white/70 px-4 py-1.5 text-[0.85rem] font-medium"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>

                      <Bild
                        note={notes[service.id]}
                        ton={farben[i].ton}
                        className={`mt-7 ${gross ? "h-60 sm:h-72" : "h-48 sm:h-56"}`}
                      />
                    </div>
                  </Flaeche>
                );
              })}
            </div>
          </section>

          {/* ── Ablauf als Faden mit Punkten ────────────────────────────── */}
          <section id="ablauf" className="mt-16 scroll-mt-28 sm:mt-24">
            <div className="max-w-[32rem]">
              <p className="text-[0.88rem] font-bold" style={{ color: farben[3].ton }}>
                Ablauf
              </p>
              <h2 className="mt-2 text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight tracking-[-0.04em]">
                Vom ersten Anruf bis zur fertigen Arbeit
              </h2>
            </div>

            <ol className="relative mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {/* Der Faden, der die Punkte verbindet. */}
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-[1.4rem] hidden h-[3px] rounded-full lg:block"
                style={{
                  background: `linear-gradient(to right, ${farben[0].ton}, ${farben[1].ton}, ${farben[2].ton}, ${farben[3].ton})`,
                  opacity: 0.35,
                }}
              />
              {processSteps.map((step, i) => (
                <li key={step.id} className="relative">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full text-[1rem] font-extrabold text-white"
                    style={{ backgroundColor: farben[i].ton }}
                  >
                    {i + 1}
                  </span>
                  <div className="mt-4 rounded-[28px] bg-[#f6f6f7] p-6">
                    <h3 className="text-[1.15rem] font-extrabold tracking-[-0.02em]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed" style={{ color: LEISE }}>
                      {step.body}
                    </p>
                    <ul className="mt-4 space-y-1.5 text-[0.88rem]" style={{ color: LEISE }}>
                      {step.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span style={{ color: farben[i].ton }}>•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* ── Standort ─────────────────────────────────────────────────
              Die Öffnungszeiten stehen in einer runden Scheibe. */}
          <section id="standort" className="mt-16 scroll-mt-28 grid gap-5 sm:mt-24 lg:grid-cols-12">
            <div
              className="relative overflow-hidden rounded-[32px] p-7 sm:p-10 lg:col-span-7"
              style={{ backgroundColor: `${farben[1].ton}1a` }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full opacity-50 mix-blend-multiply"
                style={{ backgroundColor: `${farben[1].ton}59` }}
              />
              <div className="relative">
                <p className="text-[0.88rem] font-bold" style={{ color: farben[1].ton }}>
                  Standort
                </p>
                <p className="mt-4 text-[clamp(1.7rem,4vw,2.6rem)] font-extrabold leading-tight tracking-[-0.04em]">
                  {company.street}
                  <br />
                  {company.zip} {company.city}
                </p>
                <p className="mt-5 max-w-[30rem] leading-relaxed" style={{ color: LEISE }}>
                  Rufen Sie am besten kurz an, bevor Sie herkommen – dann hat
                  auch jemand Zeit für Sie. Parken direkt vor dem Haus, größere
                  Fahrzeuge fahren auf den Hof.
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  <a
                    href={`tel:${company.phoneHref}`}
                    className="rounded-full bg-white/80 px-5 py-2.5 text-[0.92rem] font-bold"
                  >
                    {company.phoneDisplay}
                  </a>
                  <a
                    href={`mailto:${company.email}`}
                    className="rounded-full bg-white/80 px-5 py-2.5 text-[0.92rem] font-bold"
                  >
                    {company.email}
                  </a>
                  <span
                    className="rounded-full bg-white/60 px-5 py-2.5 text-[0.92rem]"
                    style={{ color: LEISE }}
                  >
                    Fax {company.faxDisplay}
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] bg-[#f6f6f7] p-7 sm:p-10 lg:col-span-5">
              <p className="text-[0.88rem] font-bold" style={{ color: farben[2].ton }}>
                Öffnungszeiten
              </p>
              <dl className="mt-5">
                {openingHours.map((row, i) => (
                  <div
                    key={row.days}
                    className="flex items-baseline justify-between gap-4 py-4"
                    style={{
                      borderBottom:
                        i === openingHours.length - 1
                          ? "none"
                          : "1px solid rgba(23,22,26,0.1)",
                    }}
                  >
                    <dt className="text-[0.95rem]" style={{ color: LEISE }}>
                      {row.days}
                    </dt>
                    <dd
                      className={`whitespace-nowrap text-[0.95rem] ${
                        row.byAppointment ? "" : "font-extrabold"
                      }`}
                      style={row.byAppointment ? { color: LEISE } : undefined}
                    >
                      {row.time}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          {/* ── Kontakt ─────────────────────────────────────────────────
              Eine volle Farbfläche, rund wie alles andere hier. */}
          <section
            id="kontakt"
            className="relative mt-16 scroll-mt-28 overflow-hidden rounded-[32px] p-8 text-white sm:mt-24 sm:p-14"
            style={{ backgroundColor: farben[0].ton }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full opacity-50 mix-blend-multiply"
              style={{ backgroundColor: farben[3].ton }}
            />
            <div className="relative grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
              <div>
                <p className="text-[0.88rem] font-bold text-white/70">Kontakt</p>
                <h2 className="mt-3 text-[clamp(1.9rem,4.4vw,3rem)] font-extrabold leading-tight tracking-[-0.04em]">
                  Was haben Sie vor?
                </h2>
                <p className="mt-4 max-w-[32rem] leading-relaxed text-white/85">
                  Ein Anruf reicht meistens schon. Sagen Sie kurz, worum es geht
                  – den Rest klären wir zusammen.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`tel:${company.phoneHref}`}
                    className="rounded-full bg-white px-7 py-4 text-[1.05rem] font-extrabold transition-transform duration-300 hover:-translate-y-0.5"
                    style={{ color: TINTE }}
                  >
                    {company.phoneDisplay}
                  </a>
                  <a
                    href={`mailto:${company.email}`}
                    className="rounded-full px-7 py-4 text-[1.05rem] font-bold text-white transition-transform duration-300 hover:-translate-y-0.5"
                    style={{ boxShadow: "inset 0 0 0 1.5px rgba(255,255,255,0.5)" }}
                  >
                    E-Mail schreiben
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div
                  className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[24px] border border-dashed border-white/50 text-center text-[0.72rem] text-white/75"
                  role="img"
                  aria-label="Platzhalter für QR-Code"
                >
                  QR-Code
                </div>
                <p className="text-[0.92rem] leading-relaxed text-white/80">
                  Scannen und direkt Kontakt aufnehmen.
                  <span className="mt-1 block text-white/55">
                    (Code wird hier eingesetzt)
                  </span>
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* ── Fußzeile ───────────────────────────────────────────────── */}
        <footer className="mx-auto w-full max-w-[1200px] px-4 pb-10 pt-8 sm:px-6">
          {/* Noch einmal der Farbfächer, ganz klein. */}
          <div aria-hidden="true" className="flex gap-1.5">
            {farben.map((f) => (
              <span
                key={f.ton}
                className="h-2 w-10 rounded-full"
                style={{ backgroundColor: f.ton }}
              />
            ))}
          </div>
          <div
            className="mt-5 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 text-[0.88rem]"
            style={{ color: LEISE }}
          >
            <p>
              © 2026 {company.fullName} · {company.street}, {company.zip}{" "}
              {company.city}
            </p>
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link href="/impressum" className="hover:text-[#17161a]">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-[#17161a]">
                Datenschutz
              </Link>
              <a
                href={textilShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#17161a]"
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
