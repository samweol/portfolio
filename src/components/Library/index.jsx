import React from "react";
import Navbar from "../Home/Navbar";
import Book from "./Book";
import styles from "./Library.module.css";

export default function Library() {
  return (
    <>
      <Navbar />
      <div className={styles.bookshelf}>
        <Book />
      </div>
    </>
  );
}
