"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// DSGVO-konformer Cookie-/Datenschutz-Hinweis.
//
// Wichtig: Diese Website lädt selbst KEINE Tracking- oder Marketing-Cookies
// (keine Analytics, keine externen Skripte). Es genügt daher ein reiner
// Informations-Hinweis mit Bestätigung – es werden nur technisch notwendige
// Daten verarbeitet. Die Bestätigung wird lokal im Browser gespeichert
// (localStorage), damit der Hinweis nicht bei jedem Besuch erneut erscheint.
// Es findet KEINE Einwilligung in nicht-notwendige Cookies statt, weil es
// keine gibt – das ist der datensparsamste, saubere Weg.
const STORAGE_KEY = "osd-cookie-hinweis";

export default function CookieNotice() {
  // Startet unsichtbar; erst nach dem Mounten wird geprüft, ob der Hinweis
  // schon bestätigt wurde. So gibt es kein Flackern beim Server-Rendering.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) !== "ok") setVisible(true);
    } catch {
      // localStorage nicht verfügbar (z. B. strenge Datenschutz-Einstellung)
      // → Hinweis trotzdem anzeigen.
      setVisible(true);
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "ok");
    } catch {
      /* Speichern nicht möglich – Hinweis einfach ausblenden. */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
      className="linie-hand-oben linie-hand-stark fixed inset-x-0 bottom-0 z-[80] bg-paper text-ink"
    >
      <div className="wrap flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:gap-8">
        <div className="flex-1">
          <h2 id="cookie-title" className="etikett">
            Datenschutz-Hinweis
          </h2>
          <p className="mt-1 text-[0.9rem] leading-relaxed text-ink-soft">
            Diese Website verwendet ausschließlich technisch notwendige Daten
            und setzt keine Tracking- oder Marketing-Cookies ein. Mehr dazu in
            unserer{" "}
            <Link href="/datenschutz" className="ul-link font-semibold text-ink">
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>
        <button type="button" onClick={accept} className="btn-voll shrink-0">
          Verstanden
        </button>
      </div>
    </div>
  );
}
