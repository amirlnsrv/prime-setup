import { ExtraButton } from "@/ui/ExtraButton";
import styles from "./Hero.module.scss";
import Image from "next/image";
import { CSSProperties } from "react";
import { StaticImageData } from "next/image";

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

export const Hero = ({
  imgUrl,
  title,
  subtitle,
  inlineStyles = {},
  disableBtn,
}: Props) => {
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
            {disableBtn ? "" : <ExtraButton value="Бесплатная консультация" />}
          </div>
        </div>
      </div>
    </section>
  );
};
