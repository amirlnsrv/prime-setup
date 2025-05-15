import Image from "next/image";
import styles from "./HeroBlog.module.scss";
import heroBlogBg from "../../../public/assets/images/heroBlogBg.jpg";
import { Button } from "@/ui/Button";

export default function BlogPage() {
  return (
    <section className={styles.heroBlog}>
      <div className={`container ${styles.container}`}>
        <Image
          className={styles.background}
          src={heroBlogBg}
          alt="Hero background"
        />
        <h1>Полезные статьи и советы</h1>
        <p>
          Мы делимся полезной информацией, основанной на реальном опыте работы с
          предпринимателями. Узнайте о тонкостях регистрации компаний, налогах,
          визах и многом другом.
        </p>
        <Button value="Бесплатная консультация" className={styles.button} />
      </div>
    </section>
  );
}
