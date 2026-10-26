import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Papier from "@/components/layout/Papier";
import { PfeilHand } from "@/components/ui/Hand";

// Gemeinsames Gerüst für die Rechtstexte (Impressum, Datenschutz):
// Kopfzeile, schmale, gut lesbare Textspalte und Fußzeile – auf demselben
// Papier wie die Hauptseite. Die Überschriften stehen in Handschrift, der
// eigentliche Text bleibt in der ruhigen Leseschrift: Hier geht es ums
// Lesen, nicht um Wirkung.
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
    <Papier>
      <Header />
      <main id="hauptinhalt">
        <div className="wrap py-14 md:py-20">
          <div className="max-w-3xl">
            <Link
              href="/"
              className="ul-link ul-zeichnen etikett inline-flex items-center gap-2"
            >
              <PfeilHand className="h-3.5 w-4 rotate-180" />
              Zur Startseite
            </Link>
            <h1 className="hand mt-8 text-[clamp(2.6rem,8vw,4.4rem)]">
              {title}
            </h1>
            {intro && (
              <p className="mt-6 max-w-reading text-[1.05rem] leading-relaxed text-ink-soft">
                {intro}
              </p>
            )}
            <div className="legal-body mt-10">{children}</div>
          </div>
        </div>
      </main>
      <Footer />
    </Papier>
  );
}
