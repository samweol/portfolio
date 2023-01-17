import React, { useState } from "react";
import styles from "./Message.module.css";
import message from "../../images/message.png";
import Modal from "./Modal";
import Navbar from "../Home/Navbar";

export default function Message() {
  const openMessage = () => {
    setModalOpen(true);
  };
  const closeMessage = () => {
    setModalOpen(false);
  };
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className={styles.message} onClick={openMessage}>
        <img src={message} alt="편지지" width={200} />
      </div>
      <Modal open={modalOpen} close={closeMessage}>
        팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요!
      </Modal>
    </>
  );
}
