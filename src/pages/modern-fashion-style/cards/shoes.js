import React from "react";
import Card from "../card";

export default function Shoes(props) {
  return (
    <Card
      head="Мода и стиль"
      title="Обувь и кожгалантерея. Обзор трендов 2019-20"
      teacher="Марина Бонецкая"
      descript={<span>Онлайн-лекция,</span>}
      onlineText="Онлайн-лекция"
      date="16 апреля"
      time="11:30"
      duration="45 минут"
      image="/img/modern-fashion-style/shoes.jpg"
      text={
        <span>
          Увы, давно прошли те времена, когда можно было, взглянув на картинку
          из журнала или модную витрину, отчетливо уловить, как должны выглядеть
          туфли или сумка в следующем сезоне.
          <br />
          Кажется, что сейчас в тренде все, что угодно... Однако, есть
          возможность все же разобраться, из чего складываются модные
          направления в обуви и кожгалантерее и как не прогадать с покупкой
          обновки.
          <br />
          Приглашаю вас совершить обзор основных трендов 2019-20 по итогам
          Недель моды.
        </span>
      }
      part
      // partPrice="600"
      crown
      view
      id="vQFLXzjxXPMXt6teg"
      setBillingId={props.setBillingId}
    />
  );
}
