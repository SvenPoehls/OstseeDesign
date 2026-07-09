import { MailIcon, PhoneIcon } from "@/components/ui/Icons";
import { company } from "@/lib/site";

// Prominentes Kontakt-/CTA-Band (Anker #kontakt) mit Platz für einen QR-Code.
//
// QR-CODE EINFÜGEN: Sobald dein QR-Code-Bild vorliegt, lege es unter
// public/qr-code.png ab und ersetze den Platzhalter unten durch:
//   <img src="/qr-code.png" alt="QR-Code zum Kontakt" className="h-40 w-40 rounded-xl bg-white p-2" />
export default function CtaBand() {
  return (
    <section id="kontakt" className="scroll-mt-28 bg-accent py-16 text-white md:py-20">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[1.4fr_0.6fr]">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Nicht sicher, wo Sie anfangen? <br className="hidden sm:block" />
            Sprechen Sie mit uns.
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/85">
            Der erste Schritt zu Ihrer neuen Beschriftung oder Bekleidung ist ein
            kurzes Gespräch – unverbindlich und persönlich.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${company.phoneHref}`} className="btn-onaccent">
              <PhoneIcon className="h-4 w-4" />
              {company.phoneDisplay}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <MailIcon className="h-4 w-4" />
              E-Mail schreiben
            </a>
          </div>
        </div>

        {/* QR-Code-Bereich */}
        <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur">
          <div
            className="flex h-28 w-28 shrink-0 flex-col items-center justify-center gap-1 rounded-xl border-2 border-dashed border-white/50 text-center text-white/80"
            role="img"
            aria-label="Platzhalter für QR-Code"
          >
            <span className="text-3xl leading-none">▦</span>
            <span className="text-[0.65rem] font-semibold uppercase tracking-wider">QR-Code</span>
          </div>
          <p className="text-sm leading-relaxed text-white/85">
            Scannen &amp; direkt Kontakt aufnehmen.
            <span className="mt-1 block text-xs text-white/60">
              (QR-Code wird hier eingesetzt)
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
