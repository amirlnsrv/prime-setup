import { PrimaryButton } from "@/ui/PrimaryButton";
import styles from "./WhyPrimeSetup.module.scss";
import { getTranslations } from "next-intl/server";

export const WhyPrimeSetup = async () => {
  const t = await getTranslations("WhyPrimeSetup");

  return (
    <section className={styles.whyPrimeSetup}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.title}>{t("title")}</h2>
          <p className={styles.subtitle}>{t("subtitle")}</p>
          <PrimaryButton value={t("button")} className={styles.btn} />
        </div>
      </div>
    </section>
  );
};
