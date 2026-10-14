// Erzeugt die drei Vorschaubilder für die Auswahlseite (public/vorschau-*.jpg).
//
// So geht's:
//   1. npm run build
//   2. im Ordner "out" einen kleinen Server starten:
//        python3 -m http.server 8099
//   3. node scripts/vorschau.js
//   4. npm run build   (damit die neuen Bilder mit ausgeliefert werden)
//
// Die Vorschau-Leiste oben wird für die Bilder ausgeblendet, damit auf der
// Kachel nur der Entwurf selbst zu sehen ist.
const { chromium } = require("playwright");
const path = require("path");

const SEITEN = [
  ["entwurf-1", "vorschau-1.jpg"],
  ["entwurf-2", "vorschau-2.jpg"],
  ["entwurf-3", "vorschau-3.jpg"],
];

(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.CHROMIUM_PFAD || undefined,
  });
  for (const [seite, datei] of SEITEN) {
    const ctx = await browser.newContext({
      viewport: { width: 1280, height: 1700 },
      deviceScaleFactor: 1,
    });
    // Datenschutz-Hinweis nicht mitfotografieren
    await ctx.addInitScript(() => {
      try {
        localStorage.setItem("osd-cookie-hinweis", "ok");
      } catch {}
    });
    const page = await ctx.newPage();
    await page.goto(`http://localhost:8099/${seite}/`, { waitUntil: "networkidle" });
    await page.evaluate(() => {
      document.querySelector("[data-vorschau-leiste]")?.remove();
    });
    await page.waitForTimeout(800);
    await page.screenshot({
      path: path.join(__dirname, "..", "public", datei),
      type: "jpeg",
      quality: 72,
    });
    console.log("erzeugt:", datei);
    await ctx.close();
  }
  await browser.close();
})();
