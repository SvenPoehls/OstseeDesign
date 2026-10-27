import { BAND_AKZENT, BAND_LEISE, AKZENT_TEXT, farben } from "@/lib/farben";

// Das kleine Etikett über jeder Abschnitts-Überschrift: Versalien mit weitem
// Abstand, darunter eine feine Linie mit einem kurzen Strich in der Akzentfarbe am
// Anfang (wie im Vorbild „WHERE WE COME IN").
//
// `band`    steht auf einem farbigen Band → Schrift in BAND_AKZENT.
//           Sonst → AKZENT_TEXT. Beide sind dunkel genug für kleine Schrift.
// `mitte`   zentriert (für den Schlussaufruf).
export default function Etikett({
  children,
  band = false,
  mitte = false,
}: {
  children: React.ReactNode;
  band?: boolean;
  mitte?: boolean;
}) {
  return (
    <div className={mitte ? "flex flex-col items-center" : ""}>
      <p
        className="text-[0.78rem] font-bold uppercase tracking-[0.18em]"
        style={{ color: band ? BAND_AKZENT : AKZENT_TEXT }}
      >
        {children}
      </p>
      <span
        aria-hidden="true"
        className="relative mt-3 block h-px w-full max-w-[15rem]"
        style={{
          backgroundColor: band ? `${BAND_LEISE}40` : "rgba(15,27,45,0.18)",
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
