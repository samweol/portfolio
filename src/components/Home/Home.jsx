import React from "react";
import Navbar from "./Navbar";
import hotel from "../../images/hotel_main.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <section>
        <div>
          <h1>기억의 궁전</h1>
          <p>셜록의 기억의 궁전처럼 기록을 저장하는 공간입니다.</p>
          <button>입장하기</button>
        </div>
        <div>
          <img src={hotel} alt="호텔 이미지" width={"100%"} />
        </div>
      </section>
    </>
  );
}
