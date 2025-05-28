// // import Image from "next/image";
// // import Styles from "./OurMission.module.scss";
// // import OurMissionBg from "#/images/OurMissionBg.jpg";
// // import Overlay from "#/images/OverlayImg.svg";

// // export const OurMission = () => {
// //   return (
// //     <section>
// //       <div className={Styles.container}>
// //         <h1 className={Styles.head}>Что нами движет?</h1>
// //         <Image
// //           src={OurMissionBg}
// //           alt="Our mission"
// //           width={1315}
// //           height={716}
// //           // fill
// //           className={Styles.background}
// //           // priority
// //         />
// //         <div className={Styles.wrapper}>
// //           <Image
// //             src={Overlay}
// //             alt="Overlay"
// //             width={500}
// //             height={500}
// //             className={Styles.overlay}
// //           />
// //           <div className={Styles.text}>
// //             <h2 className={Styles.title}>Наша миссия:</h2>
// //             <p className={Styles.description}>
// //               Помогать предпринимателям запускать и развивать бизнес в ОАЭ,
// //               создавая для них простую и безопасную среду для старта.
// //             </p>
// //             <h2 className={Styles.title}>Наша миссия:</h2>
// //             <p className={Styles.description}>
// //               Честность и прозрачность — вы всегда знаете, за что платите.
// //               Ответственность — мы сопровождаем на каждом этапе, от идеи до
// //               первых клиентов. Скорость и эффективность — работаем оперативно,
// //               соблюдая сроки и законодательство.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// import Image from "next/image";
// import Styles from "./OurMission.module.scss";
// import OurMissionBg from "#/images/OurMissionBg.jpg";
// import Overlay from "#/images/OverlayImg.svg";

// export const OurMission = () => {
//   return (
//     <section className={Styles.section}>
//       <div className={Styles.wrapper}>
//         <Image
//           src={OurMissionBg}
//           alt="Our mission background"
//           fill
//           className={Styles.background}
//           priority
//         />

//         <div className={Styles.overlayContainer}>
//           <Image
//             src={Overlay}
//             alt="Overlay"
//             width={400}
//             height={400}
//             className={Styles.overlay}
//           />
//         </div>

//         <div className={Styles.text}>
//           <h2 className={Styles.title}>Наша миссия:</h2>
//           <p className={Styles.description}>
//             Помогать предпринимателям запускать и развивать бизнес в ОАЭ,
//             создавая для них простую и безопасную среду для старта.
//           </p>
//           <h2 className={Styles.title}>Наши ценности:</h2>
//           <p className={Styles.description}>
//             Честность и прозрачность — вы всегда знаете, за что платите.
//             Ответственность — мы сопровождаем на каждом этапе, от идеи до первых
//             клиентов. Скорость и эффективность — работаем оперативно, соблюдая
//             сроки и законодательство.
//           </p>
//         </div>
//       </div>
//       <h1 className={Styles.head}>Что нами движет?</h1>
//     </section>
//   );
// };

import Image from "next/image";
import Styles from "./OurMission.module.scss";
import OurMissionBg from "#/images/OurMissionBg.jpg";
import Overlay from "#/images/OverlayImg.svg";

export const OurMission = () => {
  return (
    <section className={Styles.section}>
      <h1 className={Styles.head}>Что нами движет?</h1>

      <div className={Styles.wrapper}>
        <Image
          src={OurMissionBg}
          alt="Our mission background"
          fill
          className={Styles.background}
          priority
        />

        <div className={Styles.content}>
          <div className={Styles.text}>
            <h2 className={Styles.title}>Наша миссия:</h2>
            <p className={Styles.description}>
              Помогать предпринимателям запускать и развивать бизнес в ОАЭ,
              создавая для них простую и безопасную среду для старта.
            </p>
            <h2 className={Styles.title}>Наши ценности:</h2>
            <p className={Styles.description}>
              Честность и прозрачность — вы всегда знаете, за что платите.
              Ответственность — мы сопровождаем на каждом этапе, от идеи до
              первых клиентов. Скорость и эффективность — работаем оперативно,
              соблюдая сроки и законодательство.
            </p>
          </div>
          <div className={Styles.overlayContainer}>
            <Image
              src={Overlay}
              alt="Overlay"
              width={400}
              height={400}
              className={Styles.overlay}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
