import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Header from "../../components/header-fullscreen";
// import Button0 from "../../components/button0";

export default function Component() {
  return (
    <Header
      head1={<span>Базовый профессиональный курс по make-up</span>}
      descript={
        <p style={{ textAlign: "center" }}>
          Базовый курс подготовки визажистов.
          <br />
          Самые популярные техники и виды макияжа
          <br />в формате профессионального обучения
        </p>
      }
      background="url(/img/makeup/fullscreen.png) center center/cover no-repeat"
      styles={{
        lineColor: "rgb(255,255,255)",
        bkgBlockColor: "rgba(98,132,199,0.6)",
        textColor: "rgb(255,255,255)",
        style: {
          textShadow: "1px 1px 4px rgba(0,0,0,1)"
        }
      }}
      formsEducation="{Очно | Online}"
      bottomLine={
        " "
        // <Grid container justify="flex-start" alignItems="center">
        //   <Grid item xs={6} md={2} style={{ padding: 30 }}>
        //     <Paper
        //       style={{
        //         background: "rgba(98,132,199,0.6)",
        //         color: "rgb(255,255,255)",
        //         textShadow: "1px 1px 2px rgba(0,0,0,1)",
        //         textAlign: "center",
        //         padding: "20px 10px",
        //         fontSize: "1em",
        //         minWidth: 120
        //       }}
        //     >
        //       Сентябрь 2018
        //     </Paper>
        //   </Grid>
        // </Grid>
      }
    />
  );
}
