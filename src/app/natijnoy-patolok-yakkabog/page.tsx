import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";

const loc = getLocationBySlug("natijnoy-patolok-yakkabog")!;

export const metadata: Metadata = buildMetadata({
  title: "Natijnoy potolok Yakkabog' | PotolokX — montaj va kafolat",
  description:
    "Yakkabog' tumanida natijnoy potolok o'rnatamiz. Tez, toza, yozma kafolat bilan. Telegram bot orqali narxni daqiqa ichida hisoblang.",
  path: "/natijnoy-patolok-yakkabog",
  keywords: loc.keywords,
});

export default function Page() {
  return <LocationPage location={loc} />;
}
