import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";

const loc = getLocationBySlug("natijnoy-patolok-shahrisabz")!;

export const metadata: Metadata = buildMetadata({
  title: "Natijnoy potolok Shahrisabz | Qashqadaryo bo'ylab xizmat",
  description:
    "Shahrisabz shahrida natijnoy potolok ustasi: matoviy, glyans, LED yoritgichli variantlar. O'lchov bepul, montaj 1 kunda, yozma kafolat.",
  path: "/natijnoy-patolok-shahrisabz",
  keywords: loc.keywords,
});

export default function Page() {
  return <LocationPage location={loc} />;
}
