import { Contact } from "@/components/Contact";
import Image from "next/image";
import img1 from "#/images/fonIconsContacts.svg";
import style from "./Contacts.page.module.scss";
import { ContainerHero } from "@/components/ContainerHero";
import { ContactTime } from "@/components/ContactTime/ContactTime";

export default function Contacts() {
  return (
    <section>
<ContainerHero/>

<ContactTime/>
      <div className={style.container}>
        <div className={style.contactWrapper}>
          <Image src={img1} alt="iconFon" className={style.imageContact} />
          <div className={style.contactContent}>
            <Contact />
          </div>
        </div>
      </div>
    </section>
  );
}
