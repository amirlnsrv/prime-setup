import Styles from "./WeAreTeam.module.scss";

export const WeAreTeam = () => {
  return (
    <section>
      <div className={Styles.container}>
        <h2 className={Styles.title}>Кто стоит за PRIME SETUP?</h2>
        <p className={Styles.description}>
          Мы — команда экспертов в области бизнес-консалтинга, юридического
          сопровождения и финансовых услуг. У нас за плечами более 10 лет опыта,
          сотни успешных кейсов и глубокое знание особенностей ведения бизнеса в
          ОАЭ.
        </p>
      </div>
    </section>
  );
};
