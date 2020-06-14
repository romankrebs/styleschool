import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Header from "../../components/header-fullscreen";

export default function Component() {
  return (
    <Header
      head1={
        <span style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}>
          Дизайн и декорирование интерьеров
        </span>
      }
      descript={
        <span style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>
          Профессиональная подготовка
        </span>
      }
      background="url(/img/living-interior-design-and-decoration/fullscreen.jpg) center center/cover no-repeat"
      styles={{
        lineColor: "rgb(255,255,255)",
        bkgBlockColor: "rgba(90,73,71,0.7)",
        textColor: "rgb(255,255,255)"
      }}
      formsEducation={
        <span style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.8)" }}>
          {"{"} Очно | Дистанционно {"}"}
        </span>
      }
      bottomLine={
        <Grid container justify="flex-start" alignItems="center">
          <Grid item xs={6} md={3} style={{ padding: 10, paddingTop: 20 }}>
            <Paper
              style={{
                background: "rgba(190,110,90,0.5)",
                color: "rgb(255,255,255)",
                textAlign: "center",
                padding: 10,
                fontFamily: "Roboto",
                fontSize: "1em",
                textShadow: "1px 1px 4px rgba(0,0,0,0.8)"
              }}
            >
              Диплом <br />
              гос. Университета
            </Paper>
          </Grid>
        </Grid>
      }
    />
  );
}
