import styles from "./Button.module.css";

export function Button({ label, type, variant }) {
  return (
    <button type={type} className={`${styles["btn"]} ${styles[variant]}`}>
      {label}
    </button>
  );
}
