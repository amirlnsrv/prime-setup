"use client";
import styles from "./Modal.module.scss";
import btnsclass from "../../add-article/AddArticle.module.scss";
interface ModalProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  closeModal: () => void;
}
export default function Modal({
  title,
  description,
  children,
  closeModal,
}: ModalProps) {
  return (
    <div onClick={closeModal} className={styles.modal}>
      <div onClick={(e) => e.stopPropagation()} className={styles.modalContent}>
        <h3 className={styles.modalTitle}>{title}</h3>
        <p className={styles.modalDescription}>{description}</p>
        <div className={btnsclass.buttons}>{children}</div>
      </div>
    </div>
  );
}
