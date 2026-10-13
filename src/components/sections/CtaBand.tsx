import { company } from "@/lib/site";

// Kontaktband (Anker #kontakt): eine schwarze Fläche über die volle Breite.
// Statt zweier Schaltflächen steht hier das, worauf es ankommt – die
// Telefonnummer, groß genug zum Abtippen vom Sofa aus.
//
// QR-CODE EINFÜGEN: Bild als public/qr-code.png ablegen und den Platzhalter
// unten ersetzen durch:
//   <img src={asset("/qr-code.png")} alt="QR-Code zum Kontakt"
//        className="h-24 w-24 bg-paper p-2" />
// (asset kommt aus @/lib/assets und setzt den richtigen Pfad.)
export default function CtaBand() {
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden border-y border-ink bg-ink text-paper"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(242,239,231,0.5) 0 1px, transparent 1px calc(100% / 6))",
        }}
      />

      <div className="wrap relative py-16 sm:py-24">
        <div className="grid12 border-t border-paper/50 pt-4">
          <p className="col-span-4 text-[0.72rem] font-semibold uppercase tracking-label text-paper/60 lg:col-span-1">
            04
          </p>
          <h2 className="display col-span-4 mt-2 text-[clamp(2.1rem,6.5vw,3.6rem)] lg:col-span-6 lg:mt-0">
            Was haben Sie vor?
          </h2>
          <p className="col-span-4 mt-5 text-paper/70 lg:col-span-4 lg:col-start-9 lg:mt-0">
            Ein Anruf reicht meistens schon. Sagen Sie kurz, worum es geht –
            den Rest klären wir zusammen.
          </p>
        </div>

        <div className="grid12 mt-12 items-end gap-y-10 sm:mt-16">
          <div className="col-span-4 lg:col-span-8">
            <p className="text-[0.72rem] uppercase tracking-label text-paper/60">
              Einfach anrufen
            </p>
            <a
              href={`tel:${company.phoneHref}`}
              className="display mt-3 block text-[clamp(2.4rem,9vw,5.4rem)] text-paper"
            >
              {company.phoneDisplay}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="ul-link mt-6 inline-block text-[1.05rem] text-paper/85"
            >
              {company.email}
            </a>
          </div>

          {/* QR-Code – noch Platzhalter. */}
          <div className="col-span-4 lg:col-span-3 lg:col-start-10">
            <div className="flex items-start gap-4">
              <div
                className="flex h-24 w-24 shrink-0 items-center justify-center border border-dashed border-paper/50 text-center text-[0.6rem] uppercase tracking-label text-paper/60"
                role="img"
                aria-label="Platzhalter für QR-Code"
              >
                QR-Code
              </div>
              <p className="text-[0.85rem] leading-relaxed text-paper/70">
                Scannen und direkt Kontakt aufnehmen.
                <span className="mt-1 block text-paper/45">
                  (Code wird hier eingesetzt)
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
