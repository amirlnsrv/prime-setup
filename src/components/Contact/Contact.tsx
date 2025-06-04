"use client";
import { ExtraButton } from "@/ui/ExtraButton";
import styles from "./Contact.module.scss";
import Image from "next/image";
import phone from "#/icons/Component.svg"
import mail from "#/icons/Group.svg"

export function Contact({
  title = "Свяжитесь с нами",
  description = "Мы готовы ответить на ваши вопросы.",
  workingHours = {
    title: "Рабочие часы",
    schedule: ["С понедельника по пятницу: 8:30–17:30", "Суббота: 10:00–14:00"],
  },
  contacts = {
    email: { href: "mailto:info.xyz@gmail.com", text: "info.xyz@gmail.com" },
    phone: { href: "tel:+996476924", text: "+996 476-924" },
  },
  formFields = {
    firstName: true,
    lastName: true,
    email: true,
    phone: true,
    message: true,
  },
  buttonText = "Отправить",
  className = "wrapper",
}) {
  return (
    <div className={styles[className] || styles.wrapper}>
      <div className={styles.rightLine}></div>
      <div className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>

            {workingHours && (
              <div className={styles.infoBlock}>
                <h3 className={styles.hoursTitle}>{workingHours.title}</h3>
                {workingHours.schedule.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            )}

            <div className={styles.contactLinks}>
              {contacts.email && (
                <div className={styles.tel}>
                  <Image
                    src={phone}
                    alt="Иконка email"
                    width={30}
                    height={30}
                  />
                  <p>
                    <a href={contacts.email.href}>{contacts.email.text}</a>
                  </p>
                </div>
              )}
              {contacts.phone && (
                <div className={styles.email}>
                  <Image
                    src={mail}
                    alt="Иконка телефона"
                    width={30}
                    height={30}
                  />
                  <p>
                    <a href={contacts.phone.href}>{contacts.phone.text}</a>
                  </p>
                </div>
              )}
            </div>
          </div>

          <form className={styles.form}>
            <div className={styles.row}>
              {formFields.firstName && (
                <label className={styles.inp}>
                  Имя
                  <input
                    type="text"
                    placeholder="Введите полное имя"
                    className={styles.input}
                    name="firstName"
                  />
                </label>
              )}
              {formFields.lastName && (
                <label className={styles.inp}>
                  Фамилия
                  <input
                    type="text"
                    placeholder="Введите полную фамилию"
                    className={styles.input}
                    name="lastName"
                  />
                </label>
              )}
            </div>
            {formFields.email && (
              <label className={styles.inp}>
                Адрес электронной почты
                <input
                  type="email"
                  placeholder="Введите адрес электронной почты"
                  className={styles.inputFull}
                  name="email"
                />
              </label>
            )}
            {formFields.phone && (
              <label className={styles.inp}>
                Номер телефона
                <input
                  type="tel"
                  placeholder="Введите номер телефона"
                  className={styles.inputFull}
                  name="phone"
                />
              </label>
            )}
            {formFields.message && (
              <label className={styles.inp}>
                Чем мы можем помочь?
                <textarea
                  placeholder="Введите ваше сообщение"
                  className={styles.textarea}
                  name="message"
                ></textarea>
              </label>
            )}

            <ExtraButton className={styles.submit} value={buttonText} />
          </form>
        </div>
      </div>
      <div className={styles.leftLine}></div>
    </div>
  );
}
