import { BusinessSetup } from "@/components/BusinessSetup";
import { Contact } from "@/components/Contact/Contact";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { OurPartners } from "@/components/OurPartners";
import { SuccessShared } from "@/components/SuccessShared";

import { Services } from "@/components/Services/Services";

import { Swiper } from "@/components/Swiper/Swiper";
import { UsefulArticles } from "@/components/UsefulArticles";
import { WhyPrimeSetup } from "@/components/WhyPrimeSetup";

export default function Home() {
  return (
    <section>
      <Hero />
      <WhyPrimeSetup /> 
      <Services/>
       <OurPartners />
      <SuccessShared />
      <UsefulArticles />
      <FAQ />
      <Contact />
      <BusinessSetup />
    </section>
  );
}
