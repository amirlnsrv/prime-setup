"use client";
import React, { useState } from "react";
import AdminActions from "../components/AdminActions";
import styles from "./AddArticle.module.scss";
import Image from "next/image";
import Modal from "../components/Modal/Modal";
import Button from "@/ui/Button";
import EmtyIcon from "#/icons/emptyIcon.svg";

export default function AddArticle() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };

  return (
    <div className={styles.addArticle}>
      <AdminActions />
      <form className={styles.addArticleForm}>
        <h2 className={styles.title}>Добавить новую статью</h2>

        <label>Заголовок статьи</label>
        <input
          placeholder="Введите заголовок статьи..."
          className={styles.input}
          type="text"
        />

        <p>Обложка статьи</p>
        <div className={styles.imageWrap}>
          {previewImage ? (
            <Image src={previewImage} alt="Обложка статьи" fill />
          ) : (
            <Image src={EmtyIcon} alt="Заглушка" width={100} height={100} />
          )}
          <label className={styles.imageLabel} htmlFor="picture">
            <span>Загрузите изображение для статьи</span>
            <span>Обложка должна быть не больше 2 MB</span>
          </label>
          <input
            type="file"
            id="picture"
            accept="image/*"
            className={styles.hiddenInput}
            onChange={handleImageChange}
          />
        </div>

        <label>Текст статьи</label>
        <textarea
          placeholder="Текст статьи..."
          className={styles.textarea}
          id="articleText"
          name="articleText"
        />

        <label>Дата публикации</label>
        <input
          placeholder="Введите дату"
          className={styles.input}
          type="datetime-local"
        />
        <div className={styles.buttons}>
          <Button handleClick={openModal} value="Отмена" />
          <Button link="/admin" value="Опубликовать" />
        </div>
        {isOpen && (
          <Modal
            closeModal={closeModal}
            title="Выйти без сохранения?"
            description="Изменения не были сохранены. При выходе данные будут утеряны."
          >
            <Button link="/admin" handleClick={closeModal} value="Выйти" />
            <Button handleClick={closeModal} value="Остаться" />
          </Modal>
        )}
      </form>
    </div>
  );
}
