import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";

const loc = getLocationBySlug("natijnoy-patolok-koson")!;

export const metadata: Metadata = buildMetadata({
  title: "Natijnoy potolok Koson tumani | PotolokX",
  description:
    "Koson tumanida natijnoy potolok o'rnatish: yangi uy yoki remont xonadon uchun. Sifatli material, toza montaj, yozma kafolat.",
  path: "/natijnoy-patolok-koson",
  keywords: loc.keywords,
});

export default function Page() {
  return <LocationPage location={loc} />;
}
