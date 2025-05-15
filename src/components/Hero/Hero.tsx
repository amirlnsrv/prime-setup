import { ExtraButton } from "@/ui/ExtraButton";
import styles from "./Hero.module.scss";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <Image
        src="/assets/images/heroBg.jpg"
        alt="background"
        fill
        style={{ objectFit: "cover", zIndex: -1 }}
        priority
      />
      <div className="container">
        <div className={styles.inner}>
          <h1 className={styles.title}>Ваш бизнес в надёжных руках</h1>
          <p className={styles.subtitle}>
            Комплексные услуги по регистрации бизнеса, лицензированию и
            сопровождению в ОАЭ
          </p>
          <ExtraButton
            value="Бесплатная консультация"
            className={styles.fancyButton}
          />
        </div>
      </div>
    </section>
  );
};
