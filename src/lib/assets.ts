// Bild- und Dateipfade
// ---------------------------------------------------------------------------
// Auf GitHub Pages liegt die Seite nicht direkt unter der Domain, sondern in
// einem Unterordner (…github.io/OstseeDesign/). Ein Pfad wie "/hero.jpg" würde
// dort ins Leere zeigen. Diese kleine Funktion setzt den nötigen Vorsatz davor.
// Lokal und auf einer eigenen Domain (ostseedesign.de) bleibt der Vorsatz leer.
//
// Benutzung:  <img src={asset("/hero.jpg")} />
// Dateien selbst gehören in den Ordner "public" im Projekt.
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
