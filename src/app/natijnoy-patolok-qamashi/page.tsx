import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";

const loc = getLocationBySlug("natijnoy-patolok-qamashi")!;

export const metadata: Metadata = buildMetadata({
  title: "Natijnoy patalok Qamashi tumani | Montaj va kafolat",
  description:
    "Qamashi tumanida natijnoy potolok o'rnatish xizmati. Matoviy, glyans va LED potolok variantlari. Xona razmerini Telegramda yuboring — narxini tez hisoblab beramiz.",
  path: "/natijnoy-patolok-qamashi",
  keywords: loc.keywords,
});

export default function Page() {
  return <LocationPage location={loc} />;
}
