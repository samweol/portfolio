import React, { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { database } from "../../firebase";
import Navbar from "../Home/Navbar";
import Message from "./Message";
import styles from "./MessageBox.module.css";

export default function MessageBox() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const fetchMessage = () => {
      const letterRef = ref(database, "letters");
      const tempArray = [];
      onValue(letterRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const childData = childSnapshot.val();
          tempArray.push(childData);
        });
        setMessages(tempArray);
      });
    };

    fetchMessage();
  }, []);
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {messages.length > 0 ? (
          messages.map((item) => (
            <Message
              key={item.uid}
              content={item.content}
              sender={item.sender}
              saver={item.saver}
            />
          ))
        ) : (
          <div>편지함이 비었습니다.</div>
        )}
      </div>
      <div className={styles.writeBtn}>
        <button
          onClick={() => {
            navigate("/message/write");
          }}
        >
          편지 쓰기
        </button>
      </div>
    </>
  );
}
