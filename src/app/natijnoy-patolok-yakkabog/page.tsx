import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";

const loc = getLocationBySlug("natijnoy-patolok-yakkabog")!;

export const metadata: Metadata = buildMetadata({
  title: "Natijnoy potolok Yakkabog' | O'rnatish va kafolat — PotolokX",
  description:
    "Yakkabog' tumanida natijnoy potolok o'rnatish. O'lchovga bepul chiqamiz, material va montaj kafolati. Telegramda razmer yuboring.",
  path: "/natijnoy-patolok-yakkabog",
  keywords: loc.keywords,
});

export default function Page() {
  return <LocationPage location={loc} />;
}
