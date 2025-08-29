import styles from "./Textarea.module.css";

export function Textarea({
  label,
  name,
  id,
  placeholder,
  required = false,
  cols = 20,
  rows = 4,
}) {
  return (
    <>
      {label ? (
        <label htmlFor={id} className={`${styles[required && "required"]}`}>
          {label}
        </label>
      ) : null}
      <textarea
        className={styles["textarea-field"]}
        id={id}
        name={name}
        placeholder={placeholder ?? undefined}
        required={required}
        cols={cols}
        rows={rows}
      />
    </>
  );
}
