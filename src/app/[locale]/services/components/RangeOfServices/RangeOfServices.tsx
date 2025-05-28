import ServiceTabs from "../ServiceTabs";
import styles from "./RangeOfServices.module.scss";

import React from "react";
import { useTranslations } from "next-intl";

export function RangeOfServices() {
  const t = useTranslations("servicesPage");
  return (
    <section className={styles.rangeOfServices}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.title}>{t("title")}</h2>
          <ServiceTabs />
        </div>
      </div>
    </section>
  );
}
