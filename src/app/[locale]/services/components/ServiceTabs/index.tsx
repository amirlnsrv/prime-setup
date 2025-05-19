"use client";

import { useRef, useState } from "react";
import styles from "./ServiceTabs.module.scss";
import { services } from "./ServiceTabs.helper";

export default function ServiceTabs() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={styles.serviceTabs}>
      <ul className={styles.sidebar}>
        {services.map((service, index) => (
          <li
            key={index}
            className={index === selectedIndex ? styles.active : ""}
            onClick={() => handleClick(index)}
          >
            {service.title}
          </li>
        ))}
      </ul>

      <div className={styles.contentPanel}>
        <h2>{services[selectedIndex].title}</h2>
        <p>{services[selectedIndex].content}</p>
      </div>
    </div>
  );
}
