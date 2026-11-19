import type { CSSProperties } from "react";
import { asset } from "@/lib/assets";
import { company } from "@/lib/site";

// KOPFBEREICH – Leuchtturm im Meer.
//
// Der Leuchtturm ist ein freigestelltes Bild (public/img/leuchtturm.webp) und
// steht leicht unscharf im Hintergrund. Die Überschrift sitzt so, dass ihre
// drei Zeilen auf den weißen Streifen des Turms liegen (Geometrie über die
// CSS-Variablen --w, --b und --s in globals.css; die Mitten der Streifen
// liegen bei 335, 530 und 725 von 1024 Bildpixeln). Wer das Bild austauscht,
// muss diese Werte neu bestimmen.
//
// Das Meer ist reines SVG/CSS (kein Bild): Himmelsfarben im Wasser, feiner
// Wellenglanz und verteilte Lichtpunkte. Es endet unten im nächsten Abschnitt.

const funken = Array.from({ length: 46 }, (_, k) => ({
  x: (k * 311) % 1440,
  y: 24 + ((k * 97) % 250),
  rx: 8 + ((k * 13) % 30),
  o: (0.28 + ((k * 7) % 5) * 0.08).toFixed(2),
}));

// Möwen: Platz im Bild (x, y, Größe s, Neigung r) und Bewegung. `t` ist die
// Dauer eines Flügelschlags in Sekunden (langsam, 3,6 bis 5), `d` die Dauer
// des Dahintreibens, `dx`/`dy` dessen Weite in Bildpunkten, `v` die Verzögerung.
const moewen = [
  { x: 700, y: 60, s: 1.0, r: 6, t: 4.2, d: 26, dx: -70, dy: 12, v: 0 },
  { x: 50, y: 540, s: 0.65, r: -8, t: 3.6, d: 22, dx: 60, dy: -10, v: -6 },
  { x: 640, y: 600, s: 0.5, r: 4, t: 5, d: 30, dx: -50, dy: 8, v: -12 },
];

export default function Hero() {
  const style = { "--img": `url(${asset("/img/leuchtturm.webp")})` } as CSSProperties;

  return (
    <section className="hero" style={style} data-edit-id="hero" data-bewegung aria-labelledby="hero-titel">
      {/* Filter für die gewellte Spiegelung des Turms */}
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
        <filter id="hero-ripple" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.004 0.07" numOctaves="2" seed="3" result="t" />
          <feDisplacementMap in="SourceGraphic" in2="t" scale="18" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* Meer */}
      <div className="sea" aria-hidden="true">
        <svg viewBox="0 0 1440 300" preserveAspectRatio="none" focusable="false">
          <defs>
            <filter id="hero-seab" x="-10%" y="-30%" width="120%" height="160%">
              <feGaussianBlur stdDeviation="20" />
            </filter>
            <filter id="hero-spec" x="0" y="0" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency=".006 .09" numOctaves="3" seed="11" result="n" />
              <feSpecularLighting in="n" surfaceScale="5" specularConstant=".8" specularExponent="24" lightingColor="#eaf4ff" result="s">
                <feDistantLight azimuth="270" elevation="30" />
              </feSpecularLighting>
              <feColorMatrix in="s" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .45 0" />
            </filter>
            <filter id="hero-gl" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.4 .6" />
            </filter>
          </defs>
          <g filter="url(#hero-seab)">
            <rect x="-200" y="-100" width="1840" height="140" fill="#cfe4f8" />
            <rect x="-200" y="30" width="1840" height="90" fill="#b4d1f0" />
            <rect x="-200" y="110" width="1840" height="90" fill="#93b8e6" />
            <rect x="-200" y="190" width="1840" height="300" fill="#7aa5dc" />
          </g>
          {/* Wellenglanz und Lichtpunkte blenden nach unten aus, damit das Meer
              ohne sichtbare Kante in den Abschnitt darunter übergeht. */}
          <linearGradient id="hero-unten" x1="0" y1="0" x2="0" y2="1">
            <stop offset=".72" stopColor="#fff" />
            <stop offset="1" stopColor="#000" />
          </linearGradient>
          <mask id="hero-fade"><rect width="1440" height="300" fill="url(#hero-unten)" /></mask>
          <g mask="url(#hero-fade)">
            <rect width="1440" height="300" filter="url(#hero-spec)" />
            <g filter="url(#hero-gl)">
              {funken.map((f, i) => (
                <ellipse key={i} cx={f.x} cy={f.y} rx={f.rx} ry="2" fill="#f2f8ff" opacity={f.o} />
              ))}
            </g>
          </g>
        </svg>
      </div>

      {/* Spiegelung des Turms, Wasserlinie am Felsfuß */}
      <div className="refl" aria-hidden="true"><div className="rimg" /></div>
      <div className="surf" aria-hidden="true" />

      {/* Lichtschein der Laterne: wechselt ganz leise von einer Seite zur anderen */}
      {["rechts", "links"].map((seite) => (
        <svg
          key={seite}
          className={`strahl ${seite}`}
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <polygon points="0,8.6 100,4 100,16 0,11.4" fill="#fff0b8" />
        </svg>
      ))}

      {/* Leuchtturm (Foto, freigestellt) und Möwen */}
      <div
        className="motif tower"
        role="img"
        aria-label="Leuchtturm mit blauen Streifen auf einem Felsen an der Ostsee"
        data-edit-id="hero-image"
      />
      <svg className="motif gulls" viewBox="0 0 800 840" aria-hidden="true" focusable="false">
        {moewen.map((m, i) => (
          <g key={i} transform={`translate(${m.x} ${m.y}) rotate(${m.r}) scale(${m.s})`} opacity=".72">
            <g
              className="treiben"
              style={{ "--d": `${m.d}s`, "--dx": `${m.dx}px`, "--dy": `${m.dy}px`, "--v": `${m.v}s` } as CSSProperties}
            >
              <g className="fluegel links" style={{ "--t": `${m.t}s`, "--v": `${m.v}s` } as CSSProperties}>
                <path d="M0 0C-18-26-52-30-84-8-56-14-30-4 0 8Z" fill="#1c2a3a" />
              </g>
              <g className="fluegel rechts" style={{ "--t": `${m.t}s`, "--v": `${m.v}s` } as CSSProperties}>
                <path d="M0 0C18-26 52-30 84-8 56-14 30-4 0 8Z" fill="#1c2a3a" />
              </g>
            </g>
          </g>
        ))}
      </svg>

      {/* Bild rechts (Platzhalter, bis ein echtes Foto aus der Werkstatt da ist) */}
      <figure className="ph" data-edit-id="hero-side-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="ph-foto"
          src={asset("/img/werkstatt.webp")}
          width={1360}
          height={764}
          alt="Das Ostseedesign-Geschäft am Rosseer Weg in Eckernförde mit Leuchtschild und Glastür"
        />
        <figcaption data-edit-id="hero-side-caption">Unser Geschäft am Rosseer Weg in {company.city}</figcaption>
      </figure>

      <div className="statement" data-edit-id="hero-copy">
        <h1 id="hero-titel" aria-label="Ihr Logo aufs Shirt, aufs Auto oder an die Wand." data-edit-id="hero-title">
          <span className="l1" aria-hidden="true">Ihr Logo aufs Shirt,</span>
          <span className="l2" aria-hidden="true">aufs Auto</span>
          <span className="l3" aria-hidden="true">oder an die Wand.</span>
        </h1>
      </div>

      <div className="hero-foot" data-edit-id="hero-foot">
        <p data-edit-id="hero-text">
          Seit über {company.yearsExperience} Jahren Werbetechnik und Textilveredelung in {company.city}. Dazu
          Drucksachen. Alles aus einer Hand.
        </p>
        <a className="tlink" href="#kontakt" data-edit-id="hero-cta">Projekt besprechen</a>
      </div>
    </section>
  );
}
