import styles from "./BusinessSetup.module.scss";
// import Image from "next/image";
import Link from "next/link";

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
        <Link href="#" className={styles.button}>
          Бесплатная консультация
        </Link>
      </div>
    </section>
  );
}
