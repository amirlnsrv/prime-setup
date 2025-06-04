import React from "react";
import styles from "./AdminHeader.module.scss";
export function AdminHeader() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Панель администратора</h1>
      <div className={styles.user}>
        <p className={styles.name}>name</p>
        <div className={styles.avatar}></div>
      </div>
    </header>
  );
}
