import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PortfolioGallery, {
  type PortfolioItem,
} from "@/components/PortfolioGallery";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import {
  CheckIcon,
  PhoneIcon,
  SparkIcon,
  TelegramIcon,
} from "@/components/Icons";

export const metadata: Metadata = buildMetadata({
  title: "Natijnoy potolok ishlarimiz Qashqadaryo",
  description:
    "Qarshi va Qashqadaryo bo'ylab natijnoy potolok ishlari. Gulli, LED, matoviy va zamonaviy potolok namunalarini ko'ring.",
  path: "/ishlarimiz",
  keywords: [
    "natijnoy potolok portfolio",
    "qarshi natijnoy potolok ishlari",
    "potolokx ishlari",
    "gulli potolok namunasi",
    "led potolok namunasi",
  ],
});

const portfolioItems: PortfolioItem[] = [
  {
    slug: "qarshi-zal-led",
    title: "Qarshi shahridagi natijnoy potolok",
    location: "Qarshi",
    serviceType: "LED yoritgichli",
    description:
      "Yangi qurilgan kvartiraning zali uchun matoviy oq potolok va kontur LED yoritish.",
    image: null,
    alt: "Qarshi shahridagi natijnoy potolok ishi — LED kontur yoritgich",
    tags: ["Qarshi", "LED", "Matoviy"],
    gradient: "from-brand-100 via-brand-50 to-white",
  },
  {
    slug: "yakkabog-glyans",
    title: "Yakkabog' tumanidagi ishimiz",
    location: "Yakkabog'",
    serviceType: "Glyans",
    description:
      "Mehmonxona uchun glyans oq potolok, lyustra va nuqtali yoritgichlar bilan.",
    image: null,
    alt: "Yakkabog' tumanidagi glyans natijnoy potolok",
    tags: ["Yakkabog'", "Glyans"],
    gradient: "from-ink-100 via-white to-brand-50",
  },
  {
    slug: "chiroqchi-2-daraja",
    title: "Chiroqchi tumanidagi ishimiz",
    location: "Chiroqchi",
    serviceType: "Ko'p darajali",
    description:
      "Ikki darajali potolok konstruksiyasi va yashirin LED zal uchun.",
    image: null,
    alt: "Chiroqchi tumanidagi ko'p darajali natijnoy potolok",
    tags: ["Chiroqchi", "LED"],
    gradient: "from-brand-50 via-white to-brand-100",
  },
  {
    slug: "shahrisabz-modern",
    title: "Shahrisabzdagi zamonaviy potolok",
    location: "Shahrisabz",
    serviceType: "Matoviy",
    description:
      "Yangi binoning yotoqxonasi uchun sokin oq matoviy potolok yechimi.",
    image: null,
    alt: "Shahrisabzdagi zamonaviy natijnoy potolok",
    tags: ["Shahrisabz", "Matoviy"],
    gradient: "from-white via-brand-50 to-ink-50",
  },
  {
    slug: "kitob-montaj",
    title: "Kitob tumanida potolok montaji",
    location: "Kitob",
    serviceType: "Matoviy + LED",
    description:
      "Oshxona va koridor uchun bir kunda tugatilgan toza montaj.",
    image: null,
    alt: "Kitob tumanida natijnoy potolok montaji",
    tags: ["Kitob", "LED", "Matoviy"],
    gradient: "from-brand-50 via-white to-brand-100",
  },
  {
    slug: "qashqadaryo-gulli",
    title: "Qashqadaryo bo'ylab gulli potolok yechimi",
    location: "Qashqadaryo",
    serviceType: "Gulli print",
    description:
      "Bolalar xonasi va mehmonxona uchun maxsus print mato bilan dizayn.",
    image: null,
    alt: "Qashqadaryo bo'ylab gulli print natijnoy potolok",
    tags: ["Qashqadaryo", "Gulli", "Print"],
    gradient: "from-brand-100 via-white to-brand-50",
  },
];

const filters = [
  "Barchasi",
  "Qarshi",
  "Yakkabog'",
  "Chiroqchi",
  "Shahrisabz",
  "Gulli",
  "LED",
];

const approachPoints = [
  "Xona o'lchamiga aniq moslab kesib o'rnatamiz",
  "Material brendini sifat va byudjetga qarab tanlaymiz",
  "Yoritish dizayni xonangizning vazifasiga moslanadi",
  "Mijoz xohishiga binoan ranglar va tekstura tanlanadi",
];

export default function IshlarimizPage() {
  return (
    <>
      <Hero
        eyebrow="Ishlarimiz"
        title={
          <span className="[text-wrap:balance]">
            Qashqadaryo bo&apos;ylab qilgan{" "}
            <span className="text-brand-700">ishlarimiz</span>
          </span>
        }
        subtitle="Qarshi, Shahrisabz, Kitob, Chiroqchi, Yakkabog' va boshqa tumanlarda o'rnatilgan natijnoy potolok ishlari. Shunaqa potolok kerak bo'lsa, razmer yuboring — narxini hisoblab beramiz."
        showPortfolioLink={false}
      />

      <PortfolioGallery items={portfolioItems} filters={filters} />

      <section className="pb-12 sm:pb-16 lg:pb-20">
        <div className="container">
          <div className="rounded-3xl border border-ink-100 bg-gradient-to-br from-white to-brand-50/40 p-6 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] items-start">
              <div>
                <span className="eyebrow">Bizning yondashuvimiz</span>
                <h2 className="heading-2 mt-3">
                  Real ishlar qanday tanlanadi
                </h2>
                <p className="lead mt-3 max-w-xl">
                  Har bir ishimizda xona o&apos;lchami, material turi va mijoz
                  xohishiga qarab yechim tanlanadi. Bir xil shablon emas — har
                  loyiha o&apos;ziga xos.
                </p>
              </div>

              <ul className="space-y-3">
                {approachPoints.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 text-ink-800"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm sm:text-base">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 p-6 sm:p-10 lg:p-14 text-white">
            <div
              aria-hidden
              className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            />
            <div className="relative max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-wider">
                <SparkIcon className="h-3.5 w-3.5" />
                Sizning xonangiz
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight [text-wrap:balance]">
                Sizda ham shunday potolok bo&apos;lishini xohlaysizmi?
              </h2>
              <p className="mt-4 text-white/85 text-base sm:text-lg leading-relaxed">
                Xona rasmini yoki razmerini yuboring. Sizga mos dizayn va
                taxminiy narxni aytamiz.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href={site.telegramUrl}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm sm:text-base font-semibold text-brand-700 hover:bg-brand-50 transition w-full sm:w-auto"
                >
                  <TelegramIcon className="h-5 w-5" />
                  Telegramda rasm yuborish
                </a>
                <a
                  href={`tel:${site.phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/15 hover:bg-white/25 px-6 py-3.5 text-sm sm:text-base font-semibold text-white transition w-full sm:w-auto"
                >
                  <PhoneIcon className="h-5 w-5" />
                  Qo&apos;ng&apos;iroq qilib maslahat olish
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
