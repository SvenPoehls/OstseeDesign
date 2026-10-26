import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { ExternHand } from "@/components/ui/Hand";
import { company, services, textilShopUrl } from "@/lib/site";

// Fußzeile wie die Notizen am unteren Blattrand: die Marke links, daneben
// zwei schmale Spalten unter einem gezogenen Strich, ganz unten die Zeile
// mit dem Rechtlichen. Flach, keine Kästen.
export default function Footer() {
  const year = 2026; // statisch – kein Client-Datum nötig

  return (
    <footer className="pb-4">
      <div className="wrap grid12 gap-y-10 py-14">
        <div className="col-span-4 lg:col-span-5">
          <Logo tagline />
          <p className="notiz mt-6 max-w-reading text-[1.05rem] leading-relaxed text-ink-soft">
            Werbetechnik und Textilveredelung am {company.street} in{" "}
            {company.city}. Den Betrieb gibt es seit über{" "}
            {company.yearsExperience} Jahren.
          </p>
        </div>

        <div className="col-span-2 lg:col-span-3 lg:col-start-7">
          <h2 className="linie-hand-oben etikett pt-4">Leistungen</h2>
          <ul className="mt-4 space-y-2.5 text-[0.95rem] text-ink-soft">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  href={s.external ?? "/entwurf-1#leistungen"}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  className="ul-link ul-zeichnen inline-flex items-center gap-1.5"
                >
                  {s.title}
                  {s.external && <ExternHand className="h-3 w-3" />}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 lg:col-span-3 lg:col-start-10">
          <h2 className="linie-hand-oben etikett pt-4">Kontakt</h2>
          <ul className="mt-4 space-y-2.5 text-[0.95rem] text-ink-soft">
            <li>
              {company.street}
              <br />
              {company.zip} {company.city}
            </li>
            <li>
              <a href={`tel:${company.phoneHref}`} className="ul-link ul-zeichnen">
                {company.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="ul-link ul-zeichnen">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap">
        <div className="linie-hand-oben flex flex-wrap items-center justify-between gap-x-6 gap-y-2 pt-5 text-[0.85rem] text-ink-soft">
          <p>
            © {year} {company.fullName}
          </p>
          <nav
            aria-label="Rechtliches"
            className="flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            <Link href="/impressum" className="ul-link ul-zeichnen">
              Impressum
            </Link>
            <Link href="/datenschutz" className="ul-link ul-zeichnen">
              Datenschutz
            </Link>
            <a
              href={textilShopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ul-link ul-zeichnen inline-flex items-center gap-1.5"
            >
              Textilshop
              <ExternHand className="h-3 w-3" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
