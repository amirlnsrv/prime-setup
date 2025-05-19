"use client";

import React from "react";
import styles from "./Input.module.scss";
import Image from "next/image";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  title,
  error,
  id,
  name,
  ...rest
}) => {
  const inputId = id || name;

  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>
      <div className={styles.container}>
        <input
          id={inputId}
          name={name}
          className={`${styles.input} ${error ? styles.errorBorder : ""}`}
          {...rest}
        />
        {error && <p className={styles.errorText}>{error}</p>}
        <button className={styles.search}>
          <Image
            width={30}
            height={30}
            src="/assets/icons/search.svg"
            alt="search icon"
          />
          <span>Поиск</span>
        </button>
      </div>
    </div>
  );
};
