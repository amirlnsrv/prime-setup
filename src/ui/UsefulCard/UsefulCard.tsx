import Link from "next/link";
import styles from "./UsefulCard.module.scss";
import arrow from "../../../public/assets/icons/rightArrow.svg";
import Image from "next/image";
import elipse from "../../../public/assets/images/elipse.svg";

export default function UsefulCard() {
  return (
    <div className={styles.card}>
      <div className={styles.picture}></div>
      <div className={styles.content}>
        <h2>How to open a company in Dubai: Step-by-step instructions</h2>
        <p>
          Starting a business in Dubai is easy. We tell you where to start, what
          documents you need and how long the registration process takes.
        </p>
          <Link href={"#"} className={styles.more}>
            Read more <Image src={arrow} alt="arrow" />
          </Link>
      </div>
      <Image src={elipse} alt="elipse" className={styles.elipse_right}/>
      <Image src={elipse} alt="elipse" className={styles.elipse_bottom}/>
      <Image src={elipse} alt="elipse" className={styles.elipse_left}/>
    </div>
  );
}
