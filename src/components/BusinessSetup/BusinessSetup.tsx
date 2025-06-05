import { ExtraButton } from "@/ui/ExtraButton";

import styles from "./BusinessSetup.module.scss";
import { getTranslations } from "next-intl/server";

export async function BusinessSetup() {
  const t = await getTranslations("businessSetup");

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {t("title")} <span className={styles.accent}>{t("accent")} </span>
          {t("title2")}
        </h2>
        <p className={styles.subtitle}>{t("subtitle")}</p>
        <ExtraButton value={t("value")} className={styles.button} />
      </div>
    </section>
  );
}
