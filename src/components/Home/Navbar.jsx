import React from "react";
import { ImBooks } from "react-icons/im";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <ImBooks />
      </div>
      <div></div>
      <div>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>Home</li>
          <li className={styles.menuItem}>Message</li>
          <li className={styles.menuItem}>Library</li>
        </ul>
      </div>
    </nav>
  );
}
