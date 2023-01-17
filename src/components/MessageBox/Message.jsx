import React, { useState } from "react";
import styles from "./Message.module.css";
import message from "../../images/message.png";
import Modal from "./Modal";

export default function Message({ content, sender }) {
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
        <span className={styles.sender}>From {sender}</span>
      </div>
      <Modal open={modalOpen} close={closeMessage} sender={sender}>
        {content}
      </Modal>
    </>
  );
}
