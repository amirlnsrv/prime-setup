"use client";
import styles from "./Contact.module.scss";

export function Contact() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.title}>Start your journey to the UAE today</h2>
          <p className={styles.description}>
            We are here to answer your questions and help with starting a
            business in the UAE.
          </p>

          <div className={styles.infoBlock}>
            <p className={styles.hoursTitle}>Working hours</p>
            <p>Monday to Friday: 8:30 AM – 5:30 PM</p>
            <p>Saturday: 10:00 AM – 2:00 PM</p>
          </div>

          <div className={styles.contactLinks}>
            <div className={styles.tel}>
              <img src="/assets/icons/Component.svg" alt="logo" />
              <p>
                <a href="mailto:info.xyz@gmail.com">info.xyz@gmail.com</a>
              </p>
            </div>
            <div className={styles.email}>
              <img src="/assets/icons/Group.svg" alt="tel" />
              <p>
                <a href="tel:+996476924">+996 476-924</a>
              </p>
            </div>
          </div>
        </div>

        <form className={styles.form}>
          <div className={styles.row}>
            <br />
            <label className={styles.inp}>
              First Name
              <input
                type="text"
                placeholder="Enter full name"
                className={styles.input}
                name="firstName"
              />
            </label>
            <label className={styles.inp}>
              Last Name
              <input
                type="text"
                placeholder="Enter full surname"
                className={styles.input}
                name="lastName"
              />
            </label>
          </div>
          <label className={styles.inp}>
            Email Address
            <input
              type="email"
              placeholder="Enter email address"
              className={styles.inputFull}
              name="email"
            />
          </label>
          <label className={styles.inp}>
            Phone Number
            <input
              type="tel"
              placeholder="Enter phone number"
              className={styles.inputFull}
              name="phone"
            />
          </label>
          <label className={styles.inp}>
            How can we help?
            <textarea
              placeholder="Enter your message"
              className={styles.textarea}
              name="message"
            ></textarea>
          </label>
          <button type="submit" className={styles.submit}>
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
