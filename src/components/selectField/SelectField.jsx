import styles from "./SelectField.module.css";

export function SelectField({
  name,
  options = [],
  id,
  label,
  required = false,
}) {
  return (
    <>
      {label && (
        <label htmlFor={id} className={`${styles[required && "required"]}`}>
          {label}
        </label>
      )}
      <select className={styles["select-field"]} id={id} name={name}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          );
        })}
      </select>
    </>
  );
}
