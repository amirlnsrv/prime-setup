"use client";

import styles from "./Header.module.scss";
import Button from "@/ui/Button";
import dynamic from "next/dynamic";
import { useEffect, useState, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import logo from "#/icons/logo.svg";
import { useTranslations } from "next-intl";
import { PageTransitionLoader } from "../PageLoader";

const LanguageSelector = dynamic(() => import("@/ui/LanguageSelector"), {
  ssr: false,
});
const BurgerMenu = dynamic(() => import("@/ui/BurgerMenu"), { ssr: false });

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const navigation = useRouter();
  const t = useTranslations("header");
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [pathname]);

  const handleNavigation = (url: string) => {
    if (url === pathname) {
      return;
    }
  
    setLoading(true);
    startTransition(() => {
      navigation.push(url);
    });
  };

  return (
    <header
      className={`${styles.header} ${
        scrolled ? styles.scrolled : styles.transparent
      }`}
    >
      {(loading || isPending) && <PageTransitionLoader />}
      <div className="container">
        <div className={styles.headerInner}>
          <div
            className={styles.logo}
            onClick={() => handleNavigation("/")}
            style={{ cursor: "pointer" }}
          >
            <Image src={logo} width={44} height={46} alt="logo" />
            <p className={styles.logoTitle}>PRIME SETUP</p>
            <p className={styles.logoSubtitle}>BUSINESS BEGINS HERE</p>
          </div>
          <nav className={styles.nav}>
            <a onClick={() => handleNavigation("/about")}>{t("about")}</a>
            <a onClick={() => handleNavigation("/services")}>{t("services")}</a>
            <a onClick={() => handleNavigation("/blog")}>{t("blog")}</a>
            <a onClick={() => handleNavigation("/faq")}>{t("faq")}</a>
            <a onClick={() => handleNavigation("/contacts")}>{t("contacts")}</a>
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
