import Image from "next/image";
import styles from "./FooterSection.module.scss";
import { getTranslations } from "next-intl/server";
export async function FooterSection() {
  const t = await getTranslations("footerSection");

  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.top}></div>
        <div className={styles.up}>
          <div className={styles.logo}>
            <Image
              src="/assets/icons/logo.svg"
              alt={t("alt")}
              width={100}
              height={100}
            />
            <p className={styles.prime}>{t("prime")} </p>
            <p className={styles.title}>BUSINESS BEGINS HERE</p>
            <p className={styles.txt}>
              Comprehensive solutions for business registration and support in
              the UAE.
            </p>
            <div className={styles.appIcons}>
              <Image
                src="/assets/icons/Facebook-Icon (1).svg"
                alt={t("alt")}
                width={30}
                height={30}
              />

              <Image
                src="/assets/icons/Twitter-Icon.svg"
                alt={t("alt")}
                width={30}
                height={30}
              />

              <Image
                src="/assets/icons/InstagramWhite.svg"
                alt={t("alt")}
                width={30}
                height={30}
              />

              <Image
                src="/assets/icons/linkedinWhite.svg"
                alt={t("alt")}
                width={30}
                height={30}
              />

              <Image
                src="/assets/icons/Youtube-Icon.svg"
                alt={t("alt")}
                width={30}
                height={30}
              />
            </div>
          </div>
          <div className={styles.footerNav}>
            <p className={styles.title}>{t("title2")}</p>
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
            <p>{t("p3")}</p>
            <p>{t("p4")}</p>
            <p>{t("p5")}</p>
          </div>
          <div className={styles.workTime}>
            <p className={styles.title}>{t("title3")}</p>
            <p>{t("p6")}</p>
            <p>{t("p7")}</p>
            <p>{t("p8")}</p>
            <p>{t("p9")}</p>
          </div>
          <div className={styles.contactUs}>
            <p className={styles.title}>{t("title4")}</p>
            <div className={styles.contacts}>
              <Image
                src="/assets/icons/emailWhite.svg"
                alt={t("alt")}
                width={15}
                height={15}
              />
              <a>info.xyz@gmail.com</a>
            </div>
            <br />
            <div className={styles.contacts}>
              <Image
                src="/assets/icons/tel.svg"
                alt={t("alt")}
                width={15}
                height={15}
              />
              <a>+996 476-924</a>
            </div>
          </div>
        </div>

        <hr />
        <div className={styles.appIconsDown}>
          <Image
            src="/assets/icons/Facebook-Icon.svg"
            alt={t("alt")}
            width={30}
            height={30}
          />

          <Image
            src="/assets/icons/Twitter-Icon.svg"
            alt={t("alt")}
            width={30}
            height={30}
          />

          <Image
            src="/assets/icons/Instagram-Icon.svg"
            alt={t("alt")}
            width={30}
            height={30}
          />

          <Image
            src="/assets/icons/Linkedin-Icon.svg"
            alt={t("alt")}
            width={30}
            height={30}
          />

          <Image
            src="/assets/icons/Youtube-Icon.svg"
            alt={t("alt")}
            width={30}
            height={30}
          />
        </div>
      </footer>
      <div className="line"></div>
    </div>
  );
}
