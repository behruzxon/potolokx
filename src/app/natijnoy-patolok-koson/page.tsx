import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";

const loc = getLocationBySlug("natijnoy-patolok-koson")!;

export const metadata: Metadata = buildMetadata({
  title: "Natijnoy potolok Koson tumani | PotolokX — montaj xizmati",
  description:
    "Koson tumanida natijnoy potolok o'rnatamiz. Yangi uy yoki remont — barchasi uchun. Telegram botda narx hisoblang, o'lchov bepul.",
  path: "/natijnoy-patolok-koson",
  keywords: loc.keywords,
});

export default function Page() {
  return <LocationPage location={loc} />;
}
