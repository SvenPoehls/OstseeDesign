import { CREME_LEISE, ZINNOBER_TEXT, farben } from "@/lib/farben";

// Das kleine Etikett über jeder Abschnitts-Überschrift: Versalien mit weitem
// Abstand, darunter eine feine Linie mit einem kurzen Zinnober-Strich am
// Anfang (wie im Vorbild „WHERE WE COME IN").
//
// `dunkel`  steht auf einem dunkelbraunen Abschnitt → Schrift in Ocker.
//           Sonst → gebranntes Orange (ZINNOBER_TEXT), das auf hellem Grund
//           genug Kontrast hat.
// `mitte`   zentriert (für den Schlussaufruf).
export default function Etikett({
  children,
  dunkel = false,
  mitte = false,
}: {
  children: React.ReactNode;
  dunkel?: boolean;
  mitte?: boolean;
}) {
  return (
    <div className={mitte ? "flex flex-col items-center" : ""}>
      <p
        className="text-[0.78rem] font-bold uppercase tracking-[0.18em]"
        style={{ color: dunkel ? farben[2].ton : ZINNOBER_TEXT }}
      >
        {children}
      </p>
      <span
        aria-hidden="true"
        className="relative mt-3 block h-px w-full max-w-[15rem]"
        style={{
          backgroundColor: dunkel ? `${CREME_LEISE}40` : "rgba(23,22,26,0.18)",
        }}
      >
        <span
          className={`absolute -top-px h-[3px] w-12 rounded-full ${
            mitte ? "left-1/2 -translate-x-1/2" : "left-0"
          }`}
          style={{ backgroundColor: farben[0].ton }}
        />
      </span>
    </div>
  );
}
