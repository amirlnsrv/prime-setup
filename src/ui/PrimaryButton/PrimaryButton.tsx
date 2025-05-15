"use client";

import styles from "./PrimaryButton.module.scss";

import { useRouter } from "next/navigation";

type Props = {
  className?: string;
  value: string;
  url?: string;
};

export const PrimaryButton = ({ className, value, url }: Props) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`${url || "/"}`)}
      className={`${styles.button} ${className}`}
    >
      <span className={styles.txt}>{value}</span>
    </button>
  );
};
