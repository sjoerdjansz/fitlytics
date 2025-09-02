import styles from "./RangeSlider.module.css";

export function RangeSlider({
  name,
  id,
  min,
  max,
  value,
  onChange,
  width = "md",
}) {
  const WIDTH_CLASS = {
    sm: styles.wSm,
    md: styles.wMd,
    lg: styles.wLg,
    full: styles.wFull,
  };
  const widthClass = WIDTH_CLASS[width] || WIDTH_CLASS.full;

  return (
    <div className={styles["slider-container"]}>
      <input
        className={`${styles["range-input-field"]} ${widthClass}`}
        type="range"
        id={id}
        name={name}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      ></input>
      <div>
        <span className={styles["systemic-load-score"]}>{value}</span>
      </div>
    </div>
  );
}
