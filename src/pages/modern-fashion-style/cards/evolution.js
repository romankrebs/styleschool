import React from "react";
import Card from "../card";

export default function ModernCard(props) {
  return (
    <Card
      head="Искусство"
      title="Эволюция изобразительных форм итальянского искусства эпохи Ренессанса"
      teacher="Галина Варакина"
      descript={<span>online,</span>}
      online
      date="23 мая"
      time={<span>20:00</span>}
      duration={false}
      image="/img/modern-fashion-style/evolution.jpg"
      imageHeight
      text={
        <span>
          Приятно смотреть, но гораздо приятнее любуясь понимать! Предлагаем
          путешествие в Италию XIV-XVI вв. Канон красоты, синтетический реализм,
          эстетика и философия гуманизма, вот круг вопросов, о которых мы будем
          говорить и любоваться произведениями Джотто и Рафаэля, Боттичелли и
          Леонардо да Винчи, Микеланджело и Пармиджанино. 60 минут истинного
          наслаждения.
        </span>
      }
      q
      part
      view
      color="rose"
      id="37f5yx9LMLci93Q5X"
      setBillingId={props.setBillingId}
    />
  );
}
