import style from "./Contact.module.scss";
import facebook from "#/icons/Facebook-Icon.svg";
import twiter from "#/icons/Twiter.svg";
import instagram from "#/icons/Instagram-Icon.svg";
import link from "#/icons/linkedInBlue.svg";
import youtube from "#/icons/Youtube-IconBlue.svg";
import email from "#/icons/email.svg";
import tell from "#/icons/tell.svg";

import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function ContactTime() {
  const t = await getTranslations("hero.contacts");
const tr = await getTranslations("contactTime");
  return (
    <section >
      <div className={style.h3Container}>
        <h3 className={style.h3we}>{t("subtitle")}</h3>
      </div>
      <div className={style.sectionContainer}>
        <div className={style.container}>
          <h2 className={style.title}>{tr("titleh2")}</h2>
          <p className={style.title2}>{tr("title2")}</p>
        </div>

        <div className={style.container}>
          <h2 className={style.title}>{tr("titleTime")}</h2>
          <div>
          <p className={style.title2}>{tr("time")}</p>
          <p className={style.title2}>{tr("time2")}</p>
          <p className={style.title2}>{tr("sub")}</p>
          <p className={style.title2}>{tr("time3")}</p>
          </div>
        
        </div>

        <div className={style.container}>
          <h2 className={style.title}>{tr("adress")}</h2>
         <div> <p className={style.title2}>{tr("business")} </p>
         <p className={style.title2}>{tr("adress2")}</p></div>
        </div>

        <div className={style.containerEmail}>
          <div><Image src={email} alt="email" width={24} height={19} />
          <a className={style.aEmail} href="#">info.xyz@gmail.com</a></div>
          <div>  <Image src={tell} alt="tell" width={24} height={24} />
          <a  className={style.aEmail}  href="#">+996 476-924</a></div>
        </div>
        <div className={style.containerIcon}>
          <a href=""> <Image src={facebook} alt="facebook" width={32} height={32} /></a>
         <a href=""><Image src={twiter} alt="twitter" width={32} height={32} /></a>
         <a href=""><Image src={instagram} alt="instagram" width={32} height={32} /></a>
         <a href=""><Image src={link} alt="linkedin" width={32} height={32} /></a>
         <a href=""><Image src={youtube} alt="youtube" width={32} height={32} /></a>
        </div>
      </div>
    </section>
  );
}