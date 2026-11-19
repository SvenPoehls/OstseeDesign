import Link from "next/link";

// Gemeinsames Gerüst für die Rechtstexte (Impressum, Datenschutz): schmale,
// ruhige Textspalte auf weißem Grund. Kopf- und Fußzeile kommen aus dem Layout.
export default function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <main id="hauptinhalt" className="wrap legal">
      <div className="inner">
        <Link href="/" className="zurueck">← Zur Startseite</Link>
        <h1>{title}</h1>
        {intro && <p className="lead">{intro}</p>}
        <div className="legal-body">{children}</div>
      </div>
    </main>
  );
}
