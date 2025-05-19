"use client";

import Image from "next/image";
import styles from "./BlogCards.module.scss";
import { UsefulCard } from "@/ui/UsefulCard";
import { Input } from "@/ui/Input/Input";
import { useMemo, useState } from "react";

const cards = [1, 2, 3, 3, 4, 5, 6, 7, 8];

export default function BlogCards() {
  const PAGE_SIZE = 9;

  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(cards.length / PAGE_SIZE);

  const visibleCards = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return cards.slice(start, start + PAGE_SIZE);
  }, [page]);

  const handlePrev = () => setPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setPage((p) => Math.min(p + 1, totalPages));

  return (
    <section className={styles.blogCards}>
      <div className={styles.filter}>
        <Input
          title="Что вас интересует"
          placeholder="Введите чтобы начать поиск..."
          type="text"
          id="1"
        />
      </div>
      <div className={styles.cardsContainer}>
        {visibleCards.map((_, index) => (
          <UsefulCard key={index} />
        ))}
      </div>
      <div className={styles.pagination}>
        <button onClick={handlePrev} className={styles.prev}>
          Предыдущий
        </button>
        <button onClick={handleNext} className={styles.next}>
          Следующий
          <Image
            width={10}
            height={20}
            className={styles.arrow}
            src="/assets/icons/smallArrow.svg"
            alt="arrow"
          />
        </button>
      </div>
    </section>
  );
}
