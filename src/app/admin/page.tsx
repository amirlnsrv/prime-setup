"use client";
import { useState } from "react";
import styles from "./AdminPage.module.scss";
import AdminActions from "./components/AdminActions";
import UsefulCard from "@/ui/UsefulCard/UsefulCard";
import Modal from "./components/Modal/Modal";
import Button from "@/ui/Button";
export default function AdminPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className={styles.adminPage}>
      <AdminActions />
      <div className={styles.cardsContainer}>
        <UsefulCard
          onClick={() => setIsModalOpen(true)}
          titleTxt="Как открыть компанию в Дубае: Пошаговая инструкция"
          subtitleTxt="Открытие бизнеса в Дубае — это просто. Рассказываем, с чего начать, какие документы нужны и сколько времени занимает процесс регистрации."
          buttonTxt="Читать далее"
        />
        <UsefulCard
          onClick={() => setIsModalOpen(true)}
          titleTxt="Как открыть компанию в Дубае: Пошаговая инструкция"
          subtitleTxt="Открытие бизнеса в Дубае — это просто. Рассказываем, с чего начать, какие документы нужны и сколько времени занимает процесс регистрации."
          buttonTxt="Читать далее"
        />
        <UsefulCard
          onClick={() => setIsModalOpen(true)}
          titleTxt="Как открыть компанию в Дубае: Пошаговая инструкция"
          subtitleTxt="Открытие бизнеса в Дубае — это просто. Рассказываем, с чего начать, какие документы нужны и сколько времени занимает процесс регистрации."
          buttonTxt="Читать далее"
        />
        <UsefulCard
          onClick={() => setIsModalOpen(true)}
          titleTxt="Как открыть компанию в Дубае: Пошаговая инструкция"
          subtitleTxt="Открытие бизнеса в Дубае — это просто. Рассказываем, с чего начать, какие документы нужны и сколько времени занимает процесс регистрации."
          buttonTxt="Читать далее"
        />
        <UsefulCard
          onClick={() => setIsModalOpen(true)}
          titleTxt="Как открыть компанию в Дубае: Пошаговая инструкция"
          subtitleTxt="Открытие бизнеса в Дубае — это просто. Рассказываем, с чего начать, какие документы нужны и сколько времени занимает процесс регистрации."
          buttonTxt="Читать далее"
        />
        <UsefulCard
          onClick={() => setIsModalOpen(true)}
          titleTxt="Как открыть компанию в Дубае: Пошаговая инструкция"
          subtitleTxt="Открытие бизнеса в Дубае — это просто. Рассказываем, с чего начать, какие документы нужны и сколько времени занимает процесс регистрации."
          buttonTxt="Читать далее"
        />
      </div>
      {isModalOpen && (
        <Modal
          title="Удалить статью?"
          description="Вы уверены, что хотите удалить
этот блог? Это действие нельзя будет отменить."
          closeModal={() => setIsModalOpen(false)}
        >
          <Button handleClick={() => setIsModalOpen(false)} value="Отмена" />
          <Button handleClick={() => setIsModalOpen(false)} value="Удалить" />
        </Modal>
      )}
    </div>
  );
}
