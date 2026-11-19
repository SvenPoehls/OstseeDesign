import { MotivFoto } from "@/components/ui/Elemente";
import { services } from "@/lib/site";

// EINBLICKE – drei Fotos aus der Werkstatt, verschieden groß und gestaffelt.
// Die Fotos kommen aus lib/fotos.ts; die Beschriftung nennt das Motiv und
// bleibt vorerst als Platzhaltertext stehen.
export default function Einblicke() {
  const motive = [services[0].bilder[0], services[1].bilder[0], services[2].bilder[0]];
  return (
    <section className="section surface" id="einblicke" data-edit-id="einblicke" aria-labelledby="einblicke-titel">
      <div className="wrap">
        <h2 className="h2" id="einblicke-titel" data-edit-id="einblicke-title">Aus unserer Werkstatt</h2>
        <div className="einblicke" data-edit-id="einblicke-liste">
          {motive.map((m, i) => (
            <figure key={m} data-edit-id={`einblick-${i + 1}`}>
              <MotivFoto motiv={m} />
              <figcaption>Platzhalter: {m}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
