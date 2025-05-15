import styles from "./ExtraButton.module.scss";

type Props = {
  className?: string;
  value: string;
};

export const ExtraButton = ({ className, value }: Props) => {
  return (
    <button className={`${styles.button} ${className}`}>
      <span>{value}</span>
    </button>
  );
};
