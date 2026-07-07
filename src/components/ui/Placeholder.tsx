import { CameraIcon } from "@/components/ui/Icons";

// Bild-Platzhalter mit klarer BILDREGIE-NOTIZ.
// Solange noch keine echten Arbeitsfotos vorliegen, zeigt dieser Block an,
// welches Motiv hier vorgesehen ist. Später wird er 1:1 durch ein <Image>
// mit demselben Seitenverhältnis ersetzt.
export default function Placeholder({
  note,
  ratio = "aspect-[4/3]",
  className = "",
}: {
  note: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex ${ratio} w-full items-center justify-center overflow-hidden rounded-2xl border border-line bg-sand-dark ${className}`}
      role="img"
      aria-label={`Bildplatzhalter: ${note}`}
    >
      {/* Feines maritim anmutendes Streifenmuster als dezenter Hintergrund. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(14,75,90,0.06) 0 2px, transparent 2px 16px)",
        }}
      />
      <div className="relative flex max-w-xs flex-col items-center gap-2 px-6 text-center">
        <CameraIcon className="h-7 w-7 text-petrol/50" />
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-petrol/60">
          Bildregie
        </span>
        <span className="text-sm text-ink-muted">{note}</span>
      </div>
    </div>
  );
}
