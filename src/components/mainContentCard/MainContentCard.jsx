import styles from "./MainContentCard.module.css";

export function MainContentCard({ title, children, actions, flexDirection }) {
  return (
    <section className={styles["main-content-card"]}>
      <header className={styles["header"]}>
        <h1 className={styles.title}>{title}</h1>
        {actions && <div className={styles["actions"]}>{actions}</div>}
      </header>
      <div className={`${styles["main"]} ${flexDirection}`}>{children}</div>
    </section>
  );
}
