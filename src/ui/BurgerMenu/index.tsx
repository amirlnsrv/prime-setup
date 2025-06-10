"use client";

import { useState } from "react";

import styles from "./BurgerMenu.module.scss";
import Link from "next/link";

import { useTranslations } from "next-intl";

export default function BurgerMenu() {
  const t = useTranslations("header.burger");

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.burgerMenu}>
      <div
        className={`${styles.burger} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`${styles.menuContent} ${isOpen ? styles.opened : ""}`}>
        <ul>
          <li className={styles.menuItem}>
            <Link href="/about">{t("about")}</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/services">{t("services")}</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/blog">{t("blog")}</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/faq">{t("faq")}</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/contacts">{t("contacts")}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
