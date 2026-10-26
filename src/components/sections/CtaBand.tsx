import { Kritzelecke } from "@/components/ui/Hand";
import { company } from "@/lib/site";

// Kontaktband (Anker #kontakt). Früher eine rote Vollfläche – jetzt ein
// Blatt, das obenauf liegt: mit Klebeband geheftet, von Hand umrandet und
// ein zweites Mal nachgezogen. Darauf steht das, worauf es ankommt – die
// Telefonnummer, groß genug zum Abtippen vom Sofa aus.
//
// QR-CODE EINFÜGEN: Bild als public/qr-code.png ablegen und den Platzhalter
// unten ersetzen durch:
//   <img src={asset("/qr-code.png")} alt="QR-Code zum Kontakt"
//        className="h-24 w-24" />
// (asset kommt aus @/lib/assets und setzt den richtigen Pfad.)
export default function CtaBand() {
  return (
    <section id="kontakt" className="pb-20 pt-16 sm:pb-28 sm:pt-20">
      <div className="wrap">
        <div className="grid12 linie-hand-oben linie-hand-stark pt-5">
          <p className="etikett etikett-rot col-span-4 lg:col-span-1">04</p>
          <h2 className="hand col-span-4 mt-2 text-[clamp(2.5rem,7.5vw,4.4rem)] lg:col-span-6 lg:mt-0">
            Was haben Sie vor?
          </h2>
          <p className="col-span-4 mt-5 text-ink-soft lg:col-span-4 lg:col-start-9 lg:mt-0">
            Ein Anruf reicht meistens schon. Sagen Sie kurz, worum es geht –
            den Rest klären wir zusammen.
          </p>
        </div>

        {/* Das aufgelegte Blatt. */}
        <div className="relative mt-12 sm:mt-16">
          <div className="zettel rahmen rahmen-doppelt schief-1 relative px-6 py-10 text-ink sm:px-12 sm:py-14">
            <span
              aria-hidden="true"
              className="klebeband schief-3 -top-3 left-8 hidden sm:block"
            />
            <span
              aria-hidden="true"
              className="klebeband schief-2 -top-3 right-10 hidden sm:block"
            />
            <Kritzelecke
              className="absolute -bottom-1 -right-1 hidden h-10 w-10 text-mark/60 sm:block"
            />

            <div className="grid12 items-end gap-y-10">
              <div className="col-span-4 lg:col-span-8">
                <p className="etikett">Einfach anrufen</p>
                <a
                  href={`tel:${company.phoneHref}`}
                  className="ul-link hand mt-4 inline-block text-[clamp(2.6rem,9.5vw,6rem)] leading-none text-ink"
                >
                  {company.phoneDisplay}
                </a>
                <br />
                <a
                  href={`mailto:${company.email}`}
                  className="ul-link ul-zeichnen notiz mt-7 inline-block text-[1.15rem] text-ink-soft"
                >
                  {company.email}
                </a>
              </div>

              {/* QR-Code – noch Platzhalter, deshalb als Skizze. */}
              <div className="col-span-4 lg:col-span-3 lg:col-start-10">
                <div className="flex items-start gap-4">
                  {/* Statt einer leeren Fläche eine kleine Skizze von dem,
                      was hier hinkommt: die drei Ecken eines QR-Codes. */}
                  <div
                    className="rahmen relative h-24 w-24 shrink-0"
                    role="img"
                    aria-label="Platzhalter für QR-Code"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      className="skizze-strich absolute inset-0 h-full w-full text-ink-soft"
                      viewBox="0 0 40 40"
                    >
                      <path d="M3 10c0-3 0-5 1-6 3-1 6-1 9 0 1 2 1 4 1 7 0 2 0 4-1 5-3 1-6 1-9 0-1-1-1-3-1-6z" />
                      <path d="M26 10c0-3 0-5 1-6 3-1 6-1 9 0 1 2 1 4 1 7 0 2 0 4-1 5-3 1-6 1-9 0-1-1-1-3-1-6z" />
                      <path d="M3 30c0-3 0-5 1-6 3-1 6-1 9 0 1 2 1 4 1 7 0 2 0 4-1 5-3 1-6 1-9 0-1-1-1-3-1-6z" />
                      <path d="M22 22h4M30 22h3M26 26v4M22 30h3M30 29v5M34 31h3" opacity=".7" />
                    </svg>
                  </div>
                  <p className="notiz text-[1rem] leading-relaxed text-ink-soft">
                    Scannen und direkt Kontakt aufnehmen.
                    <span className="mt-1 block text-ink-soft/70">
                      (Code wird hier eingesetzt)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
