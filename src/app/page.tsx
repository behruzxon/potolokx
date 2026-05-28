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
    q: "Material qancha xizmat qiladi?",
    a: "Sifatli sertifikatli material to'g'ri o'rnatilsa, yillar davomida xizmat qiladi — shaklini va rangini o'zgartirmaydi. Yevropa va Turkiya brendlari bilan ishlaymiz; qaysi material qaysi xona uchun mos kelishini tushuntirib beramiz.",
  },
  {
    q: "Telegram botda narx hisoblash mumkinmi?",
    a: "Albatta. Botga xona o'lchamlarini yuborasiz, material turini tanlaysiz — daqiqa ichida aniq narx chiqadi. Bot: t.me/vashpotolokbot.",
  },
  {
    q: "Qarshi va viloyat bo'ylab ishlaysizlarmi?",
    a: "Ha, Qarshi shahar va Qashqadaryo viloyatining barcha tumanlarida xizmat ko'rsatamiz. Yetib borish narxi bizning hisobimizda.",
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
  title: "Natijnoy patalok Qashqadaryo | Narx va o'lchovga chiqish",
  description:
    "Qashqadaryo bo'ylab natijnoy patalok o'rnatish xizmati. Qarshi va tumanlarda o'lchovga chiqamiz. Razmer yuboring — narxini Telegramda hisoblaymiz.",
  path: "/",
  keywords: [
    "natijnoy patalok",
    "natijnoy patalok qashqadaryo",
    "natijnoy patalok qarshi",
    "natijnoy potolok qashqadaryo",
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
        eyebrow="Qashqadaryo bo'ylab natijnoy patalok"
        title={
          <span className="[text-wrap:balance]">
            Natijnoy patalok{" "}
            <span className="text-brand-700">Qashqadaryo</span> bo&apos;ylab
          </span>
        }
        subtitle="Qarshi va barcha tumanlarda natijnoy patalok o'rnatamiz. Xona razmerini yuboring — narxini tez hisoblab beramiz."
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
            Natijnoy Patalok haqida qisqacha
          </h2>
          <div className="mt-4 space-y-3 text-sm sm:text-base text-ink-600 leading-relaxed">
            <p>
              Natijnoy Patalok — Qashqadaryo viloyatida natijnoy patalok o&apos;rnatish
              bilan shug&apos;ullanadigan jamoa. Qarshi shahridan boshlab Shahrisabz,
              Kitob, Chiroqchi, Yakkabog&apos;, Koson, G&apos;uzor, Qamashi, Muborak,
              Nishon, Kasbi, Mirishkor va Dehqonobodgacha — har bir hududda mijozlarimiz
              bor. Asosan uy-joy, ofis va savdo nuqtalari uchun ishlaymiz.
            </p>
            <p>
              Rus tilida bu xizmat &laquo;натяжной потолок&raquo; deb yuritiladi,
              o&apos;zbek tilida esa turlicha yoziladi: ko&apos;pchilik &laquo;natijnoy
              patalok&raquo; deb yozadi, ba&apos;zan &laquo;natijnoy potolok&raquo; yoki
              &laquo;natijniy patalok&raquo; deb ham izlashadi. Hammasi bitta narsa haqida
              — maxsus mato va profil bilan tortilib o&apos;rnatiladigan zamonaviy shift
              yechimi. Mato turiga qarab matoviy, glyans, satin yoki LED yoritgichli
              variantlar bor.
            </p>
            <p>
              Xona razmerini Telegram botga yuboring — 30 soniyada dastlabki narxni
              hisoblab beramiz. Keyin o&apos;lchovga chiqamiz va toza montaj qilamiz.
              Bir kunda tugatish — standart ish maromi.
            </p>
            <p className="text-xs text-ink-500">
              Xizmat{" "}
              <a
                href="https://vashpotolok.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-700 hover:underline"
              >
                Vashpotolok
              </a>{" "}
              jamoasi tomonidan ko&apos;rsatiladi.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
