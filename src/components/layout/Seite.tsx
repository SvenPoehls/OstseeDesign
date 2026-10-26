import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Einblenden from "@/components/ui/Einblenden";

// Rahmen für jede Seite: Kopfzeile, Inhalt, Fußzeile – und das unsichtbare
// Skript, das Dinge beim Scrollen einblendet. Startseite, Impressum und
// Datenschutz benutzen alle dasselbe, damit sie sich gleich anfühlen.
export default function Seite({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Einblenden />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
