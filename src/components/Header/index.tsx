"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import Button from "@/ui/Button";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "#/icons/logo.svg";
import { useTranslations } from "next-intl";

const LanguageSelector = dynamic(() => import("@/ui/LanguageSelector"), {
  ssr: false,
});
const BurgerMenu = dynamic(() => import("@/ui/BurgerMenu"), { ssr: false });

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const navigation = useRouter();
  const t = useTranslations("header");

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
          <div className={styles.logo} onClick={() => navigation.push("/")}>
            <Image src={Logo} width={44} height={46} alt="logo" />
            <p className={styles.logoTitle}>PRIME SETUP</p>
            <p className={styles.logoSubtitle}>BUSINESS BEGINS HERE</p>
          </div>
          <nav className={styles.nav}>
            <Link href="/about">{t("about")}</Link>
            <Link href="/services">{t("services")}</Link>
            <Link href="/blog">{t("blog")}</Link>
            <Link href="/faq">{t("faq")}</Link>
            <Link href="/contacts">{t("contacts")}</Link>
          </nav>
          <div className={styles.btns}>
            <LanguageSelector />
            <Button value={t("button")} className={styles.headerBtn} />
            <BurgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
