import styles from "./MeetOurTeam.module.scss";
import Image from "next/image";
import { teamMembers } from "@/components/MeetOurTeam/MeetOurTeam.helpers"; // путь может отличаться у тебя
import { getTranslations } from "next-intl/server";

export async function  MeetOurTeam() {
  const t = await getTranslations("meetOurTeam");

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{t("title")}</h2>
        <p className={styles.subtitle}>
          {t("subtitle")}
        </p>
        <div className={styles.grid}>
          {teamMembers.map((imageSrc, idx) => (
            <div key={idx} className={styles.card}>
              <Image
                src={imageSrc}
                alt={`Team member ${idx + 1}`}
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
