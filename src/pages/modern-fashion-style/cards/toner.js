import React from "react";
import Card from "../card";

export default function CardModern(props) {
  return (
    <Card
      head="Красота"
      title="Правильная тональность"
      teacher="Яна Ахметова"
      descript={<span>on-line</span>}
      online
      date="22 июля"
      time="19:00"
      duration=""
      image="/img/modern-fashion-style/tonner.jpg"
      imageHeight
      text={
        <span>
          Все, что нужно знать о создании идеальной кожи современными
          средствами.
        </span>
      }
      q
      part
      color="rose"
      id="MPbbNQAzNd7otz5Mc"
      setBillingId={props.setBillingId}
    />
  );
}
