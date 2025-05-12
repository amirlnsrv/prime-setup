import { BusinessSwiper } from "../BusinessSlider/BusinessSlider";
import styles from "./Swiper.module.scss";
export function Swiper() {
  return (
    <div className={styles.container}>
        <BusinessSwiper />
    </div>
  );
}