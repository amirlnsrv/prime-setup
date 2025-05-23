"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ServiceTabs.module.scss";
import { services } from "./ServiceTabs.helper";

export default function ServiceTabs() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dotRef = useRef(null);
  const listRef = useRef<(HTMLLIElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isNowMobile = window.innerWidth <= 1200;
      setIsMobile(isNowMobile);

      // Убираем активность в мобильной версии
      if (isNowMobile) {
        setSelectedIndex(null);
      } else {
        setSelectedIndex(0);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = (index: number) => {
    setSelectedIndex(index);

    const target = listRef.current[index] as HTMLElement | null;
    const dot = dotRef.current as HTMLDivElement | null;

    if (target && dot) {
      const scrollBar = dot.parentElement;
      if (!scrollBar) return;

      const style = getComputedStyle(scrollBar);
      const paddingTop = parseFloat(style.paddingTop) || 0;
      

      dot.style.top = `${
        paddingTop +
        target.offsetTop +
        target.offsetHeight / 2 -
        dot.offsetHeight / 2
      }px`;
    }
  };

  useEffect(() => {
    if (selectedIndex !== null) {
      handleClick(selectedIndex);
    }
  }, [selectedIndex]);

  return (
    <div className={styles.serviceTabs}>
<div className={`${styles.nav} ${selectedIndex !== null ? styles.expanded : ""}`}>
        <div className={styles.scrollBar}>
          <div className={styles.scrollDot} ref={dotRef}></div>
        </div>
        <ul className={styles.sidebar}>
          {services.map((service, index) => (
            <li
              key={index}
              ref={(el) => {
                listRef.current[index] = el;
              }}
              className={selectedIndex === index ? styles.active : ""}
              onClick={() => handleClick(index)}
            >
              {service.title}

              {isMobile && selectedIndex === index && (
                <div className={styles.contentPanel}>
                  <h2>
                    <span>{index + 1}. </span>
                    {service.title}
                  </h2>
                  <p>{service.content}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {!isMobile && selectedIndex !== null && (
        <div className={styles.contentPanel}>
          <h2>
            <span>{selectedIndex + 1}. </span>
            {services[selectedIndex].title}
          </h2>
          <p>{services[selectedIndex].content}</p>
        </div>
      )}
    </div>
  );
}
