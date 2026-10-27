import Etikett from "@/components/ui/Etikett";
import { LEISE, SCHRIFT_AUF, farben } from "@/lib/farben";
import { company, openingHours } from "@/lib/site";

// Kontakt (Anker #kontakt) und Standort (Anker #standort), zweispaltig wie im
// Vorbild „Get in touch":
//
//   links   Etikett, Überschrift, kurzer Hinweis und die Wege zu uns – je
//           mit einem runden Farbzeichen: Telefon, E-Mail, Fax, Anschrift.
//           Darunter das Feld für den QR-Code.
//   rechts  Öffnungszeiten und Hinweis zum Parken auf einer hellen Karte.
//           (Im Vorbild steht hier ein Formular. Diese Seite hat bewusst
//           keins – ohne Server gäbe es niemanden, der es verschickt.)
//
// QR-CODE EINFÜGEN: Bild als public/qr-code.png ablegen und den Platzhalter
// unten ersetzen durch:
//   <img src={asset("/qr-code.png")} alt="QR-Code zum Kontakt"
//        className="h-24 w-24 rounded-bild bg-white p-2" />
// (asset kommt aus @/lib/assets und setzt den richtigen Pfad.)
export default function Contact() {
  const wege = [
    { art: "Telefon", wert: company.phoneDisplay, href: `tel:${company.phoneHref}`, zeichen: "telefon" },
    { art: "E-Mail", wert: company.email, href: `mailto:${company.email}`, zeichen: "post" },
    { art: "Fax", wert: company.faxDisplay, zeichen: "fax" },
    { art: "Anschrift", wert: `${company.street}, ${company.zip} ${company.city}`, zeichen: "haus" },
  ];

  return (
    <section id="kontakt" className="abschnitt scroll-mt-28">
      <div className="seitenrand grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div data-reveal>
          <Etikett>Kontakt</Etikett>
          <h2 className="titel mt-6">So erreichen Sie uns</h2>
          <p className="mt-6 max-w-[32rem] text-[1.05rem] leading-relaxed" style={{ color: LEISE }}>
            Rufen Sie am besten kurz an, bevor Sie herkommen – dann hat auch
            jemand Zeit für Sie.
          </p>

          <ul className="mt-9 grid gap-3 sm:grid-cols-2">
            {wege.map((w, i) => {
              const inhalt = (
                <>
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: farben[i].ton }}
                  >
                    <Zeichen art={w.zeichen} farbe={SCHRIFT_AUF[i]} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.72rem] font-bold uppercase tracking-[0.14em]" style={{ color: LEISE }}>
                      {w.art}
                    </span>
                    <span className="block break-words text-[1rem] font-extrabold">{w.wert}</span>
                  </span>
                </>
              );
              const klasse = "flex items-center gap-4 rounded-kachel bg-white/65 p-4 backdrop-blur";
              return (
                <li key={w.art}>
                  {w.href ? (
                    <a href={w.href} className={`${klasse} transition-transform duration-300 hover:-translate-y-0.5`}>
                      {inhalt}
                    </a>
                  ) : (
                    <div className={klasse}>{inhalt}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-6 flex items-center gap-5">
            <div
              className="flex h-24 w-24 shrink-0 items-center justify-center rounded-bild border border-dashed border-tinte/50 bg-white/50 text-center text-[0.72rem] text-tinte"
              role="img"
              aria-label="Platzhalter für QR-Code"
            >
              QR-Code
            </div>
            <p className="text-[0.92rem] leading-relaxed" style={{ color: LEISE }}>
              Scannen und direkt Kontakt aufnehmen.
              <span className="mt-1 block">(Code wird hier eingesetzt)</span>
            </p>
          </div>
        </div>

        <div
          id="standort"
          data-reveal
          className="relative scroll-mt-28 self-start overflow-hidden rounded-kachel bg-white/70 p-7 backdrop-blur [--verz:140ms] sm:p-10"
        >
          <span
            aria-hidden="true"
            className="treibt pointer-events-none absolute -right-24 -top-24 h-44 w-44 rounded-full opacity-40 mix-blend-multiply [--dauer:22s] [--dx:-1.2rem] [--dy:1rem]"
            style={{ backgroundColor: farben[2].ton }}
          />
          <h3 className="relative flex items-center gap-2.5 text-[0.82rem] font-bold uppercase tracking-[0.14em]">
            <span aria-hidden="true" className="h-3 w-3 rounded-full" style={{ backgroundColor: farben[2].ton }} />
            Öffnungszeiten
          </h3>
          <dl className="relative mt-5">
            {openingHours.map((row, i) => (
              <div
                key={row.days}
                className="flex items-baseline justify-between gap-4 py-4"
                style={{
                  borderBottom: i === openingHours.length - 1 ? "none" : "1px solid rgba(15,27,45,0.1)",
                }}
              >
                <dt className="text-[0.95rem]" style={{ color: LEISE }}>
                  {row.days}
                </dt>
                <dd
                  className={`whitespace-nowrap text-[0.95rem] ${row.byAppointment ? "" : "font-extrabold"}`}
                  style={row.byAppointment ? { color: LEISE } : undefined}
                >
                  {row.time}
                </dd>
              </div>
            ))}
          </dl>
          <p className="relative mt-6 border-t border-tinte/10 pt-6 text-[0.95rem] leading-relaxed" style={{ color: LEISE }}>
            Parken direkt vor dem Haus, größere Fahrzeuge fahren auf den Hof.
          </p>
        </div>
      </div>
    </section>
  );
}

// Kleine Strichzeichen für die Kontaktwege (eigene SVGs statt Schrift-
// Symbolen, die nicht jede Schrift enthält).
const PFADE: Record<string, string> = {
  telefon:
    "M6.6 3.5h2.6l1.4 4-2 1.3a12 12 0 0 0 6.6 6.6l1.3-2 4 1.4v2.6a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z",
  post: "M3.5 6.5h17v11h-17Z M3.5 7l8.5 6.5L20.5 7",
  fax: "M7 9V3.5h10V9 M5 9h14a1.5 1.5 0 0 1 1.5 1.5V17H17 M7 17H3.5v-6.5A1.5 1.5 0 0 1 5 9 M7 14h10v6.5H7Z",
  haus: "M3.5 11 12 4l8.5 7 M6 9.5v10h12v-10 M10 19.5v-5h4v5",
};

function Zeichen({ art, farbe }: { art: string; farbe: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke={farbe}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={PFADE[art]} />
    </svg>
  );
}
