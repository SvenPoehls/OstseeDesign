import Link from "next/link";
import Seite from "@/components/layout/Seite";
import { LEISE } from "@/lib/farben";

// Gemeinsames Gerüst für die Rechtstexte (Impressum, Datenschutz):
// dieselbe Kopf- und Fußzeile wie die Startseite, dazwischen eine schmale,
// gut lesbare Textspalte. Hier zählt Lesbarkeit, deshalb bleibt es ruhig.
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
    <Seite>
      <main id="hauptinhalt" className="mx-auto w-full max-w-[1200px] px-4 py-14 sm:px-6 md:py-20">
        <div className="max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#f6f6f7] px-4 py-2 text-[0.85rem] font-bold transition-colors hover:bg-[#0e7c86]/15"
          >
            <span aria-hidden="true">←</span>
            Zur Startseite
          </Link>
          <h1 className="mt-8 text-[clamp(2.2rem,6vw,3.6rem)] font-extrabold leading-[1.05] tracking-[-0.04em]">
            {title}
          </h1>
          {intro && (
            <p
              className="mt-5 max-w-[34rem] text-[1.05rem] leading-relaxed"
              style={{ color: LEISE }}
            >
              {intro}
            </p>
          )}
          <div className="legal-body mt-10">{children}</div>
        </div>
      </main>
    </Seite>
  );
}
