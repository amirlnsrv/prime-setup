import React from "react";
import dynamic from "next/dynamic";
import addIcon from "#/icons/addIcon.svg";
import postIcon from "#/icons/postIcon.svg";  
const Button = dynamic(() => import("@/ui/Button"));
import styles from "./AdminActions.module.scss";
import Image from "next/image";
export default function AdminActions() {
  return (
    <div className={styles.btnContainer}>
      <Button
        link="/admin/add-article"
        value="Добавить статью"
        className={styles.button}
      >
        <Image
            src={addIcon}
            alt="addImg"
            width={20}
            height={20}
          />
      </Button>
      <Button
        link="/admin/published"
        value="Опубликовано"
        className={styles.button}
      >
        <Image
            src={postIcon}
            alt="postImg"
            width={20}
            height={20}
          />
      </Button>
    </div>
  );
}
