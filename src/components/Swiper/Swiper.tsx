import { BusinessSwiper } from "../BusinessSlider/BusinessSwiper";
import styles from "./Swiper.module.scss";
import img from "#/icons/swiper.svg"
import Image from "next/image";
export function Swiper() {
  return (
    <div className="container">
      <section className={styles.section}>
        <div className={styles.content}>
          <Image
            src={img}
            alt="background"
            width={1440}
            height={880}
            className={styles.img} />
             <div className={styles.containerTitel}>
        <h2 className={styles.titleh2}>
          Как проходит открытие вашей компании — шаг за шагом
        </h2>
      </div>
          <div className={styles.swiperWrapper}>
            <BusinessSwiper />
          </div>
        </div>
      </section>
    </div>
  );
}
