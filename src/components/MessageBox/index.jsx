import React from "react";
import Navbar from "../Home/Navbar";
import Message from "./Message";
import styles from "./MessageBox.module.css";
import { useNavigate } from "react-router-dom";

export default function MessageBox() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Message content="hello" sender="xxx" />
        <Message content="hello" sender="xxx" />
        <Message content="hello" sender="xxx" />
        <Message content="hello" sender="xxx" />
        <Message content="hello" sender="xxx" />
        <Message content="hello" sender="xxx" />
        <Message content="hello" sender="xxx" />
      </div>
      <button
        className={styles.writeBtn}
        onClick={() => {
          navigate("/message/write");
        }}
      >
        편지 쓰기
      </button>
    </>
  );
}
