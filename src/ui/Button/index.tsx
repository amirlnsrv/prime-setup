"use client";
import { useRouter } from "next/navigation";
import styles from "./Button.module.scss";

type Props = {
  className?: string;
  value?: string;
  children?: React.ReactNode;
  link?: string;
};

const Button = ({ className, value, link, children }: Props) => {
  const router = useRouter();
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={() => link && router.push(link)}
    >
      {value}
      {children}
    </button>
  );
};

export default Button;
