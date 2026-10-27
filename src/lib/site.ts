// ────────────────────────────────────────────────────────────────────────
//  ZENTRALE INHALTE / FIRMENDATEN
//  Alle Fakten der Website stehen hier an EINER Stelle. So bleiben Adresse,
//  Telefonnummer & Öffnungszeiten überall konsistent und lassen sich ohne
//  Suche im Code pflegen.
// ────────────────────────────────────────────────────────────────────────

export const company = {
  name: "Ostseedesign",
  fullName: "Ostseedesign – Werbung & Textilien",
  claim: "Werbetechnik und Textilveredelung in Eckernförde",
  yearsExperience: 30,
  street: "Rosseer Weg 22a",
  zip: "24340",
  city: "Eckernförde",
  region: "Schleswig-Holstein",
  // Anzeige-Formate + maschinen-/klickbare Varianten (tel: braucht +49…).
  phoneDisplay: "04351 – 470 590",
  phoneHref: "+494351470590",
  faxDisplay: "04351 – 470 599",
  email: "info@ostseedesign.de",
  // Kartenposition. Wird derzeit nicht angezeigt (die Karte im Standort-
  // Abschnitt ist entfallen), bleibt aber hier stehen, falls später wieder
  // eine Karte eingebaut werden soll.
  coords: { lat: 54.4858, lon: 9.8126 },
} as const;

// Öffnungszeiten – als Liste, damit sie sauber tabellarisch darstellbar sind.
// byAppointment = keine festen Zeiten, sondern nach Absprache.
export const openingHours: { days: string; time: string; byAppointment?: boolean }[] = [
  { days: "Montag, Dienstag, Donnerstag", time: "09:00 – 16:30 Uhr" },
  { days: "Mittwoch", time: "09:00 – 13:00 Uhr" },
  { days: "Freitag", time: "nach Vereinbarung", byAppointment: true },
];

// Externer Textilshop – wird verlinkt, nicht integriert.
export const textilShopUrl = "https://ostseetextilien.de/";

// Leistungen – Reihenfolge, Mottos und Beschreibungen wie auf der bisherigen
// Website ostseedesign.de. Nur dort Genanntes steht hier als Leistung.
export type Service = {
  id: string;
  title: string;
  // Kurzer Leitspruch der Leistung (von der bisherigen Website).
  motto?: string;
  teaser: string;
  points: string[];
  icon: "signage" | "textile" | "print" | "shop";
  // Was auf die Fotos soll. Solange es keine echten Fotos gibt, steht das als
  // Notiz auf der Platzhalterfläche. Das erste Motiv ist das Hauptbild.
  bilder: string[];
  external?: string; // externer Link statt interner Unterseite
};

export const services: Service[] = [
  {
    id: "werbetechnik",
    title: "Werbetechnik",
    motto: "Zeigen Sie, was Sie können!",
    teaser:
      "Beschriftungen aller Art und auf nahezu jedem Medium: Fahrzeuge, Schilder, Fenster, Displays und mehr.",
    points: ["Fahrzeugbeschriftungen", "Schilder und Displays", "Fensterbeschriftungen"],
    icon: "signage",
    bilder: [
      "Beschriftetes Firmenfahrzeug",
      "Schild an der Hauswand",
      "Beschriftetes Schaufenster",
    ],
  },
  {
    id: "textilveredelung",
    title: "Textilveredelung",
    motto: "Kleidung vereint in Arbeit & Freizeit!",
    teaser:
      "Individuelle und hochwertige Applikationen – mit verschiedenen Transfertechniken und Stickereien. Für Berufsbekleidung genauso wie für die Freizeit.",
    points: ["Stickereien", "Verschiedene Transfertechniken", "Individuelle Applikationen"],
    icon: "textile",
    bilder: [
      "Stickerei, Nahaufnahme",
      "Berufsbekleidung mit Firmenlogo",
      "Freizeitkleidung mit Transfer",
    ],
  },
  {
    id: "drucksachen",
    title: "Drucksachen",
    motto: "Mit Druck präsent!",
    teaser: "Briefpapier, Visitenkarten, Stempel und vieles mehr.",
    points: ["Briefpapier", "Visitenkarten", "Stempel"],
    icon: "print",
    bilder: ["Visitenkarten", "Briefpapier", "Stempel"],
  },
  {
    id: "textilshop",
    title: "Textilshop",
    teaser:
      "Unser Onlineshop für Textilien: ostseetextilien.de – passend zur Textilveredelung.",
    points: ["Eigener Onlineshop", "Berufsbekleidung und mehr", "ostseetextilien.de"],
    icon: "shop",
    bilder: ["Kleidung aus dem Textilshop"],
    external: textilShopUrl,
  },
];

// Wohin eine Leistung führt: intern auf ihre eigene Unterseite (/werbetechnik),
// beim Textilshop auf die externe Seite.
export function leistungsLink(service: Service): string {
  return service.external ?? `/${service.id}`;
}

// Die Leistungen mit eigener Unterseite (alle außer dem externen Shop).
export const unterseiten = services.filter((s) => !s.external);

// Navigation (Kopfzeile): die drei Leistungen mit eigener Unterseite und der
// externe Textilshop. Sie wird aus `services` abgeleitet – eine neue Leistung
// erscheint damit automatisch im Menü, der Reihenfolge und Farbe nach.
export const nav: { label: string; href: string; external?: boolean }[] =
  services.map((s) => ({
    label: s.title,
    href: leistungsLink(s),
    external: Boolean(s.external),
  }));

// ── Ablauf eines Auftrags ─────────────────────────────────────────────────
// Bewusst allgemein gehalten: Die bisherige Website nennt keine Einzelheiten
// zum Ablauf (Preise, Korrekturen, Lieferung …). Solche Zusagen erst
// eintragen, wenn Ostseedesign sie bestätigt hat.
export type ProcessStep = {
  id: string;
  title: string;
  body: string;
  points: string[];
};

export const processSteps: ProcessStep[] = [
  {
    id: "kontakt",
    title: "Sprechen Sie uns an",
    body: "Rufen Sie uns an, schreiben Sie uns oder kommen Sie zu den Öffnungszeiten am Rosseer Weg vorbei und erzählen Sie, was Sie vorhaben.",
    points: ["Telefon, E-Mail oder persönlich", "Freitag nach Vereinbarung"],
  },
  {
    id: "paket",
    title: "Gemeinsam planen",
    body: "Gemeinsam formen wir ein Paket – ob nur die Fahrzeugbeschriftung oder das komplette Paket mit Drucksachen und Berufsbekleidung.",
    points: ["Einzelne Leistung oder ganzes Paket", "Alles aus einer Hand"],
  },
  {
    id: "gestaltung",
    title: "Individuell gestaltet",
    body: "Ihr Auftritt wird auf Sie zugeschnitten – auf dem Fahrzeug, auf der Kleidung oder auf dem Papier.",
    points: ["Werbetechnik, Textil und Druck", "Ein einheitlicher Auftritt"],
  },
  {
    id: "umsetzung",
    title: "Hochwertig umgesetzt",
    body: "Beschriftung, Stickerei, Transfer oder Druck: Wir setzen Ihr Paket um – mit über 30 Jahren Erfahrung.",
    points: ["Hochwertige Applikationen", "Ihr Werbepartner in Eckernförde"],
  },
];

// ── Drei Punkte im Band „Alles aus einer Hand" (und in der Fußzeile)
// Alle drei stehen so auf der bisherigen Website.
export const versprechen: string[] = [
  "Seit über 30 Jahren in Werbetechnik und Textilveredelung",
  "Alles aus einer Hand – vom Fahrzeug bis zur Berufsbekleidung",
  "Individuelle und hochwertige Umsetzung",
];

// ── Kundenstimmen ────────────────────────────────────────────────────────
// ACHTUNG: Das hier sind PLATZHALTER, keine echten Zitate. Sie sind auf der
// Seite auch so beschriftet. Echte Stimmen nur mit Einverständnis der Kundin
// oder des Kunden eintragen und dann `platzhalter` weglassen.
export type Kundenstimme = {
  text: string;
  name: string;
  firma: string;
  platzhalter?: boolean;
};

export const kundenstimmen: Kundenstimme[] = [
  {
    text: "Hier steht später ein echtes Zitat – zum Beispiel über bestickte Berufsbekleidung.",
    name: "Name der Kundin oder des Kunden",
    firma: "Firma, Ort",
    platzhalter: true,
  },
  {
    text: "Hier steht später ein echtes Zitat – zum Beispiel über die Beschriftung eines Firmenfahrzeugs.",
    name: "Name der Kundin oder des Kunden",
    firma: "Firma, Ort",
    platzhalter: true,
  },
  {
    text: "Hier steht später ein echtes Zitat – zum Beispiel über Visitenkarten und Briefpapier.",
    name: "Name der Kundin oder des Kunden",
    firma: "Verein, Ort",
    platzhalter: true,
  },
];

// ── Häufige Fragen ───────────────────────────────────────────────────────
// Bewusst nur drei, dafür groß. Die Antworten geben nur wieder, was auch auf
// der bisherigen Website steht (Leistungen, „Alles aus einer Hand",
// Öffnungszeiten, Kontakt). Weitere Fragen einfach unten anhängen.
export const fragen: { frage: string; antwort: string }[] = [
  {
    frage: "Was bieten Sie an?",
    antwort:
      "Werbetechnik – Beschriftungen aller Art, zum Beispiel für Fahrzeuge, Schilder, Fenster und Displays. Textilveredelung – Stickereien, verschiedene Transfertechniken und individuelle Applikationen. Drucksachen – Briefpapier, Visitenkarten, Stempel und vieles mehr. Dazu kommt unser Textilshop ostseetextilien.de.",
  },
  {
    frage: "Bekomme ich alles aus einer Hand?",
    antwort:
      "Ja. Gemeinsam formen wir ein Paket – ob nur die Fahrzeugbeschriftung oder das komplette Paket mit Drucksachen und Berufsbekleidung.",
  },
  {
    frage: "Wann und wie erreiche ich Sie?",
    antwort: `${openingHours
      .map((z) => `${z.days}: ${z.time}`)
      .join(" · ")}. Telefon ${company.phoneDisplay}, E-Mail ${company.email}, oder Sie kommen am ${company.street} in ${company.city} vorbei.`,
  },
];

// Social-Links (Footer). Leer lassen, wenn (noch) nicht vorhanden.
export const socials: { label: string; href: string }[] = [];
