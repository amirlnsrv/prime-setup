"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./BusinessSlider.module.scss";
import { BusinessSlider } from "./Busines.heplper";
// import { BusinessSlider } from "@/mockData/tempfile";

export const BusinessSwiper = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [isSwiperReady, setIsSwiperReady] = useState(false);

  useEffect(() => {
    // Ensure that the navigation buttons are ready after the DOM is fully rendered
    setIsSwiperReady(true);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.containerTitel}>
        <h2 className={styles.titleh2}>
          Как проходит открытие вашей компании — шаг за шагом
        </h2>
      </div>
      <div className={styles.wrapper}>
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
            {BusinessSlider.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={styles.card}>
                  {/* <div className={styles.lineTopLeft}>
                    <img src="/assets/images/lineTopRight.svg" alt="lineTopRight-icon" />
                  </div>
                  <div className={styles.lineBottomRight}>
                    <svg
                      width="370"
                      height="97"
                      viewBox="0 0 370 97"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="73.7094"
                        y="343.26"
                        width="263.325"
                        height="326.364"
                        rx="59.5"
                        transform="rotate(-108.893 73.7094 343.26)"
                        stroke="white"
                        stroke-width="7"
                      />
                    </svg>
                  </div>
                  <div className={styles.topLine}>
                    <svg
                      width="272"
                      height="70"
                      viewBox="0 0 272 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="-1.09484"
                        y="41.0248"
                        width="246"
                        height="246"
                        rx="46.5"
                        transform="rotate(-82.9115 -1.09484 41.0248)"
                        stroke="white"
                        stroke-width="7"
                      />
                    </svg>
                  </div> */}
                                    <img
                    src={item.imag}
                    alt={item.title}
                    className={styles.imgSwiper}
                  />
                  {/* <img src={item.imag.src} alt={item.title}  className={styles.imgSwiper}/> */}
                  <div className={styles.text}>
                    <h3 className={styles.titelSwiper}>{item.title}</h3>
                    <p className={styles.pSwiper}>{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <div>
          <button
            ref={prevRef}
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
