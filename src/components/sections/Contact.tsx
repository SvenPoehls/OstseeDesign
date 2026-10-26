import { TINTE, farben } from "@/lib/farben";
import { company } from "@/lib/site";

// Kontakt (Anker #kontakt): eine volle Farbfläche, rund wie alles andere.
// Darauf steht das, worauf es ankommt – die Telefonnummer.
//
// Die Schrift ist dunkel, nicht weiß: Weiß auf diesem Orange hat nur 2,6 : 1
// Kontrast, Tinte dagegen 6,9 : 1.
//
// BEWEGUNG: Die Fläche erscheint beim Scrollen, der Magenta-Kreis in der
// Ecke treibt dabei ganz langsam.
//
// QR-CODE EINFÜGEN: Bild als public/qr-code.png ablegen und den Platzhalter
// unten ersetzen durch:
//   <img src={asset("/qr-code.png")} alt="QR-Code zum Kontakt"
//        className="h-24 w-24 rounded-[24px] bg-white p-2" />
// (asset kommt aus @/lib/assets und setzt den richtigen Pfad.)
export default function Contact() {
  return (
    <section
      id="kontakt"
      data-reveal
      className="relative mt-16 scroll-mt-28 overflow-hidden rounded-[32px] p-8 text-tinte sm:mt-24 sm:p-14"
      style={{ backgroundColor: farben[0].ton }}
    >
      <span
        aria-hidden="true"
        className="treibt pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full opacity-50 mix-blend-multiply [--dauer:21s] [--dx:-1.8rem] [--dy:1.4rem]"
        style={{ backgroundColor: farben[3].ton }}
      />
      <div className="relative grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
        <div>
          <p className="text-[0.88rem] font-bold text-tinte/80">Kontakt</p>
          <h2 className="mt-3 text-[clamp(1.9rem,4.4vw,3rem)] font-extrabold leading-tight tracking-[-0.04em]">
            Was haben Sie vor?
          </h2>
          <p className="mt-4 max-w-[32rem] leading-relaxed text-tinte/85">
            Ein Anruf reicht meistens schon. Sagen Sie kurz, worum es geht – den
            Rest klären wir zusammen.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${company.phoneHref}`}
              className="rounded-full bg-white px-7 py-4 text-[1.05rem] font-extrabold transition-transform duration-300 hover:-translate-y-0.5"
              style={{ color: TINTE }}
            >
              {company.phoneDisplay}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="rounded-full px-7 py-4 text-[1.05rem] font-bold text-tinte transition-transform duration-300 hover:-translate-y-0.5"
              style={{ boxShadow: "inset 0 0 0 1.5px rgba(23,22,26,0.45)" }}
            >
              E-Mail schreiben
            </a>
          </div>
        </div>

        <div className="flex items-start gap-5">
          <div
            className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[24px] border border-dashed border-tinte/45 text-center text-[0.72rem] text-tinte/80"
            role="img"
            aria-label="Platzhalter für QR-Code"
          >
            QR-Code
          </div>
          <p className="text-[0.92rem] leading-relaxed text-tinte/85">
            Scannen und direkt Kontakt aufnehmen.
            <span className="mt-1 block text-tinte/80">
              (Code wird hier eingesetzt)
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
