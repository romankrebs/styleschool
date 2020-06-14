import React from "react";
import Card from "../card";

export default function MenStyle(props) {
  return (
    <Card
      head="Мода и стиль"
      title="Мужской стиль"
      teacher="Лиана Бахова"
      descript={<span>Мастер-класс, очно,</span>}
      onlineText="Мастер-класс, очно"
      date="май"
      time="10:00-16:30"
      duration="45 минут"
      image="/img/modern-fashion-style/menstyle.jpg"
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
      price="3 900"
      id="5AbvRmy3ah92w6Kpv"
      setBillingId={props.setBillingId}
    />
  );
}
