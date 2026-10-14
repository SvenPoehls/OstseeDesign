/** @type {import('next').NextConfig} */

// GitHub Pages serviert die Seite unter …github.io/OstseeDesign/ – daher muss
// beim Pages-Build ein Basis-Pfad gesetzt werden. Lokal (npm run dev) und bei
// einem späteren Deploy auf eine eigene Domain (ostseedesign.de) bleibt er leer.
const isPages = process.env.GITHUB_PAGES === "true";
const repo = "OstseeDesign";

const nextConfig = {
  reactStrictMode: true,
  // Statischer Export: erzeugt reine HTML/CSS/JS-Dateien im Ordner "out",
  // die GitHub Pages (oder jeder simple Webspace) direkt ausliefern kann –
  // kein Server nötig.
  output: "export",
  // Jede Seite bekommt einen eigenen Ordner mit index.html
  // (/entwurf-2/index.html statt /entwurf-2.html). So findet JEDER einfache
  // Webspace die Unterseiten, auch beim direkten Aufruf oder Neuladen.
  trailingSlash: true,
  // Ohne Server keine Bild-Optimierung zur Laufzeit.
  images: { unoptimized: true },
  ...(isPages ? { basePath: `/${repo}`, assetPrefix: `/${repo}/` } : {}),
  // Denselben Vorsatz auch im Browser-Code verfügbar machen. Damit können
  // eigene Bildpfade (src/lib/assets.ts) korrekt gesetzt werden – Next.js
  // macht das nur für Dateien, die es selbst einbindet.
  env: { NEXT_PUBLIC_BASE_PATH: isPages ? `/${repo}` : "" },
};

export default nextConfig;
