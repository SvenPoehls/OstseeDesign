import { company } from "@/lib/site";

// Wortmarke – clean & modern: kräftiger Schriftzug mit Akzent-Punkt.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display text-xl font-bold tracking-tight text-ink sm:text-2xl ${className}`}
    >
      Ostseedesign<span className="text-accent">.</span>
      <span className="sr-only"> – {company.fullName}</span>
    </span>
  );
}
