import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PriceCalcCTA from "@/components/PriceCalcCTA";
import FinalCTA from "@/components/FinalCTA";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import {
  CheckIcon,
  HomeIcon,
  MapPinIcon,
  PaintIcon,
  PhoneIcon,
  ShieldIcon,
  SparkIcon,
  SunIcon,
  TelegramIcon,
} from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Natijnoy potolok narxlari | Qarshi va Qashqadaryo bo'ylab",
  description:
    "Qarshi va Qashqadaryo bo'ylab natijnoy potolok narxini tez hisoblang. Xona razmerini Telegramda yuboring — material, montaj va dizayn bo'yicha maslahat beramiz. Narx m² hisobida.",
  path: "/narxlar",
  keywords: [
    "natijnoy potolok narxi",
    "natijnoy patalok narxi",
    "natijnoy patalok qarshi narxi",
    "natijnoy potolok m2 narx",
    "натяжной потолок цена карши",
    "натяжной потолок нархи",
    "potolok narxi qashqadaryo",
  ],
});

const tiers = [
  {
    name: "Oddiy natijnoy potolok",
    desc: "Matoviy, glyans yoki satin oq mato. Eng ko'p tanlanadigan asosiy yechim.",
    features: [
      "Matoviy / glyans / satin mato",
      "Oq yoki tabiiy ranglar",
      "1 daraja klassik dizayn",
      "Yozma kafolat",
    ],
  },
  {
    name: "LED yoritgichli potolok",
    badge: "Mashhur",
    accent: "border-brand-300 ring-1 ring-brand-300",
    desc: "LED lenta, kontur yoritgich va nuqtali svetilniklar bilan birga.",
    features: [
      "LED lenta yoki kontur yoritgich",
      "Nuqtali svetilniklar va lyustra",
      "Toza elektrik bog'lash",
      "Zamonaviy yoritish dizayni",
    ],
  },
  {
    name: "Gulli / print potolok",
    desc: "Maxsus rasm yoki gulli naqsh bilan o'ziga xos dizayn.",
    features: [
      "Maxsus print mato",
      "Bolalar xonasi, kafe, zal uchun",
      "Naqsh va ranglar tanlovi keng",
      "Yozma kafolat",
    ],
  },
  {
    name: "Premium material",
    desc: "Yevropa brendlari, ko'p darajali konstruksiya va premium aksessuarlar.",
    features: [
      "Yevropa brend matolari (MSD, LackFolie)",
      "Ko'p darajali konstruksiya",
      "Mehmonxona va biznes obyektlari uchun",
      "Uzaytirilgan kafolat",
    ],
  },
];

const priceFactors = [
  {
    icon: HomeIcon,
    title: "Xona eni va bo'yi",
    desc: "Maydon qancha katta bo'lsa, narx shunchaga ortadi. M² hisobida.",
  },
  {
    icon: PaintIcon,
    title: "Material turi",
    desc: "Matoviy, glyans, satin, print yoki premium brend — har biri farqli.",
  },
  {
    icon: SunIcon,
    title: "Chiroqlar soni",
    desc: "Nuqtali svetilniklar, lyustra ulanishi — har biri qo'shimcha ishchilik.",
  },
  {
    icon: SparkIcon,
    title: "Karniz / LED",
    desc: "Kontur LED yoki yashirin karniz qo'shilsa narx biroz oshadi.",
  },
  {
    icon: ShieldIcon,
    title: "Montaj murakkabligi",
    desc: "Ko'p darajali konstruksiya, balkon yoki eski uy — biroz qo'shimcha.",
  },
];

const sendChecklist = [
  "Xona uzunligi (m)",
  "Xona eni (m)",
  "Imkon bo'lsa xona rasmi yoki sxemasi",
  "Qaysi tumanda ekani",
  "Chiroq / LED xohishi (matoviy, glyans, LED)",
];

const priceFaq = [
  {
    q: "Natijnoy potolok narxi qanday belgilanadi?",
    a: "Asosiy hisob — kvadrat metr. Material turi, ranglar, qo'shimcha LED va nuqtali yoritgichlar narxga ta'sir qiladi. Aniq narx Telegram botda yoki o'lchov olishdan keyin tasdiqlanadi.",
  },
  {
    q: "Avans to'lashim kerakmi?",
    a: "Ha, ish boshlashdan oldin odatda 30% avans olamiz. Bu material xarid qilish uchun. Qolgan qism ish tugagandan keyin to'lanadi.",
  },
  {
    q: "Click yoki Payme orqali to'lov bormi?",
    a: "Ha, Click, Payme va naqd to'lovlar qabul qilinadi. Talabga qarab rasmiy hujjat ham berib boramiz.",
  },
  {
    q: "Aniq narxni qachon bilaman?",
    a: "Telegram botda dastlabki narxni ko'rasiz. Aniq narx o'lchov olingandan keyin tasdiqlanadi. O'lchov bepul.",
  },
  {
    q: "Hudud bo'yicha narx farq qiladimi?",
    a: "Qashqadaryo bo'ylab bir xil narxda ishlaymiz — Qarshi, Shahrisabz, Kitob yoki Muborak farqi yo'q. Yetib borish narxi PotolokXning hisobida.",
  },
  {
    q: "Xona razmerini Telegramda yuborsam bo'ladimi?",
    a: "Ha, Telegram botga xona uzunligi va enini yuboring. Material turini tanlang — daqiqa ichida narx chiqadi. Bot: t.me/vashpotolokbot.",
  },
];

export default function NarxlarPage() {
  return (
    <>
      <JsonLd id="ld-faq-narxlar" data={faqJsonLd(priceFaq)} />

      <Hero
        eyebrow="Narxlar"
        title={
          <span className="[text-wrap:balance]">
            Natijnoy potolok{" "}
            <span className="text-brand-700">narxlari</span>
          </span>
        }
        subtitle="Qarshi va Qashqadaryo bo'ylab natijnoy potolok narxi xona o'lchami, material turi, chiroq va dizaynga qarab hisoblanadi. Razmer yuboring — narxini tez aytamiz."
        showPortfolioLink={false}
      />

      <section className="section-pad">
        <div className="container">
          <div className="max-w-2xl">
            <span className="eyebrow">Variantlar</span>
            <h2 className="heading-2 mt-3">4 ta asosiy yo&apos;nalish</h2>
            <p className="lead mt-3">
              Tayyor narx ro&apos;yxati emas — har bir loyiha o&apos;ziga xos. Pastdagi
              yo&apos;nalishlar nima qila olishimizni ko&apos;rsatadi, aniq summa
              Telegramda razmer olingandan keyin tasdiqlanadi.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-3xl border bg-white p-6 sm:p-7 shadow-soft flex flex-col ${
                  tier.accent ?? "border-ink-200"
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white shadow-glow">
                    {tier.badge}
                  </span>
                )}
                <h3 className="text-lg font-semibold text-ink-950 leading-tight">
                  {tier.name}
                </h3>
                <p className="mt-2 text-sm text-ink-600">{tier.desc}</p>
                <ul className="mt-5 space-y-2.5">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-ink-800"
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-5 text-xs text-ink-500 leading-relaxed">
                  Narx xona o&apos;lchami, material va chiroq turiga qarab
                  hisoblanadi.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-gradient-to-b from-white to-brand-50/40">
        <div className="container">
          <div className="max-w-2xl">
            <span className="eyebrow">Narx qanday hisoblanadi</span>
            <h2 className="heading-2 mt-3">5 ta asosiy omil</h2>
            <p className="lead mt-3">
              Aynan o&apos;sha xona uchun aniq narxni bilish uchun, biz quyidagi
              ma&apos;lumotlarga e&apos;tibor beramiz. Hech qanday yashirin
              qo&apos;shimcha to&apos;lov yo&apos;q.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {priceFactors.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-3xl border border-ink-100 bg-white p-6 sm:p-7"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base sm:text-lg font-semibold text-ink-950">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-white p-6 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] items-start">
              <div>
                <span className="eyebrow">Tez hisoblash</span>
                <h2 className="heading-2 mt-3">
                  Nima yuborish kerak?
                </h2>
                <p className="lead mt-3 max-w-xl">
                  Quyidagilarni Telegramga yuborsangiz, narxni daqiqada
                  aytamiz. Hech narsani o&apos;lchash kerak emas — taxminiy
                  o&apos;lchamlar yetadi.
                </p>

                <ul className="mt-7 space-y-3">
                  {sendChecklist.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-ink-800"
                    >
                      <span className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>

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

                <p className="mt-4 text-xs text-ink-500">
                  Bot: t.me/{site.telegram} · {site.phoneDisplay}
                </p>
              </div>

              <aside className="glass-card rounded-3xl p-6 sm:p-7">
                <p className="text-xs uppercase tracking-wider text-brand-700 font-semibold">
                  Misol uchun
                </p>
                <p className="mt-2 text-base sm:text-lg font-semibold text-ink-950 leading-snug">
                  &laquo;Salom. Zalim 4×5 metr, oddiy oq matoviy, lyustra
                  uchun joy. Qarshidanman.&raquo;
                </p>
                <p className="mt-3 text-sm text-ink-600 leading-relaxed">
                  Shu kabi qisqa xabar bilan Telegramga yozsangiz, 30 soniyada
                  dastlabki narxni qaytaramiz. Keyin o&apos;lchov bepul.
                </p>
                <div className="mt-5 flex items-center gap-2 text-sm text-ink-700">
                  <MapPinIcon className="h-4 w-4 text-brand-700" />
                  Qashqadaryo bo&apos;ylab xizmat
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <PriceCalcCTA />
      <FAQ items={priceFaq} title="Narxlar haqida savol-javob" subtitle="" />
      <FinalCTA />
    </>
  );
}
