import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import Image from "next/image";
import img1 from "#/images/fonIconsContacts.svg";
import style from "./Contacts.page.module.scss";

export default function Contacts() {
  return (
    <section>
      <Hero
        imgUrl="/assets/images/contacts.png"
        title="Готовы помочь вам начать бизнес в ОАЭ — просто напишите нам."
        subtitle="Мы всегда на связи и рады ответить на любые вопросы."
        inlineStyles={{
          inner: {
            position: "relative",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            zIndex: 1,
          },
          content: {
            position: "absolute",
            bottom: "173px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "1059px",
            height: "190px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 2,
          },
        }}
        disableBtn
      />
      <div className={style.contactWrapper}>
        <Image
          src={img1}
          alt="iconFon"
          className={style.imageContact}
          fill
          priority
        />
        <div className={style.contactContent}>
          <Contact />
        </div>
      </div>
    </section>
  );
}
