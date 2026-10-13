import { company } from "@/lib/site";

// Wortmarke nach dem Original-Logo: „ostseedesign.de", klein geschrieben.
// Gesetzt in der Überschriften-Schrift, eng und schmal laufend – derselbe
// Charakter wie ein geklebter oder gefräster Schriftzug auf einem Schild.
//
// Liegt später die echte Logo-Datei vor, kann diese Komponente durch
//   <img src="/logo.svg" alt="ostseedesign.de – Werbung und Textilien" />
// ersetzt werden (Datei unter public/logo.svg ablegen).
export default function Logo({
  tagline = false,
  className = "",
}: {
  tagline?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span className="display text-[1.35rem] lowercase sm:text-[1.55rem]">
        ostseedesign<span className="text-ink-soft">.de</span>
      </span>
      {tagline && (
        <span className="mt-2.5 text-[0.7rem] uppercase tracking-label text-ink-soft">
          Werbung und Textilien · {company.city}
        </span>
      )}
      <span className="sr-only">{company.fullName}</span>
    </span>
  );
}
