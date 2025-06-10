import React from "react";
import { BusinessSetup } from "../BusinessSetup";
import { FooterSection } from "../FooterSection";
import styles from "./FooterWrapper.module.scss";
import { FooterDown } from "../FooterDown";

export const FooterWrapper = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.businessMobileHide}>
        <BusinessSetup />
      </div>
      <FooterSection />
      <FooterDown />
    </div>
  );
};
