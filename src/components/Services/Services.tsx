import Image from "next/image";
import { mockdataSectiom } from "./Services.heplper";
import stylle from "./Services.module.scss";
import { PrimaryButton } from "@/ui/PrimaryButton";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function Services() {
  const t = await getTranslations("services");

  return (
    <section className={stylle.sectionContainer}>
      <div className={stylle.serversContainer}>
        <h2 className={stylle.serverH2}>{t("serverH2")}</h2>
        <p className={stylle.serverP}>{t("serverP")}</p>
      </div>
      <Link href="/services">
        <div className={stylle.sectionContainerIcon}>
          {mockdataSectiom.map((item, index) => (
            <div key={item.id} className={stylle.card}>
              <div className={stylle.cardInner}>
                <div className={stylle.cardFront}>
                  <Image
                    src={item.img}
                    alt={"img"}
                    className={stylle.icon}
                    width={48}
                    height={48}
                  />

                  <h5 className={stylle.title}>{t(`items.${index}.title`)}</h5>
                </div>

                <div className={stylle.cardBack}>
                  <div className={stylle.iconWrap}>
                    <Image
                      src={item.img}
                      alt={"img"}
                      className={stylle.icon}
                      width={48}
                      height={48}
                    />
                  </div>
                  <h4 className={stylle.subTitle}>
                    {t(`items.${index}.description`)}
                  </h4>
                  <button className={stylle.cardBtn}>{t("btn1")}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Link>

      <div className={stylle.primaryContainer}>
        <Link href="/services">
          <PrimaryButton className={stylle.primaryBtn} value={t("btn3")} />
        </Link>
      </div>
      <Link href="/services">
        <button className={stylle.btn}>{t("btn2")}</button>
      </Link>
    </section>
  );
}
