import React from "react";
import Card from "../card";

export default function Ip(props) {
  return (
    <Card
      head="Бизнес"
      title="Маркетинг для индивидуальных предпринимателей"
      teacher="Ольга Олюшина"
      descript={<span>online,</span>}
      online
      date="21 мая"
      time="20:00"
      duration={false}
      image="/img/modern-fashion-style/marketing-ip.jpg"
      imageHeight
      text={<span>Как быть востребованным в своей нише</span>}
      q
      part
      view
      // partPrice="600"
      color="blue"
      id="S5nnjugsgbxS7hMCN"
      setBillingId={props.setBillingId}
    />
  );
}
