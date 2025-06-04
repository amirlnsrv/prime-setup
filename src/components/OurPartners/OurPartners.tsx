import styles from "./OurPartners.module.scss";
import { yourCompanyLogos } from "./OurPartner.helpers";
import Image from "next/image";
import downborder from "#/images/downborder.svg";
import { getTranslations } from "next-intl/server";
import bg from "#/images/pngwing.svg"

export async function OurPartners() {

  const t = await getTranslations("OurPartners")

  return (
    <section className={styles.ourPartners}>
      <div className={styles.top}>
        <Image className={styles.bg} src={bg} width={100} height={100} alt="background"/>
        <h1>{t("title")}</h1>
        <div className={styles.slider}>
          <div className={styles.track}>
            {[...yourCompanyLogos, ...yourCompanyLogos].map((pic, index) => (
              <div className={styles.logo} key={index}>
                <Image
                  width={240}
                  height={100}
                  src={pic}
                  alt={`Logo ${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.downborderWrapper}>
        <Image src={downborder} width={100} height={100} alt="Down border" />
      </div>
    </section>
  );
}
