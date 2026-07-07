import Link from "next/link";
import Placeholder from "@/components/ui/Placeholder";
import { ArrowIcon, CheckIcon, PhoneIcon, PinIcon } from "@/components/ui/Icons";
import { company } from "@/lib/site";

// Hero: Kernbotschaft + lokaler Bezug (Eckernförde) + zwei klare CTAs.
// Enthält die einzige <h1> der Startseite (saubere Überschriften-Hierarchie).
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-sand">
      {/* Dezenter maritimer Verlauf im Hintergrund (Petrol-Hauch). */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(60rem 40rem at 85% -10%, rgba(14,75,90,0.10), transparent 70%)",
        }}
      />
      <div className="container-site relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="eyebrow">
            <PinIcon className="h-4 w-4" />
            {company.city} · {company.region}
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-petrol sm:text-5xl lg:text-6xl">
            Ihr Werbepartner in&nbsp;{company.city}
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
            Werbetechnik, Textilveredelung und Drucksachen –{" "}
            <strong className="font-semibold text-ink">alles aus einer Hand</strong>.
            Seit über {company.yearsExperience} Jahren machen wir Ihre Marke
            sichtbar, auf nahezu jedem Medium.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${company.phoneHref}`} className="btn-accent">
              <PhoneIcon className="h-5 w-5" />
              {company.phoneDisplay}
            </a>
            <Link href="/#kontakt" className="btn-secondary">
              Kontakt aufnehmen
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>

          {/* Kurze Vertrauens-Merkmale */}
          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink">
            {["Alles aus einer Hand", "Über 30 Jahre Erfahrung", "Persönlich vor Ort"].map(
              (item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-accent-strong" />
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="relative">
          <Placeholder
            ratio="aspect-[4/5]"
            note="Großformatiges Hero-Foto: frisch beschriftetes Kundenfahrzeug vor der Werkstatt in Eckernförde, Tageslicht, Halbprofil."
          />
          {/* Kleines Vertrauens-Badge, das leicht über das Bild ragt. */}
          <div className="absolute -bottom-5 -left-4 hidden rounded-2xl bg-petrol px-5 py-4 text-white shadow-card sm:block">
            <p className="font-display text-3xl font-extrabold leading-none">
              {company.yearsExperience}+
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-sand/85">
              Jahre Erfahrung
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
