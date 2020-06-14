import React from "react";
import Card from "../card";

export default function CardModern(props) {
  return (
    <Card
      head="История моды"
      title="Chanel: от Парижа до Голливуда и сексуальной революции"
      teacher="Руслан Мигранов"
      descript={<span>on-line,</span>}
      online
      date="13 июня"
      time={<span>19:00</span>}
      duration=""
      imageHeight
      image="/img/modern-fashion-style/paris-holliwood.jpg"
      text={
        <span>
          В этой лекции мы проследим творческий путь Coco Chanel от ее увлечения
          дизайном женских шляпок до поездки в Голливуд в начале 30-х. и далее
          до сексуальной революции. Как менялась мода от эпохи модерна до
          «свингующих шестидесятых» и почему Chanel сопутствовал успех. Путь с
          подмостков сцены до всемирной славы! Почему Chanel не любила и не
          признавала мини-юбки. Чем вдохновлялась, при создании своего
          знаменитого твидового костюма и знаменитой сумочки 2.55. Самые
          знаменитые творения великой мадемуазель и источники их вдохновлявшие.
        </span>
      }
      q
      // free
      part
      // partPrice="600"
      // price="5900"
      color="rose"
      view
      id="y8m4NrjPbveeYLhMM"
      setBillingId={props.setBillingId}
    />
  );
}
