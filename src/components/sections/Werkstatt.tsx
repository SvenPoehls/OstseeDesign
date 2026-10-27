import Etikett from "@/components/ui/Etikett";
import { BAND, BAND_AKZENT, BAND_KARTE, BAND_LEISE, BAND_SCHRIFT, farben } from "@/lib/farben";
import { company, versprechen } from "@/lib/site";

// Erstes farbiges Band der Startseite (im Vorbild der dunkle Block direkt
// unter dem Kopfbereich). Zweispaltig:
//
//   links   Etikett, Überschrift mit eingefärbtem Wort, kurzer Text
//   rechts  „Darauf können Sie sich verlassen": drei Zusagen aus dem Ablauf
//           als große Zeilen mit Häkchen, darunter ein Schlusssatz in BAND_AKZENT
//
// Auf dem Band werden Wörter direkt eingefärbt (Akzentfarbe), nicht
// mit dem Marker hinterlegt – siehe `.markiert` in globals.css.
//
// BEWEGUNG: Beide Spalten erscheinen beim Scrollen, die rechte etwas später.
export default function Werkstatt() {
  return (
    <section className="abschnitt band" style={{ backgroundColor: BAND, color: BAND_SCHRIFT }}>
      <div className="seitenrand grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div data-reveal>
          <Etikett band>Seit über {company.yearsExperience} Jahren in {company.city}</Etikett>
          <h2 className="titel mt-6">
            So <span style={{ color: farben[0].ton }}>arbeiten</span> wir
          </h2>
          <p className="mt-6 max-w-[34rem] text-[1.08rem] leading-relaxed" style={{ color: BAND_LEISE }}>
            Gestickt, bedruckt, foliert oder gedruckt wird bei uns am{" "}
            {company.street}. Drucksachen gestalten wir passend zu dem, was
            schon am Auto und am Schild steht.
          </p>
        </div>

        <div data-reveal className="[--verz:140ms]">
          <h3 className="text-[1.25rem] font-extrabold tracking-[-0.02em]">
            Darauf können Sie sich verlassen
          </h3>
          {/* Drei Zusagen, alle in einer Farbe: ein Ring in der Akzentfarbe mit
              Häkchen – ruhig statt bunt. */}
          <ul className="mt-6 space-y-4">
            {versprechen.map((punkt) => (
              <li
                key={punkt}
                className="flex items-center gap-5 rounded-kachel px-5 py-6 text-[1.15rem] font-bold tracking-[-0.01em] sm:px-7 sm:text-[1.3rem]"
                style={{ backgroundColor: BAND_KARTE }}
              >
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                  style={{ boxShadow: `inset 0 0 0 2px ${farben[0].ton}` }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke={farben[0].ton}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12.5 10 17 19 7.5" />
                  </svg>
                </span>
                {punkt}
              </li>
            ))}
          </ul>
          <p className="mt-7 text-[1.15rem] font-extrabold" style={{ color: BAND_AKZENT }}>
            Produziert wird erst, wenn Sie zufrieden sind.
          </p>
        </div>
      </div>
    </section>
  );
}
