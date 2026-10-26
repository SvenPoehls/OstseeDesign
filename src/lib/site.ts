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
  // Was auf die Fotos soll. Solange es keine echten Fotos gibt, steht das als
  // Notiz auf der Platzhalterfläche. Das erste Motiv ist das Hauptbild.
  bilder: string[];
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
    bilder: [
      "Stickmaschine, Nahaufnahme vom Garn",
      "Bestickte Arbeitsjacke mit Firmenlogo",
      "Mütze und Aufnäher, fertig veredelt",
    ],
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
    bilder: [
      "Frisch beschrifteter Transporter",
      "Beklebtes Schaufenster",
      "Firmenschild an der Hauswand",
    ],
  },
  {
    id: "drucksachen",
    title: "Drucksachen",
    teaser:
      "Visitenkarten, Flyer, Briefpapier, Stempel. Gestaltet passend zu dem, was schon am Auto und am Schild steht.",
    points: ["Visitenkarten und Briefpapier", "Flyer und Formulare", "Stempel"],
    icon: "print",
    bilder: [
      "Visitenkarten auf dem Werkstatttisch",
      "Briefpapier und Flyer im Stapel",
      "Stempel in der Werkstatt",
    ],
  },
  {
    id: "textilshop",
    title: "Textilshop",
    teaser:
      "Im Shop suchen Sie sich in Ruhe Kleidung aus. Was Sie bestellen, besticken wir auf Wunsch hier bei uns.",
    points: ["Arbeits- und Freizeitkleidung", "Bestellung direkt im Shop", "Veredelung auf Wunsch"],
    icon: "shop",
    bilder: ["Stapel veredelter Arbeitskleidung"],
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

// ── „Darauf können Sie sich verlassen" (dunkler Abschnitt der Startseite)
// Drei Zusagen aus dem Ablauf, hier noch einmal hervorgehoben. Bewusst nur
// drei – mehr wirkt wie eine Liste, die keiner liest.
export const versprechen: string[] = [
  "Das erste Gespräch kostet nichts",
  "Preis steht fest, bevor es losgeht",
  "Immer derselbe Ansprechpartner",
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
    text: "Hier steht später ein echtes Zitat – zum Beispiel über bestickte Arbeitskleidung fürs ganze Team.",
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
    text: "Hier steht später ein echtes Zitat – zum Beispiel über Visitenkarten und Briefpapier, die zum Schild passen.",
    name: "Name der Kundin oder des Kunden",
    firma: "Verein, Ort",
    platzhalter: true,
  },
];

// ── Häufige Fragen ───────────────────────────────────────────────────────
// Bewusst nur drei, dafür groß. Jede Antwort beruht auf den Angaben weiter
// oben in dieser Datei. Weitere Fragen einfach unten anhängen.
export const fragen: { frage: string; antwort: string }[] = [
  {
    frage: "Was kostet das erste Gespräch?",
    antwort:
      "Nichts. Rufen Sie an oder kommen Sie in der Werkstatt vorbei. Wir sagen Ihnen, was geht und was es kostet – der Preis steht fest, bevor es losgeht.",
  },
  {
    frage: "Kann ich vorher sehen, wie es aussieht?",
    antwort:
      "Ja. Wir bereiten Ihr Logo auf und zeigen Ihnen vorab, wie es aussieht: auf dem Shirt, auf dem Schild oder am Fahrzeug. Korrekturen sind eingerechnet, produziert wird erst, wenn Sie zufrieden sind.",
  },
  {
    frage: "Wie komme ich an die fertige Arbeit?",
    antwort:
      "Textilien und Drucksachen holen Sie ab oder wir schicken sie Ihnen. Was angebracht werden muss, montieren wir vor Ort. Nachbestellen geht jederzeit.",
  },
];

// Social-Links (Footer). Leer lassen, wenn (noch) nicht vorhanden.
export const socials: { label: string; href: string }[] = [];
