"use client";
import styles from "./Contact.module.scss";

export function Contact() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rightLine}></div>
      <div className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h2 className={styles.title}>
              Начните свой путь в ОАЭ уже сегодня
            </h2>
            <p className={styles.description}>
              Мы готовы ответить на ваши вопросы и помочь c открытием бизнеса в
              ОАЭ.
            </p>

            <div className={styles.infoBlock}>
              <h3 className={styles.hoursTitle}>Рабочие часы</h3>
              <p>C понедельника по пятницу c 8:30 до 17:30</p>
              <p>Суббота 10:00 - 14:00</p>
            </div>

            <div className={styles.contactLinks}>
              <div className={styles.tel}>
                <img src="/assets/icons/Component.svg" alt="logo" />
                <p>
                  <a href="#">info.xyz@gmail.com</a>
                </p>
              </div>
              <div className={styles.email}>
                <img src="/assets/icons/Group.svg" alt="tel" />
                <p>
                  <a href="#">+996 476-924</a>
                </p>
              </div>
            </div>
          </div>

          <form className={styles.form}>
            <div className={styles.row}>
              <br />
              <label className={styles.inp}>
                Имя
                <input
                  type="text"
                  placeholder="Введите полное имя"
                  className={styles.input}
                  name="firstName"
                />
              </label>
              <label className={styles.inp}>
                Фамилия
                <input
                  type="text"
                  placeholder="Введите полную фамилию"
                  className={styles.input}
                  name="lastName"
                />
              </label>
            </div>
            <label className={styles.inp}>
              Адрес электронной почты
              <input
                type="email"
                placeholder="Введите адресс электронной почты"
                className={styles.inputFull}
                name="email"
              />
            </label>
            <label className={styles.inp}>
              Номер телефона
              <input
                type="tel"
                placeholder="Введите номер телефона"
                className={styles.inputFull}
                name="phone"
              />
            </label>
            <label className={styles.inp}>
              Чем мы можем помочь?
              <textarea
                placeholder="Введите ваше сообщение"
                className={styles.textarea}
                name="message"
              ></textarea>
            </label>
            <button type="submit" className={styles.submit}>
              Send
            </button>
          </form>
        </div>
      </div>
      <div className={styles.leftLine}></div>
    </div>
  );
}
