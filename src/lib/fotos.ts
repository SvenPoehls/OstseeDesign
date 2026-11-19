// FOTOS FÜR DIE WERKSTATT-MOTIVE
// Schlüssel ist der Motivtext aus `services[].bilder` in site.ts. Wo hier ein
// Eintrag steht, zeigt die Seite das Foto, sonst die Platzhalterfläche.
// Alle Fotos stammen von Unsplash (Unsplash-Lizenz: kostenlos, auch
// kommerziell, ohne Namensnennung). Die Fotografen stehen trotzdem im README.
// Ersetzen: Datei in public/img tauschen oder hier eintragen.
export type Foto = {
  src: string;
  width: number;
  height: number;
  alt: string;
  position?: string; // Bildausschnitt, falls das Motiv nicht mittig sitzt
};

export const fotos: Record<string, Foto> = {
  "Beschriftetes Firmenfahrzeug": {
    src: "/img/werkstatt-folierung.webp",
    width: 1200,
    height: 1500,
    alt: "Nahaufnahme: Eine Hand in schwarzem Handschuh verklebt Folie an einem orangefarbenen Fahrzeug",
    position: "40% 90%",
  },
  "Stickerei, Nahaufnahme": {
    src: "/img/werkstatt-stickerei.webp",
    width: 1200,
    height: 800,
    alt: "Eine Stickmaschine stickt ein Motiv auf dunklen Stoff, daneben der Bildschirm der Maschine",
    position: "20% 55%",
  },
  "Visitenkarten": {
    src: "/img/werkstatt-visitenkarten.webp",
    width: 1200,
    height: 917,
    alt: "Zwei dunkle Visitenkarten auf hellem Marmor",
    position: "50% 50%",
  },
};
