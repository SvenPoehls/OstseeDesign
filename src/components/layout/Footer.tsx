import Link from "next/link";
import { APRICOT, CREME, CREME_LEISE, DUNKEL, farben } from "@/lib/farben";
import { company, nav, openingHours, versprechen } from "@/lib/site";

// Fußzeile, dunkel und mehrspaltig wie im Vorbild:
//
//   1  Wortmarke, Unterzeile und vier Zusagen mit Häkchen
//   2  Seiten (Startseite, die drei Leistungen, Textilshop, Kontakt)
//   3  Kontakt (Telefon, Fax, E-Mail, Anschrift)
//   4  Öffnungszeiten (im Vorbild steht hier der Newsletter)
//
// Darunter eine Zeile mit © und dem Rechtlichen, rechts die vier Farben.
export default function Footer() {
  const year = 2026; // statisch – kein Client-Datum nötig
  const link = "transition-colors hover:text-white";
  const spaltenTitel = "text-[0.78rem] font-bold uppercase tracking-[0.16em]";

  return (
    <footer className="dunkel" style={{ backgroundColor: DUNKEL, color: CREME_LEISE }}>
      <div className="seitenrand grid gap-12 pb-12 pt-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:gap-10 lg:pt-20">
        <div>
          <Link href="/" className="inline-flex flex-col leading-none" style={{ color: CREME }}>
            <span className="text-[1.6rem] font-extrabold tracking-[-0.03em]">ostseedesign</span>
            <span className="mt-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.24em]">
              Werbung &amp; Textilien
            </span>
          </Link>
          <p className="mt-5 max-w-[22rem] text-[0.92rem] leading-relaxed">{company.claim}.</p>
          <ul className="mt-6 space-y-2.5 text-[0.9rem]">
            {[`Seit über ${company.yearsExperience} Jahren in ${company.city}`, versprechen[0], versprechen[2]].map(
              (punkt) => (
                <li key={punkt} className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: farben[0].ton }}>
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="#1e1814" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5 10 17 19 7.5" />
                    </svg>
                  </span>
                  {punkt}
                </li>
              )
            )}
          </ul>
        </div>

        <nav aria-label="Seiten">
          <p className={spaltenTitel} style={{ color: APRICOT }}>
            Seiten
          </p>
          <ul className="mt-5 space-y-2.5 text-[0.95rem]">
            <li>
              <Link href="/" className={link}>
                Startseite
              </Link>
            </li>
            {nav.map((n) => (
              <li key={n.label}>
                {n.external ? (
                  <a href={n.href} target="_blank" rel="noopener noreferrer" className={link}>
                    {n.label} ↗
                  </a>
                ) : (
                  <Link href={n.href} className={link}>
                    {n.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link href="/#kontakt" className={link}>
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <p className={spaltenTitel} style={{ color: APRICOT }}>
            Kontakt
          </p>
          <ul className="mt-5 space-y-2.5 text-[0.95rem]">
            <li>
              <a href={`tel:${company.phoneHref}`} className={link}>
                {company.phoneDisplay}
              </a>
            </li>
            <li>Fax {company.faxDisplay}</li>
            <li>
              <a href={`mailto:${company.email}`} className={`${link} break-all`}>
                {company.email}
              </a>
            </li>
            <li>
              {company.street}
              <br />
              {company.zip} {company.city}
            </li>
          </ul>
        </div>

        <div>
          <p className={spaltenTitel} style={{ color: APRICOT }}>
            Öffnungszeiten
          </p>
          <dl className="mt-5 space-y-3 text-[0.92rem]">
            {openingHours.map((z) => (
              <div key={z.days}>
                <dt>{z.days}</dt>
                <dd className="font-bold" style={{ color: CREME }}>
                  {z.time}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="seitenrand">
        <div
          className="flex flex-col gap-4 border-t py-7 text-[0.85rem] sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: `${CREME_LEISE}33` }}
        >
          <p>
            © {year} {company.fullName}
          </p>
          <nav aria-label="Rechtliches" className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/impressum" className={link}>
              Impressum
            </Link>
            <Link href="/datenschutz" className={link}>
              Datenschutz
            </Link>
            <span aria-hidden="true" className="flex gap-1.5">
              {farben.map((f) => (
                <span key={f.ton} className="h-2 w-8 rounded-full" style={{ backgroundColor: f.ton }} />
              ))}
            </span>
          </nav>
        </div>
      </div>
    </footer>
  );
}
