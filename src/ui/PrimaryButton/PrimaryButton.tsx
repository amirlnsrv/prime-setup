import styles from "./PrimaryButton.module.scss";

type Props = {
  className?: string;
  value: string;
};

export const PrimaryButton = ({ className, value }: Props) => {
  return (
    <button className={`${styles.button} ${className}`}>
      <span className={styles.txt}>{value}</span>
    </button>
  );
};
