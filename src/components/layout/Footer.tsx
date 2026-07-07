import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { ExternalIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/ui/Icons";
import { company, textilShopUrl } from "@/lib/site";

// Fußbereich: Marke, Kurz-Kontakt, Rechtliches. Dunkles Petrol als
// visueller Abschluss der Seite (weißer Text: Kontrast ~9.7:1).
export default function Footer() {
  const year = 2024; // Statisch gehalten – kein Client-Datum nötig.
  return (
    <footer className="bg-petrol-dark text-sand">
      <div className="container-site grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand/80">
            {company.claim}. Werbetechnik, Textilveredelung und Drucksachen –
            seit über {company.yearsExperience} Jahren alles aus einer Hand.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
            Kontakt
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-sand/85">
            <li className="flex items-start gap-2">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>
                {company.street}
                <br />
                {company.zip} {company.city}
              </span>
            </li>
            <li>
              <a
                href={`tel:${company.phoneHref}`}
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <PhoneIcon className="h-4 w-4 text-accent" />
                {company.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <MailIcon className="h-4 w-4 text-accent" />
                {company.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
            Rechtliches
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-sand/85">
            <li>
              <Link href="/impressum" className="hover:text-white">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:text-white">
                Datenschutzerklärung
              </Link>
            </li>
            <li>
              <a
                href={textilShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-white"
              >
                Textilshop
                <ExternalIcon className="h-3.5 w-3.5" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-5 text-xs text-sand/60 sm:flex-row">
          <p>
            © {year} {company.fullName}
          </p>
          <p>{company.city} · {company.region}</p>
        </div>
      </div>
    </footer>
  );
}
