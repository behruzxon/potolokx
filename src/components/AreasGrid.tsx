import Link from "next/link";
import { locations, otherDistricts } from "@/lib/locations";
import { ArrowRightIcon, MapPinIcon } from "./Icons";

export default function AreasGrid() {
  return (
    <section id="hududlar" className="section-pad bg-gradient-to-b from-white to-brand-50/40">
      <div className="container">
        <div className="max-w-2xl">
          <span className="eyebrow">Hududlar</span>
          <h2 className="heading-2 mt-3">Qashqadaryo bo&apos;ylab xizmat ko&apos;rsatamiz</h2>
          <p className="lead mt-3">
            Qarshi shahridan boshlab viloyatning barcha tumanlariga chiqamiz. Pastdagi
            hududlarni bosing — har biri uchun alohida sahifa va narxlar.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/natijnoy-patolok-qashqadaryo"
            className="card group sm:col-span-2 lg:col-span-3 bg-gradient-to-br from-brand-600 to-brand-700 border-0 text-white hover:!translate-y-0"
          >
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-wider">
                  <MapPinIcon className="h-3.5 w-3.5" />
                  Viloyat bo&apos;ylab
                </span>
                <h3 className="text-2xl sm:text-3xl font-semibold mt-3">
                  Natijnoy potolok — Qashqadaryo
                </h3>
                <p className="mt-2 text-white/80 text-sm sm:text-base">
                  Qarshi, Shahrisabz, Kitob, Chiroqchi, Yakkabog&apos;, Koson, G&apos;uzor va
                  boshqa barcha tumanlar.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-medium bg-white/15 hover:bg-white/25 rounded-2xl px-4 py-2.5 transition">
                Batafsil
                <ArrowRightIcon className="h-4 w-4" />
              </span>
            </div>
          </Link>

          {locations.map((loc) => (
            <Link key={loc.slug} href={loc.href} className="card group">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 group-hover:bg-brand-600 group-hover:text-white transition">
                  <MapPinIcon className="h-5 w-5" />
                </span>
                <span className="text-xs uppercase tracking-wider text-ink-400">
                  {loc.type === "shahar" ? "Shahar" : "Tuman"}
                </span>
              </div>
              <h3 className="heading-3 mt-5">{loc.name}</h3>
              <p className="mt-2 text-sm text-ink-600">
                Natijnoy potolok — {loc.shortName}da o&apos;rnatish, kafolat va Telegram bot
                orqali hisoblash.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700">
                Sahifaga o&apos;tish
                <ArrowRightIcon className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-8 text-sm text-ink-500">
          Qo&apos;shimcha tumanlarga ham chiqamiz: {otherDistricts.join(", ")}.
        </p>
      </div>
    </section>
  );
}
