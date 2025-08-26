import styles from "./Navbar.module.css";
import { ROUTES } from "../../data/routes.jsx";
import { Link, NavLink } from "react-router-dom";
import { CaretLeft, CaretRight, SignOut } from "@phosphor-icons/react";
import { useState } from "react";
import { CollapsedNavbar } from "./CollapsedNavbar.jsx";

export function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);

  if (toggleNav) {
    return <CollapsedNavbar toggleNav={() => setToggleNav(!toggleNav)} />;
  }

  return (
    <nav className={styles["side-nav"]}>
      <div className={styles["side-nav__top"]}>
        <div>
          <h2>fitlytics</h2>
          <span
            className={styles["toggle-nav"]}
            onClick={() => setToggleNav(!toggleNav)}
          >
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
            if (item.showInNav) {
              return (
                <li className={styles["nav-link"]} key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? styles.selected : ""
                    }
                  >
                    <span className={styles["nav-icon"]}>{item.icon}</span>
                    {item.name}
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
          Sign out
        </Link>
      </div>
    </nav>
  );
}
