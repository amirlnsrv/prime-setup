import { BusinessSwiper } from "../BusinessSlider/BusinessSwiper";
import styles from "./Swiper.module.scss";
import img from "#/icons/swiper.svg";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
export async function Swiper() {
  const t = await getTranslations("swiper");

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <Image
          src={img}
          alt="background"
          fill
          objectFit="cover"
          className={styles.img}
        />
        <div className={styles.containerTitel}>
          <h2 className={styles.titleh2}>
            {t("titleh2")}
          </h2>
        </div>
        <div className={styles.swiperWrapper}>
          <BusinessSwiper />
        </div>
      </div>
    </section>
  );
}
