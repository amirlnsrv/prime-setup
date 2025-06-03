import { getTranslations } from "next-intl/server";
import styles from "./WhyTrustUs.module.scss";

export async function WhyTrustUs() {
  const t = await getTranslations("whyTrustUs");

  
  const items = await t.raw("items");


  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          {t("title1")}
          <br />
          {t("title2")}
        </h2>
        <div className={styles.grid}>
          {items.map((text: string, idx: number) => (
            <div key={idx} className={styles.card}>
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
