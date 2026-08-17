import { painChips, painPoints } from "@/lib/site";

// „Kennen Sie das?" – dunkler Block mit zwei endlos laufenden Bändern voller
// typischer Ärgernisse. Dazwischen schweben kurze Schlagwörter in Signalfarbe.
// Die Bänder laufen rein optisch (kein Inhalt geht verloren): Für Screenreader
// steht die Liste einmal sichtbar-versteckt darunter.
export default function PainPoints() {
  // Zwei Reihen, damit das Band nicht wie eine bloße Wiederholung wirkt.
  const rowOne = painPoints.slice(0, 4);
  const rowTwo = painPoints.slice(4);

  return (
    <section className="bg-paper pb-20 sm:pb-28">
      <div className="container-site">
        <div className="overflow-hidden rounded-[2.5rem] border-[1.5px] border-ink bg-ink py-14 shadow-offset sm:py-20">
          <div className="container-site text-center">
            <span className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/25 px-4 py-1.5 text-xs font-bold uppercase tracking-label text-white/70">
              Kennen Sie das?
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              Werbung wird zur <span className="em">Zettelwirtschaft</span>.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
              Für jedes Teil ein anderer Anbieter, für jeden Anbieter ein anderes
              Datenformat – und am Ende sieht nichts nach einer Marke aus.
            </p>
          </div>

          {/* Laufbänder. Der Inhalt steht doppelt im Markup, damit der Übergang
              nahtlos wirkt; die Kopie ist für Screenreader ausgeblendet. */}
          <div className="mt-12 space-y-4">
            <Ticker items={rowOne} />
            <Ticker items={rowTwo} reverse />
          </div>

          {/* Schlagwörter in Signalfarbe. */}
          <div className="container-site mt-12 flex flex-wrap justify-center gap-3">
            {painChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border-[1.5px] border-ink bg-pop px-4 py-1.5 text-sm font-bold text-ink"
              >
                {chip}
              </span>
            ))}
          </div>

          <p className="container-site mt-10 text-center text-base font-semibold text-white sm:text-lg">
            Bei uns läuft all das über einen Tisch.
          </p>
        </div>
      </div>
    </section>
  );
}

// Ein endlos laufendes Band mit Textkacheln.
function Ticker({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="relative flex overflow-hidden">
      <div className={`ticker-track ${reverse ? "ticker-track-rev" : ""}`}>
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="flex shrink-0 items-center gap-4 pr-4"
            aria-hidden={copy === 1 ? "true" : undefined}
          >
            {items.map((item) => (
              <li
                key={item}
                className="flex shrink-0 items-center gap-3 rounded-full border-[1.5px] border-white/20 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white/85 sm:text-base"
              >
                <CrossMark />
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

// Kleines Kreuz-Symbol vor jedem Ärgernis.
function CrossMark() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-pop"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
