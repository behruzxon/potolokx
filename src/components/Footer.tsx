import Link from "next/link";
import { site } from "@/lib/site";
import { locations } from "@/lib/locations";
import { PhoneIcon, TelegramIcon, MapPinIcon } from "./Icons";

const services = [
  "Matoviy natijnoy potolok",
  "Glyans natijnoy potolok",
  "LED yoritgichli potolok",
  "Print / gulli potolok",
  "Oshxona uchun potolok",
  "Zal va yotoqxona uchun",
];

export default function Footer() {
  return (
    <footer className="mt-16 sm:mt-20 lg:mt-24 border-t border-ink-100 bg-gradient-to-b from-white to-brand-50/40">
      <div className="container py-10 sm:py-12 lg:py-14 grid gap-8 sm:gap-10 lg:grid-cols-4">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-600 text-white">
              <span className="text-sm font-bold">NP</span>
            </span>
            Natijnoy <span className="text-brand-600">Patalok</span>
          </Link>
          <p className="text-sm text-ink-600 leading-relaxed">
            {site.description}
          </p>
          <p className="text-xs text-ink-500 leading-relaxed">
            Xizmat{" "}
            <a
              href={site.partnerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-700 hover:underline"
            >
              {site.partnerName}
            </a>{" "}
            jamoasi tomonidan ko&apos;rsatiladi.
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center gap-2 rounded-2xl bg-brand-600 px-4 py-2 text-sm font-medium text-white"
            >
              <PhoneIcon className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
            <a
              href={site.telegramUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-2xl border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-800"
            >
              <TelegramIcon className="h-4 w-4" />
              @{site.telegram}
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-500">
            Xizmatlar
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-ink-700">
            {services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-500">
            Hududlar
          </h4>
          <ul className="mt-4 grid grid-cols-1 gap-2 text-sm">
            <li>
              <Link
                href="/natijnoy-patolok-qashqadaryo"
                className="text-ink-800 hover:text-brand-700"
              >
                Qashqadaryo viloyati
              </Link>
            </li>
            {locations.map((loc) => (
              <li key={loc.slug}>
                <Link href={loc.href} className="text-ink-800 hover:text-brand-700">
                  {loc.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-500">
            Aloqa
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-ink-700">
            <li className="flex items-start gap-2">
              <MapPinIcon className="h-4 w-4 mt-0.5 text-brand-600" />
              Qarshi shahar, Qashqadaryo viloyati
            </li>
            <li>{site.workingHours}</li>
            <li>
              <a href={`tel:${site.phone}`} className="hover:text-brand-700">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={site.telegramUrl}
                target="_blank"
                rel="noopener"
                className="hover:text-brand-700"
              >
                t.me/{site.telegram}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-100">
        <div className="container pt-6 pb-24 lg:pb-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-500">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Barcha huquqlar himoyalangan.
          </p>
          <p className="text-ink-400">
            Natijnoy potolok · natijnoy patalok · натяжной потолок — Qashqadaryo bo&apos;ylab
          </p>
        </div>
      </div>
    </footer>
  );
}
