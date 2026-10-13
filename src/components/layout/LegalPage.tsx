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
      <main id="hauptinhalt" className="bg-paper">
        <div className="wrap py-14 md:py-20">
          <div className="max-w-3xl">
            <Link
              href="/"
              className="ul-link inline-flex items-center gap-1.5 text-[0.8rem] font-semibold uppercase tracking-label"
            >
              <ArrowIcon className="h-4 w-4 rotate-180" />
              Zur Startseite
            </Link>
            <h1 className="display mt-8 text-[clamp(2.2rem,7vw,3.6rem)]">
              {title}
            </h1>
            {intro && (
              <p className="mt-5 max-w-reading text-[1.05rem] leading-relaxed text-ink-soft">
                {intro}
              </p>
            )}
            <div className="legal-body mt-10">{children}</div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
