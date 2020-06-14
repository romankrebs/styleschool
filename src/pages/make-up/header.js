import React from "react";
import { Grid, Paper } from "@material-ui/core";

import Header from "../../components/header-fullscreen";

export default function Component() {
  return (
    <Header
      head1={
        <span>
          Профессиональный make&#8209;up:
          <br />
          стилистика и технологии
        </span>
      }
      descript={
        <p style={{ textAlign: "center" }}>
          Подготовка визажистов международного класса.
          <br />
          Курс-коллаборация Высшей школы стилистики и ProMakeupArtist School
          Prague (Чехия)
        </p>
      }
      background="url(/img/make-up/fullscreen.jpg) center center/cover no-repeat"
      styles={{
        lineColor: "rgb(255,255,255)",
        bkgBlockColor: "rgba(150,105,90,0.5)",
        textColor: "rgb(255,255,255)",
        fullscreen: {
          textShadow: "1px 1px 3px rgba(0,0,0,1)"
        }
      }}
      formsEducation="{ дистанционное обучение }"
      bottomLine={
        <Grid container justify="flex-start" alignItems="center">
          <Grid item xs={12} md={2} style={{ padding: 30 }}>
            <Paper
              style={{
                background: "rgba(150,105,90,0.5)",
                color: "rgb(255,255,255)",
                textAlign: "center",
                padding: "20px 10px",
                fontFamily: "Roboto",
                fontSize: "1em",
                minWidth: 120,
                textShadow: "1px 1px 3px rgba(0,0,0,1)"
              }}
            >
              Диплом
              <br />
              гос. Университета
            </Paper>
          </Grid>
          <Grid item xs={12} md={2} style={{ padding: 30 }}>
            <Paper
              style={{
                background: "rgba(150,105,90,0.5)",
                color: "rgb(255,255,255)",
                textAlign: "center",
                padding: "20px 10px",
                fontFamily: "Roboto",
                fontSize: "1em",
                minWidth: 120,
                textShadow: "1px 1px 3px rgba(0,0,0,1)"
              }}
            >
              Длительность:
              <br />
              6+1 месяцев
            </Paper>
          </Grid>
          <Grid item xs={12} md={2} style={{ padding: 30 }}>
            <Paper
              style={{
                background: "rgba(150,105,90,0.5)",
                color: "rgb(255,255,255)",
                textAlign: "center",
                padding: "20px 10px",
                fontFamily: "Roboto",
                fontSize: "1em",
                minWidth: 160,
                textShadow: "1px 1px 3px rgba(0,0,0,1)"
              }}
            >
              Ближайший набор:
              <br />
              осень 2017
            </Paper>
          </Grid>
        </Grid>
      }
    />
  );
}
