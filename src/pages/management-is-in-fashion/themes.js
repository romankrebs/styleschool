import React from "react";
import List from "../../components/list";

export default function Themes() {
  return (
    <div>
      <h2
        style={{
          font: "500 1.8em 'Lora'",
          textAlign: "left",
          color: "rgb(80,80,80)",
          margin: 0,
          padding: 12
        }}
      >
        Основные темы:
      </h2>
      <List
        arr={[
          "Теория моды",
          "Производство и продажи в индустрии моды",
          "Основы маркетинга и стратегическое управление",
          "Управление закупками и сбытом",
          "Продажи и поведение потребителей",
          "Визуальный мерчендайзинг",
          "Управление персоналом",
          "Брендинг, PR, продвижение"
        ]}
        style={{
          font: "400 1em",
          color: "rgb(100,100,100)"
        }}
        olStyle={{
          listStyle: "url(/img/green/check-bold.svg)"
        }}
      />
    </div>
  );
}
