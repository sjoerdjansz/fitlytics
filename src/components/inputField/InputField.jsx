import styles from "./InputField.module.css";

export function InputField({
  type = "text",
  label,
  name,
  id,
  placeholder,
  required = false,
  width = "full",
  direction = "row",
}) {
  const WIDTH_CLASS = {
    sm: styles.widthSm,
    md: styles.widthMd,
    lg: styles.widthLg,
    full: styles.widthFull,
  };

  const widthClass = WIDTH_CLASS[width] ?? WIDTH_CLASS.full;

  return (
    <div
      className={`${styles["input-field-wrapper"]} ${widthClass}`}
      style={{
        flexDirection: direction,
      }}
    >
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        className={styles["input-field"]}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder ?? undefined}
        required={required}
      />
    </div>
  );
}
