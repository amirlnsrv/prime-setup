"use client";

import { useState } from "react";
import styles from "./LanguageSelector.module.scss";
import HeaderArrow from "./components/HeaderArrow";

const languages = [
  { code: "en", label: "En" },
  { code: "ru", label: "Ru" },
];

const LanguageSelector = () => {
  const [selectedLang, setSelectedLang] = useState("ru");
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <button className={styles.toggle} onClick={() => setOpen(!open)}>
        <span>{languages.find((l) => l.code === selectedLang)?.label}</span>
        <HeaderArrow className={styles.arrowIcon} />
      </button>

      {open && (
        <ul className={styles.menu}>
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                onClick={() => {
                  setSelectedLang(lang.code);
                  setOpen(false);
                }}
                className={styles.item}
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
