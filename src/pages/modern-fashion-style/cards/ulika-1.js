import React from "react";
import Card from "../card";

export default function CardModern(props) {
  return (
    <Card
      head="Психология имиджа"
      title={
        <React.Fragment>
          Тело, как улика. Часть&nbsp;1. Конституциональный анализ внешности.
        </React.Fragment>
      }
      teacher="Лиана Бахова"
      descript={<span>on-line</span>}
      online
      date=""
      time={<span />}
      duration=""
      image="/img/modern-fashion-style/ulika-1.jpg"
      text={
        <span>
          Тело &mdash; всегда самый надежный информатор. Оно может помочь нам
          сообщить то, что мы хотели бы передать, но не решились сказать. А
          может предательски выдать все наши тщательно скрываемые секреты. Если
          тема вам интересна, присоединяйтесь. В первой части блока поговорим об
          особенностях телосложения и поведенческой тенденции, которая может
          меняться в зависимости от конституционального типа личности.
        </span>
      }
      q
      part
      color="rose"
      id="YDaQqe2zKutrps2Pk"
      setBillingId={props.setBillingId}
    />
  );
}
