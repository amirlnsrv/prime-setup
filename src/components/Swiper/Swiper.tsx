import { BusinessSwiper } from "../BusinessSlider/BusinessSwiper";
import styles from "./Swiper.module.scss";
import img from "../../../public/assets/icons/swiper.svg";
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
            className={styles.img} />
          <div className={styles.swiperWrapper}>
            <BusinessSwiper />
          </div>
        </div>
      </section>
    </div>
  );
}
