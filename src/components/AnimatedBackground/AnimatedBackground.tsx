import stylle from "./AnimatedBackground.module.scss";

export function AnimatedBackground({ rotateAngle }: { rotateAngle: number }) {
  return (
    <section className={stylle.sectionContainer}>
      <div className={stylle.container}>
        <div className={stylle.svgContainer}>
        <div className={stylle.svg1} style={{ transform: `rotate(${rotateAngle}deg)` }} >
          {/* <svg
            width="253"
            height="93"
            viewBox="0 0 272 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="-1.09484"
              y="41.0248"
              width="246"
              height="246"
              rx="46.5"
              transform="rotate(-82.9115 -1.09484 41.0248)"
              stroke="white"
              strokeWidth="7"
            />
          </svg> */}


        </div>
        </div>
     
     <div className={stylle.svgContainer2}>
     <div className={stylle.svg2} style={{ transform: `rotate(${rotateAngle}deg)` }}>
          {/* <svg
            width="148"
            height="192"
            viewBox="0 0 148 192"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="-11.3774"
              y="102.265"
              width="246"
              height="246"
              rx="46.5"
              transform="rotate(-65.9486 -11.3774 102.265)"
              stroke="white"
              strokeWidth="7"
            />
          </svg> */}
        </div>
     </div>

       

        <div className={stylle.svg3} style={{ transform: `rotate(${rotateAngle}deg)` }}>
          {/* <svg
            width="370"
            height="97"
            viewBox="0 0 370 97"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="73.7094"
              y="343.26"
              width="263.325"
              height="326.364"
              rx="59.5"
              transform="rotate(-108.893 73.7094 343.26)"
              stroke="white"
              strokeWidth="7"
            />
          </svg> */}
        </div>
      </div>
    </section>
  );
}
