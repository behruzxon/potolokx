import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";

const loc = getLocationBySlug("natijnoy-patolok-muborak")!;

export const metadata: Metadata = buildMetadata({
  title: "Natijnoy potolok Muborak | O'rnatish, narx va kafolat",
  description:
    "Muborak shahri va tumanida natijnoy potolok o'rnatamiz. Uy-joy va ofis uchun zamonaviy shift yechimi. O'lchov bepul, narxni Telegramda hisoblang.",
  path: "/natijnoy-patolok-muborak",
  keywords: loc.keywords,
});

export default function Page() {
  return <LocationPage location={loc} />;
}
