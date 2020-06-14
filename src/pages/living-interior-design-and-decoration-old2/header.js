import React from "react";
import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";

import Header from "../../components/header-fullscreen";

export default function Component() {
  return (
    <Header
      head1={
        <span style={{ fontFamily: '"Hevletica", "Roboto"', fontWeight: 400 }}>
          Дизайн и декорирование интерьеров
        </span>
      }
      descript={
        <div
          style={{
            fontFamily: '"Hevletica", "Roboto"',
            paddingTop: 30,
            fontSize: "0.75em"
          }}
        >
          Специальная подготовка на основе международных стандартов профессии
        </div>
      }
      background="url(/img/living-interior-design-and-decoration/fullscreen.jpg) center center/cover no-repeat"
      styles={{
        lineColor: "rgb(255,255,255)",
        bkgBlockColor: "rgba(90,73,71,0.7)",
        textColor: "rgb(255,255,255)",
        style: {
          fontFamily: '"Hevletica", "Roboto"',
          borderRadius: 0,
          paddingBottom: 40
        }
      }}
      formsEducation={
        <span
          style={{ fontFamily: '"Hevletica", "Roboto"', fontSize: "0.75em" }}
        >
          {"{"} дистанционно {"}"}
        </span>
      }
      styleFormsEducation={{ margin: 0, padding: "8px 0" }}
      bottomLine={
        <Grid container justify="center" alignItems="center">
          <Grid item xs={6} md={3} style={{ padding: "40px 10px" }} />
        </Grid>
      }
    />
  );
}
