import React from "react";
import { BusinessSetup } from "../BusinessSetup";
import { FooterSection } from "../FooterSection";
import Styles from "./FooterWrapper.module.scss";

export const FooterWrapper = () => {
  return (
    <div>
      <div className={Styles.businessMobileHide}>
        <BusinessSetup />
      </div>
      <FooterSection />
    </div>
  );
};
