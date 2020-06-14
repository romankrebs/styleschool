import React from "react";
import { Grid, Paper } from "@material-ui/core";

import H2 from "../../components/head1";
import List from "../../components/list";

export const datas = {
  ofline: []
};

export default function Dates() {
  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid item xs={12} md={12}>
        <H2 content="Стоимость и ближайший набор*" />
        <p
          style={{
            fontSize: "1.3em",
            fontWeight: 700,
            textAlign: "center",
            color: "rgb(120,120,120)"
          }}
        >
          вы можете выбрать удобный для себя формат и условия прохождения курса
        </p>
      </Grid>
      {datas.ofline[0] ? (
        <Grid item xs={12} sm={12} md={4} style={{ padding: 10 }}>
          <Paper style={{ padding: 20 }}>
            <p
              style={{
                fontSize: "1.3em",
                fontWeight: 700,
                textAlign: "center",
                background: "transparent",
                color: "rgb(100,100,100)",
                margin: 0,
                padding: 5
              }}
            >
              Начало
            </p>
            <p
              style={{
                fontSize: "1.1em",
                fontWeight: 400,
                textAlign: "center",
                background: "rgb(240,240,240)",
                color: "rgb(100,100,100)"
              }}
            >
              {datas.ofline[0]}
            </p>
          </Paper>
        </Grid>
      ) : null}
      <Grid item xs={12} sm={6} md={4} style={{ padding: 10 }}>
        <Paper style={{ padding: 20 }}>
          <p
            style={{
              fontSize: "3em",
              fontWeight: 700,
              textAlign: "center",
              color: "rgba(87,123,143,0.6)",
              margin: 0,
              padding: 5
            }}
          >
            25 <sup style={{ fontSize: "0.6em" }}>000</sup>₽
          </p>
          <p
            style={{
              fontSize: "0.85em",
              fontWeight: 400,
              textAlign: "center",
              color: "rgb(100,100,100)",
              margin: 0,
              padding: 5
            }}
          >
            УЧАСТИЕ НА ЗАНЯТИЯХ, КОНСУЛЬТАЦИИ ПО ВЫПОЛНЕНИЮ ДЗ В ПРОЦЕССЕ
            ОБУЧЕНИЯ, С СЕРТИФИКАТОМ
          </p>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} style={{ padding: 10 }}>
        <Paper style={{ padding: 20 }}>
          <p
            style={{
              fontSize: "3em",
              fontWeight: 700,
              textAlign: "center",
              color: "rgb(87,123,143)",
              margin: 0,
              padding: 5
            }}
          >
            50 <sup style={{ fontSize: "0.6em" }}>000</sup>₽
          </p>
          <p
            style={{
              fontSize: "0.85em",
              fontWeight: 400,
              textAlign: "center",
              color: "rgb(100,100,100)",
              margin: 0,
              padding: 5
            }}
          >
            ИНДИВИДУАЛЬНОЕ ОБУЧЕНИЕ &mdash; ОБУЧЕНИЕ НА КУРСЕ + ИНДИВИДУАЛЬНЫЕ
            КОНСУЛЬТАЦИИ ПРЕПОДАВАТЕЛЯ
          </p>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <p
          style={{
            fontSize: "0.8em",
            fontWeight: 400,
            textAlign: "left",
            color: "rgb(100,100,100)",
            margin: 0,
            padding: 5
          }}
        >
          *В стоимость курса входит:
        </p>
        <List
          arr={[
            "аренда фотостудии",
            "работа визажиста на финальной съемке",
            "работа профессиональной модели на финальной съемке"
          ]}
          style={{
            fontSize: "0.8em",
            fontWeight: 400,
            textAlign: "left",
            color: "rgb(100,100,100)",
            margin: 0,
            padding: 5
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <p
          style={{
            fontSize: "0.8em",
            fontWeight: 400,
            textAlign: "left",
            color: "rgb(100,100,100)",
            margin: 0
          }}
        >
          Требования к фототехнике:
        </p>
        <p
          style={{
            fontSize: "0.8em",
            fontWeight: 400,
            textAlign: "left",
            color: "rgb(100,100,100)",
            margin: 0
          }}
        >
          Наличие цифрового фотоаппарата с возможностью смены объективов и
          подключения синхронизатора
        </p>
      </Grid>
    </Grid>
  );
}
