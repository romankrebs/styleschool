import React from "react";
import Card from "../card";

export default function CardModern(props) {
  return (
    <Card
      head="Мода и стиль"
      title="Тенденции подиума FW 20. Сумки"
      teacher="Татьяна Фомина"
      descript={<span>on-line</span>}
      online
      date="17 июля"
      time="19:00"
      duration=""
      image="/img/modern-fashion-style/fw20.png"
      imageHeight
      text={
        <span>
          Закончились недели моды в мировых столицах модного мира: Нью Йорке,
          Милане, Лондоне и Париже. Сезон FW 19/20 в модном пространстве
          объявлен официально открытым. Какие образы вдохновили дизайнеров в
          этот раз? Можно ли говорить о изменении силуэтов, форм, линий?
          Классика или деконструктивизм? Восток или Запад? Какие цвета будут
          определять основную палитру наступающего сезона? Как изменятся
          аксессуары? Форма обуви? Пластика ткани? Эти и много других, всегда
          вызывающих интерес вопросов, обсуждаем на вебинаре с Татьяны Фоминой.
        </span>
      }
      q
      part
      color="rose"
      id="fmWPT46XFhPk5bbLg"
      setBillingId={props.setBillingId}
    />
  );
}
