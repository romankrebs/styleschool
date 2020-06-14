import React from "react";
import Card from "../card";

export default function CardModern(props) {
  return (
    <Card
      head="Психология имиджа"
      title="Сексуальность в образе и тенденции сексуального поведения в жизни"
      teacher="Лиана Бахова"
      descript={<span>on-line</span>}
      online
      date="24 июня"
      time={<span>19:00</span>}
      duration=""
      image="/img/modern-fashion-style/sexuality.jpg"
      text={
        <span>
          Смелый разговор, в котором рассмотрим сексуальность, как
          социально-психологический феномен, влияющий на все сферы жизни. В том
          числе и на манеру ношения одежды. Фрейда часто вспоминать не будем, но
          и не забудем поблагодарить за ценные труды.
        </span>
      }
      q
      // free
      part
      // partPrice="600"
      // price="5900"
      color="rose"
      id="BeZrfC2ofyjQwgTBA"
      setBillingId={props.setBillingId}
    />
  );
}
