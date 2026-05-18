import {
  CheckIcon,
  ClockIcon,
  MapPinIcon,
  ShieldIcon,
  SparkIcon,
  TelegramIcon,
} from "./Icons";

const items = [
  {
    icon: SparkIcon,
    title: "Sifatli material",
    desc: "Yevropa va Turkiya brendlari (RuPo, MSD, LackFolie). Har biri sertifikatli, ekologik toza.",
  },
  {
    icon: CheckIcon,
    title: "Toza va tez montaj",
    desc: "Mebellar joyidan jilmaydi. Ish tugagandan keyin xonangizni tozalab qoldiramiz.",
  },
  {
    icon: ClockIcon,
    title: "Bir kunda tayyor",
    desc: "Oddiy xona 4-6 soatda tugaydi. Eski shipni urib tashlash shart emas.",
  },
  {
    icon: MapPinIcon,
    title: "Viloyat bo'ylab chiqamiz",
    desc: "Qarshi, Shahrisabz, Kitob, Chiroqchi, Yakkabog', Koson, G'uzor — barchasiga.",
  },
  {
    icon: TelegramIcon,
    title: "Telegram bot orqali tez aloqa",
    desc: "Bot doimo onlayn — narxni, ish boshlash kunini va materiallarni shu yerda bilasiz.",
  },
  {
    icon: ShieldIcon,
    title: "Yozma kafolat",
    desc: "Material uchun 10 yilgacha, montaj uchun 2-3 yil rasmiy kafolat beriladi.",
  },
];

export default function WhyUs() {
  return (
    <section className="section-pad bg-ink-950 text-white">
      <div className="container">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-200">
            Nega PotolokX
          </span>
          <h2 className="heading-2 mt-3 !text-white">
            Mijoz uchun nima muhim bo&apos;lsa — biz shuni qilamiz
          </h2>
          <p className="mt-3 text-ink-300 text-base sm:text-lg leading-relaxed">
            Reklama lozimotlari emas, real ishlar. Quyida — har bir mijoz biz bilan
            ishlashda nimadan rozi bo&apos;lganini topa olasiz.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 hover:bg-white/[0.06] transition"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600/20 text-brand-300">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="text-xl font-semibold mt-5">{title}</h3>
              <p className="mt-2 text-sm text-ink-300 leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
