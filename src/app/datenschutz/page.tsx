import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";
import { company, textilShopUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: `Datenschutzerklärung von ${company.fullName} in ${company.city}.`,
  robots: { index: true, follow: true },
};

// Datenschutzerklärung (DSGVO). Bewusst auf die tatsächliche, datensparsame
// Umsetzung dieser Website zugeschnitten: keine Cookies für Tracking/Marketing,
// keine externen Analyse-Dienste, keine Einbindung von Drittanbieter-Karten
// oder Web-Fonts (Schriften self-hosted). Vor Veröffentlichung die
// [PLATZHALTER] (verantwortliche Person, ggf. Hosting-Anbieter) ergänzen.
export default function DatenschutzPage() {
  return (
    <LegalPage
      title="Datenschutzerklärung"
      intro="Der Schutz Ihrer persönlichen Daten ist uns wichtig. Nachfolgend informieren wir Sie über die Verarbeitung personenbezogener Daten beim Besuch dieser Website."
    >
      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website ist:
        <br />
        <strong>{company.fullName}</strong>
        <br />
        {company.street}, {company.zip} {company.city}
        <br />
        Telefon: <a href={`tel:${company.phoneHref}`}>{company.phoneDisplay}</a>
        <br />
        E-Mail: <a href={`mailto:${company.email}`}>{company.email}</a>
      </p>

      <h2>2. Grundsatz der Datensparsamkeit</h2>
      <p>
        Diese Website verarbeitet so wenige personenbezogene Daten wie möglich.
        Wir setzen <strong>keine</strong> Tracking- oder Marketing-Cookies ein,
        binden <strong>keine</strong> Analyse-Dienste (z. B. Google Analytics)
        ein und laden keine externen Schriftarten oder Karten-Dienste beim
        Seitenaufruf. Verwendete Schriften werden mit der Seite ausgeliefert.
      </p>

      <h2>3. Hosting und Server-Logfiles</h2>
      <p>
        Beim Aufruf dieser Website werden durch den Hosting-Anbieter
        automatisch Informationen in sogenannten Server-Logfiles erfasst, die
        Ihr Browser übermittelt. Dies sind in der Regel:
      </p>
      <ul>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>aufgerufene Seite / Datei</li>
        <li>übertragene Datenmenge</li>
        <li>verwendeter Browsertyp und dessen Version</li>
        <li>Betriebssystem</li>
        <li>gekürzte bzw. anonymisierte IP-Adresse</li>
      </ul>
      <p>
        Diese Daten sind technisch erforderlich, um die Website stabil und
        sicher auszuliefern. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
        (berechtigtes Interesse an einem technisch fehlerfreien und sicheren
        Betrieb). Hosting-Anbieter: [PLATZHALTER: Name und Anschrift des
        Hosting-Anbieters].
      </p>

      <h2>4. Lokale Speicherung des Datenschutz-Hinweises</h2>
      <p>
        Damit der Datenschutz-Hinweis nach Ihrer Bestätigung nicht bei jedem
        Besuch erneut erscheint, speichern wir ausschließlich diese Bestätigung
        technisch notwendig lokal in Ihrem Browser (localStorage). Es werden
        dabei keine personenbezogenen Daten an uns übertragen.
      </p>

      <h2>5. Kontaktaufnahme</h2>
      <p>
        Wenn Sie uns per Telefon, Fax oder E-Mail kontaktieren, verarbeiten wir
        die von Ihnen mitgeteilten Daten (z. B. Name, Kontaktdaten, Ihr
        Anliegen), um Ihre Anfrage zu bearbeiten. Rechtsgrundlage ist Art. 6
        Abs. 1 lit. b DSGVO (Anbahnung/Erfüllung eines Vertrags) bzw. lit. f
        DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). Wir
        löschen diese Daten, sobald sie für den Zweck nicht mehr erforderlich
        sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
      </p>

      <h2>6. Externer Textilshop</h2>
      <p>
        Der Link zu unserem Textilshop unter{" "}
        <a href={textilShopUrl} target="_blank" rel="noopener noreferrer">
          ostseetextilien.de
        </a>{" "}
        führt zu einem eigenständigen Angebot. Erst mit dem Klick verlassen Sie
        diese Website. Für die Datenverarbeitung im Shop gilt die dortige
        Datenschutzerklärung.
      </p>

      <h2>7. Ihre Rechte</h2>
      <p>Sie haben nach der DSGVO insbesondere das Recht auf:</p>
      <ul>
        <li>Auskunft über die zu Ihnen gespeicherten Daten (Art. 15 DSGVO)</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
        <li>Löschung (Art. 17 DSGVO)</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
      </ul>
      <p>
        Zudem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
        zu beschweren. Für {company.region} ist dies das Unabhängige
        Landeszentrum für Datenschutz Schleswig-Holstein (ULD).
      </p>

      <h2>8. Aktualität</h2>
      <p>
        Diese Datenschutzerklärung wird angepasst, sobald sich Änderungen an der
        Website oder an der Rechtslage ergeben.
      </p>
    </LegalPage>
  );
}
