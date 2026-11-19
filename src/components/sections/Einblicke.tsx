import { FotoPlatzhalter } from "@/components/ui/Elemente";
import { services } from "@/lib/site";

// EINBLICKE – drei Fotos aus der Werkstatt, verschieden groß und gestaffelt.
// Noch Platzhalter: Die Beschriftung sagt, welches Motiv hineinkommt.
export default function Einblicke() {
  const motive = [services[0].bilder[0], services[1].bilder[1], services[2].bilder[0]];
  return (
    <section className="section surface" id="einblicke" data-edit-id="einblicke" aria-labelledby="einblicke-titel">
      <div className="wrap">
        <p className="eyebrow">Aus unserer Werkstatt</p>
        <h2 className="h2" id="einblicke-titel" data-edit-id="einblicke-title">Einblicke in unsere Arbeit</h2>
        <div className="einblicke" data-edit-id="einblicke-liste">
          {motive.map((m, i) => (
            <figure key={m} data-edit-id={`einblick-${i + 1}`}>
              <FotoPlatzhalter>{m}</FotoPlatzhalter>
              <figcaption>Platzhalter: {m}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
