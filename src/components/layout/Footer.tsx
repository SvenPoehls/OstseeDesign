import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { ExternalIcon } from "@/components/ui/Icons";
import { company, services, textilShopUrl } from "@/lib/site";

// Fußzeile: bewusst flach gehalten. Marke links, daneben Leistungen und
// Kontakt, unten eine schmale Zeile mit dem Rechtlichen.
export default function Footer() {
  const year = 2024; // statisch – kein Client-Datum nötig
  return (
    <footer className="border-t border-line bg-paper text-sm">
      <div className="container-site grid gap-8 py-10 sm:grid-cols-3 sm:gap-10 lg:grid-cols-[1.6fr_1fr_1.1fr]">
        <div className="col-span-full sm:col-span-1">
          <Logo />
          <p className="mt-3 max-w-xs text-[0.8rem] leading-relaxed text-ink-muted">
            Werbetechnik und Textilveredelung am {company.street} in{" "}
            {company.city}. Den Betrieb gibt es seit über{" "}
            {company.yearsExperience} Jahren.
          </p>
        </div>

        <div>
          <h2 className="text-[0.7rem] font-bold uppercase tracking-label text-ink">
            Leistungen
          </h2>
          <ul className="mt-3 space-y-1.5 text-[0.8rem]">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  href={s.external ?? "/#leistungen"}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1 text-ink-muted transition-colors hover:text-accent"
                >
                  {s.title}
                  {s.external && <ExternalIcon className="h-3 w-3" />}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[0.7rem] font-bold uppercase tracking-label text-ink">
            Kontakt
          </h2>
          <ul className="mt-3 space-y-1.5 text-[0.8rem] text-ink-muted">
            <li>
              {company.street}, {company.zip} {company.city}
            </li>
            <li>
              <a href={`tel:${company.phoneHref}`} className="hover:text-accent">
                {company.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="hover:text-accent">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-site flex flex-wrap items-center justify-between gap-x-5 gap-y-2 py-4 text-[0.75rem] text-ink-muted">
          <p>
            © {year} {company.fullName}
          </p>
          <nav aria-label="Rechtliches" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/impressum" className="hover:text-accent">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-accent">
              Datenschutz
            </Link>
            <a
              href={textilShopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-accent"
            >
              Textilshop
              <ExternalIcon className="h-3 w-3" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
