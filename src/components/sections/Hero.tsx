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

const moewen: { x: number; y: number; s: number; r: number }[] = [
  { x: 700, y: 60, s: 1.0, r: 6 },
  { x: 50, y: 540, s: 0.65, r: -8 },
  { x: 640, y: 600, s: 0.5, r: 4 },
];

export default function Hero() {
  const style = { "--img": `url(${asset("/img/leuchtturm.webp")})` } as CSSProperties;

  return (
    <section className="hero" style={style} data-edit-id="hero" aria-labelledby="hero-titel">
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

      {/* Leuchtturm (Foto, freigestellt) und Möwen */}
      <div
        className="motif tower"
        role="img"
        aria-label="Leuchtturm mit blauen Streifen auf einem Felsen an der Ostsee"
        data-edit-id="hero-image"
      />
      <svg className="motif gulls" viewBox="0 0 800 840" aria-hidden="true" focusable="false">
        <defs>
          <filter id="hero-moewe" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>
        <g filter="url(#hero-moewe)">
          {moewen.map((m, i) => (
            <g key={i} transform={`translate(${m.x} ${m.y}) rotate(${m.r}) scale(${m.s})`} opacity=".72">
              <path d="M0 0C18-26 52-30 84-8 56-14 30-4 0 8-30-4-56-14-84-8-52-30-18-26 0 0Z" fill="#1c2a3a" />
            </g>
          ))}
        </g>
      </svg>

      {/* Bild rechts (Platzhalter, bis ein echtes Foto aus der Werkstatt da ist) */}
      <figure className="ph" data-edit-id="hero-side-image">
        <div className="ph-img" role="img" aria-label="Platzhalter für ein Projektfoto">
          <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
            <rect x="6" y="10" width="36" height="28" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="17" cy="20" r="4" fill="currentColor" />
            <path d="M8 36l11-11 8 8 5-5 8 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </svg>
          <span>Projektfoto</span>
        </div>
        <figcaption data-edit-id="hero-side-caption">Platzhalter: Foto aus unserer Werkstatt</figcaption>
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
