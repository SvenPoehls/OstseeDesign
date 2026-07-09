import { ClockIcon, ExternalIcon, MailIcon, PinIcon } from "@/components/ui/Icons";
import { company, textilShopUrl } from "@/lib/site";

// Schmale Info-Leiste ganz oben (analog zur Vorlage): Standort, Öffnungs-Hinweis,
// E-Mail und externer Textilshop. Auf sehr kleinen Screens reduziert.
export default function TopBar() {
  return (
    <div className="hidden border-b border-line bg-surface text-ink-muted sm:block">
      <div className="container-site flex h-10 items-center justify-between text-xs font-medium">
        <div className="flex items-center gap-5">
          <span className="inline-flex items-center gap-1.5">
            <PinIcon className="h-4 w-4 text-accent" />
            {company.street}, {company.city}
          </span>
          <span className="hidden items-center gap-1.5 md:inline-flex">
            <ClockIcon className="h-4 w-4 text-accent" />
            Mo–Do bis 16:30 Uhr
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a href={`mailto:${company.email}`} className="inline-flex items-center gap-1.5 hover:text-accent">
            <MailIcon className="h-4 w-4 text-accent" />
            {company.email}
          </a>
          <a
            href={textilShopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1 hover:text-accent md:inline-flex"
          >
            Textilshop
            <ExternalIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
