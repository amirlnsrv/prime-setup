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
        <h2>Как открыть компанию в Дубае: Пошаговая инструкция</h2>
        <p>
        Открытие бизнеса в Дубае — это просто. Рассказываем, с чего начать, какие документы нужны и сколько времени занимает процесс регистрации.
        </p>
          <Link href={"#"} className={styles.more}>
          Читать далее <Image className={styles.arrow} src={arrow} alt="arrow" />
          </Link>
      </div>
      <Image src={elipse} alt="elipse" className={styles.elipse_right}/>
      <Image src={elipse} alt="elipse" className={styles.elipse_bottom}/>
      <Image src={elipse} alt="elipse" className={styles.elipse_left}/>
    </div>
  );
}
