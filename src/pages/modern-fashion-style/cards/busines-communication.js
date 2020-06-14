import React from "react";
import Card from "../card";

export default function Business(props) {
  return (
    <Card
      head="Бизнес"
      title="Правила бизнес-коммуникации"
      teacher="Ольга Олюшина"
      descript={<span>online,</span>}
      online
      date="16 мая"
      time={<span>20:00</span>}
      duration={false}
      image="/img/modern-fashion-style/busines-communication.jpg"
      imageHeight
      text={
        <span>Как презентовать себя и проводить «холодные» переговоры</span>
      }
      q
      part
      view
      // partPrice="600"
      color="blue"
      id="jpNM348wKcqQELMoH"
      setBillingId={props.setBillingId}
    />
  );
}
