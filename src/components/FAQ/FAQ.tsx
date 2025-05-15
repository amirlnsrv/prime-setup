"use client";
import { useState } from "react";
import styles from "./FAQ.module.scss";
import { Button } from "@/ui/Button";
const faqData = [
  {
    q: "Почему я должен начать бизнес в Дубае?",
    a: "Дубай предлагает льготные налоговые условия, стабильную экономику и стратегическое положение.",
  },
  {
    q: "Как открыть бизнес в Дубае?",
    a: "Нужно выбрать зону, тип компании, получить лицензию и открыть счёт в банке.",
  },
  {
    q: "Какие виды лицензий на ведение бизнеса существуют в Дубае?",
    a: "Коммерческая, профессиональная и индустриальная лицензии — в зависимости от вида деятельности.",
  },
  {
    q: "Каковы основные этапы создания компании в Дубае?",
    a: "Выбор юрисдикции, регистрация компании, лицензирование, открытие счёта.",
  },
  {
    q: "Сколько стоит открыть бизнес в Дубае?",
    a: "Стоимость зависит от зоны и вида деятельности, начинается от $5,000.",
  },
  {
    q: "Могут ли иностранцы владеть 100% своего бизнеса в Дубае?",
    a: "Да, в свободных экономических зонах и некоторых случаях на материке.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.faq}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Часто задаваемые вопросы</h2>
          <p className={styles.subtitle}>
            Ответы на самые популярные вопросы о регистрации бизнеса в ОАЭ.
          </p>
          <div className={styles.faqList}>
            {faqData.map((item, index) => (
              <div key={index} className={styles.faqItemExpanded}>
                <div className={styles.faqItem}>
                  <div className={styles.questionBlock}>
                    <button className={styles.question}>{item.q}</button>
                  </div>
                  <div
                    className={`${styles.iconBlock} ${
                      openIndex === index ? styles.rotate : ""
                    }`}
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <img
                      src="/assets/icons/arrowDown.svg"
                      alt="arrow"
                      className={styles.icon}
                    />
                  </div>
                </div>
                <div
                  className={`${styles.answerWrapper} ${
                    openIndex === index
                      ? styles.answerVisible
                      : styles.answerHidden
                  }`}
                >
                  <p className={styles.answer}>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
          {/* <Button /> */}
        </div>
      </div>
    </section>
  );
}
