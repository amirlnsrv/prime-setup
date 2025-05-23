'use client'

import Image from "next/image";
import styles from "./ReviewsModal.module.scss";
import bg from "#/icons/bgPolygons.svg";
import logo from "#/icons/logo.svg";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

const ReviewRate = dynamic(() => import("@/ui/ReviewRate"));

type Props = {
  onClose: () => void;
};

export function ReviewsModal({ onClose }: Props) {
  const t = useTranslations("SuccessShared.modal")
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div className={styles.reviewsModal}>
      <div className={styles.modal}>
        <Image
          className={styles.bg}
          width={100}
          height={100}
          src={bg}
          alt="background"
        />
        <div className={styles.logo}>
          <Image
            className={styles.img}
            width={50}
            height={50}
            src={logo}
            alt="logo"
          />
          <p className={styles.zagol}>PRIME SETUP </p>
          <p className={styles.title}>BUSINESS BEGINS HERE</p>
        </div>
        <div className={styles.container}>
          <input type="text" placeholder={t("title")}/>
        </div>
        <div className={styles.panel}>
          <ReviewRate classNameImage={styles.star} />
          <textarea
            className={styles.textarea}
            placeholder={t("subtitle")}
            rows={5}
          />
        </div>
        <div className={styles.buttons}>
          <button onClick={onClose} className={styles.left}>
            {t("buttonCencel")}
          </button>
          <button className={styles.dep}>{t("buttonSend")}</button>
        </div>
      </div>
    </div>
  );
}
