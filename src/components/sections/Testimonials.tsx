"use client";

import { useState } from "react";
import Divider from "@/components/ui/Divider";
import { HalfSunIcon } from "@/components/ui/Icons";
import { testimonials } from "@/lib/site";

// Testimonial-Slider: großes kursives Zitat, Halbsonne, Name; darunter
// Prev/Next und Punkte – analog zur Vorlage (ohne externe Slider-Bibliothek).
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;
  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);
  const current = testimonials[index];

  return (
    <section className="scroll-mt-24">
      <div className="pb-10 pt-16 sm:pt-24">
        <Divider label="Stimmen" />
      </div>

      <div className="container-site pb-20 sm:pb-28">
        <figure className="mx-auto max-w-prose text-center">
          <blockquote
            key={index}
            className="font-display text-2xl font-medium italic leading-[1.3] text-ink sm:text-3xl lg:text-4xl motion-safe:animate-[fade-in_0.4s_ease]"
          >
            {current.quote}
          </blockquote>
          <HalfSunIcon className="mx-auto mt-8 h-4 w-8 text-orange" />
          <figcaption className="mt-4 text-xs font-semibold uppercase tracking-label text-ink-muted">
            {current.name}
          </figcaption>
        </figure>

        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Vorherige Stimme"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 rotate-180" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>

          <div className="flex items-center gap-2" role="tablist" aria-label="Stimmen">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Stimme ${i + 1}`}
                aria-selected={i === index}
                role="tab"
                className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-orange" : "w-2 bg-line"}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Nächste Stimme"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
