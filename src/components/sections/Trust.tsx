import { company, trustStats } from "@/lib/site";

// 30-Jahre-Vertrauensblock: kompakte Kennzahlen, die Erfahrung und die
// „alles aus einer Hand"-Positionierung greifbar machen.
export default function Trust() {
  return (
    <section className="bg-sand py-16 md:py-20">
      <div className="container-site">
        <div className="rounded-3xl border border-line bg-white px-6 py-10 shadow-card sm:px-10 md:py-12">
          <div className="grid gap-8 text-center sm:grid-cols-3 sm:text-left">
            {trustStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`sm:px-6 ${
                  i > 0 ? "sm:border-l sm:border-line" : ""
                }`}
              >
                <p className="font-display text-5xl font-extrabold tracking-tight text-accent-strong">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 border-t border-line pt-8 text-center text-lg font-medium leading-relaxed text-ink">
            Seit über {company.yearsExperience} Jahren fest in {company.city}{" "}
            verwurzelt – wir kennen die Region und ihre Betriebe. Auf ein Wort
            unter Nachbarn.
          </p>
        </div>
      </div>
    </section>
  );
}
