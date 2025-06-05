import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import ServicesHeroBg from "#/images/servicesHeroBg.jpg";
import { getTranslations } from "next-intl/server";

export default async function Services() {
  const tHeroServices = await getTranslations("hero.services");

  return (
    <>
      <Hero
        imgUrl={ServicesHeroBg}
        title={tHeroServices("title")}
        subtitle={tHeroServices("subtitle")}
      />
      <Contact
        title="Связаться с нами"
        description="Мы рады помочь вам — напишите или позвоните"
       
      />
    </>
  );
}
