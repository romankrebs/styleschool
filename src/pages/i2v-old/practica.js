import React from "react";

import Practica from "../../components/practica";
import List from "../../components/list";

export default function PracticaComponent() {
  const content = {
    head: (
      <span style={{ font: "700 1em 'Lora'", color: "rgb(100,100,100)" }}>
        Обучение включает регулярные практические занятия:
      </span>
    ),
    list: (
      <List
        arr={[
          "практика в торговых центрах, шоурумах;",
          "практика консультирования клиентов;",
          "практика визуализации идей (mood board);",
          <span>практика создания релукингов &laquo;до и после&raquo;;</span>,
          "практика написания текстов о моде и стиле;",
          "практика изучения тренд-буков;",
          "практика создания style book;",
          "практика подготовки стилизаций для фотосессий;",
          "практика создания бренда стилиста-имиджмейкера;",
          "практика продвижения в Instagramm;"
        ]}
        style={{
          font: "400 1em",
          color: "rgb(100,100,100)"
        }}
      />
    )
  };
  return <Practica head={content.head} list={content.list} />;
}
