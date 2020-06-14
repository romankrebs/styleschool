import React from "react";
import Card from "../card";

export default function CardModern(props) {
  return (
    <Card
      head="Мода и стиль"
      title="Современные методы цветового анализа. Холодный и теплый колорит."
      teacher="Татьяна Фомина"
      descript={<span>on-line</span>}
      online
      date="25 июня"
      time={<span>19:00</span>}
      duration=""
      image="/img/modern-fashion-style/colorite.jpg"
      text={
        <span>
          Цвет является очень важным инструментом в создании образа. Не
          единственным, но очень важным.Но что же все-таки важнее при выборе
          цветовой палитры образа? Природный колорит человека или его характер?
          Необходимое впечатление или модные тенденции? По этому поводу споры не
          прекращаются до сих пор. Чем характеризуется природный колорит
          внешности? Как его определить и как использовать в своем образе?
          Существуют разные методики определения так называемых «цветотипов»:
          сезонный, тоновый и другие. Один из самых точных и прогрессивных -
          дирекционный. Метод очень эффективный и логичный. Выявляющий цветовую
          доминанту внешности.
        </span>
      }
      q
      part
      color="rose"
      id="sBGt66DqX6S6Etr7T"
      setBillingId={props.setBillingId}
    />
  );
}