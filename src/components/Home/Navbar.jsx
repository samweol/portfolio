import React from "react";
import { ImBooks } from "react-icons/im";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className={styles.navbar}>
      <div>
        <ImBooks
          className={styles.menuItem}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div></div>
      <div>
        <ul className={styles.menu}>
          <li
            className={styles.menuItem}
            onClick={() => {
              navigate("/front");
            }}
          >
            Front
          </li>
          <li
            className={styles.menuItem}
            onClick={() => {
              navigate("/message");
            }}
          >
            Message
          </li>
          <li
            className={styles.menuItem}
            onClick={() => {
              navigate("/library");
            }}
          >
            Library
          </li>
        </ul>
      </div>
    </nav>
  );
}
