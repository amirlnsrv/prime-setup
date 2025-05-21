import Image from "next/image";
import styles from "./ReviewsModal.module.scss";
import bg from "#/icons/bgPolygons.svg";
import logo from "#/icons/logo.svg";
import dynamic from "next/dynamic";

const ReviewRate = dynamic(() => import("@/ui/ReviewRate"));

type Props = {
  onClose: () => void;
};

export function ReviewsModal({ onClose }: Props) {
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
          <div className={styles.user}>
            <div className={styles.profile}></div>
            <p>page k.</p>
          </div>
        </div>
        <div className={styles.panel}>
          <ReviewRate classNameImage={styles.star} />
          <textarea
            className={styles.textarea}
            placeholder="Поделитесь своим мнением о нашем сервисе"
            rows={5}
          />
        </div>
        <div className={styles.buttons}>
          <button onClick={onClose} className={styles.left}>
            Отмена
          </button>
          <button className={styles.dep}>Отправить</button>
        </div>
      </div>
    </div>
  );
}
