import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";

const loc = getLocationBySlug("natijnoy-patolok-nishon")!;

export const metadata: Metadata = buildMetadata({
  title: "Natijnoy potolok Nishon tumani | Qashqadaryo bo'ylab xizmat",
  description:
    "Nishon tumanida natijnoy potolok o'rnatish. Hovli va xonadonlar uchun sifatli material va toza montaj. Telegramda razmer yuboring — narx tez chiqadi.",
  path: "/natijnoy-patolok-nishon",
  keywords: loc.keywords,
});

export default function Page() {
  return <LocationPage location={loc} />;
}
