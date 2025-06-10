"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./FAQ.module.scss";
import { faqData } from "./FAQ.helper";
import { PrimaryButton } from "@/ui/PrimaryButton";
import arrowDown from "#/icons/arrowDown.svg";
import { useTranslations } from "next-intl";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations("faq");

  return (
    <section className={styles.faq}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={styles.title}>{t("title")}</h2>
          <p className={styles.subtitle}>{t("subtitle")}</p>
          <div className={styles.faqList}>
            {faqData.map((item, index) => (
              <div key={index} className={styles.faqItemExpanded}>
                <div className={styles.faqItem}>
                  <div className={styles.questionBlock}>
                    <button className={styles.question}>{t(item.q)}</button>
                  </div>
                  <div
                    className={`${styles.iconBlock} ${
                      openIndex === index ? styles.rotate : ""
                    }`}
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <Image
                      src={arrowDown}
                      alt="arrow"
                      className={styles.icon}
                      width={100}
                      height={100}
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
                  <p className={styles.answer}>{t(item.a)}</p>
                </div>
              </div>
            ))}
          </div>
          <PrimaryButton className={styles.btn} value={t("button")} />
        </div>
      </div>
    </section>
  );
}
