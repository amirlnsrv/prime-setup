import Link from "next/link";
import styles from "./UsefulCard.module.scss";
import Image from "next/image";

type Props = {
  titleTxt: string;
  subtitleTxt: string;
  buttonTxt: string;
};


export default function UsefulCard({titleTxt, subtitleTxt, buttonTxt} : Props) {
  return (
    <div className={styles.card}>
      <div className={styles.picture}></div>
      <div className={styles.content}>
        <h2>{titleTxt}</h2>
        <p>{subtitleTxt}</p>
          <Link href={"/blog2"} className={styles.more}>
          {buttonTxt} <Image className={styles.arrow} width={20} height={20} src="/assets/icons/rightArrow.svg" alt="arrow" />
          </Link>
      </div>
      <Image width={150} height={150} src="/assets/images/elipse.svg" alt="elipse" className={styles.elipse_right}/>
      <Image width={150} height={150} src="/assets/images/elipse.svg" alt="elipse" className={styles.elipse_bottom}/>
      <Image width={150} height={150} src="/assets/images/elipse.svg" alt="elipse" className={styles.elipse_left}/>
    </div>
  );
}
