import { Hero } from "@/components/Hero";
import { Input } from "@/ui/Input/Input";
import styles from "./Faq.module.scss";
import React from "react";
import { QuestionsAnswers } from "./components/QuestionsAnswers";
import { Contact } from "@/components/Contact";
import { getTranslations } from "next-intl/server";
import faqHeroBg from "#/images/faqHeroBg.jpg";

const FAQPage = async () => {
  const t = await getTranslations("faqPage");

  return (
    <>
      <Hero
        imgUrl={faqHeroBg}
        title={t("title1")}
        subtitle={t("subtitle")}
      />
      <section className={styles.search}>
        <Input
          title={t("title2")}
          placeholder={t("placeholder")}
          inButton={t("inButton")}
        />
      </section>
      <QuestionsAnswers />
      <Contact title={t("title3")} description={t("description")} />
    </>
  );
};

export default FAQPage;
