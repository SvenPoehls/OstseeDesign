import Link from "next/link";
import { ArrowIcon } from "@/components/ui/Icons";
import { whyChooseUs } from "@/lib/site";

// „Warum Ostseedesign" – Vorteils-Kacheln in einem Raster (eine breite
// Hervorhebungs-Kachel + kleinere), analog zum „Why Choose Us"-Block.
export default function WhyChooseUs() {
  return (
    <section id="warum" className="scroll-mt-28 bg-surface py-20 md:py-28">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <span className="label justify-center">Warum Ostseedesign</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Ein Partner, auf den man sich verlässt
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Seit über 30 Jahren vertrauen Betriebe, Vereine und Unternehmen aus
            der Region auf persönliche, verlässliche Arbeit.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((f) => {
            return (
              <div
                key={f.title}
                className={`card p-7 ${f.wide ? "sm:col-span-2 lg:col-span-1 lg:row-span-1" : ""}`}
              >
                <h3 className="font-display text-xl font-semibold text-ink">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{f.text}</p>
              </div>
            );
          })}

          {/* Abschließende Akzent-Kachel mit CTA. */}
          <div className="flex flex-col justify-between rounded-xl bg-accent p-7 text-white shadow-soft">
            <div>
              <h3 className="font-display text-xl font-semibold">Klingt gut?</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/85">
                Lassen Sie uns über Ihr Projekt sprechen – unverbindlich und
                persönlich.
              </p>
            </div>
            <Link href="/#kontakt" className="btn-onaccent mt-6 self-start">
              Kontakt aufnehmen
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
