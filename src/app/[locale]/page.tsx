import { BusinessSetup } from "@/components/BusinessSetup";
import { Contact } from "@/components/Contact/Contact";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { OurPartners } from "@/components/OurPartners";
import { SuccessShared } from "@/components/SuccessShared";
import { UsefulArticles } from "@/components/UsefulArticles";
import { WhyPrimeSetup } from "@/components/WhyPrimeSetup";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyPrimeSetup />
      <OurPartners />
      <SuccessShared />
      <UsefulArticles />
      <FAQ />
      <Contact />
      <BusinessSetup />
    </>
  );
}