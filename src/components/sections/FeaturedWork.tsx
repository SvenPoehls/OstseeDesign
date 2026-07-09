import Link from "next/link";
import Divider from "@/components/ui/Divider";
import Placeholder from "@/components/ui/Placeholder";
import { featuredWork } from "@/lib/site";

// „Ausgewählte Arbeiten": Karten-Grid mit hochformatigen Bildern (2:3),
// darunter Kategorie, Tag und Titel – analog zur Vorlage.
export default function FeaturedWork() {
  return (
    <section id="arbeiten" className="scroll-mt-24">
      <div className="pb-8 pt-4">
        <Divider label="Ausgewählte Arbeiten" />
      </div>

      <div className="container-site pb-16 sm:pb-24">
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {featuredWork.map((work) => (
            <article key={work.title} className="group">
              <Placeholder ratio="aspect-[2/3]" note={work.note} className="rounded-2xl" />
              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="label text-ink-muted">{work.category}</span>
                <span className="rounded-full border border-line px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-label text-ink-muted">
                  {work.tag}
                </span>
              </div>
              <h3 className="mt-2 flex items-center font-display text-2xl font-semibold text-ink">
                <span
                  aria-hidden="true"
                  className="mr-0 inline-block h-2 w-2 scale-50 rounded-full bg-orange opacity-0 transition-all duration-500 group-hover:mr-2 group-hover:scale-100 group-hover:opacity-100"
                />
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  {work.title}
                </span>
              </h3>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link href="/#leistungen" className="btn-outline">
            Alle Leistungen ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}
