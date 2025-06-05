import React from "react";
import styles from "./QuestionsAnswers.module.scss";
import { getTranslations } from "next-intl/server";
export default async function QuestionsAnswers() {
  const t = await getTranslations("questionsAnswers");
  const items = (await t.raw("items")) as Array<{
    question: string;
    answer: string;
  }>;

  console.log(items);
  return (
    <section className={styles.faqSection}>
      <h4 className={styles.title}>Вопросы и ответы</h4>
      <div className={styles.faqContainer}>
        {items.map((item, idx) => (
          <div key={idx} className={styles.faqItem}>
            <h5>{item.question}</h5>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
