import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";
import { company, textilShopUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum von ${company.fullName} in ${company.city}.`,
  robots: { index: true, follow: true },
};

// Impressum nach § 5 DDG (Digitale-Dienste-Gesetz).
// Betreiberangaben übernommen vom Textilshop (ostseetextilien.de):
// Inhaberin Sara Fee Brandt, USt-IdNr. DE285883086, Steuernummer 2902202159.
export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum">
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        <strong>{company.fullName}</strong>
        <br />
        {company.street}
        <br />
        {company.zip} {company.city}
        <br />
        Deutschland
      </p>

      <h2>Vertreten durch</h2>
      <p>Inhaberin: Sara Fee Brandt</p>

      <h2>Kontakt</h2>
      <p>
        Telefon: <a href={`tel:${company.phoneHref}`}>{company.phoneDisplay}</a>
        <br />
        Fax: {company.faxDisplay}
        <br />
        E-Mail: <a href={`mailto:${company.email}`}>{company.email}</a>
      </p>

      <h2>Umsatzsteuer-Identifikationsnummer</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
        <br />
        DE285883086
        <br />
        Steuernummer: 2902202159
      </p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>
        Sara Fee Brandt
        <br />
        {company.street}, {company.zip} {company.city}
      </p>

      <h2>Externer Shop</h2>
      <p>
        Unser Textilshop wird unter{" "}
        <a href={textilShopUrl} target="_blank" rel="noopener noreferrer">
          ostseetextilien.de
        </a>{" "}
        betrieben. Für die dort verarbeiteten Daten und die dortigen Angaben
        gelten die Impressums- und Datenschutzhinweise des jeweiligen Angebots.
      </p>

      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{" "}
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
          https://ec.europa.eu/consumers/odr/
        </a>
        . Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>

      <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf
        diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
        bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet,
        übermittelte oder gespeicherte fremde Informationen zu überwachen oder
        nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
        hinweisen.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers.
      </p>
    </LegalPage>
  );
}
