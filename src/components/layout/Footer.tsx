import Link from "next/link";
import { LEISE, farben } from "@/lib/farben";
import { company, textilShopUrl } from "@/lib/site";

// Fußzeile: noch einmal der Farbfächer, ganz klein, darunter die Zeile mit
// Anschrift und dem Rechtlichen.
export default function Footer() {
  const year = 2026; // statisch – kein Client-Datum nötig

  return (
    <footer className="seitenrand pb-10 pt-12">
      <div aria-hidden="true" className="flex gap-1.5">
        {farben.map((f) => (
          <span
            key={f.ton}
            className="h-2 w-10 rounded-full"
            style={{ backgroundColor: f.ton }}
          />
        ))}
      </div>
      <div
        className="mt-5 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 text-[0.88rem]"
        style={{ color: LEISE }}
      >
        <p>
          © {year} {company.fullName} · {company.street}, {company.zip}{" "}
          {company.city}
        </p>
        <nav aria-label="Rechtliches" className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link href="/impressum" className="transition-colors hover:text-tinte">
            Impressum
          </Link>
          <Link href="/datenschutz" className="transition-colors hover:text-tinte">
            Datenschutz
          </Link>
          <a
            href={textilShopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-tinte"
          >
            Textilshop ↗
          </a>
        </nav>
      </div>
    </footer>
  );
}
