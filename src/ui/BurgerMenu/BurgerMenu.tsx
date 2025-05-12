"use client";

import { useState } from "react";

import styles from "./BurgerMenu.module.scss";
import Link from "next/link";

export const BurgerMenu = () => {
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

      {isOpen && (
        <nav className={styles.menuContent}>
          <ul>
            <li className={styles.menuItem}>
              <Link href="#">О нас</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="#">Услуги</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="#">Блог</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="#">FAQ</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="#">Контакты</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};
