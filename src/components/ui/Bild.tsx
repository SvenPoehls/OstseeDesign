// Platzhalter für ein Foto: eine runde Fläche in der Farbe des Bereichs, mit
// feiner Schraffur und einer Notiz, was später darauf zu sehen sein soll.
//
// ECHTES FOTO EINSETZEN: Das <Bild …/> an der jeweiligen Stelle durch
//   <img src={asset("/datei.jpg")} alt="…" className="… rounded-bild object-cover" />
// ersetzen (asset kommt aus @/lib/assets und setzt den richtigen Pfad).
export default function Bild({
  note,
  ton,
  className = "",
  reveal = false,
}: {
  note: string;
  ton: string;
  className?: string;
  /** Fläche erscheint erst beim Scrollen (siehe Einblenden.tsx). */
  reveal?: boolean;
}) {
  return (
    <figure
      data-reveal={reveal ? "" : undefined}
      className={`relative overflow-hidden rounded-bild ${className}`}
      style={{
        backgroundColor: `${ton}1f`,
        backgroundImage: `repeating-linear-gradient(-45deg, ${ton}26 0 1px, transparent 1px 15px)`,
      }}
    >
      <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/85 px-3 py-1 text-[0.72rem] text-leise">
        {note}
      </figcaption>
    </figure>
  );
}
