import styles from "./CollapsedNavbar.module.css";
import { CaretLeft, CaretRight, SignOut } from "@phosphor-icons/react";
import { ROUTES } from "../../constants/routes.jsx";
import { Link, NavLink } from "react-router-dom";

export function CollapsedNavbar({ toggleNav }) {
  return (
    <nav className={styles["side-nav"]}>
      <div className={styles["side-nav__top"]}>
        <div>
          <span className={styles["toggle-nav"]} onClick={toggleNav}>
            {toggleNav ? (
              <CaretLeft size={16} weight="bold" />
            ) : (
              <CaretRight size={16} weight="bold" />
            )}
          </span>
        </div>
      </div>
      <div className={styles["side-nav__middle"]}>
        <ul className={styles["nav-links"]}>
          {ROUTES.map((item) => {
            const Icon = item.icon;
            if (item.showInNav) {
              return (
                <li className={styles["nav-link"]} key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? styles.selected : ""
                    }
                  >
                    <span className={styles["nav-icon"]}>
                      {<Icon size={16} />}
                    </span>
                  </NavLink>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div className={styles["side-nav__bottom"]}>
        <Link to={"/signin"}>
          <SignOut size={16} />
        </Link>
      </div>
    </nav>
  );
}
