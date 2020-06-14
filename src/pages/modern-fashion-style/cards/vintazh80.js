import React from "react";
import Card from "../card";

export default function Vintazh80(props) {
  return (
    <Card
      head="Мода и стиль"
      title="Винтаж: современный стиль, индивидуальный подход. 80-е годы"
      teacher="Светлана Кононец"
      descript={<span>online,</span>}
      online
      date="16 мая"
      time="10:00"
      image="/img/modern-fashion-style/vintazh80.jpg"
      text={
        <span>
          Анималистические принты, неоновые цвета, вареный деним, объемные плечи
          &ndash; эстетика десятилетия 80-х по-прежнему вдохновляет дизайнеров в
          сезоне весна-лето 2019. А винтажный стиль считается визитной карточкой
          современной стильной личности. На этот раз мы рассмотрим, как
          аутентичные вещи из 80-х вписать в современный комплект.
        </span>
      }
      q
      part
      view
      partPrice="600"
      color="rose"
      id="GJs93j7Ho6H3MnRAo"
      setBillingId={props.setBillingId}
    />
  );
}
