import Link from "next/link";
import Placeholder from "@/components/ui/Placeholder";
import { ArrowIcon, CheckIcon, PhoneIcon } from "@/components/ui/Icons";
import { company } from "@/lib/site";

// Hero analog zur Vorlage: links Botschaft + zwei Buttons, rechts ein
// versetztes Bild mit kleinem Vertrauens-Badge. Clean & modern.
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(48rem 32rem at 88% -10%, rgba(37,99,235,0.10), transparent 70%)",
        }}
      />
      <div className="container-site relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="label">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {company.city} · seit über {company.yearsExperience} Jahren
          </span>

          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Vertrauter Service, der Ihre Marke <span className="em">sichtbar</span> macht.
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
            Werbetechnik, Textilveredelung und Drucksachen – alles aus einer Hand.
            Ihr Werbepartner in {company.city}, persönlich und verlässlich.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/#leistungen" className="btn-primary">
              Unsere Leistungen
              <ArrowIcon className="h-4 w-4" />
            </Link>
            <a href={`tel:${company.phoneHref}`} className="btn-ghost">
              <PhoneIcon className="h-4 w-4" />
              {company.phoneDisplay}
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink">
            {["Alles aus einer Hand", "Über 30 Jahre Erfahrung", "Persönlich vor Ort"].map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <Placeholder
            ratio="aspect-[4/5]"
            note="Großformatiges Hero-Foto: frisch beschriftetes Kundenfahrzeug vor der Werkstatt in Eckernförde, Tageslicht, Halbprofil."
          />
          <div className="absolute -bottom-5 -left-4 hidden rounded-2xl bg-accent px-5 py-4 text-white shadow-soft-lg sm:block">
            <p className="font-display text-3xl font-semibold leading-none">{company.yearsExperience}+</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/85">Jahre Erfahrung</p>
          </div>
        </div>
      </div>
    </section>
  );
}
