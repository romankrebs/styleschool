import React from "react";

export default function Title() {
  var style = {
    h2: {
      fontFamily: "Lora",
      fontSize: "1.8em",
      color: "rgb(60,60,60)",
      textAlign: "center",
      fontWeight: 500,
      margin: 8,
      padding: 0
    },
    red: {
      fontFamily: "Lora",
      color: "rgb(100,0,0)",
      fontWeight: 500
    }
  };

  return (
    <div>
      <p
        style={{
          fontFamily: "Lora",
          fontSize: "1.3em",
          color: "rgb(100,100,100)",
          fontWeight: 700,
          textAlign: "center"
        }}
      >
        <span style={style.red}>11</span> месяцев&nbsp;&nbsp;
        <span style={style.red}>|&nbsp;&nbsp;120</span> занятий&nbsp;&nbsp;
        <span style={style.red}>|&nbsp;&nbsp;480</span> академ.
        часов&nbsp;&nbsp;
        <span style={style.red}>|</span>
        &nbsp;&nbsp;Практика&nbsp;&nbsp;
        <span style={style.red}>|</span>
        &nbsp;&nbsp;Университетский Диплом
      </p>
      {/* <p
        style={{
          fontFamily: "Lora",
          fontSize: "1.3em",
          color: "rgb(100,100,100)",
          fontWeight: 700,
          textAlign: "center"
        }}
      >
        БЛИЖАЙШИЙ СТАРТ &mdash; ONLINE ОБУЧЕНИЕ &mdash; с 5 ИЮНЯ
      </p> */}
    </div>
  );
}
