import styles from "./SelectField.module.css";

export function SelectField({
  name,
  options = [],
  id,
  required,
  baseValueName,
}) {
  return (
    <select
      required={required}
      className={styles["select-field"]}
      id={id}
      name={name}
      // value={value}
      // onChange={onChange}
      defaultValue="" // probably weghalen als het controlled wordt
    >
      <option value="" disabled hidden>
        {baseValueName ? baseValueName : `Select ${name}`}
      </option>
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
