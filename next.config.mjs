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
  // Ohne Server keine Bild-Optimierung zur Laufzeit.
  images: { unoptimized: true },
  ...(isPages ? { basePath: `/${repo}`, assetPrefix: `/${repo}/` } : {}),
};

export default nextConfig;
