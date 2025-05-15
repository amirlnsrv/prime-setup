import { FAQ } from "@/components/FAQ";
import { OurPartners } from "@/components/OurPartners";
import { SuccessShared } from "@/components/SuccessShared";
import { UsefulArticles } from "@/components/UsefulArticles";
import { WhyPrimeSetup } from "@/components/WhyPrimeSetup";
import { BusinessSetup } from "@/components/BusinessSetup";

export default function Home() {
  return (
    <section>
      <Hero />
      <WhyPrimeSetup />
      <OurPartners />
      <FAQ />
      <Contact />
      <BusinessSetup />
    </section>
  );
}
