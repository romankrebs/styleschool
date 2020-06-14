import React from "react";
import Card from "../card";

export default function CardModern(props) {
  return (
    <Card
      head="Красота"
      title="Инструменты для макияжа — кисти"
      teacher="Яна Ахметова"
      descript="on-line"
      online
      date="17 июня"
      time={<span>19:00</span>}
      duration=""
      image="/img/modern-fashion-style/brushes.jpg"
      imageHeight
      text={
        <span>
          Сколько их должно быть? Топ 5 и топ 10 самых нужных инструментов для
          любой косметички. Как выбрать, ухаживать и использовать.
        </span>
      }
      q
      // free
      part
      // partPrice="600"
      // price="5900"
      color="rose"
      id="xN8gQFGyF8pAcpgdQ"
      setBillingId={props.setBillingId}
    />
  );
}
