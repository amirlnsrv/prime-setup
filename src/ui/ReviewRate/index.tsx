"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./ReviewRate.module.scss";
import starNone from "#/icons/starNone.svg";
import star from "#/icons/star.svg";

type Props = {
  classNameImage?: string;
};
export default function ReviewRate({ classNameImage }: Props) {
  const [rate, setRate] = useState(0);

  const stars = [0, 1, 2, 3, 4];

  return (
    <div className={styles.rate}>
      {stars.map((index) => (
        <Image
          className={classNameImage}
          key={index}
          width={45}
          height={45}
          src={index < rate ? star : starNone}
          alt="star"
          onClick={() => setRate(index + 1)}
          style={{ cursor: "pointer" }}
          draggable={false}
        />
      ))}
    </div>
  );
}
