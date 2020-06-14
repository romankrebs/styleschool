import React from "react";

import Expand from "../../components/expanded";
import H2 from "../../components/head1";
import List from "../../components/list";

export default function Programma() {
  var style = {
      list: {
        padding: 4,
        fontFamily: "Roboto",
        fontSize: "1em",
        fontWeight: 400,
        color: "rgb(100,100,100)",
      },
      summary: {
        background: "rgb(230,230,230)",
        padding: 0,
        paddingLeft: 10,
        fontFamily: "Roboto",
        fontSize: "1em",
        fontWeight: 700,
        color: "rgb(100,100,100)",
      },
      details: {
        background: "rgb(245,245,245)",
        padding: 6,
        fontFamily: "Roboto",
        fontSize: "1em",
        fontWeight: 400,
        color: "rgb(100,100,100)",
      },
    },
    cont = [
      {
        summary: "1. Что есть ядро Вашего стиля",
        details: <List arr={[
          "О чем молчит Ваше тело",
          "Формирование запроса"
        ]} style={style.list} />
      },
      {
        summary: "2. Самооценка и имидж. Как корректировать внутреннее внешним и внешнее внутренним",
        details: <List arr={[
          "Ошибки имиджа, пути к соответствию желаемого и действительного образов.",
          "Шаблонность мышления или как уйти от  стереотипов имиджа",
          "Какие цели реализует  нынешний гардероб и соответствует ли он личным целям? Желаемый имидж"
        ]} style={style.list} />
      },
      {
        summary: "3. Полярности стиля",
        details: <List arr={[
          <span>Работа через транзактный анализ (ребенок, взрослый, родитель &mdash; как это выражается в образе)</span>,
          <span>Вещи &mdash; скелеты в шкафу, о чём они  расскажут вам </span>,
          "Инь и Ян: искусство совмещения противоположностей  в образе"
        ]} style={style.list} />
      },
      {
        summary: "4. Мужское и женское в стиле",
        details: <List arr={[
          "Женственность (гипер, норма, отрицание)",
          "«Королева царствует, а не управляет»",
          "Тема женственности, ее разные проявления",
          "Что маскирует «боевой  раскрас», черные волосы, вульгарные наряды?",
          "Что выражает стремление выглядеть максимально  незаметно для других?",
          "Маскулиность в современном мире",
          "Мужчины выбирают глазами"
        ]} style={style.list} />
      },
      {
        summary: "5. Одежда как доспехи, одежда-маска",
        details: <List arr={[
          "Определение  привычных ролей",
          "Архетипы и зона развития.",
          "Психологическая  составляющая стилей и их особенности"
        ]} style={style.list} />
      },
      {
        summary: "6. Коллажные техники: твой стиль в коллаже, как его найти через эмоцию, какими инструментами выразить",
        details: "",
      },
      {
        summary: "7. Терапия образа, как и зачем менять, и стоит ли менять",
        details: "",
      },
      {
        summary: "8. Определение своей миссии и формирование соответствующего образа",
        details: "",
      },
    ],
    head = "Содержание программы";

  return(
    <div style={{ padding: 20 }}>
      <H2 content={head} />
      {cont.map((el, i) => (
        <Expand
          summary={{
            style: style.summary,
            text: el.summary,
          }}
          details={{
            style: style.details,
            text: el.details,
          }}
          key={i}
        />
      ))}
    </div>
  );
}
