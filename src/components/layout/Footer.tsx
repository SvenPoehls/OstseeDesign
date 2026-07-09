import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { ExternalIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/ui/Icons";
import { company, services, textilShopUrl } from "@/lib/site";

// Großer Footer mit Marke, Kurzbeschreibung, Leistungs- und Kontaktspalten
// sowie Rechtlichem – Aufbau analog zur Vorlage, clean & modern.
export default function Footer() {
  const year = 2024; // statisch – kein Client-Datum nötig
  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-site grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr] md:py-16">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
            {company.claim}. Werbetechnik, Textilveredelung und Drucksachen –
            seit über {company.yearsExperience} Jahren alles aus einer Hand.
          </p>
          <a href={`tel:${company.phoneHref}`} className="btn-primary mt-6">
            <PhoneIcon className="h-4 w-4" />
            {company.phoneDisplay}
          </a>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-label text-ink">Leistungen</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  href={s.external ?? "/#leistungen"}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1 text-ink-muted transition-colors hover:text-accent"
                >
                  {s.title}
                  {s.external && <ExternalIcon className="h-3.5 w-3.5" />}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-label text-ink">Kontakt</h2>
          <ul className="mt-5 space-y-3 text-sm text-ink-muted">
            <li className="flex items-start gap-2">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>
                {company.street}
                <br />
                {company.zip} {company.city}
              </span>
            </li>
            <li>
              <a href={`tel:${company.phoneHref}`} className="inline-flex items-center gap-2 hover:text-accent">
                <PhoneIcon className="h-4 w-4 text-accent" />
                {company.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="inline-flex items-center gap-2 hover:text-accent">
                <MailIcon className="h-4 w-4 text-accent" />
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-muted sm:flex-row">
          <p>© {year} {company.fullName}</p>
          <nav aria-label="Rechtliches" className="flex items-center gap-5">
            <Link href="/impressum" className="hover:text-accent">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-accent">Datenschutzerklärung</Link>
            <a href={textilShopUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-accent">
              Textilshop
              <ExternalIcon className="h-3 w-3" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
