import { company } from "@/lib/site";

// Wort-Marke als Serifen-Typo (Fraunces) – gesperrt und in Versalien,
// analog zur zentrierten Wortmarke der Design-Vorlage.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display text-2xl font-semibold uppercase tracking-[0.14em] text-ink sm:text-[1.65rem] ${className}`}
    >
      Ostseedesign
      <span className="sr-only"> – {company.fullName}</span>
    </span>
  );
}
