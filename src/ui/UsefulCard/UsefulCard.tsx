import Link from "next/link";
import styles from "./UsefulCard.module.scss";
import Image from "next/image";

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
          Читать далее <Image width={20} height={20} className={styles.arrow} src="/assets/icons/rightArrow.svg" alt="arrow" />
          </Link>
      </div>
      <Image width={150} height={150} src="/assets/images/elipse.svg" alt="elipse" className={styles.elipse_right}/>
      <Image width={150} height={150} src="/assets/images/elipse.svg" alt="elipse" className={styles.elipse_bottom}/>
      <Image width={150} height={150} src="/assets/images/elipse.svg" alt="elipse" className={styles.elipse_left}/>
    </div>
  );
}
