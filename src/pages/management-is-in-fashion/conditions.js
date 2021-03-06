import React from "react";

export default function Condition() {
  return (
    <div
      style={{
        borderRadius: 8,
        border: "3px dashed rgb(220,220,220)",
        background: "rgb(245,240,235)",
        padding: 12
      }}
    >
      <p
        style={{
          font: "400 1em",
          color: "rgb(80,80,80)",
          textAlign: "justify",
          padding: 0,
          margin: 0
        }}
      >
        <b>Условия зачисления:</b> на обучение принимаются слушатели, имеющие
        высшее профессиональное образование или студенты ВУЗов (3 курс и выше)
        на основе собеседования с Директором программы <br />
        Программа обучения разработана специалистами НОЧУ ЦДО &laquo;Высшая
        школа стилистики&raquo;, сентябрь 2016 года. Подробнее о приеме на
        обучение или о прохождении подготовительных курсов Вы можете узнать,
        обратившись через форму заявки или заказав обратный звонок.{" "}
      </p>
    </div>
  );
}
