import React from "react";
import Navbar from "../Home/Navbar";
import Message from "./Message";
import styles from "./MessageBox.module.css";

export default function MessageBox() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Message />
      </div>
    </>
  );
}
