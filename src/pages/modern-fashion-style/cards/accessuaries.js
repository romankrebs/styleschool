import React from "react";
import Card from "../card";

export default function CardModern(props) {
  return (
    <Card
      head="Имидж"
      title="Аксессуары на языке эмоций и символов"
      teacher="Лиана Бахова"
      descript={<span>Онлайн-лекция</span>}
      onlineText={
        <span>
          Запись вебинара от 12.02.19
          <br />
          Длительность: 45 минут
        </span>
      }
      image="/img/modern-fashion-style/accessuar.jpg"
      text={
        <span>
          На этой лекции мы выйдем за рамки стилистических правил комбинаторики
          аксессуарных сетов и рассмотрим аксессуары как знак взаимоотношений
          между чувственным миром человека и социумом. Выясним, как связаны
          телесно-ориентированная терапия и наш выбор украшений. Вспомним их
          культурно-историческую роль и на примере актуальных трендов прочитаем
          современный язык аксессуарных символов.
        </span>
      }
      part
      // partPrice="600"
      crown
      view
      id="pHgparqT2WW7PwuZq"
      setBillingId={props.setBillingId}
    />
  );
}
