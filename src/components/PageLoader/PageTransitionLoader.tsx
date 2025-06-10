import styles from "./PageTransitionLoader.module.scss";

export function PageTransitionLoader() {
  return (
    <div className={styles.overlay}>
      <div className={styles.spinner}></div>
    </div>
  );
}