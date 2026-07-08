// Abschnitts-Trenner: dünne Linie über die volle Breite mit kleinem
// Versal-Label darunter (aus der Vorlage übernommen).
export default function Divider({ label }: { label?: string }) {
  return (
    <div className="container-site">
      <div className="border-t border-line pt-3">
        {label && <span className="label">{label}</span>}
      </div>
    </div>
  );
}
