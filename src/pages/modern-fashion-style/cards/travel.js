import React from "react";
import Card from "../card";

export default function Travel(props) {
  return (
    <Card
      head="Психология имиджа"
      title="Тревел советы от эксперта. Чемоданный гардероб для летнего отпуска"
      teacher="Лиана Бахова"
      descript={<span>online,</span>}
      online
      date="20 мая"
      time="19:00"
      image="/img/modern-fashion-style/travel.jpg"
      text={
        <span>
          Вся тема нашей лекции легко раскрывается в мудрой фразе Чезаре Павезе:
          «Хотите путешествовать далеко и быстро? Путешествуйте налегке. Скиньте
          с себя зависть, нетерпимость, эгоизм и страхи». Наш вебинар для тех,
          кто хочет в преддверии наступающего летнего сезона узнать, как создать
          чемоданное настроение без перевеса, как багажного, так и
          эмоционального.
        </span>
      }
      q
      part
      view
      color="rose"
      id="uwmF4tnM6Xuph7WGj"
      setBillingId={props.setBillingId}
    />
  );
}
