"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import { Button } from "@/ui/Button";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const LanguageSelector = dynamic(() => import("@/ui/LanguageSelector"));
const BurgerMenu = dynamic(() => import("@/ui/BurgerMenu"));

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0); // как только scrollY > 0 — закрашиваем
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${
        scrolled ? styles.scrolled : styles.transparent
      }`}
    >
      <div className="container">
        <div className={styles.headerInner}>
          <div className={styles.logo}>
            <img src="/assets/icons/logo.svg" alt="logo" />
            <p className={styles.logoTitle}>PRIME SETUP</p>
            <p className={styles.logoSubtitle}>BUSINESS BEGINS HERE</p>
          </div>
          <nav className={styles.nav}>
            <Link href="#">О нас</Link>
            <Link href="/services">Услуги</Link>
            <Link href="#">Блог</Link>
            <Link href="#">FAQ</Link>
            <Link href="#">Контакты</Link>
          </nav>
          <div className={styles.btns}>
            <LanguageSelector />
            <Button value="Оставить заявку" className={styles.headerBtn} />
            <BurgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
