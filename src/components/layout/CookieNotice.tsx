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
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4"
    >
      <div className="container-site rounded-xl border border-line bg-paper p-5 shadow-[0_12px_32px_-12px_rgba(44,44,44,0.25)] sm:flex sm:items-center sm:gap-6 sm:p-6">
        <div className="flex-1">
          <h2 id="cookie-title" className="font-display text-base font-semibold text-ink">
            Datenschutz-Hinweis
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-ink-muted">
            Diese Website verwendet ausschließlich technisch notwendige Daten
            und setzt keine Tracking- oder Marketing-Cookies ein. Mehr dazu in
            unserer{" "}
            <Link href="/datenschutz" className="font-semibold text-accent underline">
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>
        <div className="mt-4 shrink-0 sm:mt-0">
          <button type="button" onClick={accept} className="btn-primary w-full sm:w-auto">
            Verstanden
          </button>
        </div>
      </div>
    </div>
  );
}
