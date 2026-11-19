import Link from "next/link";
import { company } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="deeper" data-edit-id="footer">
      <div className="wrap fuss">
        <p data-edit-id="footer-copyright">
          © {new Date().getFullYear()} {company.fullName}
        </p>
        <ul>
          <li><Link href="/impressum/">Impressum</Link></li>
          <li><Link href="/datenschutz/">Datenschutz</Link></li>
        </ul>
      </div>
    </footer>
  );
}
