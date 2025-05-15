import { BusinessSwiper } from "../BusinessSlider/BusinessSwiper";
import styles from "./Swiper.module.scss";
export function Swiper() {
  return (
    <div className="container">
      <section className={styles.section}>
        <div className={styles.content}>
          <img
            src="assets/icons/swiper.svg"
            alt="background"
            width={1440}
            className={styles.img}
          />
          <div className={styles.swiperWrapper}>
            <BusinessSwiper />
          </div>
        </div>
      </section>
    </div>
  );
}
