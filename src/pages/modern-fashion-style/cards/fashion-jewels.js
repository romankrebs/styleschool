import React from "react";
import Card from "../card";

export default function FashionJewels(props) {
  return (
    <Card
      head="Мода и стиль"
      title="Модные украшения. Обзор трендов 2019-20"
      teacher="Марина Бонецкая"
      descript={<span>online,</span>}
      online
      date="13 мая"
      time={<span>12:00</span>}
      duration=""
      image="/img/modern-fashion-style/new_one.jpg"
      text={
        <span>
          Вы когда-нибудь задумывались о том, что в нашем костюме функциональны
          все элементы? Удобство, комфорт, тепло или прохлада, защита от влаги
          или ветра &ndash; со всем этим, помимо эстетики, справляются одежда,
          обувь, кожгалантерея. И только украшения напрочь лишены какого-либо
          смысла, кроме одного: выражать представления о прекрасном или дерзком,
          романтичном или брутальном. Они наполняют облик обаянием, они
          расставляют акценты и привлекают внимание к тем частям тела, на
          которые надеты. Особенно хочется носить эти дивные безделушки летом,
          когда наши наряды более свободны от гнетущей утилитарности.
          <br />
          Что же приготовил для модниц наступающий сезон?
        </span>
      }
      q
      part
      //partPrice="600"
      //price="5900"
      view
      color="rose"
      id="hva2EieabkjPDnuYF"
      setBillingId={props.setBillingId}
    />
  );
}

/*
import React from "react";
import Card from "../card";

export default function CardModern() {
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
  />
}
*/
