import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { ExternalIcon } from "@/components/ui/Icons";
import { company, services, textilShopUrl } from "@/lib/site";

// Fußzeile als Impressum-Zeile eines Druckbogens: Marke links, daneben zwei
// schmale Spalten, unten eine Zeile mit dem Rechtlichen. Flach, keine Kästen.
export default function Footer() {
  const year = 2026; // statisch – kein Client-Datum nötig

  return (
    <footer className="bg-paper">
      <div className="wrap grid12 gap-y-10 py-14">
        <div className="col-span-4 lg:col-span-5">
          <Logo tagline />
          <p className="mt-6 max-w-reading text-[0.9rem] leading-relaxed text-ink-soft">
            Werbetechnik und Textilveredelung am {company.street} in{" "}
            {company.city}. Den Betrieb gibt es seit über{" "}
            {company.yearsExperience} Jahren.
          </p>
        </div>

        <div className="col-span-2 lg:col-span-3 lg:col-start-7">
          <h2 className="border-t border-ink pt-3 text-[0.7rem] font-semibold uppercase tracking-label">
            Leistungen
          </h2>
          <ul className="mt-3 space-y-2 text-[0.9rem] text-ink-soft">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  href={s.external ?? "/#leistungen"}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  className="ul-link inline-flex items-center gap-1.5"
                >
                  {s.title}
                  {s.external && <ExternalIcon className="h-3 w-3" />}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 lg:col-span-3 lg:col-start-10">
          <h2 className="border-t border-ink pt-3 text-[0.7rem] font-semibold uppercase tracking-label">
            Kontakt
          </h2>
          <ul className="mt-3 space-y-2 text-[0.9rem] text-ink-soft">
            <li>
              {company.street}
              <br />
              {company.zip} {company.city}
            </li>
            <li>
              <a href={`tel:${company.phoneHref}`} className="ul-link">
                {company.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="ul-link">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-ink py-5 text-[0.78rem] text-ink-soft">
          <p>
            © {year} {company.fullName}
          </p>
          <nav
            aria-label="Rechtliches"
            className="flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            <Link href="/impressum" className="ul-link">
              Impressum
            </Link>
            <Link href="/datenschutz" className="ul-link">
              Datenschutz
            </Link>
            <a
              href={textilShopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ul-link inline-flex items-center gap-1.5"
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
