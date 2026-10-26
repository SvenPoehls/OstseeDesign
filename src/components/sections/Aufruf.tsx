import Etikett from "@/components/ui/Etikett";
import { CREME, CREME_LEISE, DUNKEL, TINTE, farben } from "@/lib/farben";
import { company } from "@/lib/site";

// Schlussaufruf: ein dunkler Abschnitt, alles mittig (im Vorbild „Ready for
// the next chapter"). Unter dem Text schwingt eine gestrichelte Linie nach
// unten zu den Knöpfen und weiter zum Kontaktbereich.
//
// BEWEGUNG: Text erscheint beim Scrollen, die Linie zeichnet sich von oben.
export default function Aufruf() {
  return (
    <section className="abschnitt" style={{ backgroundColor: DUNKEL, color: CREME }}>
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
        <p className="mt-4 text-[1.15rem] font-extrabold" style={{ color: farben[2].ton }}>
          Den Rest klären wir zusammen.
        </p>

        {/* Kurze gestrichelte Schlaufe nach unten */}
        <svg
          aria-hidden="true"
          data-reveal
          data-art="linie"
          viewBox="0 0 120 110"
          fill="none"
          className="mt-4 h-24 w-28 [--verz:300ms]"
        >
          <path
            d="M 20 8 C 20 50 100 40 92 70 C 86 92 60 92 60 102"
            stroke={farben[0].ton}
            strokeWidth="2.5"
            strokeDasharray="8 7"
            strokeLinecap="round"
          />
          <path
            d="M 51 93 L 60 104 L 69 93"
            stroke={farben[0].ton}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="mt-4 flex flex-wrap justify-center gap-3">
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
