import styles from "./PageControls.module.css";

export function PageControls({ children }) {
  return <div className={styles["page-controls"]}>{children}</div>;
}
