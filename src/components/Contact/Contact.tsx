"use client";
import { useTranslations } from "next-intl";
import { ExtraButton } from "@/ui/ExtraButton";
import styles from "./Contact.module.scss";
import Image from "next/image";

type ContactProps = {
  title: string;
  description: string;
  icons?: string[];
};

export function Contact({ title, description, icons }: ContactProps) {
  const t = useTranslations("contact");

  const contacts = {
    email: { href: "mailto:info.xyz@gmail.com", text: "info.xyz@gmail.com" },
    phone: { href: "tel:+996476924", text: "+996 476-924" },
  };

  const formFields = {
    firstName: true,
    lastName: true,
    email: true,
    phone: true,
    message: true,
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.rightLine}></div>
      <div className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>

            <div className={styles.infoBlock}>
              <h3 className={styles.hoursTitle}>{t("workingHours.title")}</h3>
              <p>{t("workingHours.scheduleWeekdays")}</p>
              <p>{t("workingHours.scheduleWeekenddays")}</p>
            </div>

            <div className={styles.contactLinks}>
              {contacts.email && (
                <div className={styles.tel}>
                  <Image
                    src="/assets/icons/Component.svg"
                    alt={t("contacts.emailAlt")}
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
                    src="/assets/icons/Group.svg"
                    alt={t("contacts.phoneAlt")}
                    width={30}
                    height={30}
                  />
                  <p>
                    <a href={contacts.phone.href}>{contacts.phone.text}</a>
                  </p>
                </div>
              )}
            </div>

            {icons && (
              <div className={styles.iconsBlock}>
                {icons.map((icon, index) => (
                  <Image
                    key={index}
                    src={icon}
                    alt={`icon-${index}`}
                    width={30}
                    height={30}
                  />
                ))}
              </div>
            )}
          </div>

          <form className={styles.form}>
            <div className={styles.row}>
              {formFields.firstName && (
                <label className={styles.inp}>
                  {t("form.firstName")}
                  <input
                    type="text"
                    placeholder={t("form.placeholders.firstName")}
                    className={styles.input}
                    name="firstName"
                  />
                </label>
              )}
              {formFields.lastName && (
                <label className={styles.inp}>
                  {t("form.lastName")}
                  <input
                    type="text"
                    placeholder={t("form.placeholders.lastName")}
                    className={styles.input}
                    name="lastName"
                  />
                </label>
              )}
            </div>
            {formFields.email && (
              <label className={styles.inp}>
                {t("form.email")}
                <input
                  type="email"
                  placeholder={t("form.placeholders.email")}
                  className={styles.inputFull}
                  name="email"
                />
              </label>
            )}
            {formFields.phone && (
              <label className={styles.inp}>
                {t("form.phone")}
                <input
                  type="tel"
                  placeholder={t("form.placeholders.phone")}
                  className={styles.inputFull}
                  name="phone"
                />
              </label>
            )}
            {formFields.message && (
              <label className={styles.inp}>
                {t("form.message")}
                <textarea
                  placeholder={t("form.placeholders.message")}
                  className={styles.textarea}
                  name="message"
                ></textarea>
              </label>
            )}

            <ExtraButton
              className={styles.submit}
              value={t("form.buttonText")}
            />
          </form>
        </div>
      </div>
      <div className={styles.leftLine}></div>
    </div>
  );
}
