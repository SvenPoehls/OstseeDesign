import { FLAECHE, LEISE, farben } from "@/lib/farben";
import { company, openingHours } from "@/lib/site";

// Standort. Die Anschrift steht groß in einer Petrol-Fläche, die
// Öffnungszeiten daneben auf ruhigem Grund.
//
// BEWEGUNG: Beide Flächen erscheinen beim Scrollen, die rechte einen Hauch
// später.
export default function FindUs() {
  return (
    <section
      id="standort"
      className="mt-16 grid scroll-mt-28 gap-5 sm:mt-24 lg:grid-cols-12"
    >
      <div
        data-reveal
        className="relative overflow-hidden rounded-[32px] p-7 sm:p-10 lg:col-span-7"
        style={{ backgroundColor: `${farben[1].ton}1a` }}
      >
        <span
          aria-hidden="true"
          className="treibt pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full opacity-50 mix-blend-multiply [--dauer:22s] [--dx:1.5rem] [--dy:-1rem]"
          style={{ backgroundColor: `${farben[1].ton}59` }}
        />
        <div className="relative">
          <p className="text-[0.88rem] font-bold" style={{ color: farben[1].ton }}>
            Standort
          </p>
          <p className="mt-4 text-[clamp(1.7rem,4vw,2.6rem)] font-extrabold leading-tight tracking-[-0.04em]">
            {company.street}
            <br />
            {company.zip} {company.city}
          </p>
          <p className="mt-5 max-w-[30rem] leading-relaxed" style={{ color: LEISE }}>
            Rufen Sie am besten kurz an, bevor Sie herkommen – dann hat auch
            jemand Zeit für Sie. Parken direkt vor dem Haus, größere Fahrzeuge
            fahren auf den Hof.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            <a
              href={`tel:${company.phoneHref}`}
              className="rounded-full bg-white/80 px-5 py-2.5 text-[0.92rem] font-bold transition-transform duration-300 hover:-translate-y-0.5"
            >
              {company.phoneDisplay}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="rounded-full bg-white/80 px-5 py-2.5 text-[0.92rem] font-bold transition-transform duration-300 hover:-translate-y-0.5"
            >
              {company.email}
            </a>
            <span
              className="rounded-full bg-white/60 px-5 py-2.5 text-[0.92rem]"
              style={{ color: LEISE }}
            >
              Fax {company.faxDisplay}
            </span>
          </div>
        </div>
      </div>

      <div
        data-reveal
        className="rounded-[32px] p-7 [--verz:140ms] sm:p-10 lg:col-span-5"
        style={{ backgroundColor: FLAECHE }}
      >
        {/* Ocker auf Weiß hat zu wenig Kontrast für Text – deshalb die
            Überschrift in dunklem Ton und der Farbpunkt davor. */}
        <p className="flex items-center gap-2 text-[0.88rem] font-bold">
          <span
            aria-hidden="true"
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: farben[2].ton }}
          />
          Öffnungszeiten
        </p>
        <dl className="mt-5">
          {openingHours.map((row, i) => (
            <div
              key={row.days}
              className="flex items-baseline justify-between gap-4 py-4"
              style={{
                borderBottom:
                  i === openingHours.length - 1
                    ? "none"
                    : "1px solid rgba(23,22,26,0.1)",
              }}
            >
              <dt className="text-[0.95rem]" style={{ color: LEISE }}>
                {row.days}
              </dt>
              <dd
                className={`whitespace-nowrap text-[0.95rem] ${
                  row.byAppointment ? "" : "font-extrabold"
                }`}
                style={row.byAppointment ? { color: LEISE } : undefined}
              >
                {row.time}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
