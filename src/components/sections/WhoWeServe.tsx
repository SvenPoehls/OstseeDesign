import { StarIcon } from "@/components/ui/Icons";
import { whoWeServe } from "@/lib/site";

// Zentriertes Statement mit kleinem Stern-Icon und Label darüber –
// analog zum „Who We Serve"-Abschnitt der Vorlage.
export default function WhoWeServe() {
  return (
    <section className="bg-cream/60">
      <div className="container-site py-20 text-center sm:py-28">
        <div className="mb-8 flex flex-col items-center gap-3">
          <StarIcon className="h-4 w-4 text-ink" />
          <span className="label">{whoWeServe.label}</span>
        </div>
        <h2 className="mx-auto max-w-[22ch] font-display text-3xl font-semibold leading-[1.22] text-ink sm:text-4xl lg:text-[2.75rem]">
          {whoWeServe.parts.map((part, i) =>
            part.italic ? (
              <span key={i} className="em-italic">
                {part.text}
              </span>
            ) : (
              <span key={i}>{part.text}</span>
            )
          )}
        </h2>
      </div>
    </section>
  );
}
