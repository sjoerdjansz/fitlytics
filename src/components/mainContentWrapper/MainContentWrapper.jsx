import styles from "./MainContentWrapper.module.css";

export function MainContentWrapper({ children }) {
  return (
    <section className={styles["main-content"]}>
      <div>{children}</div>
    </section>
  );
}
