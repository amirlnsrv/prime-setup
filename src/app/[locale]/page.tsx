import { Contact } from "@/components/Contact/Contact";
import { FAQ } from "@/components/FAQ";
import { Benefits } from "@/components/Benefits";
import { Hero } from "@/components/Hero";
import { OurPartners } from "@/components/OurPartners";

import { Services } from "@/components/Services/Services";

import { WhyPrimeSetup } from "@/components/WhyPrimeSetup";
import { Swiper } from "@/components/Swiper/Swiper";

import HeroBg from "#/images/heroBg.jpg";
import { getTranslations } from "next-intl/server";
import dynamic from "next/dynamic";

const UsefulArticles = dynamic(
  () => import("@/components/UsefulArticles/UsefulArticles")
);
const SuccessShared = dynamic(
  () => import("@/components/SuccessShared/SuccessShared")
);

export default async function Home() {
  const tHeroMain = await getTranslations("hero.main");
  const tContactMain = await getTranslations("contact.main");

  return (
    <>
      <Hero
        imgUrl={HeroBg}
        title={tHeroMain("title")}
        subtitle={tHeroMain("subtitle")}
        inlineStyles={{
          inner: {
            maxWidth: "608px",
            left: "auto",
            transform: "translateY(-50%)",
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
      <Contact
        title={tContactMain("title")}
        description={tContactMain("description")}
      />
    </>
  );
}
