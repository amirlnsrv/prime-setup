import styles from "./ServiceCard.module.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { desktopAnimations, mobileAnimations } from "./ServiceCard.helpers";
import { useTranslations } from "next-intl";

export function ServiceCard({ selectedIndex }: { selectedIndex: number }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const t = useTranslations("servicesPage");

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1300);
    };

    // Проверяем при монтировании
    checkScreenSize();

    // Добавляем слушатель изменений размера
    window.addEventListener("resize", checkScreenSize);

    // Убираем слушатель при размонтировании
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const cubeAnimations = isSmallScreen ? mobileAnimations : desktopAnimations;

  return (
    <div className={styles.contentPanel}>
      <motion.div
        id={styles.cube}
        className={styles.cube1}
        initial={{ opacity: 0 }}
        animate={{
          ...cubeAnimations[selectedIndex].cube1,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      />
      <motion.div
        id={styles.cube}
        className={styles.cube2}
        initial={{ opacity: 0 }}
        animate={{
          ...cubeAnimations[selectedIndex].cube2,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      />
      <motion.div
        id={styles.cube}
        className={styles.cube3}
        initial={{ opacity: 0 }}
        animate={{
          ...cubeAnimations[selectedIndex].cube3,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      />
      <motion.div
        id={styles.cube}
        className={styles.cube4}
        initial={{ opacity: 0 }}
        animate={{
          ...cubeAnimations[selectedIndex].cube4,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      />
      <h2>
        <span>{selectedIndex + 1}. </span>
        {t(`items.${selectedIndex}.title`)}
      </h2>
      <p>{t(`items.${selectedIndex}.content`)}</p>
    </div>
  );
}
