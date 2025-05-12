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
              <Link href="#">About Us</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="#">Services</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="#">Blog</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="#">FAQ</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="#">Contacts</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};
