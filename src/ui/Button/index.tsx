"use client";
import { useRouter } from "next/navigation";
import styles from "./Button.module.scss";

type Props = {
  className?: string;
  value?: string;
  children?: React.ReactNode;
  link?: string;
  handleClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  className,
  value,
  link,
  children,
  handleClick,
  type,
}: Props) => {
  const router = useRouter();
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={() => {
        if (link) {
          router.push(link);
        }
        if (handleClick) {
          handleClick();
        }
      }}
      type={type || "button"}
    >
      {value}
      {children}
    </button>
  );
};

export default Button;
