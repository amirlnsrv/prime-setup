import styles from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.column}>
          <Image src="/logo.svg" alt="PRIME SETUP" width={120} height={40} />
          <p className={styles.description}>
            Комплексные решения для регистрации и поддержки бизнеса в ОАЭ.
          </p>
          <div className={styles.socials}>
            <a href="#">
              <img src="/icons/fb.svg" alt="FB" />
            </a>
            <a href="#">
              <img src="/icons/tg.svg" alt="TG" />
            </a>
            <a href="#">
              <img src="/icons/wa.svg" alt="WA" />
            </a>
          </div>
        </div>

        <div className={styles.column}>
          <h4>Разделы</h4>
          <ul>
            <li>
              <Link href="/about">О нас</Link>
            </li>
            <li>
              <Link href="/services">Услуги</Link>
            </li>
            <li>
              <Link href="/blog">Блог</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/contacts">Контакты</Link>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Рабочие часы</h4>
          <p>Пн-Пт: 8:30–17:30</p>
          <p>Суббота: 10:00–14:00</p>
          <h4>Свяжитесь с нами</h4>
          <p>info.xyz@gmail.com</p>
          <p>+996 470-926</p>
        </div>
      </div>
      <div className={styles.copyright}>
        ©2025 PRIME SETUP. Все права защищены.
      </div>
    </footer>
  );
}
