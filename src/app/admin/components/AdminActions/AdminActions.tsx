import React from "react";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/ui/Button"));
import styles from "./AdminActions.module.scss";
export default function AdminActions() {
  return (
    <div className={styles.btnContainer}>
      <Button
        link="/admin/add-article"
        value="Добавить статью"
        className={styles.button}
      >
        {/* <Image
            src="/assets/icons/addIcon.svg"
            alt="addImg"
            width={20}
            height={20}
          /> */}
        <div className={styles.icon} />
      </Button>
      <Button
        link="/admin/published"
        value="Опубликовано"
        className={styles.button}
      >
        {/* <Image
            src="/assets/icons/postIcon.svg"
            alt="postImg"
            width={20}
            height={20}
          /> */}
        <div className={styles.icon} />
      </Button>
    </div>
  );
}
