import Image from "next/image";
import img from '#/images/contacts.png';
import style from './ContainerHero.module.scss';

export function ContainerHero() {
  return (
    <section className={style.heroSection}>
      <Image
        src={img}
        alt="img"
        fill
        className={style.bgImage}
        priority
      />
      <div className={style.titleContainer}>
        <h1 className={style.title}>Готовы помочь вам начать бизнес в ОАЭ — просто напишите нам.</h1>
        <div>
        <p className={style.title2}>Мы всегда на связи и рады ответить на любые вопросы.</p>
        </div>
      </div>
    </section>
  );
}
