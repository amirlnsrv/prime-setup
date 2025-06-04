import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import ServicesHeroBg from "#/images/servicesHeroBg.jpg";
import { getTranslations } from "next-intl/server";

export default async function Services() {
  const tHeroServices = await getTranslations("hero.services");

  const iconFacebook = "/assets/Facebook.svg";
  const iconTwitter = "/assets/Twitter.svg";
  const iconInstagram = "/assets/Instagram.svg";
  const iconLinkedin = "/assets/Linkedin.svg";
  const iconYoutube = "/assets/Youtube.svg";

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
        icons={[
          iconFacebook,
          iconTwitter,
          iconInstagram,
          iconLinkedin,
          iconYoutube,
        ]}
      />
    </>
  );
}
