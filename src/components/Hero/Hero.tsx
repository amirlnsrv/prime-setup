import { ExtraButton } from "@/ui/ExtraButton";
import styles from "./Hero.module.scss";
import Image from "next/image";
import { CSSProperties } from "react";
import { StaticImageData } from "next/image";
import { getTranslations } from "next-intl/server";

type InlineStyles = {
  inner?: CSSProperties;
  content?: CSSProperties;
};

type Props = {
  imgUrl: string | StaticImageData;
  title: string;
  subtitle: string;
  inlineStyles?: InlineStyles;
  disableBtn?: boolean;
};

export const Hero = async ({
  imgUrl,
  title,
  subtitle,
  inlineStyles = {},
  disableBtn,
}: Props) => {
  const tHero = await getTranslations("hero");

  return (
    <section className={styles.hero}>
      <Image
        src={imgUrl}
        alt="background"
        quality={100}
        fill
        style={{ objectFit: "cover", zIndex: -1, objectPosition: "50% top" }}
        priority
      />
      <div className="container">
        <div className={styles.inner} style={inlineStyles.inner}>
          <div className={styles.content} style={inlineStyles.content}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
            {disableBtn ? "" : <ExtraButton value={tHero("button")} />}
          </div>
        </div>
      </div>
    </section>
  );
};
