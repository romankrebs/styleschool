import React from "react";
import Card from "../card";

export default function Vintazh60(props) {
  return (
    <Card
      head="Мода и стиль"
      title="Винтаж: современный стиль, индивидуальный подход. 60-е годы"
      teacher="Светлана Кононец"
      descript={<span>Онлайн-лекция,</span>}
      online
      date="11 апреля"
      time="10:00"
      duration="45 минут"
      image="/img/modern-fashion-style/vintazh.jpg"
      imageHeight
      text={
        <span>
          Шестидесятые годы подарили миру мини моду. Но это не единственное
          наследие начала второй половины 20-го века. О том, как изменился
          женский образ после длительной для моды эры нью-лук, и как сегодня
          можно вписать наследие 60-х в современные тренды, мы поговорим на
          нашей встрече.
        </span>
      }
      part
      crown
      view
      id="Sh2F9MMY3zwHmq6Rk"
      setBillingId={props.setBillingId}
    />
  );
}
