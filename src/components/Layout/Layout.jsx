import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar/Navbar.jsx";

export function Layout() {
  return (
    <div className={styles["layout-container"]}>
      <Navbar />
      <main className={styles["layout-content"]}>
        <Outlet />
      </main>
    </div>
  );
}
