"use client";

import { useState } from "react";
import Link from "next/link";
import Divider from "@/components/ui/Divider";
import { PlusIcon } from "@/components/ui/Icons";
import { expertise } from "@/lib/site";

// „Was wir machen": links Intro + CTA, rechts ein Accordion der Leistungen
// (immer genau eines offen) – analog zur Vorlage.
export default function Expertise() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="leistungen" className="scroll-mt-24">
      <div className="pb-10 pt-16 sm:pt-24">
        <Divider label="Was wir machen" />
      </div>

      <div className="container-site grid gap-12 pb-20 sm:pb-28 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Intro */}
        <div className="lg:pr-8">
          <h2 className="font-display text-4xl font-medium text-ink sm:text-5xl">
            Leistungen
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-muted">
            Von der ersten Idee bis zum montierten Ergebnis – wir beraten,
            gestalten und fertigen im eigenen Haus. Alles aus einer Hand,
            persönlich in Eckernförde.
          </p>
          <Link href="/#kontakt" className="btn-outline mt-8">
            Kontakt aufnehmen
          </Link>
        </div>

        {/* Accordion */}
        <div className="border-t border-line">
          {expertise.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.id} className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  >
                    <span className="font-display text-2xl font-medium text-ink sm:text-3xl">
                      {item.title}
                    </span>
                    <span
                      className={`shrink-0 text-ink transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    >
                      <PlusIcon className="h-6 w-6" />
                    </span>
                  </button>
                </h3>
                {/* Höhen-Animation über grid-template-rows */}
                <div
                  className={`grid transition-all duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-8">
                      <p className="max-w-xl text-[15px] leading-relaxed text-ink-muted">
                        {item.body}
                      </p>
                      <p className="mt-6 text-xs font-semibold uppercase tracking-label text-ink">
                        Typischerweise enthalten:
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-1">
                        {item.includes.map((inc) => (
                          <li
                            key={inc}
                            className="font-display text-lg font-medium text-ink"
                          >
                            {inc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
