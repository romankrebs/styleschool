import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Header from "../../components/header-fullscreen";

export default function Component() {
  return (
    <Header
      head1={<span>Визуальный мерчендайзинг в индустрии моды</span>}
      descript={""}
      background="url(/img/merchandisign/fullscreen.jpg) center center/cover no-repeat"
      styles={{
        lineColor: "rgb(255,255,255)",
        bkgBlockColor: "rgba(180,180,180,0.8)",
        textColor: "rgb(255,255,255)",
        style: {
          textShadow: "1px 1px 4px rgba(0,0,0,1)"
        }
      }}
      formsEducation="Тренинг и online-курс"
      bottomLine={
        <Grid container justify="flex-start" alignItems="center">
          <Grid item xs={6} md={2} style={{ padding: 30 }}>
            <Paper
              style={{
                background: "rgba(180,180,180,0.8)",
                color: "rgb(255,255,255)",
                textShadow: "1px 1px 2px rgba(0,0,0,1)",
                textAlign: "center",
                padding: "20px 10px",
                fontSize: "1em",
                minWidth: 120
              }}
            >
              Длительность:
              <br />3 месяца
            </Paper>
          </Grid>
          <Grid item xs={6} md={2} style={{ padding: 30 }}>
            <Paper
              style={{
                background: "rgba(180,180,180,0.8)",
                color: "rgb(255,255,255)",
                textShadow: "1px 1px 2px rgba(0,0,0,1)",
                textAlign: "center",
                padding: "20px 10px",
                fontSize: "1em",
                minWidth: 160
              }}
            >
              Старт обучения:
              <br />
              30 января 2019
            </Paper>
          </Grid>
        </Grid>
      }
    />
  );
}
