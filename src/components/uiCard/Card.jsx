import styles from "./Card.module.css";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { useState } from "react";

export function Card({
  children,
  flexDirection,
  background,
  defaultOpen = true,
}) {
  const [open, setOpen] = useState(defaultOpen);

  const BACKGROUNDS = {
    surface: "surface",
    surfaceVariant: "surface-variant",
    bg: "bg",
    border: "border",
  };

  const bg = BACKGROUNDS[background] || BACKGROUNDS.surfaceVariant;
  return (
    <article
      className={styles.card}
      style={{
        flexDirection: flexDirection,
        backgroundColor: `var(--color-${bg})`,
      }}
    >
      {typeof children === "function"
        ? children({
            open,
            setOpen,
          })
        : children}
    </article>
  );
}

Card.Header = function CardHeader({
  children,
  title,
  toggle = true,
  open,
  setOpen,
}) {
  return (
    <div className={styles.header}>
      {title && <p>{title}</p>}
      {children}
      {toggle && (
        <button
          className={styles["card-toggle"]}
          type="button"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <CaretDown size={20} color={"white"} />
          ) : (
            <CaretUp size={20} color={"white"} />
          )}
        </button>
      )}
    </div>
  );
};

Card.Body = function CardBody({ children, open }) {
  if (!open) return null;

  return (
    <div hidden={!open} className={styles.body}>
      {children}
    </div>
  );
};

Card.Footer = function CardFooter({ children, open }) {
  if (!open) return null;
  return (
    <div hidden={!open} className={styles.footer}>
      {children}
    </div>
  );
};
