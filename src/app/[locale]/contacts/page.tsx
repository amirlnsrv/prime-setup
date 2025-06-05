import { Contact } from "@/components/Contact";
import Image from "next/image";
import img1 from "#/images/fonIconsContacts.svg";
import style from "./Contacts.page.module.scss";
import { ContainerHero } from "@/components/ContainerHero";
import { ContactTime } from "@/components/ContactTime/ContactTime";
import { getTranslations } from "next-intl/server";

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
              title={t("titleContact")}
              description={t("descriptionContact")}
              icons={[
                {
                  src: "/assets/Facebook.svg",
                  href: "https://facebook.com",
                  alt: "Facebook",
                },
                {
                  src: "/assets/Twitter.svg",
                  href: "https://twitter.com",
                  alt: "Twitter",
                },
                {
                  src: "/assets/Instagram.svg",
                  href: "https://instagram.com",
                  alt: "Instagram",
                },
                {
                  src: "/assets/Linkedin.svg",
                  href: "https://linkedin.com",
                  alt: "Linkedin",
                },
                {
                  src: "/assets/Youtube.svg",
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
