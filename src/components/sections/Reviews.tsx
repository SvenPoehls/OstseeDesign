import { StarIcon } from "@/components/ui/Icons";
import { reviews } from "@/lib/site";

// Kundenstimmen als Karten-Raster mit Sternen – analog zum Testimonial-Block
// der Vorlage. Inhalte sind Platzhalter und vor Veröffentlichung zu ersetzen.
export default function Reviews() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <span className="label justify-center">Kundenstimmen</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Das sagen unsere Kundinnen und Kunden
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <figure key={i} className="flex flex-col card p-7">
              <div className="flex gap-1 text-accent" aria-label={`${r.stars} von 5 Sternen`}>
                {Array.from({ length: r.stars }).map((_, s) => (
                  <StarIcon key={s} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink">
                „{r.quote}“
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <span className="block font-semibold text-ink">{r.name}</span>
                <span className="block text-sm text-ink-muted">{r.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
