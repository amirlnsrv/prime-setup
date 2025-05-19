import Image from "next/image";
import styles from "./Telegram.module.scss";

export default function Telegram() {
  return (
    <button className={styles.tg}>
      <Image
        width={40}
        height={40}
        className={styles.telegramIcon}
        src="/assets/icons/telegram.svg"
        alt="tg"
      />
      <p>
        Нужна помощь? <br /> Свяжитесь с нами по чату
      </p>
    </button>
  );
}
