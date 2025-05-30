import Image from "next/image";
import stylly from "./Benefits.module.scss";
import { mockdataIcon } from "./Benefits.heplper";
import bg from "#/images/Rectangle 99 (16).png";
import { getTranslations } from "next-intl/server";

export async function Benefits() {
  const t = await getTranslations("benefits");

  return (
    <section className={stylly.sectionContainer}>
      <div className={stylly.backgroundImage}>
        <Image
          src={bg}
          fill
          alt="background"
          objectFit="cover"
        />
      </div>

      <div className={stylly.containerBenefits}>
        {mockdataIcon.map((item,index) => (
          <div key={item.id} className={stylly.cardContainer}>
            <Image
              src={item.icon}
              alt="icon"
              width={100}
              height={100}
              className={stylly.img}
            />
            <Image
              src={item.icon2}
              alt="icon"
              width={100}
              height={100}
              className={stylly.img2}
            />
            <h3 className={stylly.title}>{t(`items.${index}.title`)}</h3>
            <p className={stylly.description}>{t(`items.${index}.description`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
