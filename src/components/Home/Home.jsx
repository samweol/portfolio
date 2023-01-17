import React from "react";
import { useNavigate } from "react-router-dom";
import hotel from "../../images/hotel_main.png";
import styles from "./Home.module.css";

export default function Home() {
  const navigate = useNavigate();
  const enterClick = () => {
    navigate("/front");
  };
  return (
    <>
      <section>
        <div className={styles.content}>
          <h1>기억의 궁전</h1>
          <p>셜록의 기억의 궁전처럼 기록을 저장하는 공간입니다.</p>
          <button onClick={enterClick}>입장하기</button>
        </div>
        <div className={styles.hotel}>
          <img src={hotel} alt="호텔 이미지" width={"50%"} />
        </div>
      </section>
    </>
  );
}
