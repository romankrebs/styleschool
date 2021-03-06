import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import List from "../../components/list";
// import Expand from "../../components/expanded";

export default function Contents() {
  const content = [
    "Введение. Этапы дизайн-проекта.",
    "Создание тех задания, обмеры.",
    "Концепция. Выбор стиля. Актуальные тенденции.",
    "Разбор стилей в дизайне. Сдача тех задания.",
    "Разбор стилей в дизайне. Концепция.",
    "Практическое занятие. Мастеркласс по созданию коллажей.",
    "Защита: коллаж по выбранному стилю и концепции.",
    "Зонирование. Планировка. Расстановка освещения и розеток.",
    "Функциональное зонирование и планировка помещения.",
    "Практическое занятие. Разбор помещения по зонированию и планировке.",
    "Защита. Зонирование и планировка.",
    "Материалы. Введение, выбор материалов, тенденции.",
    "Расчет материалов.",
    "Паркет, ламинат.",
    "Материалы для пола.",
    "Плитка, камень. Краска.",
    "Защита: коллаж по тенденциям в материалах.",
    "Обои.",
    "Материалы для потолка.",
    "Новейшие технологии и материалы.",
    "Защита: коллаж подбор материалов для проекта.",
    "Подбор мебели: основные бренды, отделки.",
    "Освещение: основные бренды, отделки.",
    "Декорирование.",
    "Защита: коллаж подбор мебели, освещения.",
    "Подготовка проекта с каждым студентом к защите.",
    "Оформление презентации проекта.",
    "Защита проекта."
  ];

  return (
    <div style={{ padding: 20 }}>
      <ScrollableAnchor id="programma">
        <h2
          style={{
            textAlign: "left",
            fontSize: "1.8em",
            color: "rgb(100,100,100)"
          }}
        >
          Содержание курса
        </h2>
      </ScrollableAnchor>
      <div style={{ padding: 16, textAlign: "left" }}>
        {content.map((el, i) => (
          <div
            style={{
              padding: "8px 10px"
            }}
          >
            <img
              src="/img/green/star.svg"
              style={{ marginBottom: -4 }}
              alt=""
            />
            &ensp;
            {/* {i+1}. */} &emsp;
            {el}
          </div>
        ))}
      </div>
    </div>
  );
}
