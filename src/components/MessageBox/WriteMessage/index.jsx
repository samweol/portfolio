import React, { useState } from "react";
import Navbar from "../../Home/Navbar";
import styles from "./WriteMessage.module.css";
import { set, ref } from "firebase/database";
import { database } from "../../../firebase";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

export default function WirteMessage() {
  const [data, setData] = useState({
    saver: "",
    content: "",
    sender: "",
    writeAt: new Date(),
  });

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const uid = uuidv4();
    set(ref(database, "letters/" + uid), {
      id: uid,
      saver: data.saver,
      content: data.content,
      sender: data.sender,
      writeAt: data.writeAt.toLocaleDateString(),
    });
    console.log("💌 편지가 전달되었습니다.");
    navigate("/message");
  };
  return (
    <>
      <Navbar />
      <section>
        <form className={styles.section}>
          <div>
            To.{" "}
            <input
              type="text"
              onChange={(s) => {
                setData({ ...data, saver: s.target.value });
              }}
            />
          </div>
          <div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className={styles.textarea}
              onChange={(c) => {
                setData({ ...data, content: c.target.value });
              }}
            ></textarea>
          </div>
          <div>
            From.{" "}
            <input
              type="text"
              onChange={(s) => {
                setData({ ...data, sender: s.target.value });
              }}
            />
          </div>
          <button onClick={onSubmit}>편지 보내기</button>
        </form>
      </section>
    </>
  );
}
