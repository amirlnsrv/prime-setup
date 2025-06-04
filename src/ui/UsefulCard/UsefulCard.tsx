"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./UsefulCard.module.scss";
import Image from "next/image";
import edit from "#/icons/editIcon.svg";
import trash from "#/icons/trashIcon.svg";
import rightArrow from "#/icons/rightArrow.svg";
import elipse from "#/images/elipse.svg";

type Props = {
  titleTxt: string;
  subtitleTxt: string;
  buttonTxt: string;
  onClick?: () => void;
};

export default function UsefulCard({
  titleTxt,
  subtitleTxt,
  buttonTxt,
  onClick,
}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAdmin = true;

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className={styles.card}>
      <div className={!isAdmin ? styles.picture : styles.adminPic}></div>

      {isAdmin && (
        <div className={styles.menuContainer}>
          <div className={styles.articleMenu} onClick={toggleMenu}>
            <span className={styles.point}></span>
            <span className={styles.point}></span>
            <span className={styles.point}></span>
          </div>

          <div
            className={`${styles.editMenu} ${
              isMenuOpen ? styles.show : styles.hide
            }`}
          >
            <div className={styles.editIcon}>
              <Image
                className={styles.icon}
                width={30}
                height={30}
                src={edit}
                alt="edit"
              />
              <p>Редактировать</p>
            </div>
            <div onClick={onClick} className={styles.deleteIcon}>
              <Image
                className={styles.icon}
                width={30}
                height={30}
                src={trash}
                alt="delete"
              />
              <p>Удалить</p>
            </div>
          </div>
        </div>
      )}

      <div className={styles.content}>
        <h2>{titleTxt}</h2>
        <p>{subtitleTxt}</p>
        <Link href={"/blog2"} className={styles.more}>
          {buttonTxt}{" "}
          <Image
            className={styles.arrow}
            width={20}
            height={20}
            src={rightArrow}
            alt="arrow"
          />
        </Link>
      </div>

      <Image
        width={150}
        height={150}
        src={elipse}
        alt="elipse"
        className={styles.elipse_right}
      />
      <Image
        width={150}
        height={150}
        src={elipse}
        alt="elipse"
        className={styles.elipse_bottom}
      />
      <Image
        width={150}
        height={150}
        src={elipse}
        alt="elipse"
        className={styles.elipse_left}
      />
    </div>
  );
}
