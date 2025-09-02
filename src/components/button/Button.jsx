import styles from "./Button.module.css";

export function Button({
  label,
  type,
  variant = "primary",
  size = "md",
  fluid = false,
  onClick,
}) {
  const WIDTH_CLASS = {
    sm: styles.small,
    md: styles.medium,
    lg: styles.large,
    fluid: styles.fluid,
  };

  const widthClass = WIDTH_CLASS[size] || WIDTH_CLASS.full;

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styles["btn"]} ${styles[variant]} ${widthClass} ${fluid && styles.fluid}`}
    >
      {label}
    </button>
  );
}
