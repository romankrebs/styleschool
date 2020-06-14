import React from "react";
import { Grid, Paper, Hidden } from "@material-ui/core";

import Header from "../../components/header-fullscreen";

export default function Component() {
  return (
    <Header
      head1="Модная журналистика (профподготовка)"
      headStyle={{ fontFamily: "Roboto", fontWeight: 500 }}
      descript={
        <p style={{ textAlign: "center" }}>
          Курс включает в себя фундаментальную подготовку и практику создания
          авторского материала с учетом современных тенденций в индустрии моды
        </p>
      }
      background="url(/img/profi-fashion-journalist/fullscreen.jpg) center center/cover no-repeat"
      styles={{
        lineColor: "rgb(255,255,255)",
        bkgBlockColor: "rgba(0,0,0,0.6)",
        textColor: "rgb(255,255,255)"
      }}
      formsEducation="{ Очно | Дистанционно }"
      bottomLine={
        <Grid container justify="flex-start" alignItems="center">
          <Grid item xs={12} md={2} style={{ padding: 30 }}>
            <Paper
              style={{
                background: "rgba(0,0,0,0.6)",
                color: "rgb(255,255,255)",
                textAlign: "center",
                padding: "20px 10px",
                // fontFamily: "Roboto",
                fontSize: "1em",
                minWidth: 120
              }}
            >
              Диплом Гос.
              <br />
              Университета
            </Paper>
          </Grid>
          <Grid item xs={12} md={2} style={{ padding: 30 }}>
            <Paper
              style={{
                background: "rgba(0,0,0,0.6)",
                color: "rgb(255,255,255)",
                textAlign: "center",
                padding: "20px 10px",
                // fontFamily: "Roboto",
                fontSize: "1em",
                minWidth: 120
              }}
            >
              Длительность:
              <br />8 месяцев
            </Paper>
          </Grid>
          <Grid item xs={12} md={2} style={{ padding: 30 }}>
            <Paper
              style={{
                background: "rgba(0,0,0,0.6)",
                color: "rgb(255,255,255)",
                textAlign: "center",
                padding: "20px 10px",
                // fontFamily: "Roboto",
                fontSize: "1em",
                minWidth: 160
              }}
            >
              Стоимость:
              <br />9 900 / месяц
            </Paper>
          </Grid>
          <Hidden implementation="css" smDown>
            <Grid item md={3} />
          </Hidden>
        </Grid>
      }
    />
  );
}
