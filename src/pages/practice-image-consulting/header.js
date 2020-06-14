import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Header from "../../components/header-fullscreen";

export default function Component() {
  return (
    <Header
      head1={
        <span style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}>
          Практика имидж-консультирования
        </span>
      }
      descript={
        <span style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>
          Практика для слушателей курса "Имидж-консалтинг и fashion-styling"
          дистанционной формы обучения
        </span>
      }
      background="url(/img/practice-image-consulting/fullscreen.jpg) center center/cover no-repeat"
      styles={{
        lineColor: "rgb(255,255,255)",
        bkgBlockColor: "rgba(205,181,171,0.6)",
        textColor: "rgb(255,255,255)"
      }}
      formsEducation={
        <span style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.8)" }}>
          {"{"} Очно {"}"}
        </span>
      }
      bottomLine={
        <Grid container justify="flex-start" alignItems="center">
          {/* <Grid item xs={6} md={3} style={{ padding: 10 }}>
            <Paper
              style={{
                background: "rgba(205,181,171,0.6)",
                color: "rgb(255,255,255)",
                textAlign: "center",
                padding: 20,
                fontSize: "1.1em",
                textShadow: "1px 1px 4px rgba(0,0,0,0.8)"
              }}
            >
              Ближайший набор:
              <br />
              июль 2019
            </Paper>
          </Grid> */}
          <Grid item xs={6} md={2} style={{ padding: 10 }}>
            <Paper
              style={{
                background: "rgba(205,181,171,0.6)",
                color: "rgb(255,255,255)",
                textAlign: "center",
                padding: 20,
                fontSize: "1.1em",
                textShadow: "1px 1px 4px rgba(0,0,0,0.8)",
                minWidth: 150
              }}
            >
              Длительность:
              <br />
              по 5 дней
            </Paper>
          </Grid>
        </Grid>
      }
    />
  );
}
