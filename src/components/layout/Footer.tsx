import Link from "next/link";
import { ExternalIcon } from "@/components/ui/Icons";
import { company, nav, textilShopUrl } from "@/lib/site";

// Fußbereich analog zur Vorlage: Spalten (Website / Kontakt / Rechtliches),
// darunter eine große Wortmarke und die Credits-Zeile.
export default function Footer() {
  const year = 2024; // statisch – kein Client-Datum nötig
  const sitemap = [{ label: "Startseite", href: "/" }, ...nav];

  return (
    <footer className="bg-paper">
      <div className="container-site pb-10 pt-16">
        <div className="grid gap-10 border-t border-line pt-12 md:grid-cols-3">
          {/* Website / Sitemap */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-label text-ink">Website</h2>
            <ul className="mt-5 space-y-3">
              {sitemap.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target={"external" in item && item.external ? "_blank" : undefined}
                    rel={"external" in item && item.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1 text-[15px] text-ink-muted transition-colors hover:text-orange"
                  >
                    {item.label}
                    {"external" in item && item.external && <ExternalIcon className="h-3.5 w-3.5" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-label text-ink">Kontakt</h2>
            <ul className="mt-5 space-y-3 text-[15px] text-ink-muted">
              <li>
                {company.street}
                <br />
                {company.zip} {company.city}
              </li>
              <li>
                <a href={`tel:${company.phoneHref}`} className="transition-colors hover:text-orange">
                  {company.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-orange">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-label text-ink">Rechtliches</h2>
            <ul className="mt-5 space-y-3 text-[15px] text-ink-muted">
              <li>
                <Link href="/impressum" className="transition-colors hover:text-orange">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="transition-colors hover:text-orange">
                  Datenschutzerklärung
                </Link>
              </li>
              <li>
                <a
                  href={textilShopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 transition-colors hover:text-orange"
                >
                  Textilshop
                  <ExternalIcon className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Große Wortmarke */}
        <div className="mt-14 select-none border-t border-line pt-10">
          <p className="font-display text-[15vw] font-semibold uppercase leading-none tracking-[0.02em] text-ink lg:text-[11rem]">
            Ostseedesign
          </p>
        </div>

        {/* Credits */}
        <div className="mt-8 flex flex-col gap-2 text-xs font-semibold uppercase tracking-label text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <span>{company.claim}</span>
          <span>© {year} {company.fullName}</span>
          <span>{company.city} · {company.region}</span>
        </div>
      </div>
    </footer>
  );
}
