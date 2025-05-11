import { OurPartners } from "@/components/OurPartners";
import { UsefulArticles } from "@/components/UsefulArticles";
import { SuccessShared } from "@/components/SuccessShared";

export default function Home() {
  return (
    <div>
      <OurPartners />
      <SuccessShared />
      <UsefulArticles />
    </div>
  );
}
