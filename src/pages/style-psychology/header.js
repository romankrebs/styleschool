import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Header from "../../components/header-fullscreen";
//import Button0 from "../../components/button0";

export default function Component() {
  return (
    <Header
      head1={
        <span style={{ borderBottom: "2px solid rgb(230,200,95)", fontSize: "2.3em", fontWeight: 500 }}>
          Психология стиля
        </span>
      }
      descript={""}
      background="url(/img/psychology/fullscreen.jpg) center center/cover no-repeat"
      styles={{
        lineColor: "transparent",
        bkgBlockColor: "transparent",
        textColor: "rgb(230,200,95)",
        style: {
          textShadow: "1px 1px 4px rgba(0,0,0,1)",
          boxShadow: "none",
        }
      }}
      formsEducation=""
      bottomLine={
        <Grid container justify="flex-start" alignItems="center">
          <Grid item xs={6} md={2} style={{ padding: 30 }}>
            <Paper
              style={{
                background: "rgba(80,50,30,0.5)",
                color: "rgb(255,255,255)",
                textShadow: "1px 1px 2px rgba(0,0,0,1)",
                textAlign: "center",
                padding: "20px 4px",
                fontFamily: "Roboto",
                fontSize: "0.9em",
                minWidth: 140,
              }}
            >
              Форма обучения:<br />очно
            </Paper>
          </Grid>
          <Grid item xs={6} md={2} style={{ padding: 30 }}>
            <Paper
              style={{
                background: "rgba(80,50,30,0.5)",
                color: "rgb(255,255,255)",
                textShadow: "1px 1px 2px rgba(0,0,0,1)",
                textAlign: "center",
                padding: "20px 10px",
                fontFamily: "Roboto",
                fontSize: "0.9em",
                minWidth: 160,
              }}
            >
            Старт курса:<br />20 октября

            </Paper>
          </Grid>
        </Grid>
      }
    />
  );
}
