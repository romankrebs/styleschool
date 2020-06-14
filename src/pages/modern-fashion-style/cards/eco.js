import React from "react";
import Card from "../card";

export default function Eco(props) {
  return (
    <Card
      head="Мода и стиль"
      title="Тенденции мировых подиумов SS19. Эко-мода"
      teacher="Татьяна Фомина"
      descript={<span>online,</span>}
      online
      date="28 мая"
      time={<span>19:00</span>}
      duration={false}
      image="/img/modern-fashion-style/eco.jpg"
      imageHeight
      text={
        <span>
          акончились недели моды в мировых столицах модного мира: Нью Йорке,
          Милане, Лондоне и Париже. Сезон FW 19/20 в модном пространстве
          объявлен официально открытым.
          <br />
          Какие образы вдохновили дизайнеров в этот раз? Можно ли говорить о
          изменении силуэтов, форм, линий? Классика или деконструктивизм? Восток
          или Запад? Какие цвета будут определять основную палитру наступающего
          сезона? Как изменятся аксессуары? Форма обуви? Пластика ткани?
          <br />
          Эти и много других, всегда вызывающих интерес вопросов, обсуждаем на
          вебинаре с Татьяны Фоминой.
        </span>
      }
      q
      // free
      part
      // partPrice="600"
      color="rose"
      view
      id="bmeS4TwGPipiDhqKQ"
      setBillingId={props.setBillingId}
    />
  );
}
