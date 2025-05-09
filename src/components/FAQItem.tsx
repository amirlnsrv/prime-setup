"use client";
import { useState } from "react";
import styles from "./FAQItem.module.css";

type FAQItemProps = {
  question: string;
  answer: string;
};

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.question}>{question}</span>
        <img
          className={styles.icon}
          src={
            isOpen ? "/assets/icons/arrowUp.svg" : "/assets/icons/arrowDown.svg"
          }
          alt="arrow-icon"
        />
      </div>

      {isOpen && (
        <div className={styles.answer}>
          <span className={styles.answerText}>{answer}</span>
        </div>
      )}
    </div>
  );
}
