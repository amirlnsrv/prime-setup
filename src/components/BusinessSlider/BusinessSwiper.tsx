"use client";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./BusinessSlider.module.scss";
import { BusinessSlider } from "./Busines.heplper";
import Image from "next/image";
import { AnimatedBackground } from "../AnimatedBackground/AnimatedBackground";
import { useTranslations } from "next-intl";

export   function   BusinessSwiper() {
  const t =  useTranslations("swiper");


  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [isSwiperReady, setIsSwiperReady] = useState(false);
  const [rotateAngle, setRotateAngle] = useState(0);

  useEffect(() => {
    setIsSwiperReady(true);
  }, []);



  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <AnimatedBackground rotateAngle={rotateAngle} />
        {isSwiperReady && (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            allowTouchMove={false}
            onSwiper={(swiper) => {
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = prevRef.current!;
                swiper.params.navigation.nextEl = nextRef.current!;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
          >
            {BusinessSlider.map((item,index) => (
              <SwiperSlide key={item.id}>
                <div className={styles.card}>
                  <Image
                    src={item.imag}
                    alt={'img'}
                    className={styles.imgSwiper}
                    width={384}
                    height={384}
                  />
                  <div className={styles.text}>
                    <h3 className={styles.titelSwiper}>{t(`items.${index}.title`)}</h3>
                    <p className={styles.pSwiper}>{t(`items.${index}.description`)}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div className={styles.buttonGroup}>
          <button
            ref={prevRef}
            onClick={() => setRotateAngle((prev) => prev - 83)}
            className={`${styles.navButton} ${styles.prev}`}
          >
            <svg
              width="17"
              height="31"
              viewBox="0 0 17 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0625 2.375L1.9375 15.5L15.0625 28.625"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            ref={nextRef}
            onClick={() => setRotateAngle((prev) => prev + 83)}
            className={`${styles.navButton} ${styles.next}`}
          >
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9375 9.375L29.0625 22.5L15.9375 35.625"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
