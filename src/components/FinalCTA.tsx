import { site } from "@/lib/site";
import { PhoneIcon, TelegramIcon } from "./Icons";

type Props = {
  title?: string;
  subtitle?: string;
};

export default function FinalCTA({
  title = "Bugunoq o'lchamingizni yuboring — narxini hisoblab beramiz",
  subtitle = "Telegram botda 30 soniyada narx, telefon orqali esa ish boshlash kunini kelishish mumkin.",
}: Props) {
  return (
    <section className="section-pad">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 p-8 sm:p-14 text-white">
          <div
            className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            aria-hidden
          />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              {title}
            </h2>
            <p className="mt-4 text-white/85 text-base sm:text-lg leading-relaxed">
              {subtitle}
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href={site.telegramUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm sm:text-base font-semibold text-brand-700 hover:bg-brand-50 transition"
              >
                <TelegramIcon className="h-5 w-5" />
                Telegram bot
              </a>
              <a
                href={`tel:${site.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/15 hover:bg-white/25 px-6 py-3.5 text-sm sm:text-base font-semibold text-white transition"
              >
                <PhoneIcon className="h-5 w-5" />
                {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
