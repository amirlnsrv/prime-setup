import Image from "next/image";
import { BusinessSwiper } from "../BusinessSlider/BusinessSwiper";
import background  from  '../../../public/assets//icons/swiper.svg'
import styles from "./Swiper.module.scss";
export function Swiper() {
  return (
    <div className="container">
        <section className={styles.section}>
          <div className={styles.content}>
          <Image src={background} alt="background" width={1440}  className={styles.img}/>
        <div className={styles.swiperWrapper}>
        <BusinessSwiper />
        </div>
          </div>
    </section>
    </div>
  );
}