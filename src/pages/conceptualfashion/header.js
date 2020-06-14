import React from "react";
import { Grid, Paper } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Header from "../../components/header-fullscreen";

export default function Component() {
  return (
    <Header
      head1={
        <span>
          Концептуальное искусство и<br />
          Концептуальная мода
        </span>
      }
      descript="Концепции в современной практике"
      background={`url(${
        useMediaQuery("(max-width:600px)")
          ? "/img/conceptualfashion/600/fullscreen.jpg"
          : "/img/conceptualfashion/960/fullscreen.jpg"
      }) center center/cover no-repeat`}
      styles={{
        lineColor: "rgb(255,255,255)",
        bkgBlockColor: "rgba(0,0,0,0.6)",
        textColor: "rgb(255,255,255)"
      }}
      formsEducation="{ Online }"
      bottomLine={
        <Grid container justify="flex-start" alignItems="center">
          <Grid item xs={6} md={2} style={{ padding: 30 }}>
            <Paper
              style={{
                background: "rgba(0,0,0,0.4)",
                color: "rgb(255,255,255)",
                textAlign: "center",
                padding: 20,
                fontFamily: "Roboto",
                fontSize: "1.1em"
              }}
            >
              Сентябрь 2019
            </Paper>
          </Grid>
        </Grid>
      }
    />
  );
}
