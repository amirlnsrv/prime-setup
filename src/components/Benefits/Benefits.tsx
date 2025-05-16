import Image from 'next/image';
import stylly from './Benefits.module.scss';
import { mockdataIcon } from '@/mockData/mockData';
export function Benefits() {
  return (
    <section className={stylly.sectionContainer}>
      <div className={stylly.backgroundImage}>
        <Image
          src='/assets/img/FonImg.png'
          alt="background"
          fill
          className={stylly.backgroundImage}
          priority
        />
      </div>

      <div className={stylly.containerBenefits}>
        {mockdataIcon.map((item) => (
          <div key={item.id} className={stylly.cardContainer}>
            <img src={item.icon} alt="icon" className={stylly.img} />
            <img src={item.icon2} alt="icon" className={stylly.img2} />
            <h3 className={stylly.title}>{item.title}</h3>
            <p className={stylly.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
