import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";

const loc = getLocationBySlug("natijnoy-patolok-chiroqchi")!;

export const metadata: Metadata = buildMetadata({
  title: "Natijnoy potolok Chiroqchi tumani | PotolokX",
  description:
    "Chiroqchi tumanida natijnoy potolok ustasi: zal, oshxona, yotoqxona uchun. O'lchov bepul, sertifikatli material, kafolat.",
  path: "/natijnoy-patolok-chiroqchi",
  keywords: loc.keywords,
});

export default function Page() {
  return <LocationPage location={loc} />;
}
