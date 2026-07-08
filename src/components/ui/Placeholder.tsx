import { CameraIcon } from "@/components/ui/Icons";

// Bild-Platzhalter mit klarer BILDREGIE-NOTIZ.
// Solange keine echten Arbeitsfotos vorliegen, zeigt dieser Block das
// vorgesehene Motiv. Später 1:1 durch ein Bild im gleichen Seitenverhältnis
// ersetzbar.
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
      className={`relative flex ${ratio} w-full items-center justify-center overflow-hidden rounded-2xl border border-line bg-cream ${className}`}
      role="img"
      aria-label={`Bildplatzhalter: ${note}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(44,44,44,0.05) 0 2px, transparent 2px 16px)",
        }}
      />
      <div className="relative flex max-w-[16rem] flex-col items-center gap-2 px-6 text-center">
        <CameraIcon className="h-6 w-6 text-ink/40" />
        <span className="text-[0.7rem] font-semibold uppercase tracking-label text-ink/50">
          Bildregie
        </span>
        <span className="text-sm text-ink-muted">{note}</span>
      </div>
    </div>
  );
}
