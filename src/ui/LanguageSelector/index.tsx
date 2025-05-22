"use client";

import { useState } from "react";
import styles from "./LanguageSelector.module.scss";
import HeaderArrow from "./components/HeaderArrow";
import { usePathname, useRouter } from "@/lib/i18n/navigation";
import { useLocale } from "next-intl";

const LanguageSelector = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const currentLang = locale === "en" ? "En" : "Ru";

  const toggleDropdown = () => setOpen((prev) => !prev);

  const handleChangeLang = (lang: "En" | "Ru") => {
    const newLocale = lang.toLowerCase();
    if (newLocale === locale) return;
    router.push(pathname, { locale: newLocale });
    setOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.toggle} onClick={toggleDropdown}>
        <span>{currentLang}</span>
        <HeaderArrow className={styles.arrowIcon} />
      </button>

      <div className={`${styles.menu} ${open ? styles.open : ""}`}>
        {["En", "Ru"].map((lang) => (
          <button
            key={lang}
            onClick={() => handleChangeLang(lang as "En" | "Ru")}
            className={styles.item}
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
