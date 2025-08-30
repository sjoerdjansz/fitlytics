import styles from "./Textarea.module.css";

export function Textarea({ name, id, placeholder, cols = 20, rows = 4 }) {
  return (
    <>
      <textarea
        className={styles["textarea-field"]}
        id={id}
        name={name}
        placeholder={placeholder ?? undefined}
        cols={cols}
        rows={rows}
      />
    </>
  );
}
