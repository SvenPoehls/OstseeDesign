import { company } from "@/lib/site";

// Wort-Bild-Marke als reines SVG/Text – bis eine echte Logodatei vorliegt.
// „Ostsee" in Petrol, „design" in Orange – greift die Farbwelt auf.
// `variant="light"` = für dunklen Hintergrund (Footer).
export default function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const main = variant === "light" ? "text-white" : "text-petrol";
  const sub = variant === "light" ? "text-sand" : "text-ink-muted";
  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span className={`font-display text-xl font-extrabold tracking-tight ${main}`}>
        Ostsee<span className="text-accent-strong">design</span>
      </span>
      <span className={`mt-0.5 text-[11px] font-medium uppercase tracking-[0.2em] ${sub}`}>
        Werbung &amp; Textilien
      </span>
      <span className="sr-only">{company.fullName}</span>
    </span>
  );
}
