import { Welle } from "@/components/ui/Elemente";
import { company, openingHours } from "@/lib/site";

// KONTAKT – auf dem Meeresgrund (dunkelstes Blau). Bewusst ohne Formular:
// Ohne Server gäbe es niemanden, der es verschickt. Wege zu uns und
// Öffnungszeiten stehen groß und gut lesbar da.
export default function Kontakt() {
  return (
    <>
      <Welle bg="var(--color-bg)" fill="var(--color-deeper)" />
      <section className="deeper" id="kontakt" data-edit-id="kontakt" aria-labelledby="kontakt-titel">
        <div className="wrap section">
          <div className="kontakt-grid">
            <div>
              <h2 className="h2" id="kontakt-titel" data-edit-id="kontakt-title" style={{ color: "#fff" }}>
                So erreichen Sie uns
              </h2>
              <p className="lead" data-edit-id="kontakt-text">
                Wir sind für Sie da: telefonisch, per E-Mail oder persönlich bei uns in {company.city}.
              </p>
              <dl className="kontakt-liste" data-edit-id="kontakt-liste">
                <div>
                  <dt>Telefon</dt>
                  <dd><a href={`tel:${company.phoneHref}`}>{company.phoneDisplay}</a></dd>
                </div>
                <div>
                  <dt>E-Mail</dt>
                  <dd><a href={`mailto:${company.email}`}>{company.email}</a></dd>
                </div>
                <div>
                  <dt>Fax</dt>
                  <dd>{company.faxDisplay}</dd>
                </div>
                <div>
                  <dt>Anschrift</dt>
                  <dd>{company.street}<br />{company.zip} {company.city}</dd>
                </div>
              </dl>
            </div>

            <div className="oeffnung" data-edit-id="kontakt-zeiten">
              <h3>Öffnungszeiten</h3>
              <dl className="zeiten">
                {openingHours.map((z) => (
                  <div key={z.days} style={{ display: "contents" }}>
                    <dt>{z.days}</dt>
                    <dd>{z.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
