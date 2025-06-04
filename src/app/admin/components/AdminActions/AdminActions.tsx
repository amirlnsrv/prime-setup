import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import AddIcon from "#/icons/addIcon.svg";
import PostIcon from "#/icons/postIcon.svg";
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
        <Image src={AddIcon} alt="addImg" width={20} height={20} />
      </Button>
      <Button
        link="/admin/published"
        value="Опубликовано"
        className={styles.button}
      >
        <Image src={PostIcon} alt="postImg" width={20} height={20} />
      </Button>
    </div>
  );
}
