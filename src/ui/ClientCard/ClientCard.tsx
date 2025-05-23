import styles from "./ClientCard.module.scss";

export const ClientCard = () => {
  return (
    <div className={styles.client__card}>
      <div className={styles.client__card__image}>
        <div className={styles.image}></div>
        <h2>page k.</h2>
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry`s standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem
      </p>
      <div className={styles.stars}>
        <img className={styles.star} src="assets/icons/star.svg" alt="star" />
        <img className={styles.star} src="assets/icons/star.svg" alt="star" />
        <img className={styles.star} src="assets/icons/star.svg" alt="star" />
        <img className={styles.star} src="assets/icons/star.svg" alt="star" />
        <img className={styles.star} src="assets/icons/star.svg" alt="star" />
      </div>
    </div>
  );
};
