import styles from "./SelectField.module.css";

export function SelectField({ name, options = [], id, required }) {
  return (
    <select
      required={required}
      className={styles["select-field"]}
      id={id}
      name={name}
    >
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
}
