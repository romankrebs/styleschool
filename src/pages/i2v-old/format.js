import React from "react";
import { Grid } from "@material-ui/core";

import List from "../../components/list";

export default function FormatComponent() {
  const content = [
    {
      image: "/img/green/school.svg",
      head: "Профессиональное обучение",
      list: [
        <span>
          Полная программа обучения &mdash; <b>11</b> месяцев
        </span>,
        <span>
          <b>120</b> лекционных и практических занятий
        </span>,
        <span>Требования по выполнению д/з и практики</span>,
        <span>
          <b>Диплом</b> РГСУ / ВШСДТ
        </span>
      ]
    },
    {
      image: "/img/green/certificate.svg",
      head: "Специализация",
      list: [
        <span>
          Программа обучения &mdash; <b>6</b> месяцев
        </span>,
        <span>
          <b>60</b> занятий + самостоятельная работа
        </span>,
        <span>Требования по выполнению д/з и практики</span>,
        <span>
          <b>Диплом</b> ВШСДТ
        </span>
      ]
    },
    {
      image: "/img/green/cube.svg",
      head: "Базовый",
      list: [
        <span>
          Программа обучения &mdash; <b>3</b> месяца
        </span>,
        <span>
          <b>30</b> занятий + самостоятельная работа
        </span>,
        <span>Требования по выполнению д/з и практики</span>,
        <span>
          <b>Сертификат</b>
        </span>
      ]
    },
    {
      image: "/img/green/monitor-dashboard.svg",
      head: "Вольный слушатель",
      list: [
        "Доступно только в дистанционном обучении",
        "Доступ к обучению сразу после оплаты",
        "Возможность выбирать отдельно интересующие модули",
        "Без требований по выполнению д/з"
      ]
    }
  ];

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ maxWidth: 1000 }}
    >
      <Grid item xs={12} md={12} style={{ paddingTop: 80 }}>
        <h2
          style={{
            fontFamily: "Lora",
            fontSize: "1.8em",
            color: "rgb(100,0,0)",
            textAlign: "center",
            fontWeight: 500,
            margin: 8,
            padding: "12px 0"
          }}
        >
          Выбирайте форматы обучения как ступени личного роста
        </h2>
      </Grid>
      {content.map((el, i) => (
        <Grid item xs={12} md={6} style={{ padding: 12 }} key={i}>
          <div style={{ textAlign: "center" }}>
            <img src={el.image} alt="" style={{ height: 70 }} />
          </div>
          <h3
            style={{
              fontFamily: "Lora",
              fontSize: "1.8em",
              color: "rgb(100,100,100)",
              textAlign: "center",
              fontWeight: 500,
              margin: 0,
              padding: "4px 0"
            }}
          >
            {el.head}
          </h3>
          <List
            arr={el.list}
            style={{
              fontSize: "1em",
              color: "rgb(100,100,100)",
              textAlign: "left",
              fontWeight: 400
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
}
