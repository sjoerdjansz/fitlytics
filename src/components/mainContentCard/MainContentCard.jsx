import styles from "./MainContentCard.module.css";

export function MainContentCard({ title, flexDirection, children }) {
  return (
    <div className={styles["main-content-card"]}>
      <section>
        <h1 className={styles.title}>{title}</h1>
        <hr />
      </section>
      <section
        className={`${styles["page-content-container"]} ${styles[flexDirection]}`}
      ></section>
      {children}
    </div>
  );
}
