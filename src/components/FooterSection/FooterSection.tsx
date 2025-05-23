import Image from "next/image";
import styles from "./FooterSection.module.scss";
// import { BusinessSetup } from "../BusinessSetup";
export function FooterSection() {
  return (
    <div className={styles.container}>
      {/* <BusinessSetup /> */}
      <footer className={styles.footer}>
        <div className={styles.top}></div>
        <div className={styles.up}>
          <div className={styles.logo}>
            <Image
              src="/assets/icons/logo.svg"
              alt="logo"
              width={100}
              height={100}
            />
            <p className={styles.prime}>PRIME SETUP </p>
            <p className={styles.title}>BUSINESS BEGINS HERE</p>
            <p className={styles.txt}>
              Comprehensive solutions for business registration and support in
              the UAE.
            </p>
            <div className={styles.appIcons}>
              <Image
                src="/assets/icons/Facebook-Icon.svg"
                alt="Мое изображение"
                width={30}
                height={30}
              />

              <Image
                src="/assets/icons/Twitter-Icon.svg"
                alt="Мое изображение"
                width={30}
                height={30}
              />

              <Image
                src="/assets/icons/Instagram-Icon.svg"
                alt="Мое изображение"
                width={30}
                height={30}
              />

              <Image
                src="/assets/icons/Linkedin-Icon.svg"
                alt="Мое изображение"
                width={30}
                height={30}
              />

              <Image
                src="/assets/icons/Youtube-Icon.svg"
                alt="Мое изображение"
                width={30}
                height={30}
              />
            </div>
          </div>
          <div className={styles.footerNav}>
            <p className={styles.title}>Разделы</p>
            <p>О нас</p>
            <p>Услуги</p>
            <p>Блог</p>
            <p>FAQ</p>
            <p>Контакты</p>
          </div>
          <div className={styles.workTime}>
            <p className={styles.title}>Рабочие часы</p>
            <p>С понедельника по пятницу с </p>
            <p>8:30 до 17:30</p>
            <p>Суббота</p>
            <p>10:00-14:00</p>
          </div>
          <div className={styles.contactUs}>
            <p className={styles.title}>Свяжитесь с нами </p>
            <div className={styles.contacts}>
              <Image
                src="/assets/icons/email.svg"
                alt="Мое изображение"
                width={15}
                height={15}
              />
              <a>info.xyz@gmail.com</a>
            </div>
            <br />
            <div className={styles.contacts}>
              <Image
                src="/assets/icons/tel.svg"
                alt="Мое изображение"
                width={15}
                height={15}
              />
              <a>+996 476-924</a>
            </div>
          </div>
        </div>

        <hr />
        <div className={styles.appIconsDown}>
          <Image
            src="/assets/icons/Facebook-Icon.svg"
            alt="Мое изображение"
            width={30}
            height={30}
          />

          <Image
            src="/assets/icons/Twitter-Icon.svg"
            alt="Мое изображение"
            width={30}
            height={30}
          />

          <Image
            src="/assets/icons/Instagram-Icon.svg"
            alt="Мое изображение"
            width={30}
            height={30}
          />

          <Image
            src="/assets/icons/Linkedin-Icon.svg"
            alt="Мое изображение"
            width={30}
            height={30}
          />

          <Image
            src="/assets/icons/Youtube-Icon.svg"
            alt="Мое изображение"
            width={30}
            height={30}
          />
        </div>
      </footer>
      <div className="line"></div>
    </div>
  );
}
