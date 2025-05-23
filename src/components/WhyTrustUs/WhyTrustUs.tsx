// import React from "react";
// import styles from "./TrustBlock.module.scss";

// export const TrustBlock: React.FC = () => {
//   return (
//     <div className={styles.trustBlock}>
//       <h2 className={styles.title}>Почему нам доверяют сотни предприятий</h2>
//       <div className={styles.items}>
//         <div className={styles.item}>
//           <p className={styles.itemText}>
//             500+ опытных консультантов с сотнями сложных проектов
//           </p>
//         </div>
//         <div className={styles.item}>
//           <p className={styles.itemText}>
//             Опыт работы с крупнейшими клиентами из ведущих отраслей
//           </p>
//         </div>
//         <div className={styles.item}>
//           <p className={styles.itemText}>
//             Консультации под ключ с нуля и до запуска
//           </p>
//         </div>
//         <div className={styles.item}>
//           <p className={styles.itemText}>
//             Персональный менеджер — всегда на связи
//           </p>
//         </div>
//         <div className={styles.item}>
//           <p className={styles.itemText}>
//             Бесплатная техническая поддержка в течение года
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

/* File: components/WhyTrustUs.tsx */

import styles from "./WhyTrustUs.module.scss";

export function WhyTrustUs() {
  const items = [
    "500+ открытых компаний — в разных секторах и зонах",
    "Опыт работы с иностранными клиентами — говорим на вашем языке",
    "Комплексный подход — от регистрации до бухгалтерии и виз",
    "Персональный менеджер — всегда на связи и готов помочь",
    "Без скрытых платежей — только честные условия",
  ];

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          Почему нам доверяют сотни
          <br />
          предпринимателей
        </h2>
        <div className={styles.grid}>
          {items.map((text, idx) => (
            <div key={idx} className={styles.card}>
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
