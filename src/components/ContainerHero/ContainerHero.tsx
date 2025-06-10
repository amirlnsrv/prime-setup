import Image from "next/image";
import img from "#/images/contacts.png";
import style from "./ContainerHero.module.scss";
import { getTranslations } from "next-intl/server";

export async function ContainerHero() {
  const t = await getTranslations("hero.contacts");

  return (
    <section className={style.heroSection}>
      <Image src={img} alt="img" fill className={style.bgImage} priority />
      <div className={style.titleContainer}>
        <h1 className={style.title}>{t("title")}</h1>
        <div>
          <p className={style.title2}>{t("subtitle")}</p>
        </div>
      </div>
    </section>
  );
}
