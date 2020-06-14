import React from "react";
import Card from "../card";

export default function Beauty(props) {
  return (
    <Card
      head="Красота"
      title="Готовимся к лету: ревизия косметички и летний бьюти-шопинг"
      teacher="Яна Ахметова"
      descript="online,"
      online
      date="27 мая"
      time="19:00"
      duration={false}
      image="/img/modern-fashion-style/beauty_shoping.jpg"
      imageHeight
      text={
        <span>
          Летом мы меняем не только одежду, но и средства в косметичке. На смену
          плотных и густых средств приходят легкие текстуры, которые не подведут
          в жару. К ним же следует добавить и средства с солнцезащитными
          фильтрами.
          <br />
          Как самостоятельно провести ревизию своей косметички, как проверить
          срок годности средств, что убрать, а что купить, чтобы лето было не
          только теплым, но и красивым расскажет визажист Яна Ахметова.
        </span>
      }
      q
      part
      // partPrice="600"
      color="rose"
      view
      id="25ebRo2g6S6c6SBWy"
      setBillingId={props.setBillingId}
    />
  );
}
