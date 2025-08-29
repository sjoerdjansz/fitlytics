import styles from "./MainContentCard.module.css";

export function MainContentCard({ title, flexDirection, children, actions }) {
  return (
    <section className={styles["main-content-card"]}>
      <header className={styles["header"]}>
        <h1 className={styles.title}>{title}</h1>
        {actions && <div className={styles["actions"]}>{actions}</div>}
      </header>
      <section
        className={`${styles["page-content-container"]} ${styles[flexDirection]}`}
      ></section>
      {children}
    </section>
  );
}
