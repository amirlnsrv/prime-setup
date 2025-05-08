import { icon } from "@/mockdata/mockdata";
import stylle from "./Services.module.scss";

export function Services() {
  return (
    <section className={stylle.sectionContainer}>
      <div className={stylle.serversContainer}>
        <h2 className={stylle.serverH2}>
          Services that cover everything from incorporation to operating
          businesses
        </h2>
        <p className={stylle.serverP}>
          You can choose an individual service or entrust us with a turnkey
          solution. We adapt to your goals and budget.
        </p>
      </div>
      <div className={stylle.sectionContainerIcon}>
      {icon.map((item) => (
  <div key={item.id} className={stylle.card}>
    <div className={stylle.cardFront}>
      <img src={item.icon.src} alt={item.title} className={stylle.icon} />
      <h5 className={stylle.title}>{item.title}</h5>
    </div>

    <div className={stylle.cardBack}>
        <div  className={stylle.iconWrap}>
        <img src={item.icon.src} alt={item.title} className={stylle.icon2} />

        </div>
      <h4 className={stylle.subTitle}>{item.description}</h4>
      <button className={stylle.cardBtn}>Learn More</button>
    </div>
  </div>
))}

        <button className={stylle.checkBtn}>Check out our services</button>
      </div>
    </section>
  );
}
