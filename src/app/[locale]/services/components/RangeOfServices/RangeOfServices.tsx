import ServiceTabs from "../ServiceTabs";
import styles from "./RangeOfServices.module.scss";

import React from "react";

export function RangeOfServices() {
  return (
    <section className={styles.rangeOfServices}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.title}>
            Полный спектр услуг для запуска и развития бизнеса в ОАЭ
          </h2>
        <ServiceTabs />
        </div>
      </div>
    </section>
  );
}
