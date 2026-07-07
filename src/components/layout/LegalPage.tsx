import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowIcon } from "@/components/ui/Icons";

// Gemeinsames Gerüst für die Rechtstexte (Impressum, Datenschutz):
// Header, schmale, gut lesbare Textspalte und Footer.
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
    <>
      <Header />
      <main id="hauptinhalt" className="bg-white">
        <div className="container-site max-w-3xl py-14 md:py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-strong"
          >
            <ArrowIcon className="h-4 w-4 rotate-180" />
            Zur Startseite
          </Link>
          <h1 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-petrol sm:text-4xl">
            {title}
          </h1>
          {intro && <p className="mt-4 text-lg leading-relaxed text-ink-muted">{intro}</p>}
          <div className="legal-body mt-10">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
