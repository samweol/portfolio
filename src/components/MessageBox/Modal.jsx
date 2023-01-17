import React from "react";
import styles from "./Modal.module.css";

export default function Modal(props) {
  const { open, close, sender, saver } = props;
  return (
    <div className={open ? styles.modalBg : null}>
      {open ? (
        <section className={styles.letter}>
          <header className={styles.header}>
            To. {saver}
            <button onClick={close} className={styles.closeBtn}>
              <span>&times;</span>
            </button>
          </header>
          <main className={styles.content}>{props.children}</main>
          <footer className={styles.footer}>From. {sender}</footer>
        </section>
      ) : null}
    </div>
  );
}
