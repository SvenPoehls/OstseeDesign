import Link from "next/link";
import { company, nav } from "@/lib/site";

// Kopfzeile: Wortmarke links, Leistungen und Telefon rechts. Auf dem Handy
// klappt das Menü über <details> auf, ohne JavaScript.
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
          <summary>Menü</summary>
          <nav className="nav" aria-label="Hauptnavigation mobil">
            <Links />
          </nav>
        </details>
      </div>
    </header>
  );
}
