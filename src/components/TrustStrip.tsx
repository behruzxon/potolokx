import {
  ClockIcon,
  MapPinIcon,
  ShieldIcon,
  SparkIcon,
  TelegramIcon,
} from "./Icons";

const items = [
  { icon: MapPinIcon, label: "Qashqadaryo bo'ylab xizmat" },
  { icon: ClockIcon, label: "Tez o'lchov" },
  { icon: SparkIcon, label: "Toza montaj" },
  { icon: ShieldIcon, label: "Kafolat" },
  { icon: TelegramIcon, label: "Telegram bot orqali hisoblash" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-ink-100 bg-white">
      <div className="container py-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-3 text-sm text-ink-700"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
              <Icon className="h-4 w-4" />
            </span>
            <span className="font-medium">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
