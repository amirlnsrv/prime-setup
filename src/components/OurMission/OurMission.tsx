import Image from "next/image";
import Styles from "./OurMission.module.scss";
import OurMissionBg from "#/images/OurMissionBg.jpg";
import Overlay from "#/images/OverlayImg.svg";
import { getTranslations } from "next-intl/server";

export const OurMission = async () => {
  const t = await getTranslations("ourMission");

  return (
    <section className={Styles.section}>
      <h1 className={Styles.head}>{t("head")}</h1>

      <div className={Styles.wrapper}>
        <Image
          src={OurMissionBg}
          alt="Our mission background"
          fill
          className={Styles.background}
          priority
        />

        <div className={Styles.content}>
          <div className={Styles.text}>
            <h2 className={Styles.title}>{t("title1")}</h2>
            <p className={Styles.description}>{t("description1")}</p>
            <h2 className={Styles.title}>{t("title2")}</h2>
            <p className={Styles.description}>{t("description2")}</p>
          </div>
          <div className={Styles.overlayContainer}>
            <Image
              src={Overlay}
              alt="Overlay"
              width={400}
              height={400}
              className={Styles.overlay}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
