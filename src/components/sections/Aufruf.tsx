import Etikett from "@/components/ui/Etikett";
import { APRICOT, CREME, CREME_LEISE, DUNKEL, TINTE, farben } from "@/lib/farben";
import { company } from "@/lib/site";

// Schlussaufruf: ein dunkler Abschnitt, alles mittig (im Vorbild „Ready for
// the next chapter"). Unter dem Text schwingt eine gestrichelte Linie nach
// unten zu den Knöpfen und weiter zum Kontaktbereich.
//
// BEWEGUNG: Text erscheint beim Scrollen, die Linie zeichnet sich von oben.
export default function Aufruf() {
  return (
    <section className="abschnitt dunkel" style={{ backgroundColor: DUNKEL, color: CREME }}>
      <div data-reveal className="seitenrand flex flex-col items-center text-center">
        <Etikett dunkel mitte>
          Der nächste Schritt
        </Etikett>
        <h2 className="titel mt-6 max-w-[48rem]">
          Was haben Sie <span style={{ color: farben[0].ton }}>vor?</span>
        </h2>
        <p className="mt-6 max-w-[34rem] text-[1.1rem] leading-relaxed" style={{ color: CREME_LEISE }}>
          Ein Anruf reicht meistens schon. Sagen Sie kurz, worum es geht.
        </p>
        <p className="mt-4 text-[1.15rem] font-extrabold" style={{ color: APRICOT }}>
          Den Rest klären wir zusammen.
        </p>

        {/* Gestrichelter S-Bogen nach unten, der genau in der Pfeilspitze
            endet. `pathLength="100"` mit Strich 6 und Lücke 5,75 geht exakt auf
            (8 × 11,75 + 6 = 100): Die Linie beginnt und endet mit einem Strich,
            statt irgendwo in einer Lücke vor der Spitze aufzuhören. Das letzte
            Stück ist eine gerade Linie senkrecht nach unten, damit Linie und
            Spitze in dieselbe Richtung zeigen.
            Sie zeichnet sich beim Hinscrollen von oben nach unten. */}
        <svg
          aria-hidden="true"
          data-reveal
          data-art="linie"
          data-start="oben"
          viewBox="0 0 160 150"
          fill="none"
          className="mt-6 h-36 w-40 [--verz:300ms]"
        >
          <path
            d="M 40 6 C 40 50 122 36 120 74 C 118 104 80 96 80 116 L 80 138"
            pathLength="100"
            stroke={farben[0].ton}
            strokeWidth="2.5"
            strokeDasharray="6 5.75"
            strokeLinecap="round"
          />
          <path
            d="M 68 127 L 80 140 L 92 127"
            stroke={farben[0].ton}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a
            href={`tel:${company.phoneHref}`}
            className="rounded-full bg-white px-7 py-4 text-[1rem] font-extrabold transition-transform duration-300 hover:-translate-y-0.5"
            style={{ color: TINTE }}
          >
            {company.phoneDisplay}
          </a>
          <a
            href={`mailto:${company.email}`}
            className="rounded-full px-7 py-4 text-[1rem] font-bold transition-transform duration-300 hover:-translate-y-0.5"
            style={{ boxShadow: `inset 0 0 0 1.5px ${CREME_LEISE}80`, color: CREME }}
          >
            E-Mail schreiben
          </a>
        </div>
      </div>
    </section>
  );
}
