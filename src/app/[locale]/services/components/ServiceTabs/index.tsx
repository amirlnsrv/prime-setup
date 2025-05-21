"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ServiceTabs.module.scss";
import { services } from "./ServiceTabs.helper";

export default function ServiceTabs() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dotRef = useRef(null);
  const listRef = useRef<(HTMLLIElement | null)[]>([]);

  const handleClick = (index: number) => {
    setSelectedIndex(index);

    const target = listRef.current[index] as HTMLElement | null;
    const dot = dotRef.current as HTMLDivElement | null;

    if (target && dot) {
      dot.style.top = `${target.offsetTop + target.offsetHeight / 2 - 6}px`; // Центруем точку
    }
  };

  useEffect(() => {
    handleClick(selectedIndex);
  }, [selectedIndex]);

  return (
    <div className={styles.serviceTabs}>
      <div className={styles.nav}>
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
              className={index === selectedIndex ? styles.active : ""}
              onClick={() => handleClick(index)}
            >
              {service.title}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.contentPanel}>
        <h2>
          <span>{selectedIndex + 1}. </span>
          {services[selectedIndex].title}
        </h2>
        <p>{services[selectedIndex].content}</p>
      </div>
    </div>
  );
}
