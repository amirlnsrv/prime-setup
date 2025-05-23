import styles from "./BlogCards.module.scss";
import { UsefulCard } from "@/ui/UsefulCard";

export default function BlogCards() {
  const cards = [1, 2, 3, 3, 4, 5, 6, 7, 8];
  return (
    <section className={styles.blogCards}>
      <h2>Что вас интересует?</h2>
      <div className={styles.filter}>
        <input
          className={styles.input}
          type="text"
          placeholder="Введите чтобы начать поиск..."
        />
        <button className={styles.search}>
          <img src="/assets/icons/search.svg" alt="search icon" />
          <span>Поиск</span>
        </button>
      </div>
      <div className={styles.cardsContainer}>
        {cards.map((_, index) => (
          <UsefulCard key={index} />
        ))}
      </div>
      <div className={styles.pagination}>
        <button className={styles.prev}>Предыдущий</button>
        <button className={styles.next}>
          Следующий <img className={styles.arrow} src='/assets/icons/smallArrow.svg' alt="arrow" />
        </button>
      </div>
    </section>
  );
}
