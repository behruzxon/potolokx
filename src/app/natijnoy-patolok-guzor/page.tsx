import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";

const loc = getLocationBySlug("natijnoy-patolok-guzor")!;

export const metadata: Metadata = buildMetadata({
  title: "Natijnoy patalok G'uzor tumani | O'rnatish xizmati",
  description:
    "G'uzor tumanida natijnoy potolok o'rnatish xizmati. Xonadon, kafe va do'konlar uchun toza montaj va kafolat. Telegramda narx hisoblang.",
  path: "/natijnoy-patolok-guzor",
  keywords: loc.keywords,
});

export default function Page() {
  return <LocationPage location={loc} />;
}
