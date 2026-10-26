import Etikett from "@/components/ui/Etikett";
import { CREME, CREME_LEISE, DUNKEL, DUNKEL_KARTE, farben } from "@/lib/farben";
import { company, versprechen } from "@/lib/site";

// Erster dunkler Abschnitt der Startseite (im Vorbild der dunkle Block direkt
// unter dem Kopfbereich). Zweispaltig:
//
//   links   Etikett, Überschrift mit eingefärbtem Wort, kurzer Text
//   rechts  „Darauf können Sie sich verlassen": die Zusagen aus dem Ablauf
//           als Liste mit Häkchen, darunter ein Schlusssatz in Ocker
//
// Auf dem dunklen Grund werden Wörter direkt eingefärbt (Zinnober), nicht
// mit dem Marker hinterlegt – siehe `.markiert` in globals.css.
//
// BEWEGUNG: Beide Spalten erscheinen beim Scrollen, die rechte etwas später.
export default function Werkstatt() {
  return (
    <section className="abschnitt" style={{ backgroundColor: DUNKEL, color: CREME }}>
      <div className="seitenrand grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div data-reveal>
          <Etikett dunkel>Seit über {company.yearsExperience} Jahren in {company.city}</Etikett>
          <h2 className="titel mt-6">
            So <span style={{ color: farben[0].ton }}>arbeiten</span> wir
          </h2>
          <p className="mt-6 max-w-[34rem] text-[1.08rem] leading-relaxed" style={{ color: CREME_LEISE }}>
            Gestickt, bedruckt, foliert oder gedruckt wird bei uns am{" "}
            {company.street}. Drucksachen gestalten wir passend zu dem, was
            schon am Auto und am Schild steht.
          </p>
        </div>

        <div data-reveal className="[--verz:140ms]">
          <h3 className="text-[1.25rem] font-extrabold tracking-[-0.02em]">
            Darauf können Sie sich verlassen
          </h3>
          <ul className="mt-6 space-y-3">
            {versprechen.map((punkt, i) => (
              <li
                key={punkt}
                className="flex items-center gap-4 rounded-kachel px-4 py-3.5 text-[1rem] font-semibold"
                style={{ backgroundColor: DUNKEL_KARTE }}
              >
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: farben[i % farben.length].ton }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke={i % farben.length === 1 ? "#ffffff" : "#17161a"}
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
          <p className="mt-7 text-[1.15rem] font-extrabold" style={{ color: farben[2].ton }}>
            Produziert wird erst, wenn Sie zufrieden sind.
          </p>
        </div>
      </div>
    </section>
  );
}
