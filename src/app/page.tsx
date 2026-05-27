import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServiceCards from "@/components/ServiceCards";
import PriceCalcCTA from "@/components/PriceCalcCTA";
import AreasGrid from "@/components/AreasGrid";
import PortfolioGrid from "@/components/PortfolioGrid";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, faqJsonLd, localBusinessJsonLd } from "@/lib/seo";

const homeFaq = [
  {
    q: "Natijnoy potolok narxi qanday hisoblanadi?",
    a: "Xona o'lchamiga (uzunligi × eni), tanlangan material turiga va qo'shimcha yoritgich/konstruksiyalarga qarab. Telegram botda dastlabki narxni o'zingiz hisoblay olasiz, oxirgi aniq narx esa o'lchov olingandan keyin tasdiqlanadi.",
  },
  {
    q: "Qaysi tumanlarga borasizlar?",
    a: "Qashqadaryo viloyatining barcha tumanlariga: Qarshi, Shahrisabz, Kitob, Chiroqchi, Yakkabog', Koson, G'uzor, Qamashi, Muborak, Nishon, Kasbi, Mirishkor va Dehqonobod.",
  },
  {
    q: "Bir xonani necha soatda o'rnatasiz?",
    a: "Oddiy 1 ta xona 4-6 soatda tugaydi. LED yoritgich, ko'p darajali konstruksiya yoki katta maydonda 1-2 kun ketishi mumkin.",
  },
  {
    q: "Kafolat bormi?",
    a: "Ha. Material uchun 10 yilgacha, montaj uchun 2-3 yil yozma kafolat beriladi. Kafolat hujjati ish tugagandan keyin qo'lingizga beriladi.",
  },
  {
    q: "Telegram botda narx hisoblash mumkinmi?",
    a: "Albatta. Botga xona o'lchamlarini yuborasiz, material turini tanlaysiz — daqiqa ichida aniq narx chiqadi. Bot: t.me/vashpotolokbot.",
  },
  {
    q: "Qarshi va viloyat bo'ylab ishlaysizlarmi?",
    a: "Ha, Qarshi shahar va Qashqadaryo viloyatining barcha tumanlarida xizmat ko'rsatamiz. Yetib borish narxi PotolokXning hisobida.",
  },
  {
    q: "LED yoki gulli potolok qilasizlarmi?",
    a: "Ha, LED yoritgichli, kontur yoritgichli, gulli print va ko'p darajali natijnoy potolok turlarini o'rnatamiz. Bolalar xonasi, zal, oshxona — har bir xona uchun mos dizayn tavsiya qilamiz.",
  },
  {
    q: "Ruscha «натяжной потолок» deb qidirganlar uchun ham xizmat bormi?",
    a: "Albatta. Natijnoy potolok va натяжной потолок bir xil xizmat — tarang mato yordamida zamonaviy shift yechimi. Qashqadaryo bo'ylab xizmat ko'rsatamiz.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Natijnoy potolok Qashqadaryo bo'ylab | Vashpotolok",
  description:
    "Qarshi va Qashqadaryo bo'ylab natijnoy potolok o'rnatamiz. Xona razmerini yuboring — narxini Telegramda tez hisoblab beramiz. Sifatli material, toza montaj va kafolat.",
  path: "/",
  keywords: [
    "natijnoy potolok qashqadaryo",
    "natijnoy patalok qarshi",
    "natijniy patalok",
    "natyajnoy potolok",
    "натяжной потолок карши",
    "натяжной потолок кашкадарья",
    "potolok ustasi qarshi",
    "natijnoy patalok narxi",
    "potolok montaj qashqadaryo",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd id="ld-business-home" data={localBusinessJsonLd()} />
      <JsonLd id="ld-faq-home" data={faqJsonLd(homeFaq)} />

      <Hero
        eyebrow="Qashqadaryo bo'ylab natijnoy potolok"
        title={
          <span className="[text-wrap:balance]">
            Natijnoy potolok{" "}
            <span className="text-brand-700">Qashqadaryo</span> bo&apos;ylab
          </span>
        }
        subtitle="Qarshi va barcha tumanlarda zamonaviy natijnoy potolok o'rnatamiz. Xona razmerini yuboring — narxini tez hisoblab beramiz."
      />

      <TrustStrip />
      <ServiceCards />
      <PriceCalcCTA />
      <AreasGrid />
      <PortfolioGrid />
      <WhyUs />
      <FAQ items={homeFaq} />

      <section className="py-12 sm:py-16 border-t border-ink-100 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink-950">
            PotolokX haqida qisqacha
          </h2>
          <div className="mt-4 space-y-3 text-sm sm:text-base text-ink-600 leading-relaxed">
            <p>
              PotolokX — Qashqadaryo viloyatida natijnoy potolok o&apos;rnatish bilan
              shug&apos;ullanadigan jamoa. Qarshi shahridan boshlab Shahrisabz, Kitob,
              Chiroqchi, Yakkabog&apos;, Koson, G&apos;uzor, Qamashi, Muborak, Nishon,
              Kasbi, Mirishkor va Dehqonobodgacha — har bir hududda jonli mijozlarimiz bor.
              Asosan uy-joy, ofis va savdo nuqtalari uchun ishlaymiz.
            </p>
            <p>
              Rus tilida bu xizmat &laquo;натяжной потолок&raquo; deb yuritiladi,
              o&apos;zbek tilida esa turlicha yoziladi: &laquo;natijnoy potolok&raquo;,
              &laquo;natijnoy patalok&raquo;, ba&apos;zan &laquo;natijniy patalok&raquo;
              yoki &laquo;natyajnoy potolok&raquo; deb ham izlashadi. Hammasi bitta narsa
              haqida — maxsus mato va profil bilan tortilib o&apos;rnatiladigan zamonaviy
              shift yechimi. Mato turiga qarab matoviy, glyans, satin yoki LED
              yoritgichli variantlar bor.
            </p>
            <p>
              Potolok ustasi kerak bo&apos;lsa, xona razmerini Telegram botga yuboring —
              30 soniyada dastlabki narxni hisoblab beramiz. Keyin o&apos;lchovga chiqamiz
              va kafolat bilan montaj qilamiz. Bir kunda tugatish — bizning standart ish
              maromi.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
