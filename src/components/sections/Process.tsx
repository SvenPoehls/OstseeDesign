import type { CSSProperties } from "react";
import { processSteps } from "@/lib/site";

// ABLAUF – vier Schritte, wirklich eine Reihenfolge, deshalb mit Ziffern.
export default function Process() {
  return (
    <section className="section" id="ablauf" data-edit-id="ablauf" aria-labelledby="ablauf-titel">
      <div className="wrap">
        <h2 className="h2" id="ablauf-titel" data-edit-id="ablauf-title">Vom ersten Anruf bis zur Umsetzung</h2>
        <ol className="ablauf" style={{ listStyle: "none", padding: 0, margin: 0 }} data-edit-id="ablauf-liste">
          {processSteps.map((s, i) => (
            <li
              className="schritt"
              key={s.id}
              style={{ "--i": i } as CSSProperties}
              data-edit-id={`schritt-${i + 1}`}
            >
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <ul>
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
