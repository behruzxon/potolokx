"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { CloseIcon, MenuIcon, PhoneIcon, TelegramIcon } from "./Icons";

const desktopNav = [
  { label: "Bosh sahifa", href: "/" },
  { label: "Qarshi", href: "/natijnoy-patolok-qarshi" },
  { label: "Hududlar", href: "/natijnoy-patolok-qashqadaryo" },
  { label: "Narxlar", href: "/narxlar" },
  { label: "Ishlarimiz", href: "/ishlarimiz" },
  { label: "Aloqa", href: "/aloqa" },
];

const mobileNav = [
  { label: "Narxlar", href: "/narxlar" },
  { label: "Ishlarimiz", href: "/ishlarimiz" },
  { label: "Hududlar", href: "/natijnoy-patolok-qashqadaryo" },
  { label: "Aloqa", href: "/aloqa" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-ink-100 shadow-soft"
          : "bg-white/60 backdrop-blur-md"
      }`}
    >
      <div className="container flex items-center justify-between gap-6 h-16 sm:h-18">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-ink-950"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-glow">
            <span className="text-sm font-bold">PX</span>
          </span>
          <span>
            Potolok<span className="text-brand-600">X</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {desktopNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 rounded-xl text-sm font-medium text-ink-700 hover:text-brand-700 hover:bg-brand-50 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href={site.telegramUrl}
            target="_blank"
            rel="noopener"
            className="btn-secondary !py-2.5 !px-4 text-sm"
          >
            <TelegramIcon className="h-4 w-4" />
            Telegram
          </a>
          <a href={`tel:${site.phone}`} className="btn-primary !py-2.5 !px-4 text-sm">
            <PhoneIcon className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menyuni yopish" : "Menyuni ochish"}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-ink-200 bg-white text-ink-900"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white animate-fade-up overflow-y-auto">
          <div className="container pt-6 pb-10 flex flex-col min-h-full">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-600 text-white">
                  <span className="text-sm font-bold">PX</span>
                </span>
                Potolok<span className="text-brand-600">X</span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                aria-label="Yopish"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-ink-200"
              >
                <CloseIcon />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-1">
              {mobileNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-medium text-ink-800 hover:bg-brand-50 hover:text-brand-700 border border-transparent hover:border-brand-100"
                >
                  <span>{link.label}</span>
                  <span aria-hidden className="text-ink-400">→</span>
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-8 flex flex-col gap-3">
              <a
                href={`tel:${site.phone}`}
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                <PhoneIcon className="h-5 w-5" />
                Qo&apos;ng&apos;iroq qilish
              </a>
              <a
                href={site.telegramUrl}
                target="_blank"
                rel="noopener"
                onClick={() => setOpen(false)}
                className="btn-secondary w-full"
              >
                <TelegramIcon className="h-5 w-5" />
                Telegram bot
              </a>
              <p className="mt-2 text-center text-xs text-ink-500">
                {site.phoneDisplay} · t.me/{site.telegram}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
