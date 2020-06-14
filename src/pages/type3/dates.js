import React from "react";

import Forma from "../../components/credit-form";

const ButtonReserved = props => {
  return (
    <a href={props.link}>
      <div
        style={{
          // display: "inline-block",
          borderRadius: 4,
          padding: "4px 8px",
          background: "rgb(123,143,87)",
          color: "rgb(255,255,255)",
          textAlign: "center",
          fontSize: "0.9em",
          width: "fit-content",
          margin: "8px 0"
        }}
      >
        забронировать
      </div>
    </a>
  );
};

export default function DateEducationComponent() {
  return (
    <div style={{ paddingBottom: 60 }}>
      <h2 style={{ textAlign: "left" }}>Ближайшие даты обучения</h2>
      {/* <div style={{ height: "1.2em" }} />
      <p style={{ fontSize: "1.2em" }}>
        Очная дневная группа &mdash; с 16 октября 2019 г., с 3февраля 2020 г.
      </p>
      <p style={{ fontSize: "1.2em" }}>
        <b>Стоимость:</b> 60
        <sup>000</sup>
        &#8381; (при единоразовой оплате — скидка 10%)
      </p> */}
      <div style={{ height: "1.2em" }} />
      <p style={{ fontSize: "1.2em" }}>
        Дистанционное обучение &mdash; с 25 ноября 2019 г.{" "}
        <ButtonReserved link="https://billing.styleschool.ru/event/mjw2rDE8oxJSsNk4s" />
      </p>
      <p style={{ fontSize: "1.2em" }}>
        <b>Стоимость:</b> 45
        <sup>000</sup>
        &#8381; (при единоразовой оплате — скидка 10%)
      </p>
      <Forma
        sum="45000.00"
        name="Базовый курс по созданию имиджа и стиля (online)"
        yellow
      />
      <div style={{ height: "1.2em" }} />
      <p style={{ fontSize: "1.2em" }}>
        Очное обучение &mdash; с 10 февраля 2020 г.{" "}
        {/* <ButtonReserved link="https://billing.styleschool.ru/event/" /> */}
      </p>
    </div>
  );
}
