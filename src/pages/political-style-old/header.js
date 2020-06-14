import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Header from "../../components/header-fullscreen";

export default function Head() {
  return (
    <Header
      head1={<span>Политический имидж.<br/>Инструменты политтехнологий</span>}
      descript="Курс-лидер. Здесь главные правила формирования имиджа публичной персоны через самую высокую степень мастерства - политические технологии"
      background="url(/img/political-style/fullscreen.jpg) center top 10%/cover no-repeat"
      styles={{
        lineColor: "rgb(255,255,255)",
        bkgBlockColor: "rgba(224,203,186,0.5)",
        textColor: "rgb(255,255,255)"
      }}
      formsEducation="{ Очно | Дистанционно }"
      bottomLine={
        <Grid container justify="flex-start" alignItems="center">
          <Grid item xs={12} md={6} style={{ padding: 30 }}>
            <Paper
              style={{
                background: "rgba(224,203,186,0.5)",
                color: "rgb(255,255,255)",
                textAlign: "center",
                padding: 20,
                fontFamily: "Roboto",
                fontSize: "1em",
                maxWidth: 200,
                textShadow: '1px 1px 4px rgb(0,0,0)',
              }}
            >
              Февраль 2019
            </Paper>
          </Grid>
        </Grid>
      }
    />
  );
}
