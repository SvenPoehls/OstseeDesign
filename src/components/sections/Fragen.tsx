import { company, fragen, oeffnungszeitenProTag } from "@/lib/site";

// HÄUFIGE FRAGEN – Aufklappliste mit <details>, funktioniert ohne JavaScript
// und per Tastatur. Bei der Frage nach der Erreichbarkeit stehen darunter die
// Öffnungszeiten und Kontaktwege.
export default function Fragen() {
  return (
    <section className="section" id="fragen" data-edit-id="fragen" aria-labelledby="fragen-titel">
      <div className="wrap">
        <p className="eyebrow">Häufige Fragen</p>
        <h2 className="h2" id="fragen-titel" data-edit-id="fragen-title">Was Sie wissen möchten</h2>
        <div className="fragen" data-edit-id="fragen-liste">
          {fragen.map((f, i) => (
            <details key={f.frage} data-edit-id={`frage-${i + 1}`}>
              <summary>{f.frage}</summary>
              <div className="antwort">
                <p>{f.antwort}</p>
                {f.erreichbarkeit && (
                  <>
                    <dl className="zeiten">
                      {oeffnungszeitenProTag.map((z) => (
                        <div key={z.tag} style={{ display: "contents" }}>
                          <dt>{z.tag}</dt>
                          <dd>{z.time}</dd>
                        </div>
                      ))}
                    </dl>
                    <ul className="wege">
                      <li>Telefon: <a href={`tel:${company.phoneHref}`}>{company.phoneDisplay}</a></li>
                      <li>E-Mail: <a href={`mailto:${company.email}`}>{company.email}</a></li>
                      <li>{company.street}, {company.zip} {company.city}</li>
                    </ul>
                  </>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
