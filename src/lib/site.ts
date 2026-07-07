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

// Navigation (Header). Service-Links springen zu den Sektionen der Startseite;
// eigene Unterseiten folgen in einem späteren Ausbauschritt.
export const nav: { label: string; href: string; external?: boolean }[] = [
  { label: "Werbetechnik", href: "/#leistungen" },
  { label: "Textilveredelung", href: "/#leistungen" },
  { label: "Drucksachen", href: "/#leistungen" },
  { label: "Textilshop", href: textilShopUrl, external: true },
  { label: "Kontakt", href: "/#kontakt" },
];

// Vertrauens-Kennzahlen (30-Jahre-Block).
export const trustStats: { value: string; label: string }[] = [
  { value: "30+", label: "Jahre Erfahrung am Markt" },
  { value: "1", label: "Ansprechpartner – alles aus einer Hand" },
  { value: "∞", label: "Medien für Ihre Beschriftung" },
];
