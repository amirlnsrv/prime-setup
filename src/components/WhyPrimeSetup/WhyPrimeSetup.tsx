import { PrimaryButton } from "@/ui/PrimaryButton";
import styles from "./WhyPrimeSetup.module.scss";

export const WhyPrimeSetup = () => {
  return (
    <section className={styles.whyPrimeSetup}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.title}>
            Почему мы — лучший выбор для вашего бизнеса
          </h2>
          <p className={styles.subtitle}>
            Мы не просто оформляем документы. Мы экономим ваше время, избавляем
            от рисков и помогаем запустить бизнес в ОАЭ с нуля. От первого
            звонка — до первых клиентов.
          </p>
          <PrimaryButton value="Узнать больше о нас" className={styles.btn} />
        </div>
      </div>
    </section>
  );
};
