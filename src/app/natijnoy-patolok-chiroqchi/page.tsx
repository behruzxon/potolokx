import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";

const loc = getLocationBySlug("natijnoy-patolok-chiroqchi")!;

export const metadata: Metadata = buildMetadata({
  title: "Natijnoy patalok Chiroqchi tumani | O'rnatish va kafolat",
  description:
    "Chiroqchi tumanida natijnoy potolok o'rnatish. Tuman bo'ylab o'lchovga chiqamiz — matoviy, LED va glyans variantlar. Telegramda narx so'rang.",
  path: "/natijnoy-patolok-chiroqchi",
  keywords: [
    ...loc.keywords,
    "natijnoy potolok chiroqchi narxi",
  ],
});

export default function Page() {
  return <LocationPage location={loc} />;
}
