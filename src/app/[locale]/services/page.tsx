import { Hero } from "@/components/Hero";
import { RangeOfServices } from "./components/RangeOfServices/RangeOfServices";
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
      <RangeOfServices />
    </>
  );
}
