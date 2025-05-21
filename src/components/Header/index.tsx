"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import { Button } from "@/ui/Button";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LanguageSelector = dynamic(() => import("@/ui/LanguageSelector"), {ssr: false});
const BurgerMenu = dynamic(() => import("@/ui/BurgerMenu"), {ssr: false});

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0); 
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
          <div className={styles.logo} onClick={() => router.push("/")}>
            <Image src="/assets/icons/logo.svg" width={44} height={46} alt="logo" />
            <p className={styles.logoTitle}>PRIME SETUP</p>
            <p className={styles.logoSubtitle}>BUSINESS BEGINS HERE</p>
          </div>
          <nav className={styles.nav}>
            <Link href="#">О нас</Link>
            <Link href="/services">Услуги</Link>
            <Link href="/blog">Блог</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contacts">Контакты</Link>
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
