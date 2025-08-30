import styles from "./Tooltip.module.css";

export function Tooltip({ message }) {
  return (
    <div className={styles.tooltip}>
      <p>{message}</p>
    </div>
  );
}
