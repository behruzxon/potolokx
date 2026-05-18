"use client";

import { useState } from "react";

type FAQItem = { q: string; a: string };

type FAQProps = {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
};

export default function FAQ({
  items,
  title = "Tez-tez beriladigan savollar",
  subtitle = "Eng ko'p so'raladigan savollar va aniq javoblar.",
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="eyebrow">FAQ</span>
            <h2 className="heading-2 mt-3">{title}</h2>
            <p className="lead mt-3 max-w-md">{subtitle}</p>
          </div>

          <div className="space-y-3">
            {items.map((item, idx) => {
              const open = openIndex === idx;
              return (
                <article
                  key={item.q}
                  className={`rounded-3xl border bg-white p-5 sm:p-6 transition ${
                    open ? "border-brand-200 shadow-soft" : "border-ink-100"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : idx)}
                    className="flex w-full items-start justify-between gap-4 text-left"
                    aria-expanded={open}
                  >
                    <span className="text-base sm:text-lg font-semibold text-ink-950">
                      {item.q}
                    </span>
                    <span
                      className={`mt-1 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-ink-200 text-ink-700 transition ${
                        open ? "rotate-45 border-brand-300 text-brand-700" : ""
                      }`}
                      aria-hidden
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  {open && (
                    <p className="mt-3 text-sm sm:text-base text-ink-600 leading-relaxed animate-fade-up">
                      {item.a}
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
