import Image from "next/image";
import styles from "./OurPartners.module.scss";
import { yourCompanyLogos } from "@/mockData/mockData";

export default function OurPartners() {
  return (
    <section className={styles.ourPartners}>
      <div className={styles.top}>
        <h1>Our partners</h1>
        <div className={styles.slider}>
          <div className={styles.track}>
            {[...yourCompanyLogos, ...yourCompanyLogos].map((logo, index) => (
              <div className={styles.logo} key={index}>
                <Image src={logo} alt={`Logo ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.downborder}></div>
    </section>
  );
}
