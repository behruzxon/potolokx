import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";

const loc = getLocationBySlug("natijnoy-patolok-kasbi")!;

export const metadata: Metadata = buildMetadata({
  title: "Natijnoy potolok Kasbi tumani | PotolokX — toza montaj",
  description:
    "Kasbi tumanida natijnoy potolok o'rnatish xizmati. Zamonaviy dizayn, sifatli material, yozma kafolat. Xona razmerini Telegramda yuborib narxini bilib oling.",
  path: "/natijnoy-patolok-kasbi",
  keywords: loc.keywords,
});

export default function Page() {
  return <LocationPage location={loc} />;
}
