import styles from "./InputField.module.css";

export function InputField({
  type = "text",
  label,
  name,
  id,
  placeholder,
  required = false,
  min,
  max,
}) {
  return (
    <>
      {label ? (
        <label
          htmlFor={id}
          className={`${required ? styles["required"] : undefined}]}`}
        >
          {label}
        </label>
      ) : null}
      <input
        className={styles["input-field"]}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder ?? undefined}
        required={required}
        min={min ?? undefined} // TODO later alleen min/max zetten voor types die dit ondersteunen (nu staan
        // ze onterecht op alle)
        max={max ?? undefined}
      />
    </>
  );
}
