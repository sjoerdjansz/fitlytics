import styles from "./InputWrapper.module.css";

export function InputWrapper({ width = "full", direction, children }) {
  const WIDTH_CLASS = {
    sm: styles.widthSm,
    md: styles.widthMd,
    lg: styles.widthLg,
    full: styles.widthFull,
  };

  const widthClass = WIDTH_CLASS[width] || WIDTH_CLASS.full;

  return (
    <div
      className={`${styles["input-wrapper"]} ${widthClass}`}
      style={{
        flexDirection: direction,
      }}
    >
      {children}
    </div>
  );
}
