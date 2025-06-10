import { Contact } from "@/components/Contact";
import Image from "next/image";
import img1 from "#/images/fonIconsContacts.svg";
import style from "./Contacts.page.module.scss";
import { ContainerHero } from "@/components/ContainerHero";
import { ContactTime } from "@/components/ContactTime/ContactTime";
import { getTranslations } from "next-intl/server";

import Facebook from "#/icons/Facebook.svg";
import Twitter from "#/icons/Twitter.svg";
import Instagram from "#/icons/Instagram.svg";
import Linkedin from "#/icons/LinkedIn.svg";
import Youtube from "#/icons/Youtube.svg";

export default async function Contacts() {
  const t = await getTranslations("contactTime");

  return (
    <section>
      <ContainerHero />
      <ContactTime />
      <div className={style.container}>
        <div className={style.contactWrapper}>
          <Image src={img1} alt="iconFon" className={style.imageContact} />
          <div className={style.contactContent}>
            <Contact
              className={style.bgWrapper}
              title={t("titleContact")}
              description={t("descriptionContact")}
              icons={[
                {
                  src: Facebook,
                  href: "https://facebook.com",
                  alt: "Facebook",
                },
                {
                  src: Twitter,
                  href: "https://twitter.com",
                  alt: "Twitter",
                },
                {
                  src: Instagram,
                  href: "https://instagram.com",
                  alt: "Instagram",
                },
                {
                  src: Linkedin,
                  href: "https://linkedin.com",
                  alt: "Linkedin",
                },
                {
                  src: Youtube,
                  href: "https://youtube.com",
                  alt: "Youtube",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
