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

// Leistungen als Kacheln der Startseite.
export type Service = {
  id: string;
  title: string;
  teaser: string;
  points: string[];
  icon: "signage" | "textile" | "print" | "shop";
  external?: string; // externer Link statt interner Unterseite
};

export const services: Service[] = [
  {
    id: "textilveredelung",
    title: "Textilveredelung",
    teaser:
      "Unser größter Bereich. Ihr Logo auf Arbeitsjacken, Poloshirts oder Vereinstrikots. Gestickt oder per Transfer aufgebracht, je nachdem, was länger halten muss.",
    points: [
      "Stickerei, auch auf Jacken und Mützen",
      "Verschiedene Transfertechniken",
      "Aufnäher und Applikationen",
    ],
    icon: "textile",
  },
  {
    id: "werbetechnik",
    title: "Werbetechnik",
    teaser:
      "Wir bekleben fast alles: Transporter, Schaufenster, Bauzäune. Auch das Schild an der Hauswand kommt von uns.",
    points: [
      "Fahrzeuge, vom Aufkleber bis zur Vollfolierung",
      "Schilder, Displays und Bauzaunbanner",
      "Fenster und Schaufenster",
    ],
    icon: "signage",
  },
  {
    id: "drucksachen",
    title: "Drucksachen",
    teaser:
      "Visitenkarten, Flyer, Briefpapier, Stempel. Gestaltet passend zu dem, was schon am Auto und am Schild steht.",
    points: ["Visitenkarten und Briefpapier", "Flyer und Formulare", "Stempel"],
    icon: "print",
  },
  {
    id: "textilshop",
    title: "Textilshop",
    teaser:
      "Im Shop suchen Sie sich in Ruhe Kleidung aus. Was Sie bestellen, besticken wir auf Wunsch hier bei uns.",
    points: ["Arbeits- und Freizeitkleidung", "Bestellung direkt im Shop", "Veredelung auf Wunsch"],
    icon: "shop",
    external: textilShopUrl,
  },
];

// Navigation (Header). Anker springen zu den Sektionen der Startseite;
// eigene Unterseiten folgen später.
export const nav: { label: string; href: string; external?: boolean }[] = [
  // „Leistungen" führt zum Leistungs-Abschnitt. Ein zweiter Punkt „Ablauf"
  // stand vorher daneben – der ist entfallen, damit das Menü eindeutig bleibt.
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Standort", href: "/#standort" },
  { label: "Textilshop", href: textilShopUrl, external: true },
  { label: "Kontakt", href: "/#kontakt" },
];

// ── Kopfbereich: Bilder, die sich beim Laden auffächern ──────────────────
// Reihenfolge = Reihenfolge im Fächer (Mitte ist das dritte Bild).
// Noch Platzhalter: Sobald echte Fotos vorliegen, in Hero.tsx statt der
// gestreiften Fläche ein <img> mit diesem Text als Alt-Text ausgeben.
export const heroFan: string[] = [
  "Bestickte Arbeitskleidung",
  "Fahrzeugbeschriftung",
  "Firmenschild an der Fassade",
  "Schaufensterbeschriftung",
  "Visitenkarten & Drucksachen",
  "Banner & Aufkleber",
];

// ── „So läuft Ihr Auftrag" – Ablauf eines Projekts ───────────────────────
export type ProcessStep = {
  id: string;
  title: string;
  body: string;
  points: string[];
};

export const processSteps: ProcessStep[] = [
  {
    id: "gespraech",
    title: "Erst mal reden",
    body: "Rufen Sie an oder kommen Sie in der Werkstatt vorbei. Sie sagen, was Sie brauchen: bestickte Poloshirts fürs Team, ein Schild, ein beschriftetes Fahrzeug oder alles zusammen. Wir sagen Ihnen, was davon geht und was es kostet.",
    points: ["Das erste Gespräch kostet nichts", "Wir sagen, welche Technik passt", "Preis steht fest, bevor es losgeht"],
  },
  {
    id: "entwurf",
    title: "Der erste Entwurf",
    body: "Wir bereiten Ihr Logo auf und zeigen Ihnen vorab, wie es aussieht: auf dem Shirt, auf dem Schild oder am Fahrzeug. Sie müssen sich also nichts vorstellen.",
    points: ["Ansicht am jeweiligen Produkt", "Wir bereiten Ihr Logo auf", "Vorschläge zu Farbe, Größe und Platzierung"],
  },
  {
    id: "feinschliff",
    title: "Änderungen? Kein Problem",
    body: "Der erste Entwurf sitzt selten schon perfekt. Sagen Sie einfach, was anders soll: Logo größer, andere Farbe, Schriftzug woanders. Produziert wird erst, wenn Sie zufrieden sind.",
    points: ["Korrekturen sind eingerechnet", "Immer derselbe Ansprechpartner", "Nichts läuft ohne Ihre Freigabe"],
  },
  {
    id: "umsetzung",
    title: "Wir setzen es um",
    body: "Gestickt, bedruckt, foliert oder gedruckt wird bei uns am Rosseer Weg. Textilien und Drucksachen holen Sie ab oder wir schicken sie Ihnen. Was angebracht werden muss, montieren wir vor Ort.",
    points: ["Fertigung in der eigenen Werkstatt", "Abholung, Versand oder Montage", "Nachbestellen geht jederzeit"],
  },
];

// Social-Links (Footer). Leer lassen, wenn (noch) nicht vorhanden.
export const socials: { label: string; href: string }[] = [];
