"use client";
import React, { useState } from "react";
import AdminActions from "../components/AdminActions";
import styles from "./AddArticle.module.scss";
import Image from "next/image";
import emptyIcon from "#/icons/emptyIcon.svg";
import Modal from "../components/Modal/Modal";
import Button from "@/ui/Button";

export default function AddArticle() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isCurrentSize, setIsCurrentSize] = useState(true);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    processFile(file);
  };

  const handleDeleteImage = () => {
    setPreviewImage(null);
    setIsCurrentSize(true); // сброс ошибки размера (если была)
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    processFile(file);
  };

  const processFile = (file?: File) => {
    if (file && file.type.startsWith("image/")) {
      if (file.size <= 2 * 1024 * 1024) {
        const imageUrl = URL.createObjectURL(file);
        setPreviewImage(imageUrl);
        setIsCurrentSize(false);
      } else {
        console.log("error");

        setIsCurrentSize(false); // устанавливаем false при ошибке размера
        setPreviewImage(null); // сбрасываем превью
        setTimeout(() => {
          setIsCurrentSize(true); // сбрасываем ошибку размера через 2 секунды
        }, 2000);
      }
    } else {
      alert("Пожалуйста, выберите изображение.");
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
        <div
          className={`${styles.imageWrap} ${
            isDragging ? styles.dragging : ""
          } ${previewImage ? styles.filled : ""}`}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
        >
          {previewImage ? (
            <div className={styles.previewImage}>
              <Image
                className={styles.img}
                src={previewImage}
                alt="Обложка статьи"
                fill
              />
              <button
                className={styles.deleteImage}
                onClick={handleDeleteImage}
                type="button"
              >
                Удалить изображение
              </button>
            </div>
          ) : (
            <>
              <Image
                src={emptyIcon}
                alt="Пустая обложка"
                width={100}
                height={100}
              />
              <label className={styles.imageLabel} htmlFor="picture">
                <span className={isCurrentSize ? "" : styles.errorLoad}>
                  Загрузите изображение для статьи
                </span>
                <span className={isCurrentSize ? "" : styles.error}>
                  Обложка должна быть не больше 2 MB
                </span>
              </label>
            </>
          )}

          {/* <label className={styles.imageLabel} htmlFor="picture">
            <span>Загрузите изображение для статьи</span>
            <span>Обложка должна быть не больше 2 MB</span>
          </label> */}

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
