import Image from "next/image";
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
  { icon: ShieldIcon, label: "Sifatli material" },
  { icon: CheckIcon, label: "1 kunda o'rnatish" },
];

export default function Hero({
  eyebrow = "Natijnoy Patalok — Qashqadaryo",
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
              <a
                href={site.telegramChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost w-full sm:w-auto"
              >
                Ishlarimizni ko&apos;rish
                <ArrowRightIcon className="h-4 w-4" />
              </a>
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
        <div className="relative w-full h-[280px] sm:h-[370px] lg:h-[440px]">
          <Image
            src="/images/hero/main.jpg"
            alt="Qashqadaryoda LED natijnoy potolok o'rnatish xizmati"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            className="object-cover object-[center_40%]"
          />

          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

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
                <p className="text-sm font-semibold text-ink-950">Sifatli material</p>
                <p className="text-xs text-ink-600">Yevropa va Turkiya brendlari</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

