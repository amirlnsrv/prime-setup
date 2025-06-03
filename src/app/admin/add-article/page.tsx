import React from "react";
import AdminActions from "../components/AdminActions";
import styles from "./AddArticle.module.scss";
import Image from "next/image";
export default function AddArticle() {
  return (
    <div className={styles.addArticle}>
      <AdminActions />
      <form className={styles.addArticleForm}>
        <h2 className={styles.title}>Добавить новую статью</h2>
        <label htmlFor="">Заголовок статьи</label>
        <input
          placeholder="Введите заголовок статьи..."
          className={styles.input}
          type="text"
        />
        <p>Обложка статьи</p>
        <div className={styles.imageWrap}>
          <Image
            src="/assets/icons/emptyIcon.svg"
            width={100}
            height={100}
            alt="Обложка статьи"
          />
          <label className={styles.imageLabel} htmlFor="picture">
            <span>Загрузите изображение для статьи</span>
            <span>Обложка должна быть не больше 2 MB</span>
          </label>
          <input type="file" id="picture" />
        </div>
        <label htmlFor="">Текст статьи</label>
        <textarea placeholder="Текст статьи..." name="" id=""></textarea>
        <label htmlFor="">Дата публикации</label>
        <input
          placeholder="Введите дату"
          className={styles.input}
          type="datetime"
          id=""
        />
        <div>
          <button>Отмена</button>
          <button>Опубликовать</button>
        </div>
      </form>
    </div>
  );
}
