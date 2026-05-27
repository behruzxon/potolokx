import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";

const loc = getLocationBySlug("natijnoy-patolok-mirishkor")!;

export const metadata: Metadata = buildMetadata({
  title: "Natijnoy potolok Mirishkor tumani | PotolokX",
  description:
    "Mirishkor tumanida natijnoy potolok o'rnatamiz. Matoviy, glyans, LED va gulli potolok variantlari. Toza montaj, yozma kafolat. Telegramda narx so'rang.",
  path: "/natijnoy-patolok-mirishkor",
  keywords: loc.keywords,
});

export default function Page() {
  return <LocationPage location={loc} />;
}
