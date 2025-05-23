import styles from "./MeetOurTeam.module.scss";
import Image from "next/image";
import { teamMembers } from "@/components/MeetOurTeam/MeetOurTeam.helpers"; // путь может отличаться у тебя

export function MeetOurTeam() {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Познакомьтесь с нашей командой</h2>
        <p className={styles.subtitle}>
          Мы верим, что за каждым успешным бизнесом стоят люди. Именно поэтому
          мы гордимся нашей командой экспертов, которые делают всё, чтобы запуск
          вашего бизнеса в ОАЭ был простым, безопасным и успешным.
        </p>
        <div className={styles.grid}>
          {teamMembers.map((imageSrc, idx) => (
            <div key={idx} className={styles.card}>
              <Image
                src={imageSrc}
                alt={`Team member ${idx + 1}`}
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
