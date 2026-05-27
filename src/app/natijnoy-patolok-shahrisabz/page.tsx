import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";

const loc = getLocationBySlug("natijnoy-patolok-shahrisabz")!;

export const metadata: Metadata = buildMetadata({
  title: "Natijnoy potolok Shahrisabz | Qashqadaryo bo'ylab xizmat",
  description:
    "Shahrisabzda natijnoy potolok o'rnatish xizmati. Hovli, uy va zamonaviy xonadonlar uchun. Xona razmerini Telegramda yuboring — narxini hisoblab beramiz.",
  path: "/natijnoy-patolok-shahrisabz",
  keywords: [
    ...loc.keywords,
    "natijnoy potolok shahrisabz narxi",
  ],
});

export default function Page() {
  return <LocationPage location={loc} />;
}
