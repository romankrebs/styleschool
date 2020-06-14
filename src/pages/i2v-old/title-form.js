import React from "react";

let style = {
  font: '500 1.8em "Lora"',
  color: "rgb(100,100,100)",
  textAlign: "center",
  margin: 0,
  padding: 30,
  paddingTop: 48
};

export default function Title() {
  return (
    <div>
      <h2 style={style}>Как записаться на собеседование?</h2>
      <p
        style={{
          textAlign: "center",
          color: "rgb(100,100,100)",
          fontSize: "1.2em"
        }}
      >
        Ближайшая дата: 16 июля в 19:00
      </p>
      <p style={{ color: "rgb(100,100,100)", textAlign: "center" }}>
        Корректно заполните форму, в комментариях напишите удобное время для
        связи, цель обучения, вопросы
      </p>
    </div>
  );
}
