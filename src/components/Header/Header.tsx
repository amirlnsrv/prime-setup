import Link from "next/link";
import styles from "./Header.module.scss";
import { LanguageSelector } from "@/ui/LanguageSelector";
import { Button } from "@/ui/Button";
import { BurgerMenu } from "@/ui/BurgerMenu";

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
            <Link href="#">About Us</Link>
            <Link href="#">Services</Link>
            <Link href="#">Blog</Link>
            <Link href="#">FAQ</Link>
            <Link href="#">Contacts</Link>
          </nav>
          <div className={styles.btns}>
            <LanguageSelector />
            <Button value="Leave a request" className={styles.headerBtn} />
            <BurgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
};
