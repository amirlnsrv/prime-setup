"use client";

import styles from "./PrimaryButton.module.scss";
import { useRouter } from "next/navigation";

type Props = {
  className?: string;
  value: string;
  url?: string;
  action?: () => void; // добавили action
};

export const PrimaryButton = ({ className = "", value, url, action }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    if (action) action();          // сначала вызываем action
    if (url) router.push(url);     // потом переходим по ссылке
  };

  return (
    <button onClick={handleClick} className={`${styles.button} ${className}`}>
      <span className={styles.txt}>{value}</span>
    </button>
  );
};
