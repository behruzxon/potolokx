import { site } from "@/lib/site";
import { PhoneIcon, TelegramIcon } from "./Icons";

export default function ContactBar() {
  return (
    <div className="lg:hidden fixed bottom-4 inset-x-4 z-40">
      <div className="flex items-center justify-between gap-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-ink-100 shadow-glow px-3 py-2.5">
        <a
          href={`tel:${site.phone}`}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-3 py-2.5 text-sm font-semibold text-white"
        >
          <PhoneIcon className="h-4 w-4" />
          Qo&apos;ng&apos;iroq
        </a>
        <a
          href={site.telegramUrl}
          target="_blank"
          rel="noopener"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-ink-200 px-3 py-2.5 text-sm font-semibold text-ink-900"
        >
          <TelegramIcon className="h-4 w-4" />
          Telegram
        </a>
      </div>
    </div>
  );
}
