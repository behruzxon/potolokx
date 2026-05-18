import { MapPinIcon, SparkIcon } from "./Icons";

type Item = {
  title: string;
  area: string;
  city: string;
  tag: string;
  gradient: string;
};

const defaultItems: Item[] = [
  {
    title: "Yangi kvartira — zal va oshxona",
    area: "32 m²",
    city: "Qarshi",
    tag: "Matoviy + LED",
    gradient: "from-brand-100 via-brand-50 to-white",
  },
  {
    title: "Yotoqxona uchun sokin matoviy",
    area: "14 m²",
    city: "Yakkabog'",
    tag: "Matoviy",
    gradient: "from-ink-100 via-white to-brand-50",
  },
  {
    title: "Restoran zali — glyans potolok",
    area: "68 m²",
    city: "Chiroqchi",
    tag: "Glyans",
    gradient: "from-brand-50 via-white to-ink-50",
  },
  {
    title: "Mehmonxona uchun 2 darajali",
    area: "24 m²",
    city: "Shahrisabz",
    tag: "Konstruksiya",
    gradient: "from-white via-brand-50 to-brand-100",
  },
];

type PortfolioGridProps = {
  items?: Item[];
  title?: string;
  subtitle?: string;
};

export default function PortfolioGrid({
  items = defaultItems,
  title = "Ishlarimizdan namunalar",
  subtitle = "Qashqadaryo bo'ylab bajargan loyihalarimizning bir qismi. To'liq portfolio Telegram bot orqali yuboriladi.",
}: PortfolioGridProps) {
  return (
    <section id="ishlarimiz" className="section-pad">
      <div className="container">
        <div className="max-w-2xl">
          <span className="eyebrow">Portfolio</span>
          <h2 className="heading-2 mt-3">{title}</h2>
          <p className="lead mt-3">{subtitle}</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-soft transition hover:shadow-glow hover:-translate-y-1"
            >
              <div
                className={`aspect-[4/5] bg-gradient-to-br ${item.gradient} relative`}
              >
                <div className="absolute inset-0 grid grid-cols-6 gap-1 p-4 opacity-60">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-1.5 rounded bg-white/70 backdrop-blur"
                    />
                  ))}
                </div>
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs font-medium text-ink-800">
                  <SparkIcon className="h-3.5 w-3.5 text-brand-700" />
                  {item.tag}
                </span>
                <span className="absolute bottom-3 right-3 rounded-full bg-ink-950/85 px-3 py-1 text-xs font-medium text-white">
                  {item.area}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-ink-950 leading-tight">
                  {item.title}
                </h3>
                <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-ink-600">
                  <MapPinIcon className="h-4 w-4 text-brand-700" />
                  {item.city}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
