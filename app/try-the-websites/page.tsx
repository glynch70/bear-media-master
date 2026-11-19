import { createMetadata } from "@/lib/seo";
import Campaign from "./campaign";
export const metadata = createMetadata({
  title: "Your business deserves a better website | Bear Media",
  description:
    "Explore three working website demos by Bear Media. Website design with Garry in Broxburn, for businesses across Central Scotland.",
  path: "/try-the-websites",
});
export default function Page() {
  return <Campaign />;
}
