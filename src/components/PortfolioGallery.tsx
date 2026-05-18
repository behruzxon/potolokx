"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { site } from "@/lib/site";
import {
  ArrowRightIcon,
  MapPinIcon,
  SparkIcon,
  TelegramIcon,
} from "./Icons";

export type PortfolioItem = {
  slug: string;
  title: string;
  location: string;
  serviceType: string;
  description: string;
  image?: string | null;
  alt: string;
  tags: string[];
  gradient: string;
};

type Props = {
  items: PortfolioItem[];
  filters: string[];
};

const ALL = "Barchasi";

export default function PortfolioGallery({ items, filters }: Props) {
  const [active, setActive] = useState<string>(ALL);

  const filtered = useMemo(() => {
    if (active === ALL) return items;
    return items.filter(
      (item) => item.location === active || item.tags.includes(active),
    );
  }, [active, items]);

  return (
    <section className="section-pad">
      <div className="container">
        <div className="flex flex-wrap gap-2 sm:gap-2.5">
          {filters.map((f) => {
            const isActive = active === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium transition border ${
                  isActive
                    ? "bg-brand-600 text-white border-brand-600 shadow-glow"
                    : "bg-white text-ink-700 border-ink-200 hover:border-brand-300 hover:text-brand-700 hover:bg-brand-50"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <article
              key={item.slug}
              className="group flex flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-soft transition hover:shadow-glow hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3]">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <div
                    aria-hidden
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
                  >
                    <div className="absolute inset-0 grid grid-cols-8 gap-1 p-4 opacity-60">
                      {Array.from({ length: 32 }).map((_, i) => (
                        <div
                          key={i}
                          className="h-1.5 rounded bg-white/70"
                        />
                      ))}
                    </div>
                  </div>
                )}
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/85 backdrop-blur px-3 py-1 text-xs font-medium text-ink-800">
                  <SparkIcon className="h-3.5 w-3.5 text-brand-700" />
                  {item.serviceType}
                </span>
                <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-ink-950/85 px-3 py-1 text-xs font-medium text-white">
                  <MapPinIcon className="h-3.5 w-3.5" />
                  {item.location}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-ink-950 leading-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                  {item.description}
                </p>

                {item.tags.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags.map((t) => (
                      <li
                        key={t}
                        className="text-[11px] px-2 py-1 rounded-full bg-ink-50 text-ink-600 border border-ink-100"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                )}

                <a
                  href={site.telegramUrl}
                  target="_blank"
                  rel="noopener"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-50 hover:bg-brand-600 text-brand-700 hover:text-white border border-brand-100 hover:border-brand-600 px-4 py-2.5 text-sm font-medium transition group/btn"
                >
                  <TelegramIcon className="h-4 w-4" />
                  Shunaqa dizayn kerak
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-ink-500">
            Bu filter bo&apos;yicha hozircha namuna yo&apos;q. Telegramda
            yozsangiz, kerakli dizaynni topib beramiz.
          </p>
        )}
      </div>
    </section>
  );
}
