import styles from "./FAQHead.module.css"; // Путь до CSS модуля

export default function FAQHead() {
  return (
    <div>
      <h1 className={styles.title}>Часто задаваемые вопросы</h1>
      <p className={styles.description}>
        Ответы на самые популярные вопросы о регистрации бизнеса в ОАЭ.
      </p>
    </div>
  );
}
