import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { getLocationBySlug } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";

const loc = getLocationBySlug("natijnoy-patolok-qarshi")!;

export const metadata: Metadata = buildMetadata({
  title: "Natijnoy potolok Qarshi — narx, montaj, kafolat | PotolokX",
  description:
    "Qarshi shahrida natijnoy potolok o'rnatish. Yangi binolar va eski xonadonlar uchun. O'lchov bepul, montaj 1 kunda, yozma kafolat. Telegram bot orqali narxni hisoblang.",
  path: "/natijnoy-patolok-qarshi",
  keywords: loc.keywords,
});

export default function Page() {
  return <LocationPage location={loc} />;
}
