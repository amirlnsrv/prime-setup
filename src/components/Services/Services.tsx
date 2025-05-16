// import { icon } from "@/mockData/tempfile";
import { mockdataSectiom } from "@/mockData/mockData";
import stylle from "./Services.module.scss";
import { PrimaryButton } from "@/ui/PrimaryButton";

export function Services() {
  return (
    <section className={stylle.sectionContainer}>
      <div className={stylle.serversContainer}>
        <h2 className={stylle.serverH2}>
          Услуги, которые покрывают всё — от регистрации до операционного
          бизнеса
        </h2>
        <p className={stylle.serverP}>
          Вы можете выбрать отдельную услугу или доверить нам всё под ключ. Мы
          адаптируемся под ваши цели и бюджет.
        </p>
      </div>
      <div className={stylle.sectionContainerIcon}>
        {mockdataSectiom.map((item) => (
          <div key={item.id} className={stylle.card}>
            <div className={stylle.cardInner}>
              <div className={stylle.cardFront}>
                <img
                  src={item.img}
                  alt={item.title}
                  className={stylle.icon}
                  width={48}
                  height={48}
                />
                <h5 className={stylle.title}>{item.title}</h5>
              </div>

              <div className={stylle.cardBack}>
                <div className={stylle.iconWrap}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className={stylle.icon}
                    width={48}
                    height={48}
                  />
                </div>
                <h4 className={stylle.subTitle}>{item.description}</h4>
                <button className={stylle.cardBtn}>Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={stylle.primaryContainer}>
        <PrimaryButton
          className={stylle.primaryBtn}
          value="Ознакомьтесь с нашими услугами"
        ></PrimaryButton>
      </div>

      <button className={stylle.btn}>Ознакомьтесь с нашими услугами</button>
    </section>
  );
}
