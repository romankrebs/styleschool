import React from "react";
import Card from "../card";

export default function WhiteShirt(props) {
  return (
    <Card
      head="История моды"
      title="Белая рубашка — константа в мире моды, актуальна во все времена"
      teacher="Руслан Мигранов"
      descript={<span>Онлайн-лекция</span>}
      onlineText={
        <span>
          Запись вебинара
          <br />
          Длительность: 45 минут
        </span>
      }
      image="/img/modern-fashion-style/migranov.jpg"
      text={
        <span>
          Мы рассматриваем историю белой рубашки в контексте истории белого
          цвета. Насколько Белая рубашка была актуальна в разные времена,
          рассмотрим разные казусы, интересные истории. Как Белая рубашка
          входила в обиход городских жителей и как спорт повлиял на
          распространение белой рубашки в повседневности.
        </span>
      }
      part
      // partPrice="600"
      crown
      view
      id="j2kzJ2Y22JF359hek"
      setBillingId={props.setBillingId}
    />
  );
}
