import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";

const loc = getLocationBySlug("natijnoy-patolok-dehqonobod")!;

export const metadata: Metadata = buildMetadata({
  title: "Natijnoy potolok Dehqonobod tumani | PotolokX",
  description:
    "Dehqonobod tumanida natijnoy potolok o'rnatish. Tog'li hududga mos materiallar, toza montaj va kafolat. Narxni Telegramda hisoblab oling.",
  path: "/natijnoy-patolok-dehqonobod",
  keywords: loc.keywords,
});

export default function Page() {
  return <LocationPage location={loc} />;
}
