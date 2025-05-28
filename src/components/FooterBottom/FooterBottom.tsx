"use client";
import styles from "./FooterBottom.module.scss";
import Link from "next/link";
import Image from "next/image";
import Logo from "#/icons/logo.svg";

export function FooterBottom() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.content}>
        <div className={styles.column}>
          <Link href="/">
            <Image
              src={Logo}
              alt="logo"
              className={styles.icon}
              width={100}
              height={100}
            />
          </Link>
          <p className={styles.logoTitle}>PRIME SETUP</p>
          <p className={styles.logoSubtitle}>BUSINESS BEGINS HERE</p>
          <p className={styles.description}>
            Комплексные решения для регистрации и поддержки бизнеса в ОАЭ.
          </p>

          <div className={styles.socials}>
            <Link href="#" aria-label="Facebook">
              <Image
                src="/assets/icons/Facebook-Icon.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Image
                src="/assets/icons/Twitter-Icon.svg"
                alt="Twitter"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Image
                src="/assets/icons/Instagram-Icon.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#" aria-label="Linkedin">
              <Image
                src="/assets/icons/Linkedin-Icon.svg"
                alt="Linkedin"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#" aria-label="Youtube">
              <Image
                src="/assets/icons/Youtube-Icon.svg"
                alt="Youtube"
                width={24}
                height={24}
              />
            </Link>
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
        </div>

        <div className={styles.column}>
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
