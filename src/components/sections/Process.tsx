import Link from "next/link";
import { ArrowIcon, CheckIcon } from "@/components/ui/Icons";
import { processSteps } from "@/lib/site";

// „So läuft Ihr Auftrag" – der Ablauf eines Projekts als Zeitleiste:
// senkrechte Linie, je Schritt ein Punkt mit Zeit-Marke und eine Karte.
export default function Process() {
  return (
    <section id="ablauf" className="scroll-mt-32 bg-surface py-20 sm:py-28">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-[22rem_1fr] lg:gap-16">
          {/* Überschrift – bleibt beim Scrollen stehen. */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="chip">So läuft Ihr Auftrag</span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
              Vom ersten Gespräch bis zur <span className="em">Montage</span>.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              Kein Angebots-Dschungel, keine Wartespiele. Sie wissen jederzeit,
              woran wir gerade arbeiten und was als Nächstes kommt.
            </p>
            <Link href="/#kontakt" className="btn-pill mt-7">
              Jetzt Termin ausmachen
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>

          {/* Zeitleiste */}
          <ol className="relative space-y-6 border-l-[1.5px] border-ink/20 pl-6 sm:pl-10">
            {processSteps.map((step, i) => (
              <li key={step.id} className="relative">
                {/* Punkt auf der Linie */}
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.85rem] top-7 flex h-6 w-6 items-center justify-center rounded-full border-[1.5px] border-ink bg-pop text-[0.65rem] font-bold text-ink sm:-left-[2.85rem]"
                >
                  {i + 1}
                </span>

                <article className="edge p-6 sm:p-7">
                  <span className="text-xs font-bold uppercase tracking-label text-accent">
                    {step.when}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{step.body}</p>
                  <ul className="mt-5 grid gap-2 text-[15px] text-ink sm:grid-cols-2">
                    {step.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-pop" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
