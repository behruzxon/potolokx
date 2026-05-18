import Link from "next/link";
import { site } from "@/lib/site";
import {
  ArrowRightIcon,
  CheckIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldIcon,
  SparkIcon,
  TelegramIcon,
} from "./Icons";

type HeroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  showPortfolioLink?: boolean;
};

const trust = [
  { icon: MapPinIcon, label: "Qarshi va viloyat bo'ylab" },
  { icon: SparkIcon, label: "Toza montaj" },
  { icon: ShieldIcon, label: "Yozma kafolat" },
  { icon: CheckIcon, label: "1 kunda o'rnatish" },
];

export default function Hero({
  eyebrow = "PotolokX — Qashqadaryo",
  title,
  subtitle,
  primaryCta,
  showPortfolioLink = true,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 h-[520px] bg-grid-light opacity-[0.4] [mask-image:radial-gradient(ellipse_at_top,white,transparent_70%)] pointer-events-none"
        style={{ backgroundSize: "32px 32px" }}
        aria-hidden
      />

      <div className="container relative pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-20">
        <div className="max-w-3xl">
          <span className="eyebrow animate-fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            {eyebrow}
          </span>
          <h1 className="heading-1 mt-5 animate-fade-up">{title}</h1>
          <p className="lead mt-5 max-w-2xl animate-fade-up">{subtitle}</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 animate-fade-up">
            <a
              href={site.telegramUrl}
              target="_blank"
              rel="noopener"
              className="btn-primary w-full sm:w-auto"
            >
              <TelegramIcon className="h-5 w-5" />
              Narxni Telegramda hisoblash
            </a>
            <a
              href={`tel:${site.phone}`}
              className="btn-secondary w-full sm:w-auto"
            >
              <PhoneIcon className="h-5 w-5" />
              Qo&apos;ng&apos;iroq qilish
            </a>
            {primaryCta ? (
              <Link
                href={primaryCta.href}
                className="btn-ghost w-full sm:w-auto"
              >
                {primaryCta.label}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            ) : showPortfolioLink ? (
              <Link
                href="/ishlarimiz"
                className="btn-ghost w-full sm:w-auto"
              >
                Ishlarimizni ko&apos;rish
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            ) : null}
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-700 animate-fade-up">
            {trust.map(({ icon: Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                  <Icon className="h-4 w-4" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="mt-12 sm:mt-14 lg:mt-20">
      <div className="relative rounded-3xl overflow-hidden border border-ink-100 shadow-soft">
        <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[420px]">
          <HeroPlaceholder />

          <div className="absolute left-4 right-4 bottom-4 sm:left-8 sm:right-8 sm:bottom-8 flex flex-col sm:flex-row items-stretch sm:items-end justify-between gap-3">
            <div className="glass-card rounded-2xl px-4 py-3.5 sm:px-5 sm:py-4 max-w-md">
              <p className="text-[11px] sm:text-xs uppercase tracking-wider text-brand-700 font-medium">
                Tezkor hisoblash
              </p>
              <p className="mt-1 text-sm sm:text-lg font-semibold text-ink-950 leading-snug">
                Xonangiz razmerini yuboring — narxini 30 soniyada hisoblab beramiz.
              </p>
            </div>
            <div className="glass-card rounded-2xl px-4 py-3.5 sm:px-5 sm:py-4 flex items-center gap-3 sm:w-auto">
              <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white">
                <ShieldIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink-950">10 yil kafolat</p>
                <p className="text-xs text-ink-600">material uchun</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroPlaceholder() {
  return (
    <div className="absolute inset-0" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-br from-white via-brand-50/70 to-brand-100/80" />

      <div className="absolute inset-0 [background:radial-gradient(ellipse_70%_55%_at_50%_18%,rgba(59,149,246,0.22),transparent_70%)]" />

      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(37,117,235,0.6) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="absolute inset-x-8 top-10 sm:top-14 flex flex-col gap-3 sm:gap-4 opacity-70">
        <div className="h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent" />
        <div className="h-px bg-gradient-to-r from-transparent via-brand-300/70 to-transparent" />
        <div className="h-px bg-gradient-to-r from-transparent via-brand-300/40 to-transparent" />
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[58%] flex items-center justify-center">
        <div className="relative">
          <div className="h-2 w-2 rounded-full bg-brand-600 shadow-[0_0_20px_rgba(37,117,235,0.65)]" />
          <div className="absolute inset-0 m-auto h-16 w-px bg-gradient-to-b from-brand-400/70 to-transparent translate-y-2" />
          <div className="absolute left-1/2 -translate-x-1/2 mt-16 flex flex-col items-center gap-0.5">
            <div className="h-3 w-12 rounded-full bg-gradient-to-b from-brand-200 to-brand-100 shadow-soft" />
            <div className="h-2 w-9 rounded-full bg-gradient-to-b from-brand-200/80 to-brand-50" />
            <div className="h-1.5 w-6 rounded-full bg-brand-200/60" />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/85 via-white/40 to-transparent" />
    </div>
  );
}
