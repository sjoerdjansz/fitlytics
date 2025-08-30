import styles from "./InputWrapper.module.css";
import { useState } from "react";

export function InputWrapper({
  label,
  id,
  direction,
  children,
  icon,
  description,
  width,
}) {
  const [toggleDescription, setToggleDescription] = useState(false);

  const WIDTH_CLASS = {
    sm: styles.wSm,
    md: styles.wMd,
    lg: styles.wLg,
    full: styles.wFull,
  };
  const widthClass = WIDTH_CLASS[width] || WIDTH_CLASS.full;

  return (
    <div
      className={`${styles["input-wrapper"]} ${styles[direction]} ${widthClass}`}
    >
      {label ? (
        <div className={styles["label-wrapper"]}>
          <label htmlFor={id}>{label}</label>

          {icon ? (
            <span
              className={styles["icon-wrap"]}
              onClick={() => setToggleDescription(!toggleDescription)}
            >
              {icon}
              {toggleDescription && description}
            </span>
          ) : undefined}
        </div>
      ) : null}

      {children}
    </div>
  );
}
