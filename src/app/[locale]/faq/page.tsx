import { Hero } from "@/components/Hero";
import { Input } from "@/ui/Input/Input";
import styles from "./Faq.module.scss";
import React from "react";
import { QuestionsAnswers } from "./components/QuestionsAnswers";
import { Contact } from "@/components/Contact";
import { getTranslations } from "next-intl/server";

const FAQPage = async () => {
  const t = await getTranslations("faq");
  return (
    <>
      <Hero
        imgUrl="/assets/images/faqHeroBg.jpg"
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />
      <section className={styles.search}>
        <Input
          title={t("search.title")}
          placeholder={t("search.placeholder")}
          inButton={t("search.button")}
        />
      </section>
      <QuestionsAnswers />
      <Contact
        title={t("contact.title")} // например "Остались вопросы?"
        description={t("contact.description")} // "Мы с радостью проконсультируем вас лично."
      />
    </>
  );
};

export default FAQPage;
