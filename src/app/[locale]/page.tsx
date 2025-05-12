import { BusinessSetup } from "@/components/BusinessSetup";
import { Hero } from "@/components/Hero";
import { OurPartners } from "@/components/OurPartners";
import { SuccessShared } from "@/components/SuccessShared";
import { UsefulArticles } from "@/components/UsefulArticles";
import { WhyPrimeSetup } from "@/components/WhyPrimeSetup";

export default function Home() {
  return (
    <section>
      <Hero />
      <WhyPrimeSetup />
      <OurPartners />
      <SuccessShared />
      <UsefulArticles />
    </section>
  );
}
