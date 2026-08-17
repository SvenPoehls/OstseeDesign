import {
  ArrowIcon,
  ClockIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "@/components/ui/Icons";
import { company, openingHours } from "@/lib/site";

// „So finden Sie uns" – zwei Karten: eingebettete OpenStreetMap-Karte des
// Standorts (datenschutzfreundlich, kein Google-Tracking) und
// Öffnungszeiten/Kontakt. Hinweis: Die Karte lädt erst auf der veröffentlichten
// Seite (im Sandbox-Vorschaubild ohne Internet bleibt der Kartenbereich leer).
export default function FindUs() {
  const mapsQuery = encodeURIComponent(
    `${company.fullName}, ${company.street}, ${company.zip} ${company.city}`
  );
  const mapsUrl = `https://www.openstreetmap.org/search?query=${mapsQuery}`;

  // Kleinen Kartenausschnitt (Bounding-Box) rund um den Standort berechnen und
  // den Standort per Marker anzeigen.
  const { lat, lon } = company.coords;
  const dx = 0.0075; // Ost-West-Spanne
  const dy = 0.004; // Nord-Süd-Spanne
  const bbox = `${lon - dx},${lat - dy},${lon + dx},${lat + dy}`;
  const mapEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`;

  return (
    <section id="standort" className="scroll-mt-28 bg-paper py-20 md:py-28">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <span className="label justify-center">So finden Sie uns</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Persönlich vor Ort in {company.city}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Schauen Sie vorbei oder rufen Sie an – wir beraten Sie gern
            persönlich.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Standort + eingebettete Karte */}
          <div className="overflow-hidden card">
            <div className="relative">
              <iframe
                title={`Karte: Standort ${company.street}, ${company.zip} ${company.city}`}
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0"
              />
              {/* Adresse + Route-Link über der Karte. */}
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group absolute inset-x-4 bottom-4 flex items-center justify-between gap-4 rounded-xl bg-white/95 px-4 py-3 shadow-soft backdrop-blur"
                aria-label={`Route zu ${company.street}, ${company.zip} ${company.city} öffnen`}
              >
                <span className="text-sm font-semibold text-ink">
                  {company.street}, {company.city}
                </span>
                <span className="link-arrow">
                  Route
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            </div>
            <div className="flex items-start gap-3 p-6">
              <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span className="text-[15px] text-ink">
                {company.street}
                <br />
                {company.zip} {company.city}
              </span>
            </div>
          </div>

          {/* Öffnungszeiten + Kontakt */}
          <div className="card p-6 sm:p-8">
            <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-label text-accent">
              <ClockIcon className="h-4 w-4" />
              Öffnungszeiten
            </h3>
            <dl className="mt-4 divide-y divide-line text-[15px]">
              {openingHours.map((row) => (
                <div key={row.days} className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-ink">{row.days}</dt>
                  <dd className={row.byAppointment ? "text-ink-muted" : "font-semibold text-ink"}>
                    {row.time}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row">
              <a href={`tel:${company.phoneHref}`} className="btn-primary">
                <PhoneIcon className="h-4 w-4" />
                {company.phoneDisplay}
              </a>
              <a href={`mailto:${company.email}`} className="btn-ghost">
                <MailIcon className="h-4 w-4" />
                E-Mail
              </a>
            </div>
            <p className="mt-3 text-xs text-ink-muted">Fax: {company.faxDisplay}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
