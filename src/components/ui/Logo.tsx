import { company } from "@/lib/site";

// Wortmarke nach dem Original-Logo: „ostseedesign.de" (klein geschrieben,
// in Open Sans wie der Shop). „.de" etwas heller abgesetzt.
// Mit `tagline` wird der Zusatz „Werbung und Textilien | 04351 – 470 590"
// darunter gezeigt (für den Footer / die volle Logo-Sperrung).
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
      <span className="font-display text-xl font-bold lowercase tracking-tight text-ink sm:text-2xl">
        ostseedesign<span className="text-ink-muted">.de</span>
      </span>
      {tagline && (
        <span className="mt-1.5 text-[0.7rem] font-medium text-ink-muted">
          Werbung und Textilien{" "}
          <span className="mx-1 text-line">|</span> {company.phoneDisplay}
        </span>
      )}
      <span className="sr-only">{company.fullName}</span>
    </span>
  );
}
