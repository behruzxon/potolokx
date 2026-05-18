import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FinalCTA from "@/components/FinalCTA";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, localBusinessJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import { ClockIcon, MapPinIcon, PhoneIcon, TelegramIcon } from "@/components/Icons";

export const metadata: Metadata = buildMetadata({
  title: "Aloqa — PotolokX | Telefon, Telegram, manzil",
  description:
    "PotolokX bilan bog'lanish: +998 90 886 66 66, Telegram bot @vashpotolokbot. Qarshi shahar, Qashqadaryo viloyati. Har kuni 09:00 — 21:00.",
  path: "/aloqa",
  keywords: ["potolokx aloqa", "natijnoy potolok qarshi telefon"],
});

const serviceAreas = [
  "Qarshi",
  "Shahrisabz",
  "Kitob",
  "Chiroqchi",
  "Yakkabog'",
  "Koson",
  "G'uzor",
  "Qamashi",
  "Muborak",
  "Qashqadaryo bo'ylab",
];

export default function AloqaPage() {
  return (
    <>
      <JsonLd id="ld-business-contact" data={localBusinessJsonLd()} />

      <Hero
        eyebrow="Natijnoy potolok aloqa"
        title={
          <span className="[text-wrap:balance]">
            Natijnoy potolok bo&apos;yicha{" "}
            <span className="text-brand-700">bog&apos;laning</span>
          </span>
        }
        subtitle="Qarshi va Qashqadaryo bo'ylab o'lchovga chiqamiz. Xona razmerini yuboring — narxini Telegramda tez hisoblab beramiz."
        showPortfolioLink={false}
      />

      <section className="pt-10 sm:pt-12 lg:pt-16 pb-6 sm:pb-8 lg:pb-10">
        <div className="container grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href={`tel:${site.phone}`}
            className="card group flex h-full flex-col"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 group-hover:bg-brand-600 group-hover:text-white transition">
              <PhoneIcon className="h-5 w-5" />
            </span>
            <p className="mt-5 text-xs uppercase tracking-wider text-ink-500">
              Telefon
            </p>
            <p className="mt-1 text-lg font-semibold text-ink-950">
              {site.phoneDisplay}
            </p>
            <p className="mt-2 text-sm text-ink-600">
              Bemalol qo&apos;ng&apos;iroq qiling — javob beramiz.
            </p>
          </a>

          <a
            href={site.telegramUrl}
            target="_blank"
            rel="noopener"
            className="card group flex h-full flex-col"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 group-hover:bg-brand-600 group-hover:text-white transition">
              <TelegramIcon className="h-5 w-5" />
            </span>
            <p className="mt-5 text-xs uppercase tracking-wider text-ink-500">
              Telegram
            </p>
            <p className="mt-1 text-lg font-semibold text-ink-950">
              @{site.telegram}
            </p>
            <p className="mt-2 text-sm text-ink-600">
              Bot narxni avtomatik hisoblaydi va so&apos;rovni qabul qiladi.
            </p>
          </a>

          <div className="card flex h-full flex-col">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
              <MapPinIcon className="h-5 w-5" />
            </span>
            <p className="mt-5 text-xs uppercase tracking-wider text-ink-500">
              Manzil
            </p>
            <p className="mt-1 text-lg font-semibold text-ink-950">Qarshi shahar</p>
            <p className="mt-2 text-sm text-ink-600">
              Qashqadaryo viloyati. Viloyat bo&apos;ylab chiqamiz.
            </p>
          </div>

          <div className="card flex h-full flex-col">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
              <ClockIcon className="h-5 w-5" />
            </span>
            <p className="mt-5 text-xs uppercase tracking-wider text-ink-500">
              Ish vaqti
            </p>
            <p className="mt-1 text-lg font-semibold text-ink-950">
              {site.workingHours}
            </p>
            <p className="mt-2 text-sm text-ink-600">
              Yakshanba ham javob beramiz, lekin montaj sekinroq.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 lg:pb-20">
        <div className="container">
          <div className="max-w-3xl">
            <span className="eyebrow">Xizmat hududi</span>
            <h2 className="heading-2 mt-3">
              Qashqadaryo bo&apos;ylab xizmat ko&apos;rsatamiz
            </h2>
            <p className="lead mt-3">
              Qaysi tumanda bo&apos;lsangiz ham, xona razmerini Telegramga yuboring.
              Narxini hisoblab, o&apos;lchovga chiqish vaqtini kelishamiz.
            </p>
          </div>

          <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="inline-flex items-center gap-2 rounded-2xl border border-ink-100 bg-white px-4 py-3 text-sm font-medium text-ink-800 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
              >
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500"
                />
                {area}
              </li>
            ))}
          </ul>

          <p className="mt-5 text-sm text-ink-500">
            Ro&apos;yxatda tumaningiz bo&apos;lmasa ham yozing — Qashqadaryo
            bo&apos;ylab xizmat ko&apos;rsatamiz.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={site.telegramUrl}
              target="_blank"
              rel="noopener"
              className="btn-primary w-full sm:w-auto"
            >
              <TelegramIcon className="h-5 w-5" />
              Telegramda razmer yuborish
            </a>
            <a
              href={`tel:${site.phone}`}
              className="btn-secondary w-full sm:w-auto"
            >
              <PhoneIcon className="h-5 w-5" />
              Qo&apos;ng&apos;iroq qilib so&apos;rash
            </a>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
