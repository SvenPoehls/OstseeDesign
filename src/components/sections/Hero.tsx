import Link from "next/link";
import { ArrowIcon, CheckIcon, PhoneIcon } from "@/components/ui/Icons";
import { company } from "@/lib/site";

// Hero: großes Hintergrund-Bild, das HINTER dem Text liegt. Solange kein
// echtes Foto vorliegt, steht hier ein gestreifter Platzhalter (bewusst klar
// als Platzhalter erkennbar). Später ersetzen: den gestreiften Hintergrund-
// Block unten austauschen gegen
//   <img src="/hero.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      {/* Hintergrund-Platzhalter (gestreift) – liegt hinter dem Text. */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(0,48,135,0.07) 0 2px, transparent 2px 18px)",
        }}
      />
      {/* Bildregie-Hinweis, damit der Platzhalter erkennbar bleibt. */}
      <span
        aria-hidden="true"
        className="absolute right-4 top-4 rounded-md bg-white/70 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-label text-ink/45"
      >
        Bildregie: Hero-Foto
      </span>
      {/* Lesbarkeits-Overlay: von links hell, damit der Text klar bleibt. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-paper via-paper/85 to-paper/30"
      />

      <div className="container-site relative py-20 md:py-28 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
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
      </div>
    </section>
  );
}
