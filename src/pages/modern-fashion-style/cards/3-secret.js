import React from "react";
import Card from "../card";

export default function CardModern(props) {
  return (
    <Card
      head="Мода и стиль"
      title="Три секрета палитры нашего гардероба."
      teacher="Марина Бонецкая"
      descript={<span>видео-лекция,</span>}
      online
      date="10 июня"
      time={<span>12:00</span>}
      duration=""
      image="/img/modern-fashion-style/3-secret.jpg"
      text={
        <span>
          Создавая палитру гардероба, хочется, во-первых, знать, какие оттенки
          нам идут, то есть, способны подчеркнуть цветовые природные данные.
          Во-вторых, существует фактор вкуса, или неосознанного индивидуального
          предпочтения, с которым очень трудно спорить, а ведь каждый цвет
          наделяет нас еще и определенными образными характеристиками.
          В-третьих, в мире регулярно объявляется мода на цвета и их оттенки в
          одежде, и этот факт не удается игнорировать. Как же разобраться во
          всем? Как соединить эти пункты воедино? Попробуем понять на
          мастер-классе.
        </span>
      }
      q
      // free
      part
      //partPrice="600"
      //price="5900"
      color="rose"
      id="E4QZvCJuFaCHp7YTi"
      setBillingId={props.setBillingId}
    />
  );
}

/*
import React from "react";
import Card from "../card";

export default function CardModern(props) {
  return <Card
    head=""
    title=""
    teacher=""
    descript={<span></span>}
    online
    date=""
    time={<span></span>}
    duration=""
    image="/img/modern-fashion-style/"
    text={<span></span>}
    q
    free
    part
    partPrice="600"
    price="5900"
    color="rose"
    id=''
    setBillingId={props.setBillingId}
  />
}
*/
