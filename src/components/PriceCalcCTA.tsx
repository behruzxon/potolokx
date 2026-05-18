import { site } from "@/lib/site";
import { PhoneIcon, SparkIcon, TelegramIcon } from "./Icons";

type Props = {
  city?: string;
};

export default function PriceCalcCTA({ city }: Props) {
  const region = city ?? "Qashqadaryo";
  return (
    <section className="section-pad">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-white p-8 sm:p-12">
          <div
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-200/40 blur-3xl"
            aria-hidden
          />
          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] items-center">
            <div>
              <span className="eyebrow">Narx kalkulyatori</span>
              <h2 className="heading-2 mt-3">
                Xona razmerini yuboring — narxni tez hisoblab beramiz
              </h2>
              <p className="lead mt-3 max-w-xl">
                {region} bo&apos;ylab natijnoy potolokning aniq narxini Telegram botda
                30 soniyada bilib oling. O&apos;lchov olishga ham bepul chiqamiz.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href={site.telegramUrl}
                  target="_blank"
                  rel="noopener"
                  className="btn-primary"
                >
                  <TelegramIcon className="h-5 w-5" />
                  Botda hisoblash
                </a>
                <a href={`tel:${site.phone}`} className="btn-secondary">
                  <PhoneIcon className="h-5 w-5" />
                  {site.phoneDisplay}
                </a>
              </div>

              <p className="mt-4 text-xs text-ink-500">
                Bot manzili: t.me/{site.telegram}. Xona uzunligi va eni yetarli.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600 text-white">
                  <SparkIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-brand-700 font-semibold">
                    3 ta oddiy qadam
                  </p>
                  <p className="text-base font-semibold text-ink-950">
                    Narxni o&apos;zingiz hisoblang
                  </p>
                </div>
              </div>
              <ol className="mt-5 space-y-3 text-sm text-ink-700">
                <li className="flex gap-3">
                  <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 text-xs font-bold">
                    1
                  </span>
                  Botga xonangizning uzunligi va enini yozing
                </li>
                <li className="flex gap-3">
                  <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 text-xs font-bold">
                    2
                  </span>
                  Material turini tanlang (matoviy / glyans / LED)
                </li>
                <li className="flex gap-3">
                  <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 text-xs font-bold">
                    3
                  </span>
                  Daqiqa ichida aniq narxni oling
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
