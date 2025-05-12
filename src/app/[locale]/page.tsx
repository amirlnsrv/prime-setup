import { Hero } from "@/components/Hero";
import { OurPartners } from "@/components/OurPartners";
import { SuccessShared } from "@/components/SuccessShared";
import { UsefulArticles } from "@/components/UsefulArticles";

export default function Home() {
  return (
    <div>
      <Hero />
      <OurPartners />
      <SuccessShared />
      <UsefulArticles />
    </div>
  );
}
