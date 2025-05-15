// import dynamic from "next/dynamic";

import { BusinessSetup } from "@/components/BusinessSetup";
import { Contact } from "@/components/Contact/Contact";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { OurPartners } from "@/components/OurPartners";
import { SuccessShared } from "@/components/SuccessShared";
import { WhyPrimeSetup } from "@/components/WhyPrimeSetup";
import { UsefulArticles } from "@/components/UsefulArticles";
import { Telegram } from "@/ui/Telegram";

// const UsefulArticles = dynamic(() => import("@/components/UsefulArticles"))

export default function Home() {
  return (
    <>
    <Telegram />
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