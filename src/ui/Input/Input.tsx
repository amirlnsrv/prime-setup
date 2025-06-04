"use client";

import React from "react";
import styles from "./Input.module.scss";
import Image from "next/image";
import SearchIcon from "#/icons/search.svg";
interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  error?: string;
  inButton?: string;
}

export const Input: React.FC<InputProps> = ({
  title,
  error,
  inButton,
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
            className={styles.searchIcon}
            width={30}
            height={30}
            src={SearchIcon}
            alt="search icon"
          />
          <span>{inButton}</span>
        </button>
      </div>
    </div>
  );
};
