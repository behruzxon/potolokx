import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { qashqadaryoOverview } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Natijnoy potolok Qashqadaryo — viloyat bo'ylab xizmat",
  description:
    "Qashqadaryo bo'ylab natijnoy potolok o'rnatish: Qarshi, Shahrisabz, Kitob, Chiroqchi, Yakkabog', Koson, G'uzor va boshqa tumanlarda. PotolokX — sifatli material va kafolat.",
  path: "/natijnoy-patolok-qashqadaryo",
  keywords: qashqadaryoOverview.keywords,
});

export default function Page() {
  return <LocationPage location={qashqadaryoOverview} />;
}
