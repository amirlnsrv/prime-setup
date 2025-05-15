"use client";

import { UsefulCard } from "@/ui/UsefulCard";
import styles from "./UsefulArticles.module.scss";
import { PrimaryButton } from "@/ui/PrimaryButton";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function UsefulArticles() {
  const cards = [1, 2, 3];

  return (
    <section className={styles.usefulArticles}>
      <h2>Полезные статьи и советы</h2>
      <p>
      Будьте в курсе последних новостей о бизнесе в ОАЭ, визах, лицензиях и многом другом.
      </p>
      <div className={styles.bg}>
        <Swiper
           slidesPerView="auto"
          spaceBetween={30}
          pagination={{
            clickable: true,
            enabled: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
                slidesPerView: 1,
                centeredSlides: true,
                pagination: {
                  enabled: true,
                },
              },
            850: {
              slidesPerView: 2,
              centeredSlides: false,
              pagination: {
                enabled: false,
              },
            },
            1260: {
              slidesPerView: 3,
              centeredSlides: false,
              pagination: {
                enabled: false,
              },
            }
          }}
          className={styles.swiperContainer}
        >
          {cards.map((_, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <UsefulCard />
            </SwiperSlide>
          ))}
        </Swiper>

        <PrimaryButton url="/blog" value={"Смотреть все статьи"} className={styles.btn} />
      </div>
    </section>
  );
}