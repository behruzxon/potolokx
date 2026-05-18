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
    a: "Qashqadaryo viloyatining barcha tumanlariga: Qarshi, Shahrisabz, Kitob, Chiroqchi, Yakkabog', Koson, G'uzor, Qamashi, Muborak va boshqalariga.",
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
];

export const metadata: Metadata = buildMetadata({
  title: "Natijnoy potolok Qashqadaryo bo'ylab | PotolokX",
  description:
    "Qarshi va Qashqadaryo bo'ylab natijnoy potolok o'rnatamiz. Sifatli material, toza montaj, kafolat. Xona razmerini yuboring — narxni Telegram botda hisoblang.",
  path: "/",
  keywords: [
    "natijnoy potolok qashqadaryo",
    "natijnoy patalok qarshi",
    "натяжной потолок карши",
    "potolok ustasi qarshi",
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
              Chiroqchi, Yakkabog&apos;, Koson va G&apos;uzorgacha — har bir hududda
              jonli mijozlarimiz bor. Asosan uy-joy, ofis va savdo nuqtalari uchun
              ishlaymiz.
            </p>
            <p>
              Rus tilida bu xizmat &laquo;натяжной потолок&raquo; deb yuritiladi,
              o&apos;zbek tilida esa ko&apos;pincha &laquo;natijnoy potolok&raquo;
              yoki &laquo;natijnoy patalok&raquo; deb yoziladi — har qanday yozilishida
              gap bitta narsa haqida: maxsus mato va profil bilan tortilib o&apos;rnatiladigan
              zamonaviy shift turi. Mato turiga qarab matoviy, glyans, satin yoki LED
              yoritgichli variantlar bor.
            </p>
            <p>
              Aniq narxni Telegram bot orqali 30 soniyada hisoblab olishingiz mumkin,
              keyin o&apos;lchovga chiqamiz va kafolat bilan montaj qilamiz. Bir kunda
              tugatish — bizning standart ish maromi.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
