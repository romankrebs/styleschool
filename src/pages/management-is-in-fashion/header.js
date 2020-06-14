import React from "react";
import { Grid, Paper } from "@material-ui/core";

import Header from "../../components/header-fullscreen";

export default function Component() {
  return (
    <Header
      head1={<span>Менеджмент в индустрии моды</span>}
      descript={
        <p style={{ textAlign: "center" }}>
          Профессиональная подготовка.
          <br />
          Управление процессами в fashion-ритейле
        </p>
      }
      background="url(/img/management-is-in-fashion/fullscreen.jpg) center center/cover no-repeat"
      styles={{
        lineColor: "rgb(255,255,255)",
        bkgBlockColor: "rgba(181,179,182,0.5)",
        textColor: "rgb(255,255,255)",
        fullscreen: {
          textShadow: "1px 1px 3px rgba(0,0,0,1)"
        }
      }}
      formsEducation="{ Очно | Online }"
      bottomLine={
        <Grid container justify="flex-start" alignItems="center">
          <Grid item xs={12} md={2} style={{ padding: 30 }}>
            <Paper
              style={{
                background: "rgba(181,179,182,0.5)",
                color: "rgb(255,255,255)",
                textAlign: "center",
                padding: "20px 10px",
                fontSize: "1em",
                minWidth: 120,
                textShadow: "1px 1px 3px rgba(0,0,0,1)"
              }}
            >
              Престижный
              <br />
              диплом
            </Paper>
          </Grid>
          <Grid item xs={12} md={2} style={{ padding: 30 }}>
            <Paper
              style={{
                background: "rgba(181,179,182,0.5)",
                color: "rgb(255,255,255)",
                textAlign: "center",
                padding: "20px 10px",
                fontSize: "1em",
                minWidth: 120,
                textShadow: "1px 1px 3px rgba(0,0,0,1)"
              }}
            >
              Длительность:
              <br />7 месяцев
            </Paper>
          </Grid>
          {/* <Grid item xs={12} md={2} style={{ padding: 30 }}>
            <Paper
              style={{
                background: "rgba(181,179,182,0.5)",
                color: "rgb(255,255,255)",
                textAlign: "center",
                padding: "20px 10px",
                fontSize: "1em",
                minWidth: 160,
                textShadow: "1px 1px 3px rgba(0,0,0,1)"
              }}
            >
              Ближайший набор:
              <br />
              осень 2017
            </Paper>
          </Grid> */}
        </Grid>
      }
    />
  );
}
