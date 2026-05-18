import { HomeIcon, PaintIcon, SparkIcon, StarIcon, SunIcon } from "./Icons";

const services = [
  {
    icon: PaintIcon,
    title: "Oddiy natijnoy potolok",
    desc: "Matoviy, satin yoki glyans variantlarda. Klassik oq rang eng ko'p tanlanadi.",
    tags: ["matoviy", "glyans", "satin"],
  },
  {
    icon: SunIcon,
    title: "LED yoritgichli potolok",
    desc: "Lentali LED, kontur yoritish, parya chiroqlar — istalgan dizayn uchun.",
    tags: ["LED", "kontur", "parya"],
  },
  {
    icon: StarIcon,
    title: "Gulli / print potolok",
    desc: "Bolalar xonasi, restoran yoki o'ziga xos zal uchun maxsus rasmli potolok.",
    tags: ["bolalar", "print", "dizayn"],
  },
  {
    icon: SparkIcon,
    title: "Matoviy / glyans",
    desc: "Yorug'likka qarshi va yorug'likni aks ettiruvchi — har biri o'z xonasiga.",
    tags: ["matoviy", "glyans"],
  },
  {
    icon: HomeIcon,
    title: "Xonadon va ofislar uchun",
    desc: "Oshxona, zal, yotoqxona, koridor, ofis, kafe — har bir maydon uchun yechim.",
    tags: ["oshxona", "zal", "yotoqxona", "koridor"],
  },
  {
    icon: PaintIcon,
    title: "Ko'p darajali / 3D",
    desc: "Ikki-uch darajali konstruksiyalar, niqobli lyustralar va dizayn elementlari.",
    tags: ["2 daraja", "3D", "konstruksiya"],
  },
];

export default function ServiceCards() {
  return (
    <section id="xizmatlar" className="section-pad">
      <div className="container">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-2xl">
            <span className="eyebrow">Xizmatlar</span>
            <h2 className="heading-2 mt-3">Natijnoy potolokning barcha turlari</h2>
            <p className="lead mt-3">
              PotolokX bir mavzuga emas, butun yo&apos;nalishga ixtisoslashgan: oddiy
              matoviy potolokdan tortib LED va print yechimlargacha — barchasini bir
              joyda taklif qilamiz.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc, tags }) => (
            <article key={title} className="card group">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 group-hover:bg-brand-600 group-hover:text-white transition">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="heading-3 mt-5">{title}</h3>
              <p className="mt-2 text-sm text-ink-600 leading-relaxed">{desc}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <li
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-ink-50 text-ink-600 border border-ink-100"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
