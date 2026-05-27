import Link from "next/link";
import type { Location } from "@/lib/locations";
import { locations } from "@/lib/locations";
import { site } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd, localBusinessJsonLd } from "@/lib/seo";
import Hero from "./Hero";
import TrustStrip from "./TrustStrip";
import ServiceCards from "./ServiceCards";
import PriceCalcCTA from "./PriceCalcCTA";
import PortfolioGrid from "./PortfolioGrid";
import WhyUs from "./WhyUs";
import FAQ from "./FAQ";
import FinalCTA from "./FinalCTA";
import JsonLd from "./JsonLd";
import { ArrowRightIcon, CheckIcon, MapPinIcon } from "./Icons";

export default function LocationPage({ location }: { location: Location }) {
  const otherLocs = locations.filter((l) => l.slug !== location.slug).slice(0, 6);

  const heroTitle = (
    <>
      Natijnoy potolok{" "}
      <span className="text-brand-700">{location.name}</span>
      {location.type === "tuman" ? " tumani" : " shahri"} bo&apos;ylab
    </>
  );

  const subtitle = `${location.intro} PotolokX — ${location.name}da sifatli material, toza montaj va yozma kafolat.`;

  return (
    <>
      <JsonLd
        id={`ld-business-${location.slug}`}
        data={localBusinessJsonLd({ areaServed: location.serviceArea })}
      />
      <JsonLd id={`ld-faq-${location.slug}`} data={faqJsonLd(location.faq)} />
      <JsonLd
        id={`ld-bc-${location.slug}`}
        data={breadcrumbJsonLd([
          { name: "Bosh sahifa", href: "/" },
          { name: "Qashqadaryo", href: "/natijnoy-patolok-qashqadaryo" },
          { name: location.name, href: location.href },
        ])}
      />

      <Hero
        eyebrow={`PotolokX — ${location.name}`}
        title={heroTitle}
        subtitle={subtitle}
      />

      <TrustStrip />

      <section className="section-pad">
        <div className="container grid gap-10 lg:grid-cols-[1.2fr_1fr] items-start">
          <div>
            <span className="eyebrow">{location.name}</span>
            <h2 className="heading-2 mt-3">
              {location.name}da natijnoy potolok — bizning yo&apos;nalishimiz
            </h2>
            <p className="lead mt-4">{location.description}</p>

            <ul className="mt-6 space-y-3">
              {location.localTouches.map((t) => (
                <li key={t} className="flex items-start gap-3 text-ink-800">
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <Link href="/narxlar" className="text-brand-700 font-medium hover:underline">
                Natijnoy potolok narxlari →
              </Link>
              <Link href="/ishlarimiz" className="text-brand-700 font-medium hover:underline">
                Qilgan ishlarimiz →
              </Link>
              <Link href="/aloqa" className="text-brand-700 font-medium hover:underline">
                Bog&apos;lanish →
              </Link>
            </div>

          </div>

          <aside className="card !p-7">
            <p className="text-xs uppercase tracking-wider font-semibold text-brand-700">
              {location.name}da xizmat hududi
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-ink-800">
              {location.serviceArea.map((s) => (
                <li key={s} className="inline-flex items-center gap-2">
                  <MapPinIcon className="h-4 w-4 text-brand-700" />
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl bg-brand-50 p-4 text-sm text-ink-700">
              <p>
                <strong className="text-brand-800">{site.phoneDisplay}</strong> —
                telefon
              </p>
              <p className="mt-1">
                Telegram bot:{" "}
                <a
                  href={site.telegramUrl}
                  target="_blank"
                  rel="noopener"
                  className="text-brand-700 font-medium"
                >
                  @{site.telegram}
                </a>
              </p>
            </div>
          </aside>
        </div>
      </section>

      <ServiceCards />
      <PriceCalcCTA city={location.name} />
      <PortfolioGrid
        title={`${location.name}da bajargan ishlarimiz`}
        subtitle={`${location.name} va atrofdagi xonadonlarda PotolokX o'rnatgan natijnoy potoloklar.`}
      />
      <WhyUs />
      <FAQ items={location.faq} />

      <section className="section-pad bg-gradient-to-b from-white to-brand-50/40">
        <div className="container">
          <div className="max-w-2xl">
            <span className="eyebrow">Boshqa hududlar</span>
            <h2 className="heading-2 mt-3">Qashqadaryo bo&apos;ylab xizmat</h2>
            <p className="lead mt-3">
              {location.name}dan tashqari boshqa shahar va tumanlarga ham chiqamiz.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherLocs.map((loc) => (
              <Link key={loc.slug} href={loc.href} className="card group">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 group-hover:bg-brand-600 group-hover:text-white transition">
                  <MapPinIcon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold mt-4">{loc.name}</h3>
                <p className="mt-2 text-sm text-ink-600">{loc.intro}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700">
                  Sahifaga o&apos;tish
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title={`${location.name}da natijnoy potolok kerakmi? Bugunoq aloqaga chiqing`}
        subtitle={`O'lchov bepul, narxni Telegram botda hisoblaymiz, montaj — 1 kunda.`}
      />
    </>
  );
}
