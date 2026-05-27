import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { qashqadaryoOverview } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Natijnoy potolok Qashqadaryo — viloyat bo'ylab xizmat | PotolokX",
  description:
    "Qashqadaryo viloyati bo'ylab natijnoy potolok o'rnatish: Qarshi, Shahrisabz, Kitob, Chiroqchi, Yakkabog', Koson, G'uzor, Qamashi, Muborak va boshqa tumanlarda. O'lchov bepul, narxni Telegramda hisoblang.",
  path: "/natijnoy-patolok-qashqadaryo",
  keywords: [
    ...qashqadaryoOverview.keywords,
    "potolok montaj qashqadaryo",
    "natijnoy potolok qashqadaryo narxi",
  ],
});

export default function Page() {
  return <LocationPage location={qashqadaryoOverview} />;
}
