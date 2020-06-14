import React from "react";
import Card from "../card";

export default function Beauty(props) {
  return (
    <Card
      head="Красота"
      title="Бьюти-шопинг: 100% попадание"
      teacher="Яна Ахметова"
      descript={<span>Онлайн-лекция,</span>}
      online
      date="9 апреля"
      time="19:00"
      duration="45 минут"
      image="/img/modern-fashion-style/beaut.jpg"
      imageHeight
      text={
        <span>
          Визажист Яна Ахметова поделится секретами своей работы и проведения
          бьюти-шопинга и покупок декоративной косметики. Как выбирать самые
          разные средства, как их тестировать в магазине, что можно покупать с
          первого раза, а что взять в тестере, как читать и применять к себе
          отзывы покупателей и аннотации производителя, в каких случаях
          обращаться к консультантам, а в каких действовать самостоятельно,
          упаковки какого объема выгоднее приобретать и как не растеряться во
          всем многообразии современных средств и безошибочно совершать покупки.
        </span>
      }
      part
      // partPrice="600"
      view
      id="RKk9KeZZgnTWZLZz4"
      setBillingId={props.setBillingId}
    />
  );
}