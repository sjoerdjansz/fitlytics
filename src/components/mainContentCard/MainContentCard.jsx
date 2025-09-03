import styles from "./MainContentCard.module.css";
import { Link, NavLink } from "react-router-dom";

export function MainContentCard({
  title,
  children,
  actions,
  urls = [],
  flexDirection = "column",
  alignItems = "flex-start",
  mainContentPadding,
}) {
  return (
    <section className={styles["main-content-card"]}>
      <header className={styles["header"]}>
        <div>
          <h1 className={styles.title}>{title}</h1>
          {Array.isArray(urls.children) && urls.children.length > 0 ? (
            <ul className={styles["header-nav"]}>
              <p>Go to:</p>
              {urls.children.map((url) => {
                return (
                  <li key={url.name}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? styles.selected : styles.deselected
                      }
                      to={`/library/${url.path}`}
                    >
                      {url.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
        {actions && <div className={styles["actions"]}>{actions}</div>}
      </header>
      <main
        className={`${styles.main} ${styles[flexDirection]}`}
        style={{
          alignItems,
          "--custom-padding": mainContentPadding,
        }}
      >
        {children}
      </main>
    </section>
  );
}
