import style from "./Contact.module.scss";
import facebook from "#/icon/Facebook-Icon.svg";
import twiter from "#/icon/Twiter.svg";
import instagram from "#/icon/Instagram-Icon.svg";
import link from "#/icon/LinkedIn-Icon.svg";
import youtube from "#/icon/Youtube-Icon (1).svg";
import email from "#/icon/email.svg";
import tell from "#/icon/tell.svg";

import Image from "next/image";

export function ContactTime() {
  return (
    <section >
      <div className={style.h3Container}>
        <h3 className={style.h3we}>Мы всегда на связи и рады ответить на любые вопросы.</h3>
      </div>
      <div className={style.sectionContainer}>
        <div className={style.container}>
          <h2 className={style.title}>Давайте начнем</h2>
          <p className={style.title2}>Мы с радостью проконсультируем вас лично.</p>
        </div>

        <div className={style.container}>
          <h2 className={style.title}>Рабочие часы</h2>
          <div>
          <p className={style.title2}>С понедельника по пятницу </p>
          <p className={style.title2}>с 8:30 до 17:30,</p>
          <p className={style.title2}> Суббота </p>
          <p className={style.title2}>10:00–14:00</p>
          </div>
        
        </div>

        <div className={style.container}>
          <h2 className={style.title}>Адрес офиса:</h2>
         <div> <p className={style.title2}>Prime Setup Business </p>
         <p className={style.title2}>Sheikh Zayed Road, Dubai, UAE</p></div>
        </div>

        <div className={style.containerEmail}>
          <div><Image src={email} alt="email" width={24} height={19} />
          <a className={style.aEmail} href="#">info.xyz@gmail.com</a></div>
          

          <div>  <Image src={tell} alt="tell" width={24} height={24} />
          <a  className={style.aEmail}  href="#">+996 476-924</a></div>
        </div>

          
        

        <div className={style.containerIcon}>
          <a href=""> <Image src={facebook} alt="facebook" width={32} height={32} /></a>
         <a href=""><Image src={twiter} alt="twitter" width={32} height={32} /></a>
         <a href=""><Image src={instagram} alt="instagram" width={32} height={32} /></a>
         <a href=""><Image src={link} alt="linkedin" width={32} height={32} /></a>
         <a href=""><Image src={youtube} alt="youtube" width={32} height={32} /></a>
         
         
         
         
        </div>
      </div>
    </section>
  );
}