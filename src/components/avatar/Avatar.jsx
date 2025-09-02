import styles from "./Avatar.module.css";
import placeholderAvatar from "../../assets/no-profile-picture.svg";

export function Avatar({ size = 40, image, alt = "", position = "center" }) {
  const cssSize = typeof size === "number" ? `${size}px` : size;

  return (
    <span className={styles["avatar-wrapper"]} style={{ "--size": cssSize }}>
      <img
        src={image ? image : placeholderAvatar}
        alt={alt ? alt : "no avatar image"}
        style={{ objectPosition: position }}
      />
    </span>
  );
}
