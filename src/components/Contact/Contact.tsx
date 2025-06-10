"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useTranslations } from "next-intl";  // для перевода
import { ExtraButton } from "@/ui/ExtraButton";
import styles from "./Contact.module.scss";
import Image from "next/image";
import phone from "#/icons/Component.svg";
import mail from "#/icons/Group.svg";

type IconItem = {
  src: string;
  href: string;
  alt?: string;
};

type ContactProps = {
  title: string;
  description: string;
  icons?: IconItem[];
  className?: string;
};

export function Contact({ title, description, icons, className }: ContactProps) {
  const t = useTranslations("contact");

  const contacts = {
    email: { href: "mailto:info.xyz@gmail.com", text: "info.xyz@gmail.com" },
    phone: { href: "tel:+996476924", text: "+996 476-924" },
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // обработка изменений в форме
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // отправка формы
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Отправляемые данные:", formData);

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
      const data = await response.json();
      console.log("Успешно отправлено:", data);
    } catch (error) {
      console.error("Ошибка при отправке:", error);
    }
  };

  return (
    <div className={`${styles.wrapper} ${className || ""}`}>
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
                    src={mail}
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
                    src={phone}
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
                  <a
                    key={index}
                    href={icon.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.iconLink}
                  >
                    <Image
                      src={icon.src}
                      alt={icon.alt || `icon-${index}`}
                      width={30}
                      height={30}
                    />
                  </a>
                ))}
              </div>
            )}
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <label className={styles.inp}>
                {t("form.firstName")}
                <input
                  type="text"
                  name="firstName"
                  placeholder={t("form.placeholders.firstName")}
                  className={styles.input}
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </label>

              <label className={styles.inp}>
                {t("form.lastName")}
                <input
                  type="text"
                  name="lastName"
                  placeholder={t("form.placeholders.lastName")}
                  className={styles.input}
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </label>
            </div>

            <label className={styles.inp}>
              {t("form.email")}
              <input
                type="email"
                name="email"
                placeholder={t("form.placeholders.email")}
                className={styles.inputFull}
                value={formData.email}
                onChange={handleChange}
              />
            </label>

            <label className={styles.inp}>
              {t("form.phone")}
              <input
                type="tel"
                name="phone"
                placeholder={t("form.placeholders.phone")}
                className={styles.inputFull}
                value={formData.phone}
                onChange={handleChange}
              />
            </label>

            <label className={styles.inp}>
              {t("form.message")}
              <textarea
                name="message"
                placeholder={t("form.placeholders.message")}
                className={styles.textarea}
                value={formData.message}
                onChange={handleChange}
              />
            </label>

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
