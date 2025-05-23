import styles from "./OurPartners.module.scss";
import { yourCompanyLogos } from "@/mockData/tempfile";
// import { yourCompanyLogos } from "@/mockData/mockdata";

export function OurPartners() {
  return (
    <section className={styles.ourPartners}>
      <div className={styles.top}>
        <h1>Наши партнеры</h1>
        <div className={styles.slider}>
          <div className={styles.track}>
            {[...yourCompanyLogos, ...yourCompanyLogos].map((logo, index) => (
              <div className={styles.logo} key={index}>
                <img src={logo} alt={`Logo ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.downborderWrapper}>
         <img src="/assets/images/downborder.svg" alt="Down border" />
      </div>
    </section>
  );
}
