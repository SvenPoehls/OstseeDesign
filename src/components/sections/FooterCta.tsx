import { PhoneIcon } from "@/components/ui/Icons";
import { company } from "@/lib/site";

// Großer Abschluss-CTA mit „Sunrise"-Verlauf (Orange steigt von unten auf) –
// analog zur Vorlage. Darunter der Telefon-CTA.
export default function FooterCta() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 90% at 50% 130%, var(--orange) 0%, rgba(255,97,2,0.35) 35%, var(--paper) 78%)",
      }}
    >
      <div className="container-site py-24 text-center sm:py-32">
        <h2 className="mx-auto max-w-[18ch] font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
          Lassen Sie uns etwas <span className="em-italic">Großartiges</span> gestalten.
        </h2>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={`tel:${company.phoneHref}`} className="btn-solid bg-ink text-paper hover:bg-orange">
            <PhoneIcon className="h-4 w-4" />
            {company.phoneDisplay}
          </a>
          <a href={`mailto:${company.email}`} className="btn-outline">
            E-Mail schreiben
          </a>
        </div>
      </div>
    </section>
  );
}
