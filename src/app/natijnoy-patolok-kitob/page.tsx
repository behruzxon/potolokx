import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";

const loc = getLocationBySlug("natijnoy-patolok-kitob")!;

export const metadata: Metadata = buildMetadata({
  title: "Natijnoy potolok Kitob tumani | O'rnatish va kafolat",
  description:
    "Kitob tumanida uy va xonadonlar uchun natijnoy potolok. Sertifikatli material, toza montaj. Razmerini Telegramda yuboring — narxini hisoblab beramiz.",
  path: "/natijnoy-patolok-kitob",
  keywords: [
    ...loc.keywords,
    "natijnoy potolok kitob narxi",
  ],
});

export default function Page() {
  return <LocationPage location={loc} />;
}
