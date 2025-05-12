import { ExtraButton } from "@/ui/ExtraButton";
import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.inner}>
          <h1 className={styles.title}>Ваш бизнес в надёжных руках</h1>
          <p className={styles.subtitle}>
            Комплексные услуги по регистрации бизнеса, лицензированию и
            сопровождению в ОАЭ
          </p>
          <ExtraButton value="Бесплатная консультация" className={styles.btn} />
        </div>
      </div>
    </section>
  );
};
