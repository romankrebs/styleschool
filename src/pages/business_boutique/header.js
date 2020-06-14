import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Header from "../../components/header-fullscreen";

export default function Head() {
  return (
    <Header
      head1={
        <span>
          Модный ассортимент:
          <br />
          искусство работы с клиентами
        </span>
      }
      descript="Профессиональная терминология и материаловедение"
      background="url(/img/butique/fullscreen.jpg) center center/cover no-repeat"
      styles={{
        lineColor: "rgb(255,255,255)",
        bkgBlockColor: "rgba(0,0,0,0.7)",
        textColor: "rgb(255,255,255)"
      }}
      formsEducation="{ Online }"
      bottomLine={
        <Grid container justify="flex-start" alignItems="center">
          <Grid item xs={6} md={3} style={{ padding: 20 }}>
            <Paper
              style={{
                background: "rgba(0,0,0,0.7)",
                color: "rgb(255,255,255)",
                textAlign: "center",
                padding: 20,
                fontSize: "1.1em",
                maxWidth: 140
              }}
            >
              Формат:
              <br />
              On-line
            </Paper>
          </Grid>
          <Grid item xs={6} md={3} style={{ padding: 20 }}>
            <Paper
              style={{
                background: "rgba(0,0,0,0.7)",
                color: "rgb(255,255,255)",
                textAlign: "center",
                padding: 20,
                fontSize: "1.1em",
                maxWidth: 200
              }}
            >
              Длительность:
              <br />1 месяц
            </Paper>
          </Grid>
        </Grid>
      }
    />
  );
}
