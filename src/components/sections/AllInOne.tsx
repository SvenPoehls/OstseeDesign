import Placeholder from "@/components/ui/Placeholder";

// „Alles aus einer Hand" – erklärt den Ablauf und den Nutzen der
// Positionierung. Petrol-Fläche als ruhiger, vertrauensbildender Block.
const steps = [
  {
    n: "01",
    title: "Beraten",
    text: "Wir hören zu, denken mit und finden gemeinsam die passende Lösung – persönlich in Eckernförde.",
  },
  {
    n: "02",
    title: "Gestalten",
    text: "Wir setzen Ihre Marke in Szene – stimmig über alle Medien hinweg, vom Fahrzeug bis zur Visitenkarte.",
  },
  {
    n: "03",
    title: "Umsetzen",
    text: "Fertigung im eigenen Haus: Werbetechnik, Textilveredelung und Druck – sauber und termintreu.",
  },
];

export default function AllInOne() {
  return (
    <section className="bg-petrol py-20 text-white md:py-28">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            Alles aus einer Hand
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Ein Ansprechpartner für Ihren&nbsp;kompletten Auftritt
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-sand/85">
            Kein Abstimmen zwischen mehreren Dienstleistern, keine
            Reibungsverluste. Bei uns läuft alles an einem Ort zusammen – das
            spart Zeit und sorgt für ein einheitliches Erscheinungsbild.
          </p>

          <ol className="mt-10 space-y-6">
            {steps.map((step) => (
              <li key={step.n} className="flex gap-4">
                <span className="font-display text-2xl font-extrabold text-accent">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-sand/80">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="lg:pl-6">
          <Placeholder
            ratio="aspect-[4/3]"
            note="Werkstatt-Impression: Detailaufnahme beim Aufbringen einer Folie / an der Stickmaschine – zeigt Handwerk und Sorgfalt."
            className="border-white/10 bg-petrol-dark"
          />
        </div>
      </div>
    </section>
  );
}
