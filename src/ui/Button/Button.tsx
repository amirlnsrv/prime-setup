import styles from "./Button.module.scss";

type Props = {
  className?: string;
  value: string;
};

export const Button = ({ className, value }: Props) => {
  return <button className={`${styles.button} ${className}`}>{value}</button>;
};
