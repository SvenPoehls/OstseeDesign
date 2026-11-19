import Link from "next/link";
import { company, leistungsLink, services, versprechen } from "@/lib/site";
import { Welle } from "@/components/ui/Elemente";

// UNTER WASSER – das Meer aus dem Kopfbereich geht hier in tieferes Blau über.
// Oben ein Streifen aus weich ineinander laufenden Blautönen, dann „Alles aus
// einer Hand" und die vier Leistungen als Spalten mit feiner Linie.
export default function Leistungen() {
  return (
    <>
      <section className="deep" id="leistungen" data-edit-id="leistungen" aria-labelledby="leistungen-titel">
        <svg className="deep-top" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <defs>
            <filter id="deep-blur" x="-10%" y="-40%" width="120%" height="180%">
              <feGaussianBlur stdDeviation="26" />
            </filter>
          </defs>
          <g filter="url(#deep-blur)">
            <rect x="-200" y="-200" width="1840" height="260" fill="#7aa5dc" />
            <rect x="-200" y="50" width="1840" height="80" fill="#5f8fcf" />
            <rect x="-200" y="120" width="1840" height="80" fill="#4478bf" />
            <rect x="-200" y="190" width="1840" height="400" fill="#2f66b4" />
          </g>
        </svg>
        <svg className="rays" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
          <g fill="#fff"><path d="M240 0L320 0 480 500 360 500Z" /><path d="M700 0L750 0 920 500 830 500Z" /></g>
        </svg>

        <div className="wrap deep-in">
          <p className="eyebrow">Alles aus einer Hand</p>
          <h2 className="h2-big" id="leistungen-titel" data-edit-id="leistungen-title">
            Ihr Werbepartner in {company.city}
          </h2>

          <ul className="versprechen" data-edit-id="leistungen-versprechen">
            {versprechen.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>

          <div className="leistungen" data-edit-id="leistungen-liste">
            {services.map((s, i) => (
              <article className="leistung" key={s.id} data-edit-id={`leistung-${i + 1}`}>
                <h3>{s.title}</h3>
                {s.motto && <p className="motto">{s.motto}</p>}
                <p>{s.teaser}</p>
                <ul>
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                {s.external ? (
                  <a className="mehr" href={leistungsLink(s)} target="_blank" rel="noopener noreferrer">
                    Zum Textilshop&nbsp;↗
                  </a>
                ) : (
                  <Link className="mehr" href={leistungsLink(s)}>
                    Mehr zu {s.title}
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
      <Welle bg="var(--color-deep)" fill="var(--color-bg)" />
    </>
  );
}
