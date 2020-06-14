import React from "react";
import List from "../../components/list";

let styles = {
  head: {
    font: '500 1.8em "Lora"',
    color: "rgb(100,100,100)",
    textAlign: "center",
    margin: 0,
    padding: "40px 12px"
  },
  text: {
    font: "400 1em",
    color: "rgb(100,100,100)",
    textAlign: "left",
    margin: 0,
    padding: 8
  }
};

export default function Conditions() {
  return (
    <div>
      <h2 style={styles.head}>
        Как сделать правильный выбор и какие перспективы?
      </h2>
      <p style={{ color: "rgb(100,100,100)" }}>
        Ответ Вы получите после общения со специалистами учебного отдела и
        непосредственно на собеседовании с ведущим преподавателем курса
      </p>
      <h2 style={{ ...styles.head, color: "rgb(100,0,0)" }}>
        Условия зачисления на обучение:
      </h2>
      <List
        arr={[
          "заполнить анкету и пройти собеседование",
          "предоставить комплект документов для проверки",
          "оформить договор и внести аванс для бронирования места"
        ]}
        style={styles.text}
      />
    </div>
  );
}
