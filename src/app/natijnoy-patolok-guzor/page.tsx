import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";

const loc = getLocationBySlug("natijnoy-patolok-guzor")!;

export const metadata: Metadata = buildMetadata({
  title: "Natijnoy potolok G'uzor tumani | PotolokX",
  description:
    "G'uzor tumanida natijnoy potolok ustasi: xonadon, kafe va do'konlar uchun. Material va montajga yozma kafolat.",
  path: "/natijnoy-patolok-guzor",
  keywords: loc.keywords,
});

export default function Page() {
  return <LocationPage location={loc} />;
}
