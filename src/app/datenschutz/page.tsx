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
// keine Analyse-Dienste, keine Karten-Einbindung, keine externen Schriften
// (Open Sans wird beim Bauen mit ausgeliefert, geprüft im fertigen Build).
//
// WICHTIG BEI EINEM UMZUG: Der Abschnitt „Hosting" nennt GitHub Pages als
// Anbieter. Zieht die Seite auf einen anderen Server um (z. B. eigenes
// Hosting unter ostseedesign.de), muss dort der neue Anbieter mit Anschrift
// stehen – das ist Pflichtangabe nach Art. 13 DSGVO.
export default function DatenschutzPage() {
  return (
    <LegalPage
      title="Datenschutzerklärung"
      intro="Der Schutz Ihrer persönlichen Daten ist uns wichtig. Nachfolgend informieren wir Sie über die Verarbeitung personenbezogener Daten beim Besuch dieser Website."
    >
      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der
        Datenschutz-Grundverordnung ist:
        <br />
        <strong>{company.fullName}</strong>
        <br />
        Inhaberin: Sara Fee Brandt
        <br />
        {company.street}, {company.zip} {company.city}
        <br />
        Telefon: <a href={`tel:${company.phoneHref}`}>{company.phoneDisplay}</a>
        <br />
        E-Mail: <a href={`mailto:${company.email}`}>{company.email}</a>
      </p>
      <p>
        Ein Datenschutzbeauftragter ist gesetzlich nicht zu benennen, da die
        Voraussetzungen des Art. 37 DSGVO und des § 38 BDSG hier nicht vorliegen.
        Bei Fragen zum Datenschutz wenden Sie sich bitte direkt an die oben
        genannten Kontaktdaten.
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
        Diese Website wird bei <strong>GitHub Pages</strong> gehostet. Anbieter
        ist die GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA
        94107, USA, ein Unternehmen der Microsoft-Gruppe.
      </p>
      <p>
        Beim Aufruf der Website erfasst der Anbieter automatisch Informationen,
        die Ihr Browser übermittelt. Dazu gehören in der Regel:
      </p>
      <ul>
        <li>IP-Adresse des anfragenden Geräts</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>aufgerufene Seite oder Datei und übertragene Datenmenge</li>
        <li>Browsertyp und Browserversion</li>
        <li>verwendetes Betriebssystem</li>
        <li>zuvor besuchte Seite (Referrer), sofern übermittelt</li>
      </ul>
      <p>
        Ohne diese Daten lässt sich die Website technisch nicht ausliefern.
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes
        Interesse liegt in einem stabilen und sicheren Betrieb der Website. Auf
        Speicherdauer und Löschung dieser Protokolldaten haben wir keinen
        Einfluss, sie richten sich nach den Vorgaben des Anbieters. Eine
        Zusammenführung dieser Daten mit anderen Datenquellen findet durch uns
        nicht statt.
      </p>
      <p>
        Da der Anbieter seinen Sitz in den USA hat, können dabei Daten in die
        USA übermittelt werden. Für europäische Nutzerdaten schließt GitHub eine
        Vereinbarung zur Auftragsverarbeitung, die die Standardvertragsklauseln
        der EU-Kommission nach Art. 46 DSGVO einbezieht. Näheres finden Sie in
        den Datenschutzhinweisen des Anbieters unter{" "}
        <a
          href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement"
          target="_blank"
          rel="noopener noreferrer"
        >
          docs.github.com
        </a>
        .
      </p>
      <p>
        Die Übertragung zwischen Ihrem Gerät und dem Server erfolgt
        verschlüsselt (TLS). Sie erkennen das am Schlosssymbol in der
        Adresszeile Ihres Browsers.
      </p>

      <h2>4. Lokale Speicherung des Datenschutz-Hinweises</h2>
      <p>
        Damit der Datenschutz-Hinweis nach Ihrer Bestätigung nicht bei jedem
        Besuch erneut erscheint, wird allein diese Bestätigung lokal in Ihrem
        Browser abgelegt (localStorage). Es wird dabei nichts an uns übertragen,
        und es entsteht kein Personenbezug. Da die Speicherung ausschließlich
        dazu dient, eine von Ihnen ausdrücklich gewünschte Funktion
        bereitzustellen, ist dafür keine Einwilligung erforderlich (§ 25 Abs. 2
        Nr. 2 TDDDG). Sie können den Eintrag jederzeit über die Einstellungen
        Ihres Browsers löschen.
      </p>
      <p>
        Cookies setzt diese Website nicht ein.
      </p>

      <h2>5. Kontaktaufnahme</h2>
      <p>
        Wenn Sie uns anrufen, ein Fax oder eine E-Mail schicken, verarbeiten wir
        die Angaben, die Sie uns dabei machen: Ihren Namen, Ihre Kontaktdaten
        und das, worum es geht. Wir nutzen diese Angaben, um Ihre Anfrage zu
        beantworten und einen möglichen Auftrag abzuwickeln.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, wenn es um die
        Anbahnung oder Durchführung eines Vertrags geht, sonst Art. 6 Abs. 1
        lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen).
        Ein Kontaktformular gibt es auf dieser Website nicht; Ihre Nachricht
        läuft direkt über Ihr eigenes Telefon- oder E-Mail-Programm.
      </p>
      <p>
        Wir löschen diese Daten, sobald sie für den Zweck nicht mehr gebraucht
        werden. Bei Anfragen ohne Auftrag ist das in der Regel nach Abschluss
        der Korrespondenz der Fall. Bei Aufträgen greifen die gesetzlichen
        Aufbewahrungsfristen des Handels- und Steuerrechts von sechs bzw. zehn
        Jahren.
      </p>
      <p>
        Die Angabe Ihrer Daten ist weder gesetzlich noch vertraglich
        vorgeschrieben. Ohne sie können wir Ihre Anfrage allerdings nicht
        beantworten. Eine automatisierte Entscheidungsfindung oder ein Profiling
        nach Art. 22 DSGVO findet nicht statt.
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
        Haben Sie in eine Verarbeitung eingewilligt, können Sie diese
        Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen (Art. 7
        Abs. 3 DSGVO). Bei Verarbeitungen auf Grundlage eines berechtigten
        Interesses können Sie aus Gründen, die sich aus Ihrer besonderen
        Situation ergeben, jederzeit widersprechen.
      </p>
      <p>
        Für alle Anliegen genügt eine formlose Nachricht an die oben genannten
        Kontaktdaten. Zusätzlich können Sie sich bei einer Aufsichtsbehörde
        beschweren. Zuständig ist für uns:
      </p>
      <p>
        Unabhängiges Landeszentrum für Datenschutz {company.region}
        <br />
        Holstenstraße 98, 24103 Kiel
        <br />
        <a href="https://www.datenschutzzentrum.de" target="_blank" rel="noopener noreferrer">
          www.datenschutzzentrum.de
        </a>
      </p>

      <h2>8. Aktualität</h2>
      <p>
        Diese Datenschutzerklärung wird angepasst, sobald sich etwas an der
        Website oder an der Rechtslage ändert. Stand: August 2026.
      </p>
    </LegalPage>
  );
}
