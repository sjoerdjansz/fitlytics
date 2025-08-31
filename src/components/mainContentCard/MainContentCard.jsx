import styles from "./MainContentCard.module.css";

export function MainContentCard({
  title,
  children,
  actions,
  flexDirection = "column",
}) {
  return (
    <section className={styles["main-content-card"]}>
      <header className={styles["header"]}>
        <h1 className={styles.title}>{title}</h1>
        {actions && <div className={styles["actions"]}>{actions}</div>}
      </header>
      <main className={`${styles["main"]} ${styles[flexDirection]}`}>
        {children}
      </main>
    </section>
  );
}
