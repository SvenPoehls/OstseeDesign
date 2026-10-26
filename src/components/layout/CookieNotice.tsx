"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// DSGVO-konformer Cookie-/Datenschutz-Hinweis.
//
// ACHTUNG: Diese Komponente ist zurzeit auf keiner Seite eingebunden. Die
// Datenschutzerklärung (Abschnitt 4) beschreibt aber genau diesen Hinweis.
// Entweder hier einbinden (in src/app/layout.tsx) oder den
// Abschnitt in der Erklärung streichen – beides gleichzeitig geht nicht.
//
// Wichtig: Diese Website lädt selbst KEINE Tracking- oder Marketing-Cookies
// (keine Analytics, keine externen Skripte). Es genügt daher ein reiner
// Informations-Hinweis mit Bestätigung – es werden nur technisch notwendige
// Daten verarbeitet. Die Bestätigung wird lokal im Browser gespeichert
// (localStorage), damit der Hinweis nicht bei jedem Besuch erneut erscheint.
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
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-seite rounded-kachel bg-white p-5 shadow-[0_12px_40px_rgba(30,24,20,0.18)] ring-1 ring-tinte/10 sm:inset-x-6 sm:bottom-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
        <div className="flex-1">
          <h2 id="cookie-title" className="text-[0.88rem] font-bold text-[#8f3307]">
            Datenschutz-Hinweis
          </h2>
          <p className="mt-1 text-[0.92rem] leading-relaxed text-leise">
            Diese Website verwendet ausschließlich technisch notwendige Daten
            und setzt keine Tracking- oder Marketing-Cookies ein. Mehr dazu in
            unserer{" "}
            <Link
              href="/datenschutz"
              className="font-semibold text-tinte underline decoration-[#ff7a30] decoration-2 underline-offset-4"
            >
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 rounded-full bg-[#ff7a30] px-7 py-3 text-[0.95rem] font-bold text-tinte transition-opacity hover:opacity-85"
        >
          Verstanden
        </button>
      </div>
    </div>
  );
}
