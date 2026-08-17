// ────────────────────────────────────────────────────────────────────────
//  ZENTRALE INHALTE / FIRMENDATEN
//  Alle Fakten der Website stehen hier an EINER Stelle. So bleiben Adresse,
//  Telefonnummer & Öffnungszeiten überall konsistent und lassen sich ohne
//  Suche im Code pflegen.
// ────────────────────────────────────────────────────────────────────────

export const company = {
  name: "Ostseedesign",
  fullName: "Ostseedesign – Werbung & Textilien",
  claim: "Ihr Werbepartner in Eckernförde",
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
  // Kartenposition (für die eingebettete Karte im Standort-Abschnitt).
  // Rosseer Weg liegt im Nordwesten von Eckernförde (nahe B76). Wert ist eine
  // Schätzung – exakt machen: in Google Maps/OSM auf die Adresse klicken, die
  // beiden Zahlen (Breiten-/Längengrad) hier eintragen.
  coords: { lat: 54.4842, lon: 9.813 },
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
    id: "werbetechnik",
    title: "Werbetechnik",
    teaser:
      "Beschriftungen aller Art – auf nahezu jedem Medium. Von der Fahrzeugfolierung bis zum leuchtenden Firmenschild.",
    points: [
      "Fahrzeugbeschriftung & Vollfolierung",
      "Schilder, Displays & Bauzäune",
      "Fenster- & Schaufensterbeschriftung",
    ],
    icon: "signage",
  },
  {
    id: "textilveredelung",
    title: "Textilveredelung",
    teaser:
      "Hochwertige Veredelung für Arbeits- und Freizeitkleidung – langlebig und passgenau zu Ihrer Marke.",
    points: [
      "Stickereien in Profi-Qualität",
      "Verschiedene Transfertechniken",
      "Hochwertige Applikationen",
    ],
    icon: "textile",
  },
  {
    id: "drucksachen",
    title: "Drucksachen",
    teaser:
      "Der klassische Auftritt auf Papier – stimmig gestaltet und sauber gedruckt, alles aus einer Hand.",
    points: ["Visitenkarten & Briefpapier", "Flyer & Geschäftsdrucksachen", "Stempel"],
    icon: "print",
  },
  {
    id: "textilshop",
    title: "Textilshop",
    teaser:
      "Stöbern Sie in unserem Online-Sortiment an Arbeits- und Freizeitkleidung – bequem im externen Shop.",
    points: ["Große Auswahl an Textilien", "Direkt online bestellen", "Auf Wunsch veredelt"],
    icon: "shop",
    external: textilShopUrl,
  },
];

// Navigation (Header). Anker springen zu den Sektionen der Startseite;
// eigene Unterseiten folgen später.
export const nav: { label: string; href: string; external?: boolean }[] = [
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Ablauf", href: "/#ablauf" },
  { label: "Standort", href: "/#standort" },
  { label: "Textilshop", href: textilShopUrl, external: true },
  { label: "Kontakt", href: "/#kontakt" },
];

// ── Kopfbereich: Bilder, die sich beim Laden auffächern ──────────────────
// Reihenfolge = Reihenfolge im Fächer (Mitte ist das dritte Bild).
// Noch Platzhalter: Sobald echte Fotos vorliegen, in Hero.tsx statt der
// gestreiften Fläche ein <img> mit diesem Text als Alt-Text ausgeben.
export const heroFan: string[] = [
  "Fahrzeugbeschriftung",
  "Bestickte Arbeitskleidung",
  "Firmenschild an der Fassade",
  "Schaufensterbeschriftung",
  "Visitenkarten & Drucksachen",
  "Banner & Aufkleber",
];

// ── „Kennen Sie das?" – Sätze, die als Laufband durchlaufen ──────────────
export const painPoints: string[] = [
  "Fünf Anbieter für Auto, Schilder, Shirts und Flyer",
  "Jeder braucht die Daten in einem anderen Format",
  "Das Logo sieht auf jedem Produkt anders aus",
  "Niemand geht ans Telefon, wenn es eilig wird",
  "Der Transporter steht seit Wochen unbeschriftet da",
  "Die Arbeitskleidung kommt in der falschen Farbe",
  "Angebote, die man ohne Rückfrage nicht versteht",
  "Termine, die dreimal verschoben werden",
];

// Kurze Schlagwörter, die zwischen dem Laufband schweben.
export const painChips: string[] = [
  "Hin und her",
  "Kein Ansprechpartner",
  "Verschobene Termine",
  "Uneinheitlicher Auftritt",
];

// ── „So läuft Ihr Auftrag" – Ablauf eines Projekts ───────────────────────
export type ProcessStep = {
  id: string;
  when: string; // Zeit-Marke links an der Zeitleiste
  title: string;
  body: string;
  points: string[];
};

export const processSteps: ProcessStep[] = [
  {
    id: "gespraech",
    when: "Tag 1",
    title: "Wir sprechen miteinander",
    body: "Am Telefon, per E-Mail oder bei uns in der Werkstatt: Sie erzählen, was Sie vorhaben – wir sagen ehrlich, was sinnvoll ist und was es kostet.",
    points: ["Kostenloses Erstgespräch", "Beratung zu Material & Technik", "Festes Angebot ohne Überraschungen"],
  },
  {
    id: "entwurf",
    when: "Tag 2–4",
    title: "Sie bekommen den ersten Entwurf",
    body: "Wir setzen Ihre Idee in eine Gestaltung um und zeigen sie Ihnen als Ansicht – am Fahrzeug, am Schild oder auf dem Textil.",
    points: ["Entwurf am echten Objekt", "Ihr Logo sauber aufbereitet", "Vorschläge für Farben & Größen"],
  },
  {
    id: "feinschliff",
    when: "Danach",
    title: "Wir feilen gemeinsam nach",
    body: "Änderungswünsche gehören dazu. Wir passen an, bis es sitzt – erst wenn Sie zufrieden sind, geht es in die Produktion.",
    points: ["Korrekturschleifen inklusive", "Ein fester Ansprechpartner", "Freigabe erst, wenn alles passt"],
  },
  {
    id: "umsetzung",
    when: "Zum Termin",
    title: "Wir setzen um und montieren",
    body: "Produktion im eigenen Haus, Montage vor Ort. Sie bekommen einen festen Termin – und danach ein Ergebnis, das hält.",
    points: ["Fertigung in Eckernförde", "Montage vor Ort", "Nachbestellungen jederzeit möglich"],
  },
];

// Vertrauens-Kennzahlen (30-Jahre-Block).
export const trustStats: { value: string; label: string }[] = [
  { value: "30+", label: "Jahre Erfahrung am Markt" },
  { value: "1", label: "Ansprechpartner – alles aus einer Hand" },
  { value: "∞", label: "Medien für Ihre Beschriftung" },
];

// „Featured Work" – ausgewählte Arbeiten als Karten (Platzhalter-Bilder mit
// Bildregie-Notiz). Später durch echte Referenzfotos ersetzen.
export type Work = {
  title: string;
  category: string;
  tag: string;
  note: string; // Bildregie-Notiz für den Platzhalter
};

export const featuredWork: Work[] = [
  {
    title: "Fahrzeugbeschriftung",
    category: "Fuhrpark",
    tag: "Werbetechnik",
    note: "Transporter mit frischer Voll- oder Teilbeschriftung, Halbprofil, Tageslicht.",
  },
  {
    title: "Vereinsbekleidung",
    category: "Textil",
    tag: "Stickerei",
    note: "Bestickte Poloshirts/Jacken mit Logo, saubere Detailaufnahme der Stickerei.",
  },
  {
    title: "Firmenschild & Fassade",
    category: "Objekt",
    tag: "Werbetechnik",
    note: "Beleuchtetes oder plattenförmiges Firmenschild an der Fassade, Frontalaufnahme.",
  },
  {
    title: "Geschäftsausstattung",
    category: "Print",
    tag: "Drucksachen",
    note: "Visitenkarten, Briefpapier und Stempel als stimmiges Flatlay von oben.",
  },
];

// Statement „Wen wir unterstützen" (zentriertes Kursiv-Statement).
export const whoWeServe = {
  label: "Wen wir unterstützen",
  parts: [
    { text: "Wir machen ", italic: false },
    { text: "Handwerksbetriebe, Vereine", italic: true },
    { text: " und ", italic: false },
    { text: "Unternehmen aus der Region", italic: true },
    { text: " sichtbar – von der Idee bis zum fertigen Produkt, ", italic: false },
    { text: "alles aus einer Hand", italic: true },
    { text: ".", italic: false },
  ],
};

// „Was wir machen" – Leistungen als Accordion mit Detail-Liste.
export type Expertise = {
  id: string;
  title: string;
  body: string;
  includes: string[];
};

export const expertise: Expertise[] = [
  {
    id: "werbetechnik",
    title: "Werbetechnik",
    body: "Beschriftungen aller Art – auf nahezu jedem Medium. Wir beraten, gestalten und montieren, damit Ihre Marke im Straßenbild und am Objekt sichtbar wird.",
    includes: [
      "Fahrzeugbeschriftung & Vollfolierung",
      "Schilder, Displays & Bauzäune",
      "Fenster- & Schaufensterbeschriftung",
      "Montage vor Ort",
    ],
  },
  {
    id: "textilveredelung",
    title: "Textilveredelung",
    body: "Hochwertige Veredelung für Arbeits- und Freizeitkleidung – langlebig und passgenau zu Ihrer Marke, in Profi-Qualität.",
    includes: [
      "Stickereien",
      "Verschiedene Transfertechniken",
      "Hochwertige Applikationen",
      "Arbeits- & Freizeitkleidung",
    ],
  },
  {
    id: "drucksachen",
    title: "Drucksachen",
    body: "Der klassische Auftritt auf Papier – stimmig gestaltet und sauber gedruckt, ebenfalls alles aus einer Hand.",
    includes: [
      "Visitenkarten & Briefpapier",
      "Flyer & Geschäftsdrucksachen",
      "Stempel",
    ],
  },
];

// Testimonials (Slider). PLATZHALTER – vor Veröffentlichung durch echte,
// freigegebene Kundenstimmen ersetzen.
export type Testimonial = { quote: string; name: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "„Von der Fahrzeugflotte bis zur Arbeitskleidung – alles kam aus einer Hand und hat perfekt zusammengepasst. Unkompliziert, schnell und in top Qualität.“",
    name: "Platzhalter-Kundenstimme · Handwerksbetrieb aus Eckernförde",
  },
  {
    quote:
      "„Persönliche Beratung, ehrliche Empfehlungen und ein Ergebnis, das genau sitzt. Man merkt die jahrzehntelange Erfahrung.“",
    name: "Platzhalter-Kundenstimme · Verein aus der Region",
  },
  {
    quote:
      "„Kurze Wege, ein Ansprechpartner, verlässliche Termine. Genau so stellt man sich einen Werbepartner vor.“",
    name: "Platzhalter-Kundenstimme · Unternehmen aus Schleswig-Holstein",
  },
];

// „Warum Ostseedesign" – Vorteils-Kacheln mit Icon.
export type Feature = {
  title: string;
  text: string;
  icon: "clock" | "layers" | "pin" | "signage" | "check" | "shield";
  wide?: boolean; // größere Kachel im Raster
};

export const whyChooseUs: Feature[] = [
  {
    title: "Über 30 Jahre Erfahrung",
    text: "Seit mehr als drei Jahrzehnten fest in Eckernförde verwurzelt – wir kennen die Region und ihre Betriebe.",
    icon: "clock",
    wide: true,
  },
  {
    title: "Alles aus einer Hand",
    text: "Beratung, Gestaltung, Fertigung und Montage – ein Ansprechpartner für Ihren kompletten Auftritt.",
    icon: "layers",
  },
  {
    title: "Persönlich vor Ort",
    text: "Kurze Wege, feste Ansprechpartner und Beratung von Mensch zu Mensch – kein anonymes Callcenter.",
    icon: "pin",
  },
  {
    title: "Fast jedes Medium",
    text: "Von Fahrzeug über Schild und Fenster bis Textil und Papier – wir beschriften und veredeln nahezu alles.",
    icon: "signage",
  },
  {
    title: "Verlässliche Qualität",
    text: "Saubere Ausführung, termintreu und langlebig – Arbeit, auf die man sich verlassen kann.",
    icon: "check",
  },
];

// Kundenstimmen erweitert um Bewertung (Sterne) – bleiben Platzhalter.
export const reviews: { name: string; role: string; stars: number; quote: string }[] = [
  {
    name: "Platzhalter-Kunde",
    role: "Handwerksbetrieb · Eckernförde",
    stars: 5,
    quote:
      "Von der Fahrzeugflotte bis zur Arbeitskleidung – alles kam aus einer Hand und hat perfekt zusammengepasst. Unkompliziert, schnell und in top Qualität.",
  },
  {
    name: "Platzhalter-Kundin",
    role: "Verein · Region Eckernförde",
    stars: 5,
    quote:
      "Persönliche Beratung, ehrliche Empfehlungen und ein Ergebnis, das genau sitzt. Man merkt die jahrzehntelange Erfahrung.",
  },
  {
    name: "Platzhalter-Kunde",
    role: "Unternehmen · Schleswig-Holstein",
    stars: 5,
    quote:
      "Kurze Wege, ein Ansprechpartner, verlässliche Termine. Genau so stellt man sich einen Werbepartner vor.",
  },
];

// Social-Links (Footer). Leer lassen, wenn (noch) nicht vorhanden.
export const socials: { label: string; href: string }[] = [];
