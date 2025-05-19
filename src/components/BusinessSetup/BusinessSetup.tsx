import { ExtraButton } from "@/ui/ExtraButton";
import styles from "./BusinessSetup.module.scss";

export function BusinessSetup() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Откройте бизнес в ОАЭ с{" "}
          <span className={styles.accent}>PRIME SETUP</span> уже сегодня
        </h2>
        <p className={styles.subtitle}>
          Мы поможем вам на каждом этапе — от регистрации до открытия
          банковского счёта. Начните свой путь к успеху вместе с нами!
        </p>
        <ExtraButton value="Бесплатная консультация" className={styles.button}/>
      </div>
    </section>
  );
}
