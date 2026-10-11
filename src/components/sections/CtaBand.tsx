import { MailIcon, PhoneIcon } from "@/components/ui/Icons";
import { company } from "@/lib/site";

// Kontakt-Block (Anker #kontakt): ruhige, flächige Karte in der Hauptfarbe
// mit Platz für einen QR-Code.
//
// QR-CODE EINFÜGEN: Sobald dein QR-Code-Bild vorliegt, lege es unter
// public/qr-code.png ab und ersetze den Platzhalter unten durch:
//   <img src="/qr-code.png" alt="QR-Code zum Kontakt" className="h-28 w-28 rounded-lg bg-white p-2" />
export default function CtaBand() {
  return (
    <section id="kontakt" className="bg-paper pb-14 sm:pb-28">
      <div className="container-site">
        <div className="grid items-center gap-10 rounded-lg bg-accent p-6 text-white shadow-soft-lg sm:p-12 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-label text-white/70">
              Kontakt
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Was haben Sie vor?
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">
              Ein Anruf reicht meistens schon. Sagen Sie kurz, worum es geht,
              den Rest klären wir zusammen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {/* Auf der dunklen Karte ist Weiß die klarste Hauptschaltfläche –
                  die graue Signalfarbe würde sich zu wenig abheben. */}
              <a
                href={`tel:${company.phoneHref}`}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold tracking-tight text-ink shadow-sm transition-colors duration-200 hover:bg-white/90"
              >
                <PhoneIcon className="h-4 w-4" />
                {company.phoneDisplay}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-5 py-2.5 text-sm font-semibold tracking-tight text-white transition-colors hover:bg-white/10"
              >
                <MailIcon className="h-4 w-4" />
                E-Mail schreiben
              </a>
            </div>
          </div>

          {/* QR-Code-Bereich */}
          <div className="flex items-center gap-4 rounded-lg bg-white/10 p-5">
            <div
              className="flex h-24 w-24 shrink-0 flex-col items-center justify-center gap-1 rounded-md border border-dashed border-white/50 text-center text-white/80"
              role="img"
              aria-label="Platzhalter für QR-Code"
            >
              <span className="text-2xl leading-none">▦</span>
              <span className="text-[0.6rem] font-semibold uppercase tracking-wider">QR-Code</span>
            </div>
            <p className="text-sm leading-relaxed text-white/85">
              Scannen &amp; direkt Kontakt aufnehmen.
              <span className="mt-1 block text-xs text-white/60">
                (QR-Code wird hier eingesetzt)
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
