import { CameraIcon } from "@/components/ui/Icons";

// Bild-Platzhalter mit klarer BILDREGIE-NOTIZ.
// Solange keine echten Arbeitsfotos vorliegen, zeigt dieser Block das
// vorgesehene Motiv. Später 1:1 durch ein Bild im gleichen Seitenverhältnis
// ersetzbar. `frame` steuert Rahmen/Rundung (Default: gerundete Karte).
export default function Placeholder({
  note,
  ratio = "aspect-[4/3]",
  frame = "rounded-2xl border border-line",
}: {
  note: string;
  ratio?: string;
  frame?: string;
}) {
  return (
    <div
      className={`relative flex ${ratio} w-full items-center justify-center overflow-hidden bg-surface ${frame}`}
      role="img"
      aria-label={`Bildplatzhalter: ${note}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(37,99,235,0.05) 0 2px, transparent 2px 16px)",
        }}
      />
      <div className="relative flex max-w-[16rem] flex-col items-center gap-2 px-6 text-center">
        <CameraIcon className="h-6 w-6 text-ink/30" />
        <span className="text-[0.7rem] font-semibold uppercase tracking-label text-ink/45">
          Bildregie
        </span>
        <span className="text-sm text-ink-muted">{note}</span>
      </div>
    </div>
  );
}
