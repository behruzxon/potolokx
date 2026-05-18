import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";

const loc = getLocationBySlug("natijnoy-patolok-kitob")!;

export const metadata: Metadata = buildMetadata({
  title: "Natijnoy potolok Kitob tumani | PotolokX",
  description:
    "Kitob tumanida natijnoy potolok o'rnatish xizmati. Matoviy, glyans, LED variantlar. Telegram bot orqali narx hisoblash va yozma kafolat.",
  path: "/natijnoy-patolok-kitob",
  keywords: loc.keywords,
});

export default function Page() {
  return <LocationPage location={loc} />;
}
