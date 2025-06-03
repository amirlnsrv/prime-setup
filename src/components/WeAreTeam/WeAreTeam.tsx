import { getTranslations } from "next-intl/server";
import Styles from "./WeAreTeam.module.scss";

export  const  WeAreTeam = async ()  => {
  const t = await getTranslations("weAreTeam");
  return (
    <section>
      <div className={Styles.container}>
        <h2 className={Styles.title}>{t("title")}</h2>
        <p className={Styles.description}>
          {t("description")}
        </p>
      </div>
    </section>
  );
};
