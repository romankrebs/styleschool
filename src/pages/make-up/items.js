import React from "react";
import List from "../../components/list";

export default function Themes() {
  return(
    <div>
      <h2 style={{
        font: "500 1.5em 'Lora'",
        textAlign: "left",
        color: "rgb(80,80,80)",
        margin: 0,
        padding: 12,
      }}>Основные предметы:</h2>
      <List
        arr={[
          "Проф ориентация, рынок услуг",
          "Стандарты: терминология, инструменты, материалы",
          "Технологии make-up: описания, сравнения, техники, тенденции",
          "Технологии стилистики: колористика, стили, создание образа",
          "Современная мода, имиджелогия",
          "Профессиональное продвижение",
        ]}
        style={{
          font: '400 1em "Roboto"',
          color: "rgb(100,100,100)"
        }}
        olStyle={{
          listStyle: "url(/img/green/check-bold.svg)"
        }}
      />
    </div>
  );
}