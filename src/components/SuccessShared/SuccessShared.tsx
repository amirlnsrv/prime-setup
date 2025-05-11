"use client";
import styles from "./SuccessShared.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ClientCard } from "@/ui/ClientCard";
import { RedButton } from "@/ui/RedButton";

export default function SuccessShared() {
  const reviews = [1, 2, 3, 4, 5, 6, 7];

  return (
    <section className={styles.success__shared}>
      <h1>Successes shared by our clients</h1>
      <div className={styles.client__cards}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          slidesPerGroup={1}
          className={styles.swiper}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            disabledClass: styles.arrowDisabled,
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: true,
              spaceBetween: 10
            },
            640: {
              spaceBetween: 20,
              slidesPerView: 1,
              centeredSlides: true
            },
            768: {
              spaceBetween: 25,
              slidesPerView: 2,
              centeredSlides: false
            },
            1024: {
              spaceBetween: 30,
              slidesPerView: 3,
              centeredSlides: false
            },
          }}
        >
          {reviews.map((_, i) => (
            <SwiperSlide className={styles.swiper__slide} key={i}>
              <ClientCard />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-pagination" />

        <button className={`${styles.arrow} swiper-button-prev`}></button>
        <button className={`${styles.arrow} swiper-button-next`}></button>
      </div>
      {/* <button className={styles.button}>Leave a review</button> */}
      <RedButton value="Leave a review" className={styles.button}/>
    </section>
  );
}
