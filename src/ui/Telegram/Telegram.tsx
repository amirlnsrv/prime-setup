import Image from "next/image";
import styles from "./Telegram.module.scss";
import { getTranslations } from "next-intl/server";

export default async function Telegram() {

  const t = await getTranslations("telegram")

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
        {t("title")} <br /> {t("subtitle")} 
      </p>
    </button>
  );
}
