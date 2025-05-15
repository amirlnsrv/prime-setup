import { BusinessSetup } from "@/components/BusinessSetup";
import { Contact } from "@/components/Contact/Contact";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { OurPartners } from "@/components/OurPartners";
import { SuccessShared } from "@/components/SuccessShared";

import { Services } from "@/components/Services/Services";

import { UsefulArticles } from "@/components/UsefulArticles";
import { WhyPrimeSetup } from "@/components/WhyPrimeSetup";

export default function Home() {
  return (
    <>
      <Hero
        imgUrl="/assets/images/heroBg.jpg"
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
      <Services />
      <OurPartners />
      <SuccessShared />
      <UsefulArticles />
      <FAQ />
      <Contact />
      <BusinessSetup />
    </>
  );
}
