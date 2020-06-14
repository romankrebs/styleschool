import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import List from "../../components/list";
import Expand from "../../components/expanded";

export default function Contents() {
  const content = [
    {
      summary: "Нематериальная мотивация",
      details: (
        <List
          arr={[
            "Обращение к собственникам? Посмотрим на свой бизнес со стороны.",
            "Ошибки взаимодействия собственника и директора магазина.",
            "Нужен ли вам продавец-звезда?",
            "Существует ли универсальная система мотивации?",
            "Механизмы нематериальной мотивации, срок их действия.",
            "Влияние ДНК магазина и бренда  на форму нематериальной  мотивации."
          ]}
          style={{ fontSize: "1.2em" }}
        />
      )
    },
    {
      summary: "Материальная мотивация",
      details: (
        <List
          arr={[
            "Система введения KPI.",
            "Структура мотивации и срок действия.",
            "Почему KPI не работают.",
            "Как правильно устанавливать задачи персоналу.",
            "Как считать систему бонусов.",
            "Таблица KPI и системы выплат. Риски."
          ]}
          style={{ fontSize: "1.2em" }}
        />
      )
    },
    {
      summary: "Workshop",
      details: (
        <List
          arr={["Задание для самостоятельной работы."]}
          style={{ fontSize: "1.2em" }}
        />
      )
    },
    {
      summary: "Ключевые навыки по итогу модуля",
      details: (
        <List
          arr={["Разработка и внедрение мотивационных программ."]}
          style={{ fontSize: "1.2em" }}
        />
      )
    },
    {
      summary: "Инструменты",
      details: (
        <List
          arr={[
            "Примеры из практики реальных магазинов.",
            "Раздатки.",
            "Бланки для самостоятельной работы с заполнением во время семинара."
          ]}
          style={{ fontSize: "1.2em" }}
        />
      )
    }
  ];

  return (
    <div style={{ padding: 20 }}>
      <ScrollableAnchor id="programma">
        <h2 style={{ textAlign: "center" }}>Программа модуля</h2>
      </ScrollableAnchor>
      <div style={{ padding: 16, textAlign: "left" }}>
        {content.map((el, i) => (
          <Expand
            summary={{
              text: el.summary,
              style: {
                color: "rgb(100,100,100)",
                fontWeight: 600,
                background: "rgb(245,245,245)"
              }
            }}
            details={{
              text: el.details,
              style: {
                color: "rgb(100,100,100)",
                fontWeight: 400
              }
            }}
            key={i}
            expand={true}
          />
        ))}
      </div>
    </div>
  );
}
