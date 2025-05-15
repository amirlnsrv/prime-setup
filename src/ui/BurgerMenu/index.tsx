"use client";

import { useState } from "react";

import styles from "./BurgerMenu.module.scss";
import Link from "next/link";

export default function BurgerMenu() {
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
            <Link href="#">О нас</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/services">Услуги</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="#blog">Блог</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="#">FAQ</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="#">Контакты</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
