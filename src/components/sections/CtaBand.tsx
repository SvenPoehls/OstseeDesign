import { MailIcon, PhoneIcon } from "@/components/ui/Icons";
import { company } from "@/lib/site";

// Kontakt-Block (Anker #kontakt) als große, stark gerundete Karte mit Platz
// für einen QR-Code.
//
// QR-CODE EINFÜGEN: Sobald dein QR-Code-Bild vorliegt, lege es unter
// public/qr-code.png ab und ersetze den Platzhalter unten durch:
//   <img src="/qr-code.png" alt="QR-Code zum Kontakt" className="h-28 w-28 rounded-2xl bg-white p-2" />
export default function CtaBand() {
  return (
    <section id="kontakt" className="bg-paper pb-20 sm:pb-28">
      <div className="container-site">
        <div className="grid items-center gap-10 rounded-[2.5rem] border-[1.5px] border-ink bg-accent p-8 text-white sm:p-12 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/30 px-4 py-1.5 text-xs font-bold uppercase tracking-label text-white/75">
              Kontakt
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Erzählen Sie uns, was Sie vorhaben.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">
              Ein kurzes Gespräch reicht, um herauszufinden, was zu Ihnen passt –
              unverbindlich, ehrlich und ohne Fachchinesisch.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${company.phoneHref}`} className="btn-pill-pop">
                <PhoneIcon className="h-4 w-4" />
                {company.phoneDisplay}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-white/50 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                <MailIcon className="h-4 w-4" />
                E-Mail schreiben
              </a>
            </div>
          </div>

          {/* QR-Code-Bereich */}
          <div className="flex items-center gap-4 rounded-3xl bg-white/10 p-5">
            <div
              className="flex h-24 w-24 shrink-0 flex-col items-center justify-center gap-1 rounded-2xl border-2 border-dashed border-white/50 text-center text-white/80"
              role="img"
              aria-label="Platzhalter für QR-Code"
            >
              <span className="text-2xl leading-none">▦</span>
              <span className="text-[0.6rem] font-bold uppercase tracking-wider">QR-Code</span>
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
