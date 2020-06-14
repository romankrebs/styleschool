import React from "react";
import { Grid, Paper } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { datas } from "./date-education";

import Header from "../../components/header-fullscreen";

export default function Component(props) {
  return (
    <Header
      head1={
        <span style={{ fontFamily: props.fontHead ? props.fontHead : null }}>
          Эволюция стилей ХХ&nbsp;века
        </span>
      }
      descript={
        <span style={{ fontFamily: props.font ? props.font : null }}>
          Авторский курс Инессы Трубецковой
        </span>
      }
      background={`url(${
        useMediaQuery("(max-width:480px)")
          ? "/img/styleevolution/fullscreen-480.jpg"
          : "/img/styleevolution/fullscreen-1000.jpg"
      }) center center/cover no-repeat`}
      styles={{
        lineColor: "rgb(255,255,255)",
        bkgBlockColor: "rgba(100,50,50,0.5)",
        textColor: "rgb(255,255,255)"
      }}
      formsEducation={
        <span style={{ fontFamily: props.font ? props.font : null }}>
          {"{ Очно }"}
        </span>
      }
      bottomLine={
        <Grid container justify="flex-start" alignItems="center">
          <Grid item xs={6} md={2} style={{ padding: 30 }}>
            <Paper
              style={{
                background: "rgba(100,50,50,0.5)",
                color: "rgb(255,255,255)",
                textAlign: "center",
                padding: 20,
                fontFamily: props.font ? props.font : null,
                fontSize: "1.1em"
              }}
            >
              {datas.ofline[0]}
            </Paper>
          </Grid>
        </Grid>
      }
    />
  );
}
