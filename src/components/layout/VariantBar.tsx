import Link from "next/link";

// Vorschau-Leiste für den Entwurfs-Vergleich.
//
// Sie gehört NICHT zum Design der Seite, sondern ist nur ein Hilfsmittel:
// damit lässt sich zwischen den drei Entwürfen hin- und herspringen, ohne
// jedes Mal zurück zur Auswahl zu müssen.
// Sie steht ganz oben und scrollt mit weg, damit sie nirgends im Weg ist.
//
// WENN EIN ENTWURF GEWÄHLT IST: Diese Komponente einfach aus der jeweiligen
// Seite entfernen (eine Zeile), dann ist davon nichts mehr zu sehen.
export const entwuerfe = [
  { nr: 1, href: "/entwurf-1", name: "Werkstatt-Druckbogen" },
  { nr: 2, href: "/entwurf-2", name: "Weißraum" },
  { nr: 3, href: "/entwurf-3", name: "Farbfächer" },
] as const;

export default function VariantBar({ current }: { current: 1 | 2 | 3 }) {
  return (
    <div data-vorschau-leiste className="border-b border-black bg-black text-white">
      <div className="mx-auto flex w-full max-w-[1360px] flex-wrap items-center gap-x-5 gap-y-1 px-5 py-2 font-mono text-[0.7rem] uppercase tracking-[0.1em] sm:px-8 lg:px-10">
        <Link href="/" className="underline underline-offset-4 hover:no-underline">
          ← Auswahl
        </Link>
        <span className="text-white/40">Entwurfsvorschau</span>
        <span className="ml-auto flex flex-wrap items-center gap-x-4 gap-y-1">
          {entwuerfe.map((e) => (
            <Link
              key={e.nr}
              href={e.href}
              aria-current={e.nr === current ? "page" : undefined}
              className={
                e.nr === current
                  ? "bg-white px-2 py-0.5 text-black"
                  : "px-2 py-0.5 text-white/60 hover:text-white"
              }
            >
              {e.nr} · {e.name}
            </Link>
          ))}
        </span>
      </div>
    </div>
  );
}
