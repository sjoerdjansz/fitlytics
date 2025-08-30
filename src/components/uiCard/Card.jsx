import styles from "./Card.module.css";
import { useContext, useMemo, useState } from "react";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { CardContext } from "./CardContext.js";

export function Card({
  children,
  flexDirection,
  background,
  defaultOpen = true,
}) {
  const [open, setOpen] = useState(defaultOpen);

  const contextValue = useMemo(
    () => ({
      open,
      setOpen,
    }),
    [open],
  );

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
      <CardContext.Provider value={contextValue}>
        {children}
      </CardContext.Provider>
    </article>
  );
}

Card.Header = function CardHeader({ children, title, toggle = true }) {
  const context = useContext(CardContext);
  // TODO: fast-refresh doet gek en deze workaround helpt tijdens development.
  // Wellicht moet ik uiteindelijk de body,header,footer aparte components geven om rendering en referenties
  // te verbeteren. let op er staan er 3 in deze file
  if (!context) return null;

  const { open, setOpen } = context;

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
          {open ? <CaretDown size={20} /> : <CaretUp size={20} />}
        </button>
      )}
    </div>
  );
};

Card.Body = function CardBody({ children }) {
  const context = useContext(CardContext);
  if (!context) return null;

  const { open } = context;

  if (!open) {
    return null;
  }

  return (
    <div hidden={!open} className={styles.body}>
      {children}
    </div>
  );
};

Card.Footer = function CardFooter({ children, hideWhenClosed = true }) {
  const context = useContext(CardContext);
  if (!context) return null;

  const { open } = context;

  if (hideWhenClosed && !open) {
    return null;
  }
  return (
    <div hidden={!open} className={styles.footer}>
      {children}
    </div>
  );
};
