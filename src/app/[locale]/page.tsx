import { Contact } from "@/components/Contact/Contact";
import { FAQ } from "@/components/FAQ";
import { Benefits } from "@/components/Benefits";
import { Hero } from "@/components/Hero";
import { OurPartners } from "@/components/OurPartners";
import { SuccessShared } from "@/components/SuccessShared";

import { Services } from "@/components/Services/Services";

import { WhyPrimeSetup } from "@/components/WhyPrimeSetup";
import { UsefulArticles } from "@/components/UsefulArticles";
import { Swiper } from "@/components/Swiper/Swiper";

import HeroBg from "#/images/heroBg.jpg";

export default function Home() {
  return (
    <>
      <Hero
        imgUrl={HeroBg}
        title="Ваш бизнес в надёжных руках"
        subtitle="Комплексные услуги по регистрации бизнеса, лицензированию и сопровождению в ОАЭ"
        inlineStyles={{
          inner: {
            maxWidth: "608px",
          },
          content: {
            textAlign: "left",
            alignItems: "flex-start",
          },
        }}
      />
      <WhyPrimeSetup />
      <Benefits />
      <Services />
      <Swiper />
      <OurPartners />
      <SuccessShared />
      <UsefulArticles />
      <FAQ />
      <Contact />
    </>
  );
}
