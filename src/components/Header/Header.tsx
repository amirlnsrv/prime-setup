import Link from "next/link";
import styles from "./Header.module.scss";
import { Button } from "@/ui/Button";
import { BurgerMenu } from "@/ui/BurgerMenu";
import dynamic from "next/dynamic";

const LanguageSelector = dynamic(() => import("@/ui/LanguageSelector"));

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <div className={styles.logo}>
            <img src="/assets/icons/logo.svg" alt="logo" />
            <p className={styles.logoTitle}>PRIME SETUP</p>
            <p className={styles.logoSubtitle}>BUSINESS BEGINS HERE</p>
          </div>
          <nav className={styles.nav}>
            <Link href="#">О нас</Link>
            <Link href="#">Услуги</Link>
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
};
