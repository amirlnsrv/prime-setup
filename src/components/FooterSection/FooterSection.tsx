import Image from "next/image";
import styles from "./FooterSection.module.scss";
import { getTranslations } from "next-intl/server";
import logoIcon from "#/icons/logo.svg";
import facebook from "#/icons/Facebook-IconWhite.svg";
import twitter from "#/icons/Twitter-Icon.svg";
import instagram from "#/icons/InstagramWhite.svg";
// import linkedinWhite from "#/icons/linkedinWhite.svg";
import youtube from "#/icons/Youtube-Icon.svg";
import emailWhite from "#/icons/emailWhite.svg";
import tel from "#/icons/tel.svg";
import facebookBlue from "#/icons/Facebook-Icon.svg";
import twitterBlue from "#/icons/Twiter.svg";
import instagramBlue from "#/icons/Instagram-Icon.svg";
// import linkedinBlue from "#/icons/linkedInBlue.svg";
import youtubeBlue from "#/icons/Youtube-IconBlue.svg";
export async function FooterSection() {
  const t = await getTranslations("footerSection");

  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.top}></div>
        <div className={styles.up}>
          <div className={styles.logo}>
            <Image src={logoIcon} alt={t("alt")} width={100} height={100} />
            <p className={styles.prime}>{t("prime")} </p>
            <p className={styles.title}>BUSINESS BEGINS HERE</p>
            <p className={styles.txt}>
              Comprehensive solutions for business registration and support in
              the UAE.
            </p>
            <div className={styles.appIcons}>
              <Image src={facebook} alt={t("alt")} width={30} height={30} />

              <Image src={twitter} alt={t("alt")} width={30} height={30} />

              <Image src={instagram} alt={t("alt")} width={30} height={30} />

              {/* <Image
                src={linkedinWhite}
                alt={t("alt")}
                width={30}
                height={30}
              /> */}

              <Image src={youtube} alt={t("alt")} width={30} height={30} />
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
              <Image src={emailWhite} alt={t("alt")} width={15} height={15} />
              <a>info.xyz@gmail.com</a>
            </div>
            <br />
            <div className={styles.contacts}>
              <Image src={tel} alt={t("alt")} width={15} height={15} />
              <a>+996 476-924</a>
            </div>
          </div>
        </div>

        <hr />
        <div className={styles.appIconsDown}>
          <Image src={facebookBlue} alt={t("alt")} width={30} height={30} />

          <Image src={twitterBlue} alt={t("alt")} width={30} height={30} />

          <Image src={instagramBlue} alt={t("alt")} width={30} height={30} />

          {/* <Image
            src={linkedinBlue}
            alt={t("alt")}
            width={30}
            height={30}
          /> */}

          <Image src={youtubeBlue} alt={t("alt")} width={30} height={30} />
        </div>
      </footer>
      <div className="line"></div>

    </div>
  );
}
