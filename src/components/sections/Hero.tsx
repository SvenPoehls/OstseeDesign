import Link from "next/link";
import { ArrowIcon } from "@/components/ui/Icons";
import { company } from "@/lib/site";

// Hero analog zur Vorlage: großer, zentrierter Serifen-Satz mit kursiven
// Betonungen, dahinter ein weicher Sonnen-Kreis (statisch – bewusst NICHT
// mausgesteuert), darunter zwei Buttons.
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Sonnen-Kreis: weicher radialer Verlauf, mittig hinter dem Text.
          Größe skaliert mit dem Viewport; „atmet" dezent (rein dekorativ). */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[min(30rem,70vw)] w-[min(30rem,70vw)] rounded-full motion-safe:animate-[sun-breathe_9s_ease-in-out_infinite]"
        style={{
          background:
            "radial-gradient(circle at center, var(--peach) 0%, rgba(242,176,95,0.0) 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="container-site flex min-h-[74vh] flex-col items-center justify-center py-24 text-center sm:py-28">
        <h1 className="mx-auto max-w-[16ch] font-display text-4xl font-medium leading-[1.12] text-ink sm:text-5xl lg:text-6xl">
          Ostseedesign ist Ihr Partner für{" "}
          <span className="em-italic">Werbetechnik</span>,{" "}
          <span className="em-italic">Textilveredelung</span> und{" "}
          <span className="em-italic">Drucksachen</span> in {company.city}.
        </h1>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link href="/#arbeiten" className="btn-outline">
            Unsere Arbeiten
          </Link>
          <Link href="/#leistungen" className="link-arrow">
            Unsere Leistungen
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
