import stylle from "./AnimatedBackground.module.scss";

export function AnimatedBackground({ rotateAngle }: { rotateAngle: number }) {
  return (
    <section className={stylle.sectionContainer}>
      <div
        className={stylle.svg1}
        style={{ transform: `rotate(${rotateAngle}deg)` }}
      ></div>

      <div
        className={stylle.svg2}
        style={{ transform: `rotate(${rotateAngle}deg)` }}
      ></div>

      <div
        className={stylle.svg3}
        style={{ transform: `rotate(${rotateAngle}deg)` }}
      ></div>
      <div className={stylle.container}></div>
    </section>
  );
}
