import Link from "next/link";
import { company, nav } from "@/lib/site";

// Kopfzeile: Wortmarke links, Leistungen und Telefon rechts. Auf dem Handy
// klappt das Menü hinter einem Drei-Striche-Symbol über <details> auf; die
// Kopfzeile geht dort mit und blendet sich beim Runterscrollen aus
// (components/ui/Kopfzeile.tsx).
function Links() {
  return (
    <>
      {nav.map((n) =>
        n.external ? (
          <a key={n.href} href={n.href} target="_blank" rel="noopener noreferrer">
            {n.label}&nbsp;↗
          </a>
        ) : (
          <Link key={n.href} href={n.href}>
            {n.label}
          </Link>
        )
      )}
      <a className="tel" href={`tel:${company.phoneHref}`}>
        {company.phoneDisplay.replace(" – ", " ")}
      </a>
    </>
  );
}

export default function Header() {
  return (
    <header className="site-header" data-edit-id="header">
      <div className="wrap">
        <Link className="logo" href="/" aria-label="Ostseedesign – zur Startseite" data-edit-id="header-logo">
          <b>ostseedesign</b>
          <small>Werbung &amp; Textilien</small>
        </Link>
        <nav className="nav desk" aria-label="Hauptnavigation" data-edit-id="header-nav">
          <Links />
        </nav>
        <details className="menu">
          <summary aria-label="Menü">
            <span className="sr-only">Menü</span>
            <span className="burger" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </summary>
          <nav className="nav" aria-label="Hauptnavigation mobil">
            <Links />
          </nav>
        </details>
      </div>
    </header>
  );
}
