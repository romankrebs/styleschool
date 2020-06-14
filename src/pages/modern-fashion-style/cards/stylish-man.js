import React from "react";
import Card from "../card";

export default function TheCard(props) {
  return (
    <Card
      head="Мода и стиль"
      title="Мужской стиль"
      teacher="Лиана Бахова"
      descript={<span>Очно,</span>}
      online={false}
      date="25 мая"
      time="10:00-16:30"
      duration={false}
      image="/img/modern-fashion-style/stylish_man.jpg"
      text={
        <span>
          Мужская стилистика и имидж-консалтинг. Принципиальные отличия
          клиентских запросов в рамках мужского и женского имиджа. Мужская мода:
          ключевые тренды fashion рынка и функциональность. Основные категории
          клиентов: психологический аспект, социальный аспект, коммерческий
          аспект. Выбор стилевого решения. Классификация основных мужских стилей
          и дресс-кодов. Гардероб, аксессуары: правила подбора и особенности
          сочетания.
        </span>
      }
      q
      // free
      part
      partPrice="3 900"
      // price="5900"
      color="rose"
      id="nQRwZuG3y87KBME6Z"
      setBillingId={props.setBillingId}
    />
  );
}
