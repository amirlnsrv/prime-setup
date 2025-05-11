import styles from "./RedButton.module.scss";

type Props = {
  className?: string;
  value: string;
};

export const RedButton = ({ className, value }: Props) => {
  return (
    <button className={`${styles.button} ${className}`}>
      <span className={styles.txt}>{value}</span>
    </button>
  );
};
