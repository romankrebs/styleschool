import React from "react";
import Card from "../card";

export default function ModernCard(props) {
  return (
    <Card
      head="Бизнес"
      title="Эффективная презентация вашей услуги"
      teacher="Алина Ермолаева"
      descript={<span>online,</span>}
      online
      date="22 мая"
      time="20:00"
      duration={false}
      image="/img/modern-fashion-style/startup.jpg"
      text={<span>Вас должны захотеть купит</span>}
      q
      part
      view
      // partPrice="600"
      color="blue"
      id="rfHaRsM3NuEncchmz"
      setBillingId={props.setBillingId}
    />
  );
}
