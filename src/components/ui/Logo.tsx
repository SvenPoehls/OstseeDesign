import { company } from "@/lib/site";

// Wortmarke nach dem Original-Logo: „ostseedesign.de", klein geschrieben –
// hier mit der Hand geschrieben und mit einem Schwung unterstrichen, so wie
// man einen Namen auf einen Entwurf setzt.
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
      <span className="wackelt relative inline-block">
        <span className="hand text-[1.6rem] lowercase sm:text-[1.85rem]">
          ostseedesign<span className="text-ink-soft">.de</span>
        </span>
        {/* Der Schwung unter dem Namen – einmal mit dem Stift durchgezogen. */}
        <svg
          aria-hidden="true"
          focusable="false"
          className="skizze-strich absolute -bottom-2 left-0 h-2.5 w-full text-ink"
          viewBox="0 0 120 10"
          preserveAspectRatio="none"
        >
          <path d="M2 6.4C22 3.4 42 7 62 4.8c18-2 36 1.6 56-1.4" />
        </svg>
      </span>
      {tagline && (
        <span className="etikett mt-4 block">
          Werbung und Textilien · {company.city}
        </span>
      )}
      <span className="sr-only">{company.fullName}</span>
    </span>
  );
}
