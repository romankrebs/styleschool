import React from "react";
import Card from "../card";

export default function CardModern(props) {
  return (
    <Card
      head="Мода и стиль"
      title="Цветовые гармонии, тренды SS2019"
      teacher="Татьяна Фомина"
      descript={<span>Онлайн-лекция</span>}
      onlineText={
        <span>
          Запись вебинара от 14.02.19
          <br />
          Длительность: 45 минут
        </span>
      }
      image="/img/modern-fashion-style/color-garmony.jpg"
      text={
        <span>
          Существуют ли правила сочетания цветов в одежде? Конечно! Однин из
          возможных способов &mdash; законы цветовых гармоний. Но насколько
          актуальны эти правила в мире современной моды, которая живет по
          принципу &mdash; «разрушай все правила»? На вебинаре Татьяны Фоминой
          разбираем основные законы цветовых гармоний и смотрим, как они
          работают на подиуме Ss19.
        </span>
      }
      part
      // partPrice="600"
      crown
      view
      id="hZhtWqieShjnJG4wn"
      setBillingId={props.setBillingId}
    />
  );
}
